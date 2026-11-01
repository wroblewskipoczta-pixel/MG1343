# A09 — Zabezpieczenie ataku przed stratą: 3+2

**Wersja:** 1.0.0 — gotowe do kodowania.
**Akceptacja:** zakres, działania D01–D05 i rotacje zatwierdzone kolejno przez PO, Łukasza Wróblewskiego, w rozmowie.
**Publikacja:** nieopublikowane w aplikacji; akceptacja treści nie oznacza ukończenia implementacji ani testów.
**Odbiorca:** zespół Olimpii Grudziądz; zasady uniwersalne, przykłady w 1–3–4–3.
**Podstawa:** ustalenia modelu z PO i pięć zatwierdzonych działań. Dokument jest konsolidacją tych ustaleń, nie audytem zewnętrznego dokumentu „Model Gry”.

## Zasada przewodnia

„Atakujemy bramkę, a jednocześnie kontrolujemy, co może się wydarzyć po stracie”.

Bazowe zabezpieczenie: **3–5–2, czyli trzech stoperów, oraz 6–8, czyli dwóch pivotów**. Bramkarz dodatkowo zabezpiecza przestrzeń za nimi; nie jest liczony do pięciu zawodników 3+2.

Zabezpieczenie wspiera progresję. Pivoty są dostępne do rozegrania, a stoperzy pomagają przesuwać atak. Pięciu zawodników za piłką nie daje automatycznie dobrego zabezpieczenia: liczą się ich ustawienie, kontrola przeciwników, odległości i możliwość współpracy.

Numery oznaczają role, nie numery koszulek. Lewa i prawa strona odnoszą się do Olimpii. W przykładzie ataku lewą stroną 6 jest bliższym pivotem, a 8 dalszym. Po zmianie strony zadania aktualizują się; zawodnicy nie muszą zamieniać się fizycznie miejscami.

## A09.D01 — Rozpoznaj zagrożenie przed stratą

**Cel:** podczas naszego ataku wiedzieć, gdzie rywal może rozpocząć kontratak.
**Hasło:** „Mamy piłkę — sprawdzam, kogo i co zabezpieczam”.

Obserwuj:
- Piłkę: czy partner kontroluje sytuację, czy jest pod presją?
- Pierwszego odbiorcę: do kogo rywal może zagrać po odbiorze?
- Przestrzeń: gdzie przeciwnik może pobiec lub poprowadzić piłkę w kierunku naszej bramki?

### Drzewo decyzji D01

| Co widzę? | Co robię podczas naszego posiadania? |
|---|---|
| Rywal pozostaje w centrum i może otrzymać pierwsze podanie. | Pivot ogranicza tę drogę podania, zachowując możliwość wsparcia rozegrania. Stoper kontroluje zagrożenie za nim. |
| Rywal ustawia się szeroko, za wysoko grającym wahadłowym. | Boczny stoper sprawdza rywala i korytarz jego biegu. Dostosowuje pozycję bez niepotrzebnego odsłaniania środka; pozostali stoperzy asekurują. |
| Rywal może zaatakować centrum i przestrzeń za obroną. | Dzielimy odpowiedzialność: pivoty ograniczają pierwsze podanie przez środek, stoperzy kontrolują głębokość. Nie skupiamy wszystkich przy jednym przeciwniku. |
| Nie widzę najgroźniejszego rywala lub nie wiem, kto go kontroluje. | Ponownie skanuję, poprawiam ustawienie i komunikuję zagrożenie. Wstrzymuję własne wejście wyżej do ustalenia zabezpieczenia. |

### Przykład — atak lewą stroną

LWB ma piłkę, 10 daje mu możliwość współpracy. Rywal pozostawia zawodnika w centrum i drugiego przy linii, za LWB.

| Rola | Zadanie obserwacyjne |
|---|---|
| 6 | Sprawdza pierwsze podanie rywala z bocznego sektora do centrum; pozostaje opcją podania dla LWB lub 10. |
| 8 | Kontroluje kolejnego środkowego odbiorcę i przestrzeń, którą może odsłonić przesunięcie 6. |
| 3 | Widzi zawodnika za LWB i możliwość jego biegu ku naszej bramce. |
| 5 | Kontroluje centralnego napastnika oraz możliwość asekuracji 3. |
| 2 | Sprawdza dalszą stronę i głębokość; nie przesuwa się bez kontroli tamtejszego rywala. |
| 1 | Obserwuje przestrzeń za stoperami i dostosowuje pozycję do możliwego długiego zagrania. |

**Błąd:** pięciu zawodników zostaje za piłką, ale wszyscy patrzą na nasz atak. Pierwsze podanie i bieg za plecy pozostają niekontrolowane.
**Kryterium:** po zatrzymaniu akcji zawodnik wskazuje najgroźniejszego odbiorcę, przestrzeń do ochrony oraz partnera asekurującego.

### Wizualizacja G01

Pełne boisko; Olimpia atakuje w prawo, górna linia to nasza lewa strona. Wyróżnij 3+2 i dwóch potencjalnych odbiorców rywala. Zatrzymaj obraz przed stratą. Oznacz jako możliwe drogi pierwszego podania i biegu przeciwnika. Wybór roli podświetla jej odpowiedzialność i partnera asekurującego. Nie animuj jeszcze kontrpressingu.

## A09.D02 — Ustaw zabezpieczenie 3+2

**Cel:** wspierać nasz atak i być gotowym do ograniczenia kontrataku.
**Hasło:** „Jeden może nacisnąć, partner zabezpiecza. Za nimi chronimy głębokość”.

Ustawienie zmienia się wraz z piłką i przeciwnikami; nie musi tworzyć dwóch równych, płaskich linii.

| Element | Odpowiedzialność |
|---|---|
| Bliższy pivot | Daje wsparcie pod piłką; przygotowuje możliwość ograniczenia pierwszego zagrania po stracie, jeśli ma asekurację. |
| Dalszy pivot | Chroni centralne wyjście, uzupełnia bliższego partnera i pozostaje dostępny do zmiany strony. |
| Boczny stoper po stronie piłki | Zabezpiecza przestrzeń za wahadłowym i rywala w swoim sektorze. |
| Środkowy i dalszy stoper | Kontrolują pozostałych przeciwników, głębokość oraz asekurację partnera. |
| Bramkarz | Dostosowuje pozycję do wysokości stoperów i możliwego zagrania za nich. |

### Drzewo decyzji D02

| Pytanie | Tak | Nie |
|---|---|---|
| Czy partner z piłką ma wsparcie pod sobą? | Utrzymuję możliwość przyjęcia podania i obserwuję zagrożenia. | Bliższy pivot poprawia kąt wsparcia; dalszy kontroluje centrum. |
| Czy pivoty kontrolują różne drogi wyjścia? | Zachowujemy podział odpowiedzialności. | Korygujemy ustawienie; nie chowamy się obaj za jednym rywalem i nie zbiegamy bez potrzeby do piłki. |
| Czy stoperzy kontrolują odbiorców i mogą się asekurować? | Przesuwamy zabezpieczenie wraz z atakiem. | Poprawiamy szerokość i głębokość; potrzebny partner zostaje w zabezpieczeniu. |
| Czy po potencjalnym doskoku pozostaną chronione centrum i głębokość? | Przygotowujemy wspólną reakcję na stratę. | Najpierw poprawiamy organizację. Samotny doskok nie rozwiązuje braku asekuracji. |

**Przykład:** LWB ma piłkę pod presją. 6 daje podanie zwrotne pod kątem. 8 pozostaje bardziej centralnie i kontroluje środkowego odbiorcę rywala. 3 zabezpiecza korytarz za LWB; 5 i 2 dostosowują pozycje do przeciwników i możliwego długiego zagrania. Jeśli podanie do 6 jest zablokowane, szuka on nowego kąta; 8 nie biegnie automatycznie w to samo miejsce.

**Błąd:** stoperzy zostają zbyt daleko od pivotów; przeciwnik może przyjąć między nimi i odwrócić się.
**Kryterium:** partner ma wsparcie, odbiorcy rywala są kontrolowani, a wyjście jednego zawodnika nie odsłania centrum lub głębokości.

### Wizualizacja G02

Piłka przy LWB na górnej stronie boiska. Wyróżnij pięciu zabezpieczających. Dwa warianty z tego samego punktu:
- Prawidłowy: 6 poprawia kąt wsparcia, 8 kontroluje centrum, stoperzy dostosowują odległości i asekurację.
- Błędny: oba pivoty zbliżają się do LWB, stoperzy pozostają głęboko. Podświetl wolnego odbiorcę w centrum i drogę podania do niego.

## A09.D03 — Przesuwaj zabezpieczenie za atakiem

**Cel:** utrzymywać wsparcie i kontrolę zagrożeń przy zmianie miejsca ataku.
**Hasło:** „Piłka się przemieszcza — zabezpieczenie dostosowuje się razem”.

### Drzewo decyzji D03

| Sytuacja | Reakcja | Ponowna ocena |
|---|---|---|
| Atak idzie do przodu środkiem. | Pivoty wspierają za akcją; stoperzy podchodzą, kontrolując rywali i głębokość. | Czy odbiorca kontroluje piłkę? Czy podejście nie uwolni biegu za plecy? |
| Piłka trafia do bocznego sektora. | Bliższy pivot wspiera pod kątem, dalszy chroni centrum; boczny stoper kontroluje przestrzeń za wahadłowym, pozostali asekurują. | Czy otworzyliśmy środkowy korytarz lub uwolniliśmy dalszego rywala? |
| Zmieniamy stronę. | Podczas podania aktualizujemy zadania pivotów i stoperów. | Czy odbiorca ma czas i kontrolę? Kto teraz chroni centrum i przestrzeń za wahadłowym? |
| Partner przyjmuje pod presją lub traci kontrolę. | Najbliżsi poprawiają wsparcie, zabezpieczający przygotowują się na stratę i kontrolują wyjścia rywala. | Możemy przesunąć się wyżej czy utrzymać pozycję i chronić głębokość? |
| Wycofujemy piłkę dla przebudowy ataku. | Tworzymy nowe kąty rozegrania i dostosowujemy strukturę do odbiorcy. | Czy cofnięcie piłki wymaga obniżenia całego zabezpieczenia? Nie cofamy się automatycznie. |

**Przykład — LWB → 6 → 8 → RWB:** 6 po podaniu przygotowuje ochronę centralnego wyjścia. 8 staje się bliższym pivotem i daje RWB podanie zwrotne. 2 kontroluje przestrzeń za RWB; 5 dostosowuje centralną asekurację; 3 sprawdza dalszego rywala przed zawężeniem; bramkarz aktualizuje pozycję. Zmiana zadań nie wymaga fizycznej zamiany miejsc pivotów.

**Błąd:** atak jest już po prawej, a zabezpieczenie pozostaje ustawione pod wcześniejszą grę lewą stroną.
**Kryterium:** przy przyjęciu w nowym sektorze mamy wsparcie, kontrolę centrum i odpowiedzialność za głębokość. Korekty następują podczas rozwoju akcji.

### Wizualizacja G03

Podania LWB → 6 → 8 → RWB liniami ciągłymi; przesunięcia zabezpieczenia przerywanymi. Zatrzymaj przed przyjęciem RWB. Wyróżnij 8 jako wsparcie, 6 jako ochronę centrum, 2 jako kontrolującego korytarz za RWB oraz asekurujących 5 i 3. W błędnym wariancie pozostaw zabezpieczenie po poprzedniej stronie i zaznacz przestrzeń do kontrataku.

## A09.D04 — Zabezpiecz wejście partnera do ataku

**Cel:** umożliwić progresję partnera, zachowując zabezpieczenie centrum i głębokości.
**Hasło:** „Przejmij zadanie, zanim partner opuści zabezpieczenie”.

Przesunięcie czterech pozostałych zawodników samo w sobie nie odtwarza 3+2.

### Drzewo decyzji D04

| Pytanie | Tak | Nie |
|---|---|---|
| Czy wejście daje przełamanie linii, przewagę lub wykorzystanie wolnej przestrzeni? | Sprawdzam możliwość przekazania odpowiedzialności. | Pozostaję dostępny do rozegrania i zabezpieczenia. |
| Czy partner przejmie moje zadanie bez odsłonięcia innego zagrożenia? | Komunikujemy zmianę i koordynujemy ruch. | Wstrzymuję wejście; szukamy innej progresji. |
| Czy partner rzeczywiście zajął pozycję pozwalającą zabezpieczać? | Mogę ruszyć wyżej. | Nie polegam wyłącznie na usłyszanym „mam”. |
| Czy w trakcie wejścia zmieniła się kontrola piłki lub ustawienie rywali? | Ponownie oceniam: kontynuuję, zatrzymuję się lub wracam. | Realizuję wejście, nadal obserwując. |

### Zatwierdzone rotacje

| Wchodzący wyżej | Uzupełnienie | Nowe zabezpieczenie |
|---|---|---|
| 6 | 10 przejmuje funkcję pivota obok 8. | 3–5–2 + 10–8 |
| 8 | 11 przejmuje funkcję pivota obok 6. | 3–5–2 + 6–11 |
| 3 | 6 uzupełnia miejsce w trójce, 10 przejmuje funkcję 6. | 6–5–2 + 10–8 |
| 2 | 8 uzupełnia miejsce w trójce, 11 przejmuje funkcję 8. | 3–5–8 + 6–11 |
| 5 | Na tym etapie pozostaje centralnym zabezpieczeniem; wejście poza tę funkcję wymaga odrębnej rotacji. | Bez zatwierdzonego wariantu wejścia |

Podprowadzenie piłki przez stopera z zachowaniem kontroli nie zawsze oznacza opuszczenie zabezpieczenia. Wahadłowi bazowo działają poza piątką; ich wejścia uruchamiają korekty z D02–D03. Jeśli wahadłowy wcześniej uzupełnił zabezpieczenie, musi przekazać zadanie przed wyjściem.

**Przykład:** 3 widzi wolny korytarz i komunikuje zamiar. 6 przygotowuje przejęcie jego funkcji, 10 schodzi obok 8, a 5 i 2 dostosowują pozycje. 3 wchodzi po wykonaniu przejęć. Jeśli 10 nie może zejść, 3 nie forsuje tej rotacji.

**Błąd:** 6 uzupełnia stopera, ale nikt nie przejmuje zadania 6. Przed trójką pozostaje jeden pivot.
**Kryterium:** wiadomo, kto tworzy trójkę, kto wykonuje dwie funkcje pivotów i jakie zagrożenie kontroluje każdy z nich.

### Wizualizacja G04

3 z piłką i wolny korytarz przed nim. Pokaż 10 przejmującego funkcję pivota, 6 przejmującego funkcję lewego stopera, następnie prowadzenie 3 wyżej. Zatrzymaj przed wejściem 3 i podpisz „6–5–2 + 10–8”. W błędnym wariancie 10 pozostaje wysoko: podświetl brak drugiego pivota i drogę wyjścia przez centrum.

## A09.D05 — Przygotuj pierwszą reakcję na stratę

**Cel:** jeszcze podczas posiadania wiedzieć, czy po stracie nacisnąć, zamknąć podanie czy zabezpieczyć głębokość.
**Hasło:** „Najbliższy naciska, partnerzy zamykają wyjścia, tył zabezpiecza”.

Najbliższy podejmuje doskok, jeśli może skutecznie wpłynąć na rywala i ma wsparcie. Sama bliskość nie wystarcza.

### Drzewo decyzji D05

| Warunki po stracie | Reakcja |
|---|---|
| Możemy wywrzeć presję, zamknąć najgroźniejsze podania oraz zabezpieczyć centrum i głębokość. | Wspólny kontrpressing: jeden naciska, partnerzy ograniczają wyjścia, pozostali kontrolują odbiorców i przestrzeń. |
| Najbliższy może podejść, ale za nim brakuje organizacji. | Ogranicza tempo i kierunek ataku; nie forsuje odbioru kosztem łatwego minięcia. Pozostali chronią centrum i głębokość oraz odbudowują ustawienie. |
| Rywal wychodzi spod presji z kontrolą i możliwością gry do przodu. | Przerywamy kontrpressing. Najbliższy zdolny do interwencji opóźnia, zespół przechodzi do odbudowy niskiego bloku. |
| Rywal zagrywa wstecz lub w bok, lecz mamy wsparcie i kontrolę zagrożeń. | Aktualizujemy zadania i oceniamy dalszą presję. Nie kończymy ani nie kontynuujemy jej automatycznie. |
| Odzyskujemy piłkę. | Szukamy progresji do 9–10–11; jeśli jej nie ma, zabezpieczamy posiadanie. |

### Przykład — strata przy LWB, bazowe 3–5–2 + 6–8

| Rola | Pierwsza odpowiedzialność |
|---|---|
| LWB i 10 | Ten z lepszą możliwością skutecznego nacisku podejmuje presję; drugi ogranicza najgroźniejsze pobliskie wyjście. Nie biegną bezwarunkowo do tej samej piłki. |
| 6 | Ogranicza podanie z boku do centrum. Może przejąć nacisk, gdy sytuacja tego wymaga i jego zadanie zostaje zabezpieczone. |
| 8 | Uzupełnia ochronę centrum, kontroluje kolejnego odbiorcę i asekurację 6. |
| 3 | Kontroluje rywala oraz korytarz za LWB; nie opuszcza głębokości tylko z powodu bliskości piłki. |
| 5 i 2 | Kontrolują pozostałych przeciwników, asekurują stronę piłki, dostosowują wysokość do możliwości podającego. |
| RWB | Wraca do organizacji po dalszej stronie, kontrolując rywala i możliwość zmiany kierunku ataku. |
| 9 i 11 | Ograniczają wyjścia w swoim zasięgu; po przełamaniu presji odbudowują pozycje z zespołem. |
| 1 | Aktualizuje pozycję względem piłki i zagrożenia za obroną. |

Po rotacji zadanie wynika z aktualnej funkcji: jeśli 6 zastąpił stopera, a 10 pivota, 6 chroni zadania trójki, a 10 reaguje jako element dwójki przed nią.

**Błąd:** kolejni zawodnicy wychodzą po minięciu pierwszego doskoku, odsłaniając centrum i opóźniając odbudowę.
**Kryterium:** wspólnie rozpoznajemy utratę warunków do presji i zmieniamy zadania. Nie wymagamy odbioru w sztywno ustalonej liczbie sekund.

### Wizualizacja G05

Strata przy górnej linii — naszej lewej stronie. Zatrzymaj tuż przed stratą:
- Wariant gotowy: wyróżnij naciskającego, zamykających podania i chroniących głębokość; ruchy równoczesne.
- Wariant braku zabezpieczenia: pivot poza funkcją bez zastępstwa, otwarte centralne wyjście. Najbliższy opóźnia, pozostali odbudowują organizację; bez samotnego pościgu całego zespołu.

Zatrzymaj po minięciu pierwszej presji z pytaniem „Czy nadal możemy naciskać razem?”. Odpowiedź ma wynikać z ustawienia. Szczegółową organizację kontrpressingu i docelowy kształt niskiego bloku opracowujemy w lekcjach S01–S05 oraz O01/O08.

## Wskazówki realizacyjne dla aplikacji

- Jedno działanie na ekranie; wybór „Moja pozycja” wyróżnia odpowiedzialność w aktualnym scenariuszu.
- Pełne boisko zachowuje widoczność obu drużyn; zbliżenie jest dodatkowym widokiem.
- Olimpia: zielone koła, rywal: czerwone kwadraty. Podanie: linia ciągła z grotem; bieg: przerywana; przestrzeń do ochrony: półprzezroczysta strefa. Możliwe zagrania oznaczać jako możliwości, nie wydarzenia.
- Porównywane warianty zaczynają się od tego samego punktu; różnice warunków mają być widoczne.
- Rotacje zmieniają przypisanie funkcji, nie tożsamość zawodnika. Wybór zawodnika musi nadal wskazywać tę samą osobę po rotacji.
- Kryteria wykonania służą obserwacji decyzji i współpracy. Samo obejrzenie lekcji nie oznacza opanowania działania.

## Metadane

Proponowana ścieżka: `content/z-pilka/A09-zabezpieczenie-ataku-3-plus-2.md`.
To specyfikacja treści dla przyszłego modułu lekcji i drzew. Nie jest plikiem importu odtwarzacza animacji #KLATKA.

```json
{
  "schemaVersion": "lesson-content/1",
  "id": "z-pilka.zabezpieczenie-ataku",
  "code": "A09",
  "version": "1.0.0",
  "language": "pl",
  "category": "atak",
  "audience": "olimpia-zespol",
  "title": "Zabezpieczenie ataku przed stratą: 3+2",
  "exampleFormation": "1-3-4-3",
  "restDefence": "3+2",
  "baseBackThree": [
    "3",
    "5",
    "2"
  ],
  "basePivots": [
    "6",
    "8"
  ],
  "goalkeeperAdditionalCover": true,
  "scopeApproved": true,
  "contentApproved": true,
  "workflowStatus": "ready-for-development",
  "publicationStatus": "unpublished",
  "approvalBasis": "Akceptacje PO dla D01–D05 i rotacji w rozmowie",
  "actions": [
    {
      "id": "A09.D01",
      "title": "Rozpoznaj zagrożenie przed stratą",
      "visualId": "A09.G01",
      "videoClips": []
    },
    {
      "id": "A09.D02",
      "title": "Ustaw zabezpieczenie 3+2",
      "visualId": "A09.G02",
      "videoClips": []
    },
    {
      "id": "A09.D03",
      "title": "Przesuwaj zabezpieczenie za atakiem",
      "visualId": "A09.G03",
      "videoClips": []
    },
    {
      "id": "A09.D04",
      "title": "Zabezpiecz wejście partnera do ataku",
      "visualId": "A09.G04",
      "videoClips": []
    },
    {
      "id": "A09.D05",
      "title": "Przygotuj pierwszą reakcję na stratę",
      "visualId": "A09.G05",
      "videoClips": []
    }
  ],
  "rotations": [
    {
      "advancing": "6",
      "backThree": [
        "3",
        "5",
        "2"
      ],
      "pivots": [
        "10",
        "8"
      ]
    },
    {
      "advancing": "8",
      "backThree": [
        "3",
        "5",
        "2"
      ],
      "pivots": [
        "6",
        "11"
      ]
    },
    {
      "advancing": "3",
      "backThree": [
        "6",
        "5",
        "2"
      ],
      "pivots": [
        "10",
        "8"
      ]
    },
    {
      "advancing": "2",
      "backThree": [
        "3",
        "5",
        "8"
      ],
      "pivots": [
        "6",
        "11"
      ]
    }
  ],
  "relatedLessons": [
    "F03",
    "S01",
    "S02",
    "S03",
    "S04",
    "S05",
    "O01",
    "O08",
    "P02",
    "P05"
  ],
  "contentPath": "content/atak/A09-zabezpieczenie-ataku-3-plus-2.md",
  "packageVersion": "1.0.0",
  "nextLesson": "O01",
  "contentModel": "actions"
}
```


## Status wersji pakietowej

Lekcja należy do kompletu 44 tematów. Status zbiorczy i dalsze działania opisano w `README.md` oraz `RAPORT-KONTROLI.md` w katalogu głównym pakietu. Normalizacja pakietu nie stanowi nowej akceptacji treści ani publikacji.
