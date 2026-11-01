# MG1343 — komplet 44 lekcji

Pakiet 1.0.0, przygotowany 2026-11-01 do przeglądu i późniejszego dodania do repozytorium. Obejmuje 9 fundamentów, 9 lekcji ataku, 8 obrony, 5 po stracie, 5 po odbiorze i 8 stałych fragmentów. Łącznie 44 nazwane tematy. Wcześniejsza liczba 48 nie odpowiada temu katalogowi; nie dodano czterech nieuzgodnionych tematów.

## Zawartość

- `KATALOG.md`: uporządkowany spis z odnośnikami.
- `content/`: 44 pełne opracowania Markdown i 44 pliki `.meta.json`.
- `lesson-manifest.json`: kolejność, identyfikatory, ścieżki i następna lekcja.
- `RAPORT-KONTROLI.md`: zakres weryfikacji, różnice i dalsze prace.
- `audit/`: pochodzenie plików, sumy kontrolne, oryginalne metadane i usunięte historyczne liczniki.
- `tools/validate.py`: kontrola strukturalna bez dodatkowych bibliotek.

## Przegląd i wgranie

1. Rozpakuj archiwum i otwórz `KATALOG.md` oraz raport.
2. Zgłoś korekty do konkretnych kodów lekcji, a następnie zaakceptuj pakiet.
3. Przed dodaniem do wybranego repozytorium uruchom `python3 tools/validate.py` z katalogu pakietu.
4. Dodaj materiały do osobnego katalogu treści projektu i dostosuj importer do manifestu. Względne ścieżki manifestu liczone są od katalogu pakietu. Pakiet nie zawiera aplikacji ani konfiguracji wdrożenia.

Metadane w Markdown i pliku bocznym są identyczne. Zachowano stabilne identyfikatory i wersje treści (F03: 1.1.0; pozostałe: 1.0.0). Wersja pakietu jest osobna. Ujednolicono kategorię, `contentPath`, `nextLesson` oraz `visualId`; usunięto techniczne `nextAuthoringLesson`. O04 ma `contentModel: legacy-scenario` i pustą listę `actions`, ponieważ źródło opisuje scenariusz, a nie numerowane działania. Nie oznacza to braku jego treści.

Wcześniejsze akceptacje w metadanych dotyczą wersji źródłowych. Nie przypisano akceptacji nowym zmianom pakietowym. Starsze notatki wdrożeniowe i zapis przeglądu F03 pozostają historycznym kontekstem; bieżący stan określa ten README i raport.

Komplet tekstów nie oznacza wykonanych grafik, animacji, filmów, integracji ani testów z zawodnikami. Pakiet nie został wypchnięty do GitHub.
