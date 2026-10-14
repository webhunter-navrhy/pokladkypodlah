# Koncept – Pokládky podlah (Jaromír Vydra), 14. 10. 2026

## Tři nápady
1. **Vzorník u vás doma** – web jako vějíř vzorků, se kterým pan Vydra jezdí k zákazníkům: každý materiál je pruh vzorku vyříznutý z jejich skutečné realizace (vinyl ze Šestajovic, červený koberec z Obecního domu, modrý zátěžový z Amazonu, linoleum z divadla Na Jezerce) se štítkem jako na vzorníku.
2. **Cenová nabídka zdarma** – web jako vyplněný list cenové nabídky (položky, razítko „Jde to i levně“, podpis) – tah na cenu.
3. **Kde všude máme položeno** – mapa Prahy a středních Čech s body referencí (Obecní dům, Bulovka, Hotel Avion, Řež, Břežany…).

## Výběr: 1 – Vzorník u vás doma
- Je to jejich vlastní věta („Přijedeme k vám se vzorníky až domů“) a skutečný předmět oboru.
- Unese fotky, které opravdu máme: 21 malých fotek z mobilu (max 936 px). Jako vzorky (výřezy povrchů) a menší dlaždice realizací fungují, velký full-bleed by je roztáhl přes 1,3×.
- Nápad 2 by tlačil jen cenu, nápad 3 potřebuje přesné souřadnice adres, které nemáme (reference jsou jen názvy). Reference proto jako typografický seznam „štítků“, bez mapy.
- Šťastný (taky podlahy) měl řez skladbou a oblouky – tady jiný nápad i skladba.

## Skladba sekcí (úvod)
1. Hlavička: slovní logo „POKLÁDKY PODLAH / Jde to i levně“ vlevo (jejich logo je jen text), menu se zachovanými podstránkami, telefon.
2. Hero: text vlevo (Praha a střední Čechy · od roku 1997, h1, obhlídka + cenová nabídka zdarma, 2 akce), vpravo **vějíř vzorků** (signature 1) – 6 pruhů z jejich realizací, při scrollu se vějíř rozevře (CSS scroll-driven, bez JS, reduced-motion = rozevřený).
3. Vzorník materiálů: řada „vzorků“ (koberce, plovoucí podlahy, vinyl/PVC/linoleum, dřevo a parkety, malování a úklid, doplňkový sortiment), klik přepne panel s jejich textem a fotkou (signature 2, obsahová).
4. Realizace na klíč: postup od obhlídky po vzorky na místě (jejich 5 bodů, je to opravdu pořadí) + „Nabízíme a provádíme“ + pás „Vše za velkoobchodní ceny“ a spolupráce BAUHAUS, TREND, KIKA (text, bez log).
5. Ukázky práce: realizace se štítky (Obecní dům Praha 1, divadlo Na Jezerce, Amazon, RD Šestajovice, další pokládky) – mřížka menších fotek, lightbox.
6. Reference: seznam míst jako štítky vzorníku na sépiové ploše z jejich úvodní fotky (antik.jpg).
7. Zednické práce + Kariéra (krátké bloky, odkaz na podstránky).
8. Kontakt: formulář (ukázkový režim), sídlo Bašť, provozovna Letňany, telefon, e-mail, IČO.
Podstránky se stejnými URL jako dnes: /zednicke-prace/, /reference/, /ukazky-prace/, /kariera/ (SEO).

## Písmo, barvy, fotky
- Young Serif 400 (display, pevný serif blízký jejich tučnému serifovému nadpisu) + Public Sans 300–600 (text; kurzíva jen pro „Jde to i levně“ jako na jejich webu). Obě prošla testem háčků 10. 10. Young Serif nemá kurzívu → kurzívu u něj nepoužívám.
- Paleta z jejich webu: krémová lišta #e8e5ce, papír #f5f2e8, sépiová hnědá z úvodní fotky #2b2119, oranžová tlačítek #d94412 / #e05d22 (akce, štítky).
- Fotky: jen jejich vlastní z /ukazky-prace/ (zdroje v podklady/foto/zdroje.txt), žádný stock. Max ~1,2× zvětšení, jednotná teplá gradace jen jemně (CSS filter ne, fotky ponechány).

## Zakázané vzory
- Žádný. Postup 1–5 v Realizaci na klíč je skutečné pořadí kroků (obhlídka → posouzení → nabídka → vzorky → architekt), proto čísla, ale ne obrysové 01 02 03.
- Bez marquee, zrna, counterů, pilulkové navigace.

## Porovnání
- Schválené: Hobby Model / Parolek (předmět oboru jako vizuál – tady vzorník), Pletánky poučení (ostré rohy, jemné linky, fotky místo piktogramů).
- Odmítnuté: Vila Anna (Bitter těžké řezy, malé mezery) – Young Serif jen v řezu 400, velké mezery; Sklozam v1 (kopie) – staré Twenty Thirteen rozvržení nekopíruji, beru jen barvy, texty a strukturu.
- Posledních 5 v registru: Archivo, Familjen Grotesk, Bricolage, Unbounded, EB Garamond – Young Serif žádný z nich. Skladba (vějíř vzorků + přepínač materiálů) se nepoužila.
