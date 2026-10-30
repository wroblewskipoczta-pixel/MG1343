# Sprint 01 — #KLATKA: pułapka przy linii

Wersja: 1.0 · Data: 2026-10-29 · Klub: Akademia Olimpia Grudziądz

Status: **Wersja finałowa — Gotowe do kodowania**. PO (Łukasz Wróblewski) zatwierdził strukturę i podział odpowiedzialności w lekcji. Treść i brief stanowią podstawę implementacji tego wariantu. Wdrożenie, testy aplikacji i pilotaż z zawodnikami pozostają do wykonania.

## 1. Zakres i podstawa opracowania

- Dział: Bez piłki.
- Moduł: Pressing zorganizowany.
- Lekcja: Pułapka przy linii — #KLATKA.
- Kontekst: rywal buduje od własnej bramki; Olimpia jest ustawiona do pressingu i kieruje rozegranie na swoją lewą stronę.
- System wyjściowy Olimpii: 1-3-4-3. Numery oznaczają role, nie numery koszulek konkretnych zawodników.
- W tym przykładzie 10 działa po lewej stronie Olimpii, 11 po prawej. LWB to lewy, RWB to prawy wahadłowy.
- Scenariusz wzorcowy: rywal 1-4-3-3, podanie prawego stopera do prawego bocznego obrońcy rywala. To jawne założenie lekcji, nie szablon na każde ustawienie przeciwnika.
- Poza sprintem: kontrpressing po naszej stracie, inne warianty pressingu i lustrzana wersja na drugą stronę.

Materiały wykorzystane: scenariusz PO z rozmowy; dokument „Analiza systemu 1-3-4-3 Olimpia” oraz kod aplikacji MG1343, przeczytane podczas audytu. Niniejszy podział ról został zatwierdzony przez PO dla opisanego wariantu; warunki uruchomienia i przerwania stanowią część tej lekcji. Nie stanowią weryfikacji wszystkich twierdzeń naukowych i danych GPS z dokumentu źródłowego.

Źródło dokumentu: https://docs.google.com/document/d/1912bwJskrT6CJkIJ5g5RS-bbPTwVOCRZxfWLx0pf1W8/edit

Źródło audytu kodu: https://github.com/wroblewskipoczta-pixel/MG1343/blob/main/index.html — analizowany blob: fe60985e740aa52fb9d1d135a536dd1acd6d762a.

## 2. Lekcja — treść dla zawodnika

### #KLATKA — zamknij rywala przy linii

**Cel:** ograniczamy rywalowi grę do przodu i do środka. Szukamy odbioru lub wymuszamy zagranie, które potrafimy przejąć.

**Zapamiętaj:** jeden naciska na piłkę, partnerzy zamykają wyjścia i zabezpieczają przestrzeń.

### Krok 1. Zaproś podanie na bok

- 10, 9 i 11 ustawiają się tak, żeby utrudnić podanie przez środek.
- LWB utrzymuje odległość, z której może doskoczyć podczas podania.
- 6 i 3 sprawdzają rywali oraz przestrzeń, którą trzeba zabezpieczyć za LWB.

**Patrz na piłkę, rywali i gotowość partnerów. Samo podanie na bok nie wystarcza.**

### Krok 2. Ruszcie razem

- Piłka opuszcza nogę stopera i zmierza do bocznego obrońcy: LWB rozpoczyna doskok, jeśli ma wsparcie.
- 10 zamyka podanie powrotne do stopera. 6 przesuwa się, żeby ograniczyć podanie do środka.
- 3 zabezpiecza przestrzeń za LWB; pozostali przesuwają ustawienie w stronę piłki.

**Nie czekaj z reakcją do przyjęcia piłki. Nie ruszaj też tak wcześnie, żeby rywal łatwo zmienił kierunek podania.**

### Krok 3. Kontroluj rywala i szukaj odbioru

- LWB kontroluje dojście i ogranicza zagranie wzdłuż linii w stronę naszej bramki.
- Partnerzy utrzymują zamknięte wyjścia. Nie zbiegają się wszyscy do piłki.
- Gdy rywal wypuści piłkę lub zagra niedokładnie, najbliższy zawodnik próbuje ją przejąć, a reszta utrzymuje asekurację.

**Odbiór jest możliwością, nie gwarantowanym zakończeniem każdej akcji.**

### Kiedy nie uruchamiamy pułapki?

- LWB nie zdąży wywrzeć skutecznej presji i rywal może swobodnie zagrać do przodu.
- Za LWB brakuje zabezpieczenia, a rywal może wykorzystać tę przestrzeń.
- Podanie do środka jest otwarte, a nasi partnerzy nie zdążą go zamknąć.

Wtedy komunikujemy zagrożenie i chronimy przestrzeń. Nie wykonujemy samotnego doskoku tylko dlatego, że piłka trafiła na bok.

### Kiedy przerywamy?

Jeżeli rywal wyjdzie z pułapki z kontrolą piłki i możliwością gry do przodu: najbliższy obrońca opóźnia akcję, pozostali wracają między piłkę a naszą bramkę i odbudowują ustawienie. Nie ścigamy piłki całą grupą.

Podanie do tyłu nie oznacza automatycznie przerwania: odzyskujemy wspólne ustawienie i ponownie oceniamy możliwość nacisku.

### Po udanym odbiorze

Sprawdź możliwość bezpiecznego zagrania do przodu. Jeśli jej nie ma, zabezpiecz piłkę i znajdź wsparcie. Szczegóły rozwiniemy w osobnym module „Po odbiorze”.

## 3. Moja pozycja — filtrowane zadania zawodników

W aplikacji domyślnie pokazujemy jedną wybraną rolę. Pełna tabela jest przeznaczona do redakcji i przeglądu sztabu.

| Rola | Co obserwuję? | Co robię? | Czego unikam? |
| --- | --- | --- | --- |
| 1 — bramkarz | Długie podanie, przestrzeń za linią obrony, ustawienie stoperów. | Dostosowuję pozycję do piłki i linii obrony. Informuję o biegu za plecy i jestem gotowy do interwencji. | Ustawienia na stałej wysokości niezależnie od presji na piłkę. |
| 3 — lewy stoper | Rywala za LWB i możliwość podania wzdłuż linii. | Przesuwam się w stronę piłki i zabezpieczam przestrzeń za LWB. Mogę wejść w pojedynek po podaniu do mojego sektora. | Doskoku do BO, jeśli LWB już go naciska i odsłoniłbym głębokość. |
| 5 — środkowy stoper | Napastnika i przestrzeń otwieraną przez przesunięcie 3. | Przesuwam się, zachowując ochronę środka i głębokości. Komunikuję ustawienie linii. | Skupienia całej uwagi na pułapce i zgubienia napastnika. |
| 2 — prawy stoper | Rywali w środku i możliwość diagonalnego podania. | Zawężam z linią obrony; kontroluję zawodnika i przestrzeń po dalszej stronie. | Pozostania szeroko bez związku z przesunięciem partnerów. |
| LWB — lewy wahadłowy | Moment podania, przyjęcie BO oraz wsparcie 6 i 3. | Doskakuję podczas podania. Kontroluję tempo dojścia i ograniczam grę wzdłuż linii w stronę naszej bramki. | Wpadania w rywala, pochopnego wślizgu i zostawienia łatwego wyjścia pierwszym kontaktem. |
| RWB — prawy wahadłowy | Rywala po dalszej stronie i możliwość zmiany strony. | Zawężam i dostosowuję wysokość do linii obrony. Utrzymuję możliwość reakcji na diagonalne podanie. | Patrzenia tylko na piłkę i porzucenia rywala po dalszej stronie. |
| 6 — bliższy środkowy pomocnik | Podanie od BO do środkowego pomocnika rywala. | Przesuwam się pod pułapkę, zamykam najbliższą drogę do środka i jestem gotowy do przechwytu lub drugiej piłki. | Dublowania nacisku LWB kosztem otwarcia centrum. |
| 8 — dalszy środkowy pomocnik | Drugiego rywala w środku i przestrzeń za przesuwającą się 6. | Przesuwam się razem z 6, utrzymując osłonę centrum i gotowość do drugiej piłki. | Podążania za 6 aż pod linię boczną. |
| 10 — bliższy półskrzydłowy | Linię podania BO → prawy stoper rywala. | Przesuwam się po łuku tak, żeby ograniczyć powrót do stopera, zachowując współpracę z LWB i 6. | Biegu prosto na BO, który otworzy podanie powrotne. |
| 9 — napastnik | Najgłębszego pomocnika rywala i możliwość wyjścia przez stoperów. | Dostosowuję pozycję do ruchu 10, utrudniam centralne wyjście i przygotowuję kolejny nacisk po podaniu do tyłu. | Dublowania 10 przy BO i pozostawienia wolnego środka. |
| 11 — dalszy półskrzydłowy | Dalszego pomocnika i możliwość przeniesienia gry. | Zawężam pierwszą linię, pomagam zamknąć centrum i przygotowuję reakcję na zmianę strony. | Przesunięcia aż pod piłkę, po którym rywal łatwo wyjdzie po dalszej stronie. |

## 4. Współpraca — trzy poziomy

### Indywidualnie

Rozpoznaj sygnał, sprawdź partnera, wykonaj swoje zadanie. Kierunek i tempo ruchu wynikają z ustawienia rywala.

### Grupowo

- LWB + 10: nacisk na piłkę i ograniczenie podania powrotnego.
- LWB + 6: nacisk i zamknięcie najbliższego wyjścia do środka.
- LWB + 3: nacisk i zabezpieczenie przestrzeni za plecami.
- 6 + 8: przesunięcie bez otwierania centrum.

### Zespołowo

Przesuwamy formacje w stronę piłki, kontrolując głębokość i dalszą stronę. Wysokość linii obrony zależy również od tego, czy rywal jest pod skuteczną presją i czy może zagrać za plecy.

## 5. Wskazówki wykonania ruchu

Krótka, rozwijana sekcja zawodnika:

- Przyspiesz do doskoku, ale kontroluj ostatnie kroki przed rywalem.
- Ustaw ciało tak, żeby móc zareagować na pierwszy kontakt i zmianę kierunku.
- Po podaniu rywala odzyskaj pozycję do kolejnego działania.

Uwagi dla sztabu: w tym module nie publikujemy norm dystansu, HSR, sprintów ani obciążeń treningowych. Czas animacji służy czytelności i nie jest normą czasu wykonania dla zawodnika. Wskazówki wykonania wymagają obserwacji na boisku; sam podgląd nie potwierdza jakości ruchu.

## 6. Pytania sprawdzające rozumienie

Nie są oceną zawodnika ani gotowym testem wdrożonym w aplikacji. Odpowiedź można pokazać po samodzielnym wyjaśnieniu decyzji.

### Sytuacja 1 — brak asekuracji

**Pytanie:** Jesteś LWB. Piłka zmierza do BO, ale 3 jest związany rywalem, a przestrzeń za Tobą pozostaje otwarta. Co sprawdzasz przed doskokiem?

**Oczekiwane rozumienie:** oceniam, czy ktoś przejął asekurację i czy zdążę nacisnąć piłkę. Bez warunków do wspólnej presji chronię przestrzeń i komunikuję zagrożenie. Sygnał podania nie zwalnia mnie z oceny sytuacji.

### Sytuacja 2 — wszyscy przy piłce

**Pytanie:** LWB naciska BO. Dlaczego 6 nie powinien automatycznie pobiec do tego samego zawodnika?

**Oczekiwane rozumienie:** 6 ma ograniczyć wyjście do środka. Może reagować na piłkę, jeśli sytuacja stworzy okazję do przechwytu, ale nie może bez oceny porzucić swojego zadania.

### Sytuacja 3 — wyjście z pułapki

**Pytanie:** Rywal podał do środka. Odbiorca obrócił się i może grać do przodu. Co zmienia się w naszym działaniu?

**Oczekiwane rozumienie:** najbliższy opóźnia akcję, pozostali chronią środek, głębokość i odbudowują ustawienie. Nie kontynuujemy mechanicznie poprzedniego doskoku.

## 7. Brief grafiki i animacji

### Wspólne zasady wizualne

Przygotuj schemat taktyczny, nie realistyczną ilustrację. Pełne boisko w poziomie; bramka Olimpii po lewej, bramka rywala po prawej. Olimpia atakuje w prawo. Górna linia boczna odpowiada lewej stronie Olimpii i prawej stronie rywala. Przez wszystkie klatki zachowaj tę orientację.

Zielone koła: Olimpia, oznaczenia 1, 3, 5, 2, LWB, 6, 8, RWB, 10, 9, 11. Czerwone kwadraty: rywal w 1-4-3-3. Wyraźnie podpisz BO i SO po stronie pułapki oraz ŚP, PS i N; pozostałe role pokaż w kontekście całego ustawienia. Kształt i etykieta mają odróżniać zespoły także bez koloru.

Oznacz piłkę kontrastowym kółkiem. Podanie: strzałka ciągła. Bieg: strzałka przerywana. Łuk pokazuje rzeczywisty tor biegu, a nie osobny ozdobny symbol. Półprzezroczysta strefa oznacza obszar ograniczanych możliwości gry. Legenda musi być dostępna. W końcowej klatce „Strata rywala” nie może zasłaniać piłki ani nazw zawodników.

Pełny obraz pokazuje asekurację. Opcjonalne zbliżenie bocznego sektora nie zmienia pozycji zawodników. Układ jest schematyczny, nie służy wyliczaniu metrów ani prędkości.

### Klatka 1 — zaproszenie

- SO rywala ma piłkę w swojej prawej strefie budowania; jego BO pozostaje szeroko przy górnej linii bocznej, wyżej w kierunku bramki Olimpii.
- 10, 9, 11 tworzą wąską pierwszą linię między piłką a centralnymi opcjami podania rywala. Zaznacz różne zadania, nie nakładaj trzech znaczników na tę samą linię.
- LWB znajduje się bliżej własnej bramki niż BO, z możliwością doskoku. 3 kontroluje PS za plecami LWB. 6 ma dostęp do bliższego ŚP, 8 osłania dalszy środek.
- 5, 2, RWB i bramkarz utrzymują zabezpieczenie środka, głębokości i dalszej strony.
- Strzałka ciągła SO → BO wskazuje planowane podanie. Strzałka przerywana LWB → pozycja nacisku pokazuje planowany doskok.
- Podpis: „Zamknij środek. Przygotuj wspólny doskok.”

### Przejście 1 → 2 — sygnał i przesunięcie

- Piłka porusza się od SO do BO.
- LWB rusza podczas podania; docelowe ustawienie ogranicza grę BO wzdłuż górnej linii w stronę bramki Olimpii.
- 10 biegnie po łuku w stronę korytarza podania BO → SO i kończy ruch w pozycji ograniczającej powrót. Nie kończy na tym samym punkcie co LWB.
- 9 dostosowuje pozycję bliżej strony piłki, zachowując wpływ na centrum; 11 zawęża dalszą stronę pierwszej linii.
- 6 przesuwa się do wewnętrznego wyjścia BO, 8 osłania przestrzeń za przesunięciem 6.
- 3 przesuwa się w górny sektor za LWB, pozostając odpowiedzialny za głębszego rywala. 5 i 2 przesuwają linię; RWB zawęża i dostosowuje wysokość. Bramkarz reaguje na zmianę ustawienia zespołu.
- Podpis: „Piłka w drodze — każdy zamyka swoje wyjście.”

### Klatka 2 → 3 — kontrola i przykładowy odbiór

- BO wykonuje zbyt długi pierwszy kontakt: piłka oddala się od niego w stronę dostępnego dla LWB pojedynku.
- LWB skraca dystans do piłki. 10 i 6 korygują ustawienie zgodnie z liniami podań, a nie tylko z odległością od piłki. 3 nadal zabezpiecza PS i głębokość.
- Strefa obejmuje obszar pułapki między linią boczną a wewnętrzną osłoną 6. Może obejmować pozycje 10 i 3, ale nie sugeruje, że wszyscy stoją w równym pierścieniu wokół BO.
- Napis „#KLATKA” umieść nad strefą. Symbol i etykietę „Strata rywala — przykład” pokaż dopiero przy przejęciu piłki. Po przejęciu piłka znajduje się pod kontrolą LWB.
- Podpis: „Wykorzystaj błąd. Utrzymaj asekurację.”

### Czas — jednoznaczny kontrakt dla programisty

- Ruch 1 → 2: 2,0 s.
- Ruch 2 → 3: 1,5 s.
- Zatrzymanie na klatce 3: 2,0 s.
- Łączny cykl: 5,5 s. Odtwarzanie domyślnie jednokrotne; powtórzenie uruchamia zawodnik.
- Te wartości opisują tempo demonstracji, nie czas działania w meczu.
- Jeśli silnik nie obsługuje łuku, dodaj punkty pośrednie wewnątrz przejścia 1 → 2, bez tworzenia dodatkowego etapu dydaktycznego.

### Alternatywna plansza „Nie ma warunków”

Osobna statyczna plansza pod przyciskiem „Kiedy nie ruszać?”. Zachowaj geometrię klatki 1, pokaż otwartą przestrzeń za LWB i brak dostępnej asekuracji 3. Wyróżnij drogę podania BO do PS. Podpis: „Bez wsparcia nie uruchamiaj samotnego doskoku.” Ta plansza nie jest czwartą klatką głównej animacji.

## 8. Układ lekcji w aplikacji

1. Nawigacja: Bez piłki → Pressing zorganizowany → #KLATKA.
2. Tytuł, cel i jedno zdanie do zapamiętania.
3. Wybrana rola; możliwość zmiany roli bez przeładowania lekcji.
4. Boisko: Odtwórz / Pauza / Od początku, trzy wybieralne etapy, opcja „Pokaż cały zespół”.
5. Zadanie wybranej roli: obserwuję / działam / unikam.
6. Rozwijane „Kto mnie asekuruje?” i „Kiedy przerywamy?”.
7. Jedna sytuacja do wyjaśnienia; ujawnienie wskazówki dopiero na żądanie.

Na telefonie nawigacja i przyciski nie mogą zasłaniać boiska. Tekst i statyczne etapy muszą być użyteczne również bez animacji. Materiały robocze i metadane akceptacji pozostają poza widokiem zawodnika.

## 9. Metadane i proponowane nazwy plików

Docelowy plik treści: `content/bez-pilki/pressing-zorganizowany/klatka-lewa.md`.

Docelowy plik metadanych: `content/bez-pilki/pressing-zorganizowany/klatka-lewa.meta.json`.

Docelowy projekt animacji: `assets/animations/klatka-lewa.project.json`.

Docelowy eksport: `assets/animations/klatka-lewa.svg`.

Powyższe ścieżki są planem wdrożenia. Animacja i jej pliki nie zostały w tym sprincie jeszcze wykonane ani opublikowane.

```json
{
  "schemaVersion": 1,
  "id": "bez-pilki.pressing-zorganizowany.klatka-lewa",
  "version": "1.0.0",
  "title": "#KLATKA — pułapka przy linii",
  "language": "pl",
  "phase": "bez-pilki",
  "module": "pressing-zorganizowany",
  "side": "lewa-olimpia",
  "baseFormation": "1-3-4-3",
  "opponentExampleFormation": "1-4-3-3",
  "roleIds": ["gk", "lcb", "ccb", "rcb", "lwb", "cm-near", "cm-far", "rwb", "am-near", "st", "am-far"],
  "roleLabels": {"gk":"1", "lcb":"3", "ccb":"5", "rcb":"2", "lwb":"LWB", "cm-near":"6", "cm-far":"8", "rwb":"RWB", "am-near":"10", "st":"9", "am-far":"11"},
  "tags": ["KLATKA", "pressing", "boczny-sektor", "asekuracja"],
  "learningObjective": "Rozpoznaj warunki wspólnego doskoku, swoją rolę oraz moment przerwania pressingu.",
  "contentPath": "content/bez-pilki/pressing-zorganizowany/klatka-lewa.md",
  "animation": {"status":"brief-ready", "assetId":null, "transitionSeconds":[2.0,1.5], "finalHoldSeconds":2.0, "autoplay":false, "loop":false},
  "workflowStatus": "ready-for-development",
  "publicationStatus": "unpublished",
  "approval": {"structureApproved":true, "contentApproved":true, "approvedBy":"Łukasz Wróblewski", "approvedAt":"2026-10-29"},
  "sourceRefs": ["po-scenario-klatka", "model-gry-olimpia-1343"],
  "evidenceStatus": "po-approved-club-model"
}
```

Tag #KLATKA nie jest identyfikatorem lekcji. Przyszły moduł po stracie otrzyma osobne `id`, nawet jeśli sztab zachowa to samo hasło. Role i strony muszą mieć jawne mapowanie; lustrzane odbicie grafiki wymaga także zamiany zadań bliższych i dalszych zawodników.

## 10. Kanban i warunki zakończenia sprintu

| Zadanie | Status | Warunek przejścia |
| --- | --- | --- |
| Audyt materiału i zakresu | Zakończone | Założenia i rozbieżności opisane w module. |
| Treść zawodnika i role | Gotowe do kodowania | Podział odpowiedzialności zatwierdzony przez PO. |
| Brief wizualny i metadane | Gotowe do kodowania | Zgodne z zatwierdzonym podziałem ról. |
| Wersja finałowa treści | Gotowe | Wersja 1.0; akceptacja PO zapisana. |
| Implementacja lekcji i naprawy odtwarzania | Oczekuje | Zatwierdzona treść gotowa do kodowania. |
| Test z zawodnikami i korekta | Oczekuje | Sprawdzone użycie i rozumienie lekcji. |

### Kryteria odbioru implementacji

- Filtr każdej z 11 ról pokazuje odpowiednie zadanie z tej samej lekcji.
- Zawodnik potrafi wskazać sygnał, swoje działanie, partnera asekurującego i warunek przerwania; kliknięcie „obejrzane” nie oznacza opanowania.
- Każdy etap animacji zgadza się z opisem; podanie i doskok są zsynchronizowane, łuk 10 ma właściwy tor.
- Czas ruchów i zatrzymania odpowiada kontraktowi 5,5 s.
- Zapis szkicu, przypisanie do lekcji, pobranie SVG i publikacja są odrębnymi operacjami.
- Eksport/import JSON zachowuje klatki, role, czasy i przypisanie do `id` lekcji.
- Użytkownik może cofnąć edycję; dodawanie i nazywanie elementów nie wymaga systemowych okien prompt.
- Podgląd na telefonie i komputerze pozwala obsłużyć podstawową ścieżkę bez obciętych kontrolek.
- Do widoku zawodnika trafia wyłącznie zatwierdzona wersja materiału.

### Pilotaż użytkowy — propozycja

Próba z trzema zawodnikami reprezentującymi LWB, 6 i 3. Każdy samodzielnie otwiera swoją rolę, przechodzi etapy i własnymi słowami odpowiada na jedną sytuację. Notujemy niezrozumiałe terminy, błędne interpretacje i miejsca zatrzymania w interfejsie. To próba użyteczności i rozumienia materiału, nie dowód przeniesienia zachowań do meczu.

## 11. Zapis akceptacji i kolejność wdrożenia

PO: Łukasz Wróblewski. Data: 2026-10-29. Zatwierdzony podział: **LWB — nacisk i ograniczenie gry wzdłuż linii; 10 — powrót do SO; 6 — najbliższe wyjście do środka; 3 — przestrzeń za LWB; 9 — centralne wyjście i przygotowanie kolejnego nacisku**.

Akceptacja dotyczy opisanego wariantu po lewej stronie Olimpii. Nie jest potwierdzeniem wykonania aplikacji ani przeprowadzenia testów.

Kolejność realizacji technicznej:

1. Oddzielić treść lekcji i jej metadane od kodu interfejsu; wiązać po stałym `id`.
2. Zbudować widok zawodnika i filtr wszystkich 11 ról.
3. Wykonać animację z rzeczywistym łukiem 10, czasem 5,5 s i osobną planszą braku asekuracji.
4. Rozdzielić zapis, przypisanie, eksport i publikację; zapewnić odzyskanie projektu po imporcie.
5. Sprawdzić zgodność treści z obrazem, sterowanie odtwarzaniem i obsługę na telefonie.
6. Przeprowadzić pilotaż z zawodnikami i odnotować korekty przed zamknięciem sprintu.

Kolejne moduły pozostają poza bieżącym sprintem.
