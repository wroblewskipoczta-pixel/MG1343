# P02 — Progresja do 9–10–11 po odbiorze

**Wersja:** 1.0.0. **Stan:** treść kompletna, gotowa do przeglądu i kodowania.

**Pochodzenie:** Ponowna redakcja na podstawie odzyskanych ustaleń; nie jest kopią słowo w słowo wcześniejszej wiadomości.

**Publikacja:** nieopublikowana. Grafiki poniżej są briefami; animacje i import odtwarzacza wymagają implementacji.

## Karta zawodnika

**Cel:** Wykorzystaj dostępnego zawodnika przed piłką, tak aby odbiór prowadził do kolejnego kontrolowanego działania.

**Hasło:** „Zobacz odbiorcę i jego następne działanie.”

Model przykładowy 1–3–4–3; zabezpieczenie 3+2 z rotacjami opisanymi w A09. Numery oznaczają role, nie stałe zobowiązanie do jednego zachowania. Decyzję aktualizujemy po zmianie warunków.

## P02.D01 — Wybierz odbiorcę i kierunek podania

**Obserwuję:** Piłka pod kontrolą 6; 9, 10 i 11 na różnych wysokościach.

| Warunek | Działanie | Ponowna ocena |
|---|---|---|
| Otwarta droga do 10, który może przyjąć przodem. | Podaj na stronę umożliwiającą kontynuację. | Czy rywal zdąży wejść w linię podania? |
| 9 jest naciskany tyłem, lecz ma możliwość osłony i wsparcie. | Zagraj do nogi pozwalającej osłonić lub odegrać. | Czy partner wspierający nadal jest dostępny? |
| Cała trójka odcięta, ale wolna przestrzeń przed prowadzącym. | Prowadź, obserwując reakcję obrońcy, lub wykorzystaj innego partnera. | Kiedy pojawia się nowa droga podania? |

**Przykład:** 6 odbiera w centrum. 10 jest wolny w lewym półsektorze; 9 związany przez stopera. Zagranie do 10 daje obrót i dalszy atak. Gdy rywal zamknie ten korytarz, 6 aktualizuje wybór.

**Błąd:** Podanie do nominalnej 9 mimo braku możliwej kontynuacji.

**Kryterium:** Wskaż drogę podania, warunki odbiorcy i możliwe następne działanie.

### Grafika P02.G01

K1: 6 z piłką w centrum, 10 wyżej po lewej, 9 centralnie, 11 po prawej. K2A: podanie do 10 i kontakt w przód. K2B: czerwony pomocnik odcina 10; prowadzenie 6 do wolnego sektora. Warianty oddzielnie. Pauza: Kto może kontynuować?

## P02.D02 — Dopasuj ruch do piłki lub za linię

**Obserwuję:** Możliwość podania, ustawienie obrońcy i miejsce do przyjęcia.

| Warunek | Działanie | Ponowna ocena |
|---|---|---|
| Podający ma kontrolę i może zagrać za linię. | Odbiorca uruchamia bieg w wolny korytarz, kontrolując pozycję względem obrony. | Czy podający nadal może wykonać to zagranie? |
| Podający naciskany, potrzebuje bliskiego wyjścia. | Pokaż się do nogi poza cieniem przeciwnika; inny partner utrzymuje głębokość. | Czy nie prowadzisz kryjącego prosto do piłki? |
| Obrońca podąża za schodzącą 9. | 10 lub 11 może wykorzystać zwolnioną przestrzeń, jeśli podający ją widzi. | Kto zabezpiecza i czy droga jest otwarta? |

**Przykład:** 9 schodzi po piłkę, a stoper rusza z nim. 11 zmienia kierunek w wolny korytarz. Jeśli 6 jest zablokowany, 11 koryguje bieg zamiast kontynuować go bez możliwości podania.

**Błąd:** Wszyscy schodzą do piłki lub wszyscy jednocześnie biegną za linię.

**Kryterium:** Rozdziel funkcję bliskiego wsparcia i głębokości.

### Grafika P02.G02

K1: 9 przed stoperem, 11 w prawym półsektorze. K2: przerywany ruch 9 do piłki i reakcja stopera. K3A: bieg 11 i podanie 6. K3B: presja na 6; korekta biegu 11. Pauza przed wyborem 6.

## P02.D03 — Wybierz kontynuację po przyjęciu

**Obserwuję:** Nacisk od tyłu, wolna strona i dostępne wsparcie.

| Warunek | Działanie | Ponowna ocena |
|---|---|---|
| Odbiorca może przyjąć przodem bez utraty kontroli. | Wykorzystaj kontakt kierunkowy i progresję. | Czy kolejny rywal zamyka prowadzenie? |
| Silny nacisk za plecami, widoczny partner do odegrania. | Osłoń i odegraj z jakością, zamiast obracać w ciemno. | Czy partner jest poza zasięgiem presji? |
| Odegranie zamknięte, lecz piłkę można chronić. | Osłoń, szukaj nowego kąta i komunikacji partnera. | Czy presja wymusza zmianę rozwiązania? |

**Przykład:** 9 dostaje podanie od 8. Przy bliskim stoperze odgrywa do 10; gdy stoper pozostaje daleko, może przyjąć do przodu. Nie narzucamy jednego kontaktu w każdej sytuacji.

**Błąd:** Obrót bez informacji lub automatyczne odegranie mimo wolnej drogi.

**Kryterium:** Decyzja odpowiada rzeczywistemu naciskowi, nie wyuczonej kolejności.

### Grafika P02.G03

Porównaj ten sam początek: 8–9. A: stoper blisko, odegranie do 10. B: stoper daleko, kontakt 9 w wolny sektor. Zaznacz stronę nacisku i piłkę po kontakcie.

## P02.D04 — Wykorzystaj trzeciego zawodnika lub zmień rozwiązanie

**Obserwuję:** Dostępność kolejnego odbiorcy i reakcja przeciwnika.

| Warunek | Działanie | Ponowna ocena |
|---|---|---|
| 9 nie może obrócić, ale 10 ma przestrzeń po odegraniu. | Połącz podanie z ruchem trzeciego zawodnika; podający podtrzymuje wsparcie. | Czy 10 nie został odcięty? |
| Rywal zamknął zaplanowane odegranie. | Zmień odbiorcę, chroń piłkę lub wróć przez wsparcie. | Gdzie powstała nowa przewaga? |
| Po podaniu obaj pivoty chcą ruszyć wysoko. | Uzgodnij przejęcie funkcji zabezpieczenia; jeden ruch nie zwalnia drugiego z ochrony. | Czy za piłką zachowano centrum i kontrolę rywali? |

**Przykład:** 8 zagrywa do 9, a 10 wchodzi pod odegranie. 6 chroni centrum. Gdy rywal zamyka 10, 9 może oddać do 8; 10 zmienia kąt zamiast domagać się niewykonalnego podania.

**Błąd:** Mechaniczne wykonanie schematu na trzeciego mimo zmiany warunków.

**Kryterium:** Wybierz kontynuację albo przerwij schemat i zachowaj piłkę.

### Grafika P02.G04

K1: 8, 9 i 10 tworzą trójkąt; 6 za akcją. K2A: 8–9–10, numery podań 1 i 2. K2B: rywal odcina 10, podanie 9–8. Pokaż 6 oraz stoperów przez cały czas.

## Moja pozycja

Po rotacji zadanie wynika z aktualnej funkcji. Zawodnik z piłką wybiera rozwiązanie; partnerzy zapewniają różne opcje i asekurację. Poniższe role czytamy wraz z warunkami D01–D04.

| Rola | Obserwuję | Działam | Unikam |
|---|---|---|---|
| 1 | Kontroluj możliwość wsparcia za piłką i nacisk na obrońców. | Daj dostępne wyjście i przygotuj następne podanie. | Automatycznego szybkiego zagrania do krytego partnera. |
| 3 | Obserwuj lewy korytarz, 6, 10 i LWB. | Wspieraj i progresuj, zachowując ochronę swojej przestrzeni. | Wyjścia bez przejęcia asekuracji. |
| 5 | Kontroluj centrum i rywali pozostających wysoko. | Łącz obie strony i koordynuj zabezpieczenie. | Podążania całym blokiem za piłką. |
| 2 | Obserwuj prawy korytarz, 8, 11 i RWB. | Daj kąt do wyjścia i utrzymuj zabezpieczenie. | Wymuszonego podania przy linii. |
| LWB | Sprawdzaj kontrolę piłki, 10 i własną dostępność. | Daj szerokość lub bliskie wsparcie zależnie od presji. | Zbyt wczesnego oddalenia od odbierającego. |
| RWB | Sprawdzaj dalszą stronę i możliwość zmiany kierunku. | Utrzymuj dostępny korytarz i reaguj na zmianę strony. | Stania szeroko bez drogi podania. |
| 6 | Kontroluj nacisk, 8 i rozwiązania przed piłką. | Łącz progresję, wsparcie oraz ochronę środka. | Jednoczesnego wyjścia z 8 bez zastępstwa. |
| 8 | Obserwuj piłkę, pozycję 6 i kolejne wyjścia. | Daj inny kąt; wyjście ofensywne uzgadniaj z zabezpieczeniem. | Dublowania funkcji 6. |
| 10 | Obserwuj lewy półsektor, 9 i kierunek presji. | Pokaż się do nogi lub w przestrzeń; wybierz kontynuację. | Obrotu bez informacji. |
| 9 | Kontroluj linię obrony, drogę podania i wsparcie. | Rozdziel ruch do nogi i w głębokość; osłoń lub odegraj pod naciskiem. | Jednego biegu niezależnego od podającego. |
| 11 | Obserwuj prawy półsektor i funkcję po rotacji. | Uzupełnij 9 i 10; pozostań w zabezpieczeniu, jeśli je aktualnie pełnisz. | Porzucenia przejętej funkcji ze względu na numer. |

## Współpraca i coaching

Indywidualnie: zbieraj informację, wybierz działanie i aktualizuj decyzję po kontakcie. Grupowo: utrzymuj trójkąt wsparcia, różne wysokości oraz możliwość odegrania. Zespołowo: łącz działanie przed piłką z ochroną centrum, głębokości i rywali pozostających za akcją.

Informacja ma być krótka i konkretna: „czas”, „plecy”, „odegraj” tylko wtedy, gdy odpowiada rzeczywistej sytuacji. Nie zastępuje własnej obserwacji odbiorcy. Jakość ruchu: kierunek pierwszego kroku i ustawienie ciała mają służyć wybranej opcji; tempo biegu dopasuj do możliwości podania, a nie do ustalonej liczby sekund.

## Ocena rozumienia i transferu

Skala: **samodzielnie / po wskazówce / jeszcze nie / brak okazji**. Dla każdego działania oceń osobno decyzję i wykonanie według podanego kryterium. Samo otwarcie pliku nie oznacza opanowania lekcji.

1. Jaką informację wykorzystałeś przed działaniem?
2. Co mógł zrobić odbiorca po Twoim podaniu lub ruchu?
3. Jaka zmiana warunków skłoniłaby Cię do innej decyzji?

W treningu lub analizie wybierz po jednym przykładzie z dostępną i zamkniętą drogą progresji. Zatrzymaj materiał przed decyzją, poproś o nazwanie opcji, następnie odtwórz i omów decyzję oddzielnie od rezultatu. Nie wymuszaj sukcesu określoną liczbą kontaktów.

## Kontrakt wizualny i klipy

Boisko pionowe; bramka Olimpii na dole, atak w górę, lewa strona Olimpii po lewej ekranu. Zielone koła z numerami i czerwone kwadraty z etykietami; kształty pozwalają odróżnić zespoły bez koloru. Piłka kontrastowa, podanie ciągłą strzałką, bieg przerywaną, prowadzenie i kontakt z podpisem. Warianty alternatywne pokazywane oddzielnie.

Filtry: dział, lekcja, zasada, działanie, pozycja. Wyróżnienie roli nie ukrywa partnerów potrzebnych do decyzji. Pauza przed wyborem, odtwarzanie na żądanie, statyczne klatki dostępne bez animacji. Czasy dydaktyczne ustalić przy wykonaniu, nie traktować ich jako norm meczowych.

Listy klipów są puste. Docelowo: id, actionId, scenarioId, sourceType (mecz/trening), assetPathOrUrl, startSeconds, endSeconds, caption. Nie oznaczamy przykładowych ani nieistniejących nagrań jako gotowych.

## Metadane

```json
{
  "schemaVersion": "lesson-content/1",
  "id": "po-odbiorze.progresja-do-9-10-11-po-odbiorze",
  "code": "P02",
  "title": "Progresja do 9–10–11 po odbiorze",
  "version": "1.0.0",
  "language": "pl",
  "category": "po-odbiorze",
  "exampleFormation": "1-3-4-3",
  "baseRestDefence": "3+2",
  "authoringComplete": true,
  "reviewMode": "po-feedback-after-summary",
  "workflowStatus": "ready-for-content-review",
  "publicationStatus": "unpublished",
  "provenance": "editorial-reconstruction",
  "pitchOrientation": "vertical",
  "ownGoal": "bottom",
  "attackDirection": "bottom-to-top",
  "principles": [
    {
      "id": "P02.principle.01",
      "label": "Wybierz odbiorcę i kierunek podania"
    },
    {
      "id": "P02.principle.02",
      "label": "Dopasuj ruch do piłki lub za linię"
    },
    {
      "id": "P02.principle.03",
      "label": "Wybierz kontynuację po przyjęciu"
    },
    {
      "id": "P02.principle.04",
      "label": "Wykorzystaj trzeciego zawodnika lub zmień rozwiązanie"
    }
  ],
  "actions": [
    {
      "id": "P02.D01",
      "title": "Wybierz odbiorcę i kierunek podania",
      "principleIds": [
        "P02.principle.01"
      ],
      "visualId": "P02.G01",
      "videoClips": []
    },
    {
      "id": "P02.D02",
      "title": "Dopasuj ruch do piłki lub za linię",
      "principleIds": [
        "P02.principle.02"
      ],
      "visualId": "P02.G02",
      "videoClips": []
    },
    {
      "id": "P02.D03",
      "title": "Wybierz kontynuację po przyjęciu",
      "principleIds": [
        "P02.principle.03"
      ],
      "visualId": "P02.G03",
      "videoClips": []
    },
    {
      "id": "P02.D04",
      "title": "Wykorzystaj trzeciego zawodnika lub zmień rozwiązanie",
      "principleIds": [
        "P02.principle.04"
      ],
      "visualId": "P02.G04",
      "videoClips": []
    }
  ],
  "automaticCompletion": false,
  "contentPath": "content/po-odbiorze/P02-progresja-do-9-10-11-po-odbiorze.md",
  "packageVersion": "1.0.0",
  "nextLesson": "P03",
  "contentModel": "actions",
  "relatedLessons": []
}
```


## Status wersji pakietowej

Lekcja należy do kompletu 44 tematów. Status zbiorczy i dalsze działania opisano w `README.md` oraz `RAPORT-KONTROLI.md` w katalogu głównym pakietu. Normalizacja pakietu nie stanowi nowej akceptacji treści ani publikacji.
