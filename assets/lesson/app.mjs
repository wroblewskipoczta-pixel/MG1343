import {validateProject,totalTime,stageStart,stageAt,positionAt,renderSvg} from './engine.mjs';
const $=id=>document.getElementById(id);
const STORE='olimpia-klatka-draft-v2';
let lesson,approved,project,role='lwb',time=0,raf=0,playing=false,lastStamp=null,zoom=false,blocked=false,lastStage=-1,draft=false;
const undo=[],redo=[];
const status=message=>{$('status').textContent=message;};
function download(text,name,type){const url=URL.createObjectURL(new Blob([text],{type}));const a=document.createElement('a');a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),1500);}
function persist(){try{localStorage.setItem(STORE,JSON.stringify(project));status('Szkic zapisany na tym urządzeniu. Pobierz JSON, aby zachować kopię.');}catch{status('Zapis na urządzeniu jest niedostępny. Pobierz projekt JSON.');}}
function markDraft(){draft=true;$('draft-badge').hidden=false;}
function historyButtons(){$('undo').disabled=!undo.length;$('redo').disabled=!redo.length;}
function stop(){playing=false;cancelAnimationFrame(raf);lastStamp=null;$('play').textContent='Odtwórz';}
function draw(){
  $('pitch').innerHTML=renderSvg(project,time,{role,zoom,blocked});
  lastStage=-1;update(true);
}
function update(force=false){
  if(!force&&!blocked){for(const token of project.players){const el=$('pitch').querySelector(`[data-player="${token.id}"]`);el.setAttribute('transform',`translate(${positionAt(project,token,time).join(' ')})`);}}
  const stage=stageAt(project,time);
  if(lastStage!==stage){
    if(!force&&!blocked){$('pitch').innerHTML=renderSvg(project,time,{role,zoom});}
    document.querySelectorAll('[data-stage]').forEach(b=>b.setAttribute('aria-pressed',String(Number(b.dataset.stage)===stage)));
    $('stage-title').textContent=blocked?'Nie uruchamiaj pułapki bez wsparcia':lesson.stages[stage].title;
    $('caption').textContent=blocked?'Bez wsparcia nie uruchamiaj samotnego doskoku.':lesson.stages[stage].caption;
    $('stage-points').replaceChildren(...(blocked?lesson.stopConditions:lesson.stages[stage].points).map(text=>{const li=document.createElement('li');li.textContent=text;return li;}));
    lastStage=stage;
  }
  $('seek').max=String(totalTime(project));$('seek').value=String(time);
  $('time').textContent=`${time.toFixed(1).replace('.',',')} / ${totalTime(project).toFixed(1).replace('.',',')} s`;
}
function tick(stamp){if(!playing)return;if(lastStamp!==null)time=Math.min(totalTime(project),time+(stamp-lastStamp)/1000);lastStamp=stamp;update();if(time>=totalTime(project)){stop();status('Koniec animacji. Możesz przejść przez etapy ponownie.');}else raf=requestAnimationFrame(tick);}
function showRole(){const r=lesson.roles.find(r=>r.id===role);$('role-title').textContent=`${r.label} · ${r.name}`;$('observe').textContent=r.observe;$('action').textContent=r.action;$('avoid').textContent=r.avoid;draw();}
function setProject(p,{save=true,record=true}={}){stop();if(record){undo.push(structuredClone(project));if(undo.length>30)undo.shift();redo.length=0;}project=validateProject(p);time=0;blocked=false;$('blocked').setAttribute('aria-pressed','false');markDraft();$('first-duration').value=project.transitionSeconds[0];$('second-duration').value=project.transitionSeconds[1];$('hold-duration').value=project.finalHoldSeconds;draw();historyButtons();if(save)persist();}
async function start(){
  try{
    const urls=['../../content/bez-pilki/pressing-zorganizowany/klatka-lewa.json','./klatka-lewa.project.json'];
    const [l,p]=await Promise.all(urls.map(async path=>{const response=await fetch(new URL(path,import.meta.url));if(!response.ok)throw Error('Nie udało się wczytać materiału.');return response.json();}));
    lesson=l;approved=validateProject(p);project=structuredClone(approved);
    let stored=null;try{stored=localStorage.getItem(STORE);}catch{}
    if(stored){try{project=validateProject(JSON.parse(stored));markDraft();status('Przywrócono lokalny szkic. Treść zatwierdzonej lekcji pozostaje punktem odniesienia.');}catch{status('Zapisany szkic jest nieprawidłowy. Wczytano zatwierdzony przykład.');}}
    $('goal').textContent=lesson.goal;$('principle').textContent=lesson.principle;
    $('role').replaceChildren(...lesson.roles.map(r=>{const o=document.createElement('option');o.value=r.id;o.textContent=`${r.label} · ${r.name}`;return o;}));$('role').value=role;
    $('conditions').replaceChildren(...lesson.stopConditions.map(text=>{const li=document.createElement('li');li.textContent=text;return li;}));
    $('exit-rule').textContent=lesson.exitRule;$('recovery').textContent=lesson.recovery;
    $('movement').replaceChildren(...lesson.movement.map(text=>{const li=document.createElement('li');li.textContent=text;return li;}));
    $('questions').replaceChildren(...lesson.questions.map(q=>{const d=document.createElement('details');const s=document.createElement('summary');s.textContent=q.question;const p=document.createElement('p');p.textContent=q.answer;d.append(s,p);return d;}));
    $('first-duration').value=project.transitionSeconds[0];$('second-duration').value=project.transitionSeconds[1];$('hold-duration').value=project.finalHoldSeconds;
    $('loading').hidden=true;$('lesson').hidden=false;
    showRole();historyButtons();
  }catch(e){$('loading').textContent=`${e.message} Odśwież stronę lub spróbuj ponownie później.`;$('loading').setAttribute('role','alert');}
}
$('role').addEventListener('change',e=>{role=e.target.value;showRole();});
$('play').addEventListener('click',()=>{if(playing){stop();return;}if(blocked){blocked=false;$('blocked').setAttribute('aria-pressed','false');draw();}if(time>=totalTime(project))time=0;playing=true;lastStamp=null;$('play').textContent='Pauza';raf=requestAnimationFrame(tick);});
$('restart').addEventListener('click',()=>{stop();time=0;blocked=false;$('blocked').setAttribute('aria-pressed','false');draw();});
$('seek').addEventListener('input',e=>{stop();time=Number(e.target.value);blocked=false;$('blocked').setAttribute('aria-pressed','false');draw();});
document.querySelectorAll('[data-stage]').forEach(b=>b.addEventListener('click',()=>{stop();time=stageStart(project,Number(b.dataset.stage));blocked=false;$('blocked').setAttribute('aria-pressed','false');draw();}));
$('zoom').addEventListener('click',()=>{zoom=!zoom;$('zoom').textContent=zoom?'Pokaż cały zespół':'Zbliżenie pułapki';$('zoom').setAttribute('aria-pressed',String(zoom));draw();});
$('blocked').addEventListener('click',()=>{stop();blocked=!blocked;time=0;$('blocked').setAttribute('aria-pressed',String(blocked));draw();});
$('timing-form').addEventListener('submit',e=>{e.preventDefault();const p=structuredClone(project);p.transitionSeconds=[$('first-duration'),$('second-duration')].map(el=>Number(el.value));p.finalHoldSeconds=Number($('hold-duration').value);try{validateProject(p);setProject(p);}catch(err){status(err.message);}});
$('save-project').addEventListener('click',()=>{persist();download(JSON.stringify(project,null,2),'klatka-lewa.project.json','application/json');});
$('export-svg').addEventListener('click',()=>{stop();download(renderSvg(project,0,{animated:true}),'klatka-lewa.svg','image/svg+xml;charset=utf-8');status('Rozpoczęto pobieranie SVG. Eksport nie publikuje lekcji.');});
$('import-project').addEventListener('change',async e=>{try{const f=e.target.files[0];if(!f)return;if(f.size>250000)throw Error('Projekt jest za duży (limit 250 KB).');const p=validateProject(JSON.parse(await f.text()));setProject(p);}catch(err){status(`Nie wczytano projektu: ${err.message}`);}finally{e.target.value='';}});
$('restore').addEventListener('click',()=>{setProject(approved,{save:false});draft=false;$('draft-badge').hidden=true;try{localStorage.removeItem(STORE);status('Przywrócono zatwierdzony przykład.');}catch{status('Przywrócono przykład w tej sesji. Nie udało się usunąć lokalnego szkicu.');}});
$('undo').addEventListener('click',()=>{if(!undo.length)return;redo.push(structuredClone(project));setProject(undo.pop(),{record:false});});
$('redo').addEventListener('click',()=>{if(!redo.length)return;undo.push(structuredClone(project));setProject(redo.pop(),{record:false});});
document.addEventListener('visibilitychange',()=>{if(document.hidden)stop();});
start();
