---
title: "Plnobarevný 3D tisk z pěti filamentů? Primed3D je chytrý trik, ne kouzlo"
pubDate: "2026-05-06T11:57:32.000Z"
description: "Primed3D umí z běžného modelu udělat barevný 3MF pro vícemateriálový FFF tisk. Na první pohled to vypadá jako domácí full-color 3D tisk. Ve skutečnosti jde o dithering, optický trik z tenkých čar a vrstev různých filamentů."
heroImage: "/content/images/2026/05/primed3d-full-color-fff-hero.webp"
tags: ["Primed3D", "FFF", "Multimaterial", "3MF", "Barvení modelů"]
draft: false
---

Primed3D umí z běžného modelu udělat barevný 3MF pro vícemateriálový FFF tisk. Na první pohled to vypadá jako domácí full-color 3D tisk. Ve skutečnosti jde o dithering, podobný princip jako u novinového tisku nebo starých inkoustových tiskáren. Technicky zajímavé, prakticky zatím hodně náročné.

## Co je Primed3D

Primed3D je nový open-source webový nástroj od 3D Revolution / Joshe. Do webové aplikace nahrajete model, můžete ho ručně namalovat, přidat gradient nebo na něj promítnout obrázek. Výstupem je vícemateriálový 3MF soubor pro slicer.

Podporované jsou režimy jako CMY, WCMY, KCMY, WKCMY nebo jednoduchý dvoubarevný režim. Tedy kombinace cyan, magenta, yellow, případně white a black.

Důležité: Primed3D není tiskárna a nemíchá filamenty v trysce. Připravuje barevná a materiálová data pro slicer. Tisk pořád řeší vaše tiskárna, AMS, MMU, toolchanger a konkrétní filamenty.

## Není to PolyJet. Je to dithering

Tohle je hlavní věc, kterou je potřeba říct hned na začátku.

Primed3D nedělá pravý full-color tisk ve smyslu PolyJetu, kde se materiály skutečně kombinují ve velmi jemném rozlišení. U FFF pořád vytlačujete jednotlivé plastové čáry. Jen se střídají různé barvy tak, aby se z určité vzdálenosti opticky slily.

Je to podobný princip jako u tisku fotek z bodů. Zblízka vidíte zrno, šum, čáry a jednotlivé barvy. Z dálky oko část informací sloučí a vznikne dojem mezibarvy.

Proto budou lépe fungovat větší barevné plochy, gradienty a stylizovaná grafika. Fotka na malém modelu je nejtěžší disciplína, FFF stopa prostě není dost jemná na fotorealistický detail zblízka.

## Jak to funguje v praxi

Primed3D vezme barvu na povrchu modelu a převede ji na kombinaci dostupných filamentů. Typicky:

- **CMY**: cyan, magenta, yellow
- **WCMY**: přidá bílou pro světlejší tóny
- **KCMY**: přidá černou pro tmavší tóny
- **WKCMY**: bílá, černá, cyan, magenta, yellow
- **2 filaments**: jednodušší dvoubarevné efekty

Výstupem je 3MF, který se otevře v Bambu Studio, OrcaSliceru, PrusaSliceru nebo dalších kompatibilních slicerech.

Doporučená výška vrstvy je 0,08 mm. To dává smysl, čím jemnější vrstvy, tím menší viditelné barevné kroky. Jenže 0,08 mm zároveň znamená dlouhý tisk. A u vícemateriálového tisku často i hodně výměn.

## Proč AMS s jedním hotendem není ideální cesta

Na papíře to zní jednoduše: vezmu Bambu s AMS, dám do něj cyan, magenta, yellow, bílou a černou, nahraju soubor a tisknu.

Jenže jeden hotend znamená, že se při každé změně barvy musí filament vytáhnout, zavést jiný a starý materiál vypurgovat. U běžného barevného modelu to může být nepříjemné. U ditheringu, který z principu střídá barvy velmi často, je to zásadní problém.

Fabbaloo uvádí u testovací Benchy tato čísla:

- tisk trval **34 hodin**,
- celková spotřeba byla **437 g filamentu**,
- samotný model měl **14,13 g**.

To znamená přibližně **96,8 % materiálu mimo model**. Jinými slovy: technologicky to funguje, ale ekonomicky a časově je to u jedné trysky dost brutální.

Tohle není kritika Primed3D. To je limit současného single-hotend vícemateriálového FFF tisku.

## Kde to začne dávat větší smysl

Primed3D je zajímavější ve chvíli, kdy změna barvy není drahá.

Typicky:

- toolchanger,
- nozzle changer,
- více trysek,
- systémy s minimálním purgem,
- tiskárny typu Prusa XL / INDX,
- Snapmaker U1,
- budoucí nebo nové systémy typu Bambu H2C / Vortek a podobně.

Tam se z ditheringu může stát mnohem praktičtější metoda. Pokud tiskárna nemusí při každé změně barvy čistit jednu společnou trysku, zmizí velká část odpadu i času.

Právě proto mi Primed3D přijde zajímavější jako ukázka směru, kterým se FFF může posunout, než jako hotový návod pro každého majitele AMS.

## Barvy nebudou dokonale přesné

Je tu ještě jeden detail: reálné filamenty nejsou ideální tiskové inkousty.

Cyan od jedné značky nebude stejný jako cyan od druhé. Některé filamenty jsou průsvitnější, jiné kryjí víc. Černá a bílá pomůžou kontrastu, ale zároveň můžou udělat viditelný šum nebo čáry.

Podle informací z projektu vlastní HEX barvy filamentů ovlivňují hlavně náhled ve sliceru. Samotný dithering ale pořád vychází z ideální CMY teorie. Takže výsledek bude hodně záviset na konkrétních materiálech.

Tohle není kalibrovaný barevný tisk. Je to kontrolovaný kompromis.

## Co říkají první zkušenosti

Primed3D je čerstvý projekt. Neexistuje zatím velká sada nezávislých testů, ze kterých by šlo dělat silné závěry.

Doložitelné zatím je:

- Fabbaloo ověřilo, že export jde dostat do Bambu Studia a workflow funguje, ale u Benchy narazilo na extrémní čas a odpad.
- Hackster nástroj popisuje pozitivně jako „full color-ish“, ale zároveň upozorňuje, že iluze funguje hlavně z odstupu a fotky jsou zblízka zrnité.
- V komunitních diskuzích se opakuje stejný motiv: na AMS je problém purge, na toolchanger a nozzle changer systémech to dává větší smysl.
- Objevují se první zmínky, že průsvitnější PLA může pro míchání působit lépe než hodně krycí barvy.

Zatím bych to tedy nebral jako „novou éru domácího full-color tisku“. Spíš jako chytrý experiment, který dobře ukazuje, co by mohlo fungovat, až hardware sníží cenu změny materiálu.

## K čemu bych Primed3D dnes použil

Dávalo by mi smysl ho zkusit na:

- malé dekorativní modely,
- loga,
- štítky,
- figurky s většími barevnými plochami,
- stylizované gradienty,
- demonstraci principu ditheringu.

Naopak bych od toho nečekal:

- fotorealistické miniatury,
- levný provoz na AMS,
- rychlý tisk,
- přesné barvy,
- produkční workflow bez hodně ladění.

Pokud někdo čeká „PolyJet doma“, bude zklamaný. Pokud ho zajímá, jak daleko se dá FFF ohnout pomocí softwaru a optiky, je Primed3D velmi zajímavé.

## Shrnutí

Primed3D není kouzlo a není to skutečný full-color tisk. Je to dithering převedený do světa FFF: střídání barevných plastových čar tak, aby se z odstupu slily do dojmu dalších barev.

Technicky je to chytré. Prakticky je největší problém 0,08mm vrstva, počet změn materiálu, čas a odpad. Na AMS/MMU s jedním hotendem to může být extrémně neefektivní. Na toolchangeru nebo nozzle changeru to začíná dávat mnohem větší smysl.

Za mě: zajímavý směr, dobré téma na experiment, ale zatím bych to bral spíš jako technologickou ukázku než běžnou metodu pro domácí barevný tisk.

## Zdroje

- [Primed3D web](https://primed3d.3drevolution.net/)
- [Primed3D GitHub](https://github.com/3DRev/Primed3D)
- [Primed3D update log](https://primed3d.3drevolution.net/UpdatesLog/)
- [Fabbaloo](https://www.fabbaloo.com/news/prime3d-enables-full-color-images-in-fff-3d-printing)
- [Hackster](https://www.hackster.io/news/3d-print-full-color-photos-on-a-regular-old-filament-printer-e40b1ba784d8)
- [3Druck](https://3druck.com/en/programs/primed3d-open-source-tool-projects-photos-and-color-gradients-onto-fff-prints-13156685/)
- [3D Revolution video](https://www.youtube.com/watch?v=jGBw5K8rw4k)
- [Kbin/Lemmy diskuze](https://kbin.earth/m/3dprinting@lemmy.world/t/2603736/A-FOSS-Tool-to-Paint-3D-Models-with-Photos)
