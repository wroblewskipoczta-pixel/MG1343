export const LESSON_ID = 'bez-pilki.pressing-zorganizowany.klatka-lewa';
export const ROLE_IDS = ['gk','lcb','ccb','rcb','lwb','cm-near','cm-far','rwb','am-near','st','am-far'];
export const escapeXml = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&apos;'}[c]));
export function validateProject(p) {
  const point = a => Array.isArray(a) && a.length === 2 && a.every(Number.isFinite) && a[0]>=20 && a[0]<=980 && a[1]>=20 && a[1]<=630;
  const time = n => Number.isFinite(n) && n>=0.5 && n<=10;
  if (!p || p.schemaVersion !== 2 || p.lessonId !== LESSON_ID || p.lessonVersion !== '1.0.0') throw Error('Wybierz projekt lekcji #KLATKA w formacie v2. Projekty dawnego kreatora otwórz w warsztacie trenera.');
  if (!Array.isArray(p.transitionSeconds) || p.transitionSeconds.length!==2 || !p.transitionSeconds.every(time) || !time(p.finalHoldSeconds)) throw Error('Nieprawidłowe czasy projektu.');
  if (!Array.isArray(p.players) || p.players.length!==23) throw Error('Projekt musi zawierać 11 zawodników każdej drużyny i piłkę.');
  const ids = new Set();
  p.players.forEach(t => {
    if (!t || typeof t.id!=='string' || !/^[a-z][a-z0-9-]{0,40}$/.test(t.id) || ids.has(t.id)) throw Error('Nieprawidłowe lub powielone identyfikatory.');
    ids.add(t.id);
    if (!['og','opp','ball'].includes(t.team) || typeof t.label!=='string' || t.label.length>8 || !Array.isArray(t.positions) || t.positions.length!==3 || !t.positions.every(point)) throw Error('Nieprawidłowe pozycje lub etykiety.');
  });
  if (p.players.filter(t=>t.team==='og').length!==11 || p.players.filter(t=>t.team==='opp').length!==11 || p.players.filter(t=>t.team==='ball').length!==1 || !p.players.some(t=>t.id==='ball'&&t.team==='ball') || !ROLE_IDS.every(id=>p.players.some(t=>t.id===id&&t.team==='og'))) throw Error('Nieprawidłowy skład drużyn.');
  if (!p.curves || typeof p.curves!=='object' || Array.isArray(p.curves)) throw Error('Nieprawidłowe trajektorie.');
  Object.entries(p.curves).forEach(([id,c])=>{if(!ids.has(id)||!Array.isArray(c)||c.length!==2||!c.every(v=>v===null||point(v)))throw Error('Nieprawidłowy łuk ruchu.');});
  if (!Array.isArray(p.zone)||p.zone.length!==4||!p.zone.every(point)) throw Error('Nieprawidłowa strefa.');
  return JSON.parse(JSON.stringify(p));
}
export const totalTime = p => p.transitionSeconds.reduce((a,b)=>a+b,0)+p.finalHoldSeconds;
export const stageStart = (p,i) => p.transitionSeconds.slice(0,i).reduce((a,b)=>a+b,0);
export function stageAt(p,t){return t<p.transitionSeconds[0]?0:t<stageStart(p,2)?1:2;}
export function positionAt(p,token,t){
  const i=stageAt(p,Math.max(0,t));
  if(i===2)return token.positions[2];
  const raw=Math.max(0,Math.min(1,(t-stageStart(p,i))/p.transitionSeconds[i]));
  const u=raw*raw*(3-2*raw), a=token.positions[i], b=token.positions[i+1], c=p.curves[token.id]?.[i];
  return a.map((v,k)=>c?(1-u)*(1-u)*v+2*(1-u)*u*c[k]+u*u*b[k]:v+(b[k]-v)*u);
}
const field = `<rect width="1000" height="650" fill="#f2f7f3"/><g stroke="#749880" stroke-width="2" fill="none"><rect x="50" y="50" width="900" height="550"/><path d="M500 50V600 M50 185H180V465H50 M950 185H820V465H950 M50 245H95V405H50 M950 245H905V405H950"/><circle cx="500" cy="325" r="75"/></g><text x="50" y="30" fill="#294e38" font-size="15" font-family="Arial">OLIMPIA →</text>`;
function shape(t){
  if(t.team==='ball')return '<circle r="8" fill="#14261b" stroke="white" stroke-width="3"/>';
  const form=t.team==='og'?'<circle r="18" fill="#157446" stroke="white" stroke-width="2"/>':'<rect x="-18" y="-18" width="36" height="36" rx="4" fill="#ac3936" stroke="white" stroke-width="2"/>';
  return form+`<text y="5" fill="white" text-anchor="middle" font-family="Arial" font-size="${t.label.length>2?12:15}" font-weight="bold">${escapeXml(t.label)}</text>`;
}
function overlay(p,stage,animate=''){
  const zone=p.zone.map(a=>a.join(',')).join(' ');
  if(stage===0)return `<g data-overlay="0">${animate}<path d="M792 235L745 115" stroke="#14261b" stroke-width="3" marker-end="url(#pass-arrow)"/><path d="M600 100L687 100" stroke="#157446" stroke-width="3" stroke-dasharray="8 6" marker-end="url(#run-arrow)"/></g>`;
  if(stage===1)return `<g data-overlay="1">${animate}<path d="M690 230Q725 105 770 170" stroke="#157446" stroke-width="3" stroke-dasharray="8 6" fill="none" marker-end="url(#run-arrow)"/></g>`;
  return `<g data-overlay="2">${animate}<text x="727" y="78" fill="#ac3936" font-size="24" font-family="Arial">✶</text><polygon points="${zone}" fill="#157446" fill-opacity=".12" stroke="#157446" stroke-width="2"/><text x="655" y="43" fill="#157446" font-size="23" font-family="Arial" font-weight="bold">#KLATKA</text><text x="600" y="625" fill="#8f302d" font-size="16" font-family="Arial">Strata rywala — przykład</text></g>`;
}
export function renderSvg(p,t=0,{animated=false,role=null,zoom=false,blocked=false}={}){
  const duration=totalTime(p), view=zoom?'300 20 550 300':'0 0 1000 650';
  let inner=field;
  if(animated){
    for(let i=0;i<3;i++){
      const times=[0,p.transitionSeconds[0]/duration,stageStart(p,2)/duration,1].join(';');
      const values=[0,1,2,2].map(s=>s===i?1:0).join(';');
      inner+=overlay(p,i,`<animate attributeName="opacity" values="${values}" keyTimes="${times}" dur="${duration}s" calcMode="discrete" fill="freeze"/>`);
    }
  } else if(!blocked) inner+=overlay(p,stageAt(p,t));
  if(blocked)inner+='<path d="M745 95L470 100" stroke="#b83c31" stroke-width="5" stroke-dasharray="10 7"/><text x="475" y="65" fill="#9e3026" font-size="20" font-family="Arial">Otwarta droga za LWB</text>';
  const samples=[...new Set([...Array.from({length:Math.ceil(duration*30)+1},(_,i)=>Math.min(duration,i/30)),p.transitionSeconds[0],stageStart(p,2),duration])].sort((a,b)=>a-b);
  for(const tok of p.players){
    let pos=positionAt(p,tok,blocked?0:t);
    if(blocked&&tok.id==='lcb')pos=[340,265];
    const anim=animated?`<animateTransform attributeName="transform" type="translate" values="${samples.map(s=>positionAt(p,tok,s).map(n=>n.toFixed(3)).join(' ')).join(';')}" keyTimes="${samples.map(s=>(s/duration).toFixed(9)).join(';')}" dur="${duration}s" calcMode="linear" fill="freeze"/>`:'';
    const halo=role===tok.id?'<circle r="26" fill="none" stroke="#e49b24" stroke-width="5"/>':'';
    inner+=`<g data-player="${tok.id}" transform="translate(${pos.join(' ')})">${anim}${halo}${shape(tok)}</g>`;
  }
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${view}" role="img" aria-labelledby="pitch-title"><title id="pitch-title">#KLATKA: ${blocked?'brak asekuracji': 'pressing zorganizowany; Olimpia broni lewej bramki'}</title><defs><marker id="pass-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0L10 5L0 10Z" fill="#14261b"/></marker><marker id="run-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0L10 5L0 10Z" fill="#157446"/></marker></defs>${inner}</svg>`;
}
