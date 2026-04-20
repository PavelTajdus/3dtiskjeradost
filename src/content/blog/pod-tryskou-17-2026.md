---
title: "Pod tryskou 17/2026: Novinky z mikrovlnných tiskáren a barevných gradientů"
pubDate: "2026-04-20T05:08:44.000Z"
description: "Tento týden toho přišlo víc, než jsem čekal. Výzkum mikrovlnného ohřevu filamentu, dva různé Bambu updaty, databáze pro správu filamentů, nová tiskárna X2D a decentralizované sítě tiskařů zásobující Ukrajinu"
tags: ["Newsletter"]
heroImage: "https://cdn.mos.cms.futurecdn.net/pibVVPjtw8ieTUSJy95vJS-540-80.webp"
---

Tento týden toho přišlo víc, než jsem čekal. Výzkum mikrovlnného ohřevu filamentu, dva různé Bambu updaty (a ne, nejsou to totéž), databáze pro správu filamentů, nová tiskárna X2D a decentralizované sítě tiskařů zásobující Ukrajinu. Pojďme na to.

## Mikrovlnný ohřev filamentu

Výzkumníci přišli na způsob, jak při FFF tisku ohřívat filament mikrovlnami s přesností na úrovni šířky lidského vlasu. To by teoreticky umožnilo tisknout vodivé dráhy přímo uvnitř objektu, bez nutnosti přerušovat tisk a vkládat komponenty ručně.

Zatím je to laboratorní výsledek, ne produkt. „Brzy budeme tisknout drony doma" je přehnaný závěr. Realističtější výhled je, že tato metoda může za několik let ovlivnit průmyslový tisk elektroniky. Pro hobby tiskaře je to spíš zajímavá zpráva do zásoby, sledovat, jak se to vyvíjí.

[Více informací](https://www.tomshardware.com/3d-printing/researchers-find-a-way-to-heat-3d-printer-filament-using-microwaves-enabling-fusing-circuits-inside-printed-objects-tech-supports-precise-heating-down-to-the-width-of-a-human-hair)

## Barevné přechody od Bambu Lab, firmware tiskáren

Bambu Lab vydal update firmwaru, který přidává podporu plynulých barevných přechodů při tisku ze dvou nebo tří filamentů. Firma přiznává, že základ funkce tvoří fork projektu OrcaSlicer-FullSpectrum.

Tohle je praktická novinka pro dnešek, pokud máte kompatibilní tiskárnu Bambu a AMS, funkce je dostupná po aktualizaci. Výsledky, které jsem viděl na fórech, vypadají přesvědčivě. Konečně něco jiného než tvrdé přechody mezi barvami.

[Více informací](https://www.tomshardware.com/3d-printing/bambu-updates-its-3d-printers-to-print-unique-hues-or-gradients-using-two-or-three-filaments-company-acknowledges-orcaslicer-fullspectrum-fork-as-the-basis-for-the-color-prediction-part-of-the-new-feature)

## Míchání barev v BambuStudio, update sliceru

Odděleně od firmwaru přišel i update samotného BambuStudia, který přidává rozhraní pro míchání barev přímo ve sliceru. Zatímco firmware řeší, jak tiskárna fyzicky přechází mezi filamenty, BambuStudio teď umožňuje toto chování nastavovat a vizualizovat přímo při přípravě tisku.

Jsou to dvě různé věci, i když spolu úzce souvisí. Pokud vás barevné tisky zajímají, stojí za to přečíst oba články.

[Více informací](https://www.fabbaloo.com/news/bambustudio-update-adds-color-mixing)

## Databáze filamentů, která dává smysl

Na Fabbaloo narazili na projekt 3D Filament Profiles, což je v podstatě obří katalog filamentů od stovek výrobců. Ne jako další mrtvý seznam, ale jako místo, kde si můžeš vést vlastní zásobu cívek, porovnávat materiály a dohledat, co jsi vlastně koupil před pár měsíci.

Praktická je hlavně standardizace. Projekt umí generovat jednotné štítky na cívky a pomáhá hledat podobné materiály třeba i podle barvy. Pro domácí dílnu je to příjemné, pro malou farmu nebo makerspace ještě víc. Zatím tomu chybí sdílené tiskové profily pro konkrétní kombinace materiálu a tiskárny, ale i tak je to jeden z těch projektů, které dávají smysl hned.

[Více informací](https://www.fabbaloo.com/news/a-long-needed-database-for-filament-management)

## Bambu X2D: Dvě trysky a ohřevná komora

Bambu Lab oznámil novou desktopovou tiskárnu X2D s dvěma tryskami a ohřevnou komorou. Zatím nemám v ruce konkrétní cenu ani kompletní specifikace, odkaz na Fabbaloo má víc detailů. Ohřevná komora je pro tisk technických materiálů jako ABS nebo ASA zásadní věc, takže pokud to Bambu dotáhne dobře a cena bude odpovídající, může to být zajímavá volba v segmentu, kde zatím dominuje Bambu vlastními staršími modely a Prusa XL.

X2D jsme mimochodem nedávno rozebrali i v samostatném článku, protože to není jen další rychlá Bambu. Zajímavější je na ní hlavně dual-nozzle workflow, menší odpad a čistší podpěry.

[Náš rozbor X2D](https://blog.hotend.cz/bambu-lab-x2d-komu-dava-smysl-komu-ne-proti-p2s-a-h2d/)

Zatím to beru jako oznámení, ne jako recenzi.

[Více informací](https://www.fabbaloo.com/news/bambu-lab-launches-x2d-3d-printer-with-dual-nozzles-and-heated-chamber)

## Jednodušší zpracování purge odpadu

Prusa uživatelé upozornili na úpravu, která mění způsob, jak tiskárny řady Core One nakládají s odpadem při čištění trysky mezi barvami. Místo klasické purge věže nebo wipe do bloku jde o jiný přístup ke zpracování tohoto odpadu, detaily jsou v článku na Fabbaloo.

Není to převratná věc, ale pokud tisknete vícebarevně a purge odpad vás otravuje, může stát za přečtení.

[Více informací](https://www.fabbaloo.com/news/prusa-users-spotlight-a-simple-core-one-feature-that-could-quietly-change-how-fff-printers-handle-purge-waste)

## 3D tisk pro Ukrajinu

Fabbaloo popsalo decentralizované sítě tiskařů, kteří tisknou součásti pro drony a dodávají je na Ukrajinu. Jde o koordinované skupiny fungující mimo centrální struktury, proto „tajné" v názvu článku.

Je to připomínka, že 3D tisk má reálný dopad i mimo hobby projekty. A taky dobrý důvod, proč komunita kolem open-source tisku a sdílení souborů není jen zábava.

[Více informací](https://www.fabbaloo.com/news/secret-decentralized-3d-printing-networks-supply-drone-parts-to-ukraine-at-scale)

---

Týden plný Bambu novinek, ale tentokrát aspoň ne všechny stejné. Mikrovlnný výzkum si nechám v záložkách a počkám, co z toho za pár let vyroste. Příští týden zas.
