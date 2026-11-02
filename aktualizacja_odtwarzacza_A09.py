#!/usr/bin/env python3
"""MG1343: wdraża odtwarzacz v1.0 w biblioteka/A09.html.
Uruchom w katalogu głównym pobranego repozytorium: python3 aktualizacja_odtwarzacza_A09.py
Tworzy kopię A09.html.bak, jeśli zmiany mają być wprowadzone.
"""
from pathlib import Path
import sys
p=Path('biblioteka/A09.html')
if not p.exists():
    sys.exit('Nie znaleziono biblioteka/A09.html. Uruchom skrypt z katalogu głównego MG1343.')
s=p.read_text(encoding='utf-8')
if 'id="pause-question"' not in s or 'function tick(stamp)' not in s:
    sys.exit('Nieznana wersja A09.html; nie wprowadzono zmian.')
if 'data-player-version="1.0"' in s:
    sys.exit('Odtwarzacz v1.0 jest już zainstalowany.')
original=s

def change(old,new):
    global s
    if s.count(old)!=1:
        sys.exit(f'Nieoczekiwany format pliku: znaleziono {s.count(old)} wystąpień fragmentu {old[:65]!r}. Brak zmian.')
    s=s.replace(old,new,1)

change('<input id="pause-question" type="checkbox" checked>Zatrzymuj przed decyzją',
       '<input id="pause-question" type="checkbox">Tryb nauki · zatrzymuj przed decyzją')
change('<div class="controls"><button id="play" type="button" aria-pressed="false">Odtwórz</button><button id="restart" type="button">Od początku</button>',
       '<div class="controls" data-player-version="1.0"><button id="play" type="button" aria-pressed="false">Odtwórz</button><button id="restart" type="button">Od początku</button><button id="prev-stage" type="button">← Faza</button><button id="next-stage" type="button">Faza →</button>')
change('<option value="1.5">Szybciej · 1,5×</option>',
       '<option value="1.5">Szybciej · 1,5×</option><option value="2">Bardzo szybko · 2×</option>')
change("function tick(stamp){if(!playing)return;", "function tick(stamp){if(!playing)return;")
change("$('restart').addEventListener('click',()=>{stop();time=0;draw();$('status').textContent='Scena ustawiona od początku.';});",
       "$('restart').addEventListener('click',()=>{stop();time=0;draw();$('status').textContent='Scena ustawiona od początku.';});\nfunction jumpStage(delta){stop();const frames=currentScene().frames;const index=delta>0?frames.findIndex(f=>f.t>time+0.001):frames.map(f=>f.t).findLastIndex(t=>t<time-0.001);time=delta>0?(index<0?frames.at(-1).t:frames[index].t):(index<0?0:frames[index].t);draw();$('status').textContent='Przejście do wybranej fazy.';}\n$('prev-stage').addEventListener('click',()=>jumpStage(-1));\n$('next-stage').addEventListener('click',()=>jumpStage(1));")
# Informacja o pauzie w trybie nauki pozostaje jasna. Koniec sceny zatrzymuje ją na ostatniej klatce.
backup=p.with_suffix(p.suffix+'.bak')
backup.write_text(original,encoding='utf-8')
p.write_text(s,encoding='utf-8')
print('OK: odtwarzacz v1.0 zapisany w',p)
print('Kopia bezpieczeństwa:',backup)
