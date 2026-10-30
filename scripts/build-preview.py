"""Build the offline review page from the same lesson source files."""
import json
from pathlib import Path
root = Path(__file__).resolve().parents[1]
read = lambda name: (root / name).read_text()
html = read('index.html')
html = html.replace('<link rel="stylesheet" href="assets/lesson/style.css">', '<style>'+read('assets/lesson/style.css')+'</style>')
html = html.replace('<script type="module" src="assets/lesson/app.mjs"></script>', '')
engine = read('assets/lesson/engine.mjs').replace('export ', '')
app = read('assets/lesson/app.mjs').split('\n', 1)[1]
start = app.index('    const urls=')
end = app.index('    lesson=l;',start)
lesson = json.loads(read('content/bez-pilki/pressing-zorganizowany/klatka-lewa.json'))
project = json.loads(read('assets/lesson/klatka-lewa.project.json'))
app = app[:start]+'    const [l,p]='+json.dumps([lesson,project],ensure_ascii=False)+';\n'+app[end:]
html = html.replace('</body>', '<script type="module">'+engine+'\n'+app+'</script></body>')
(root/'podglad-klatka.html').write_text(html)
