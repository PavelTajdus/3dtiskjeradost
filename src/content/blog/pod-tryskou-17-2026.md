---
title: "Pod tryskou 17/2026: Novinky z mikrovlnných tiskáren a barevných gradientů"
pubDate: "2026-04-20T05:08:44.000Z"
description: "Tento týden toho přišlo víc, než jsem čekal. Výzkum mikrovlnného ohřevu filamentu, dva různé Bambu updaty, databáze pro správu filamentů, nová tiskárna X2D a decentralizované sítě tiskařů zásobující Ukrajinu"
tags: ["Newsletter"]
heroImage: "https://cdn.mos.cms.futurecdn.net/pibVVPjtw8ieTUSJy95vJS-540-80.webp"
---

Tento týden toho přišlo víc, než jsem čekal. Výzkum mikrovlnného ohřevu filamentu, dva různé Bambu updaty (a ne, nejsou to totéž), databáze pro správu filamentů, nová tiskárna X2D a decentralizované sítě tiskařů zásobující Ukrajinu. Pojďme na to.

## Mikrovlnný ohřev filamentu

Výzkumníci zkouší ohřívat filament mikrovlnami přímo v místě tisku. Cíl není rychlejší Benchy, ale přesnější lokální ohřev materiálu, který by jednou mohl pomoct třeba s tiskem vodivých drah uvnitř dílu.

Zatím je to laboratorní ukázka, ne něco, co si příští měsíc přidáte do domácí tiskárny. Za mě je to zajímavé hlavně jako směr pro průmyslovější tisk elektroniky. Pro běžné hobby FDM je to dnes spíš věc k pozorování než praktická novinka na víkend.

[Více informací](https://www.tomshardware.com/3d-printing/researchers-find-a-way-to-heat-3d-printer-filament-using-microwaves-enabling-fusing-circuits-inside-printed-objects-tech-supports-precise-heating-down-to-the-width-of-a-human-hair)

## Barevné přechody od Bambu Lab, firmware tiskáren

Bambu Lab vydal firmware update, který umí plynulé barevné přechody ze dvou nebo tří filamentů. Firma zároveň přiznala, že color-prediction část stojí na forku OrcaSlicer-FullSpectrum.

Prakticky je na tom zajímavé hlavně to, že se z vícebarevného tisku zase o kus míň stává jen střídání tvrdých pruhů. Pokud máte kompatibilní Bambu a AMS, tohle je novinka, kterou má smysl reálně zkusit, ne si ji jen projet v changelogu.

[Více informací](https://www.tomshardware.com/3d-printing/bambu-updates-its-3d-printers-to-print-unique-hues-or-gradients-using-two-or-three-filaments-company-acknowledges-orcaslicer-fullspectrum-fork-as-the-basis-for-the-color-prediction-part-of-the-new-feature)

## Míchání barev v BambuStudio, update sliceru

Současně vyšel i update BambuStudia, který dává míchání barev přímo do sliceru. Firmware řeší, co tiskárna umí, BambuStudio zase jak to nastavíte a nasimulujete.

Teprve dohromady to celé dává smysl. Za mě je to důležitější detail než samotný marketing kolem gradientů, protože bez rozumného ovládání by to celé zůstalo jen jako efektní demo.

[Více informací](https://www.fabbaloo.com/news/bambustudio-update-adds-color-mixing)

## Databáze filamentů, která dává smysl

Na Fabbaloo narazili na 3D Filament Profiles, databázi s skoro 24 tisíci filamenty od víc než 900 značek. To už není malý hobby seznam, ale něco, co začíná být použitelné i pro lidi, kteří mají doma víc tiskáren nebo malou farmu.

Líbí se mi hlavně možnost držet si vlastní portfolio cívek, porovnávat materiály a generovat jednotné štítky. Slabina je zatím jasná: název slibuje i profily, ale právě sdílené tiskové profily pro konkrétní kombinaci materiálu a tiskárny tomu ještě chybí.

[Více informací](https://www.fabbaloo.com/news/a-long-needed-database-for-filament-management)

## Bambu X2D: už ji máme na e-shopu

Bambu Lab X2D už máme na Hotendu za 17 990 Kč, combo s AMS 2 Pro za 23 990 Kč. Za mě na ní není nejzajímavější samotná rychlost, ale to, že bere část filozofie H řady a dává ji do menšího a dostupnějšího stroje. Dvě trysky tu nejsou jen do tabulky. Největší smysl dávají pro čistší podpory, menší spotřebu materiálu a rozumnější vícebarevný nebo vícemateriálový tisk.

Druhá podstatná věc je komora vyhřívaná na 65 °C a tryska do 300 °C. Právě to z ní dělá zajímavější mašinu i pro ABS, ASA nebo další techničtější materiály. Není to malá H2D a není to tiskárna pro každého. Pokud chceš hlavně co nejjednodušší PLA a PETG workflow, P2S pořád může dávat větší smysl. Pokud ale řešíš podpory, spotřebu materiálu a technické materiály, X2D už je mnohem zajímavější.

[Náš rozbor X2D](https://blog.hotend.cz/bambu-lab-x2d-komu-dava-smysl-komu-ne-proti-p2s-a-h2d/)
[X2D na Hotend.cz](https://www.hotend.cz/p/bambu-lab-x2d)
[X2D Combo s AMS 2 Pro na Hotend.cz](https://www.hotend.cz/p/bambu-lab-x2d-combo-s-ams-2-pro)
[Více informací](https://www.fabbaloo.com/news/bambu-lab-launches-x2d-3d-printer-with-dual-nozzles-and-heated-chamber)

## Jednodušší zpracování purge odpadu

Kolem Prusa Core One se řeší další drobnost, která míří na jeden z nejotravnějších problémů vícebarevného tisku, spotřebu materiálu při čištění trysky. Není to velká headline novinka, spíš ukázka směru, kterým se tenhle segment bude muset hýbat, pokud nemá skončit u hromady purge plastu vedle tiskárny.

Za mě je to zajímavé hlavně proto, že přesně tady se dnes láme použitelnost vícemateriálového tisku v praxi. Rychlost je hezká, ale když u modelu vysypete půl cívky do odpadu, začne to bolet rychle.

[Více informací](https://www.fabbaloo.com/news/prusa-users-spotlight-a-simple-core-one-feature-that-could-quietly-change-how-fff-printers-handle-purge-waste)

## 3D tisk pro Ukrajinu

Fabbaloo popsalo, jak 3D tisk pomáhá kolem ukrajinských dronů ne jako jeden velký projekt, ale jako síť menších dílen a lidí, kteří tisknou konkrétní díly tam, kde jsou zrovna potřeba. A právě to je na tom to zajímavé.

Ne nějaká sci-fi vize, ale docela obyčejné FDM tiskárny, které zkracují cestu od nápadu k funkčnímu dílu. Z pohledu 3D tisku je to další připomínka, že největší síla technologie často není v jednom drahém stroji, ale v tom, že ji můžete rozprostřít do spousty malých míst najednou.

[Více informací](https://www.fabbaloo.com/news/secret-decentralized-3d-printing-networks-supply-drone-parts-to-ukraine-at-scale)

---

Tentokrát mě nejvíc baví X2D a nové barevné workflow od Bambu, protože to jsou věci, které se do reálného tisku promítnou hned. Zbytek je spíš výhled dopředu, ale ne ten marketingový. Příští týden zas.
