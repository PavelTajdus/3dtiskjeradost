---
title: "Pod tryskou 23/2026: Barvy, otevřený software a tisk, který se hlídá za běhu"
pubDate: "2026-06-01T05:03:11.000Z"
updatedDate: "2026-10-08T12:00:00.000Z"
description: "Čtyři novinky: ColorMix od Prusa Research, spor SFC s Bambu Lab kolem AGPL, volumetrický tisk světlem z EPFL a řízení velkoformátového tisku za běhu v ORNL."
tags: ["Newsletter"]
heroImage: "/content/images/2026/06/pod-tryskou-23-2026-hero.webp"
---

Tentokrát tu mám čtyři novinky: ColorMix, spor kolem otevřeného softwaru Bambu Lab, tisk světlem z EPFL a kontrolu velkých plastových výtisků v ORNL.

---

## Prusa Research otevřela ColorMix

Prusa Research vydala **ColorMix**, otevřený model pro PrusaSlicer a EasyPrint. Princip je jednoduchý: slicer nestřídá barvy proto, aby vytvořil čistě oddělené plochy, ale skládá tenké vrstvy různých filamentů tak, aby oko vidělo nový odstín.

Fyzicky se materiály nemíchají. Je to optický trik. Něco jako když se z dálky díváš na jemný rastr, zblízka vidíš jednotlivé vrstvy, z dálky jinou barvu.

Za mě je na tom zajímavé hlavně to, že to není uzavřená hračka pro jeden stroj. Když se to chytne, může z toho být docela praktický způsob, jak z pár základních špulek dostat víc barev bez toho, abys doma skladoval půlku Pantone katalogu.

[Zdroj: Prusa Research](https://blog.prusa3d.com/our-new-open-source-colormix-model-in-prusaslicer-and-easyprint_136079/)

---

## Bambu Lab má další problém kolem otevřeného softwaru

Software Freedom Conservancy se pustila do Bambu Lab kvůli údajnému porušování licence AGPLv3. Nejde jen o běžné internetové remcání. SFC tvrdí, že Bambu Studio neposkytuje kompletní zdrojáky k částem odvozeným od PrusaSliceru a že Bambu Lab zároveň tlačilo na vývojáře forku OrcaSliceru.

Pro běžného tiskaře to může znít jako právnická nuda. Jenže slicer a komunikace s tiskárnou jsou dneska skoro stejně důležité jako hardware. Když výrobce staví na open-source ekosystému a zároveň se ho snaží zavírat, dřív nebo později to bouchne.

Já bych z toho nedělal jednoduché „Bambu špatně, ostatní svatí“. Ale je fér říct, že když firma těží z otevřeného softwaru, musí hrát podle pravidel. Jinak si pod sebou řeže větev, na které sedí půlka desktopového 3D tisku.

[Zdroj: Software Freedom Conservancy](https://sfconservancy.org/news/2026/may/18/bambu-studio-3d-printer-agpl-violation-response/)

---

## EPFL tiskne světlem celé struktury najednou

EPFL ukazuje posun u volumetrického 3D tisku. To je tisk, kde se objekt netvoří klasicky vrstvu po vrstvě, ale tvrdne přímo uvnitř objemu pryskyřice pomocí světla. Tady konkrétně pomocí hologramů a řízení fáze světelného paprsku.

Výzkumníci tvrdí, že jejich nový přístup je **70× účinnější** než předchozí holografické metody. V praxi tiskli milimetrové objekty během sekund a centimetrové během minut. Zajímavé je hlavně to, že metoda zvládá i materiál s živými buňkami, kde se světlo rozptyluje a normálně to dělá bordel.

Tohle není technologie pro domácí tiskárnu. Ale je to pěkná připomínka, že 3D tisk není jen FFF a resin. V biotisku a medicíně může být důležité právě to, že se něco vytiskne rychle, jemně a bez dlouhého mordování po vrstvách.

[Zdroj: EPFL](https://actu.epfl.ch/news/3d-printing-tissue-like-structures-with-light-3/)

---

## ORNL hlídá velkoformátový tisk za běhu

Oak Ridge National Laboratory pracuje na systému, který sleduje velkoformátový plastový tisk termokamerami a podle toho upravuje rychlost tisku. Nejde o domácí tiskárnu, která sama zachrání rozjetou Benchy. Jde o velké kompozitní díly, kde se tiskne z pořádných housenek materiálu a chyba stojí hodiny i kila plastu.

Princip je dobrý. Systém sleduje teplotu čerstvě položeného materiálu. Když vidí, že další vrstva přichází na moc studený plast, upraví rychlost tak, aby vrstvy lépe držely. V testu ORNL záměrně začali s nevhodnou rychlostí a systém si to sám dorovnal.

Za mě je tohle zajímavější než marketingové řeči o „AI tiskárně“. Tady AI nebo počítačové vidění řeší konkrétní problém: velký výtisk nechceš hlídat očima celý den a zjistit po šesti hodinách, že se ti vrstvy nespojily.

[Zdroj: ORNL](https://www.ornl.gov/news/error-correction-tech-boosts-3d-printing-big-composite-parts)

---

Za mě solidní týden. ColorMix je praktická novinka, kauza Bambu připomíná, že open source není jen marketingová nálepka, a ORNL s EPFL ukazují dva úplně jiné směry automatizace. Jeden hlídá velké plastové díly, druhý tiskne světlem v objemu. Obojí je daleko od běžné domácí tiskárny, ale přesně takové věci časem posouvají celý obor.

**Shrnutí:**

- **ColorMix** je zajímavý otevřený krok k praktičtějšímu barevnému tisku.
- **Bambu Lab** má další tlak kolem AGPL a otevřeného softwaru.
- **EPFL** ukazuje rychlejší volumetrický tisk světlem.
- **ORNL** řeší reálnou kontrolu velkoformátového plastového tisku.
