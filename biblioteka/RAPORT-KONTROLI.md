# Raport kontroli pakietu

## Wynik i zakres

Zebrano 44 różne lekcje zgodnie z katalogiem F01–F09, A01–A09, O01–O08, S01–S05, P01–P05, SP01–SP08. Wybrano najnowsze pliki robocze zamiast skróconej paczki 18 szkiców. F03 ma wersję 1.1.0.

Walidator sprawdza komplet kodów, unikalność identyfikatorów lekcji i działań, istnienie ścieżek, zgodność metadanych osadzonych z plikami bocznymi, odwołania do zasad i lekcji, kolejność następnych lekcji, identyfikatory briefów wizualnych i sumy kontrolne treści. Wynik uruchomienia znajduje się w `VALIDATION.txt`. Sprawdzenie strukturalne nie jest oceną skuteczności taktycznej ani testem aplikacji.

## Zachowane różnice

| Materiał | Różnica / wymaganie |
| --- | --- |
| A09 | 5 działań; zachowano model 3+2 oraz uzgodnione rotacje. |
| S01 | 3 działania; zachowano ich układ i treść. |
| O04 | Scenariusz #KLATKA bez numerowanych działań. Renderer musi obsługiwać `legacy-scenario`. Zachowano role i kierunki nacisku. |
| F03 | Wersja 1.1.0; wcześniejsza akceptacja 1.0.0 nie oznacza akceptacji korekt. |
| P02–P05 | Źródła oznaczone jako rekonstrukcja redakcyjna; wymagają przeglądu treści. |
| Starsze lekcje | Układ sekcji nie jest jednolity. Część nie ma odrębnego treningu w trzech etapach znanego z nowszych lekcji. |
| Grafiki i wideo | Są briefy i identyfikatory, nie gotowe pliki multimedialne. |

Usunięte końcowe sekcje historycznego postępu zachowano w `audit/historical-progress.json`. Nie nadano automatycznie nowych akceptacji. Normalizacja dotyczy organizacji pakietu i danych, a nie przebudowy starszych scenariuszy na nowy szablon.

## Dalsze działania

1. Przegląd i zbiorcza akceptacja treści przez Łukasza, w szczególności wersji redakcyjnych i różnic powyżej.
2. Ewentualne ujednolicenie starszych lekcji do rozszerzonego standardu, jeżeli będzie wymagane.
3. Wgranie zaakceptowanego pakietu do wskazanego repozytorium i dostosowanie importera/rendererów.
4. Wykonanie grafik, animacji i klipów; kontrola zgodności z treścią.
5. Test aplikacji i pilotaż z zawodnikami.

Ten etap zamyka zebranie 44 opracowań w jeden pakiet do przeglądu. Nie zamyka akceptacji, multimediów ani wdrożenia.
