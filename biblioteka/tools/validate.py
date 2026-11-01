"""Run with Python 3; no external dependencies."""
import pathlib,json,re,hashlib
root=pathlib.Path(__file__).resolve().parents[1]
def read(p): return (root/p).read_text(encoding='utf-8')
m=json.loads(read('lesson-manifest.json')); ls=m['lessons']
expected=[f'{p}{n:02}' for p,k in [('F',9),('A',9),('O',8),('S',5),('P',5),('SP',8)] for n in range(1,k+1)]
assert m['lessonCount']==len(ls)==44
assert [d['code'] for d in ls]==expected
assert len({d['id'] for d in ls})==44
seen=set();visuals=set()
provenance={d['code']:d for d in json.loads(read('audit/provenance.json'))}
for i,item in enumerate(ls):
 t=read(item['contentPath']);d=json.loads(read(item['metadataPath']))
 embedded=re.findall(r'```json\s*\n(.*?)\n```',t,re.S)
 assert len(embedded)==1 and json.loads(embedded[0])==d,item['code']
 for k in ['code','id','title','version','category','contentModel','nextLesson','contentPath']: assert d[k]==item[k],(item['code'],k)
 assert d['nextLesson']==(expected[i+1] if i+1<len(ls) else None)
 assert d['publicationStatus']=='unpublished'
 assert set(d['relatedLessons'])<=set(expected)
 assert len(d['actions'])==item['actionCount']
 principles={p['id'] for p in d.get('principles',[])}
 for a in d['actions']:
  assert a['id'] not in seen;seen.add(a['id'])
  assert a['id'].startswith(d['code']+'.D')
  assert set(a.get('principleIds',[]))<=principles
  assert a['visualId'] and a['visualId'] not in visuals;visuals.add(a['visualId'])
  assert isinstance(a['videoClips'],list)
 assert hashlib.sha256(t.encode()).hexdigest()==provenance[d['code']]['packagedSha256']
 assert 'brakujace-18' not in provenance[d['code']]['sourcePath']
 assert json.loads(read(provenance[d['code']]['originalMetadataPath']))['id']==d['id']
assert len(list((root/'content').rglob('*.md')))==44
assert len(list((root/'content').rglob('*.meta.json')))==44
print(f'PASS: 44 lekcje, 44 pliki metadanych, {len(seen)} numerowane działania, {len(visuals)} identyfikatory briefów oraz scenariusz O04.')
print('PASS: kody, unikalność ID, ścieżki, JSON, powiązania, kolejność i sumy SHA-256.')
print('Zakres: kontrola strukturalna; bez testów aplikacji i oceny merytorycznej.')
