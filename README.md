# Model gry Olimpii · Sprint 01

Strona zawodnika: `index.html`. Samodzielny podgląd offline: `podglad-klatka.html` (generowany przez `python scripts/build-preview.py`). Pierwsza lekcja to pressing zorganizowany #KLATKA po lewej stronie w 1–3–4–3. Pozostałe pięć działów jest oznaczone jako przygotowywane.

- `assets/lesson/`: odtwarzacz, silnik animacji, projekt JSON i przykładowy eksport SVG.
- `content/bez-pilki/pressing-zorganizowany/`: zaakceptowana lekcja Markdown i dane JSON z 11 rolami.
- `studio.html`: dotychczasowy warsztat trenera, zachowuje stary klucz zapisu `olimpia-tactical-project-v1`. Nie ma migracji formatów między warsztatem a nową lekcją.

## Uruchomienie i testy

Stronę serwuj przez HTTP (np. GitHub Pages), nie przez `file://`, ponieważ lekcja pobiera JSON i moduły ES.

```sh
node --test tests/lesson.test.mjs
node --check assets/lesson/app.mjs
```

Testy weryfikują czas końcowej klatki, krzywą biegu, role, format importu, escaping SVG i powiązania DOM. Test generuje również aktualny `assets/lesson/klatka-lewa.svg`.

## Zachowanie

Odtwarzanie rusza wyłącznie po kliknięciu, zatrzymuje się po 5,5 s. Przejścia trwają 2 s i 1,5 s, ostatnia klatka 2 s. Zmiana roli wyróżnia gracza i pokazuje jego zadania. Plansza braku asekuracji pokazuje warunek przerwania pułapki. Odbiór jest przykładem, nie obietnicą wyniku.

Narzędzia trenera pozwalają zmienić czasy, cofnąć/ponowić zmianę, pobrać/wczytać JSON v2, przywrócić przykład oraz pobrać jednorazową animację SVG. Szkic zapisuje się pod oddzielnym kluczem `olimpia-klatka-draft-v2`. Pobranie pliku nie publikuje lekcji. Warsztat zachowuje stare narzędzia edycji; przypisanie do modułu jest teraz osobną akcją od eksportu.

## Status weryfikacji

Automatycznie: 7 testów silnika i integracji statycznej. Przeglądarka testowa: wczytanie, wybór roli 10, odtworzenie i zatrzymanie przy 5,5 s, zmiana czasu ostatniej klatki, utrzymanie szkicu po odświeżeniu oraz cofnięcie przywrócenia przykładu. Pełny test mobilny i import pliku przez systemowy selektor pozostają do sprawdzenia przed publikacją. Dotychczasowy warsztat nie przeszedł pełnej regresji; zachowuje swoje zewnętrzne zależności i okna dialogowe.
