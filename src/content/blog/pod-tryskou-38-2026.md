---
title: "Pod tryskou 38/2026: víc podložek v jednom projektu a méně zkroucených rohů"
pubDate: "2026-09-14T06:34:36.000Z"
updatedDate: "2026-10-08T12:00:00.000Z"
description: "PrusaSlicer 3.0 s nastavením pro jednotlivé podložky, drážky proti kroucení, průsvitné PLA ColorMix a tištěná optika ShiftLens, která bez elektroniky ukáže nedovřené víčko."
tags: ["Newsletter"]
heroImage: "/content/images/2026/09/pod-tryskou-38-2026-hero.webp"
---

# Pod tryskou 38/2026: víc podložek v jednom projektu a méně zkroucených rohů

## PrusaSlicer 3.0: každá podložka s vlastní tiskárnou

Prusa Research vydala **1. září** první veřejný náhled PrusaSliceru 3.0. Každá podložka může mít vlastní tiskárnu, materiál a nastavení. V jednom projektu tak můžete připravit část dílů pro MK4S a další pro XL a přesouvat modely mezi podložkami. Limit devíti podložek padl a slicer je dokáže zpracovávat souběžně.

![PrusaSlicer 3.0 s díly rozmístěnými na několika podložkách pro MINI, CORE One L a XL](/content/images/2026/09/pod-tryskou-38-2026-prusaslicer-podlozky.webp)

Více projektů otevřete v záložkách a program je průběžně zálohuje na disku. Přibyl také systém doplňků, které mohou třeba vytvářet geometrii přímo ve sliceru. Komunitní tržiště doplňků je podle firmy téměř hotové a má přijít v některém z dalších vydání.

Samostatná nastavení podložek se mi líbí i pro jednu tiskárnu. Varianty stejného dílu z různých materiálů můžete nechat v jednom projektu.

Zatím je to alfa. Chybí jí některé funkce řady 2.x a část se má vrátit až ve verzi 3.1. Instalace má oddělený adresář s profily, takže ji můžete zkoušet vedle dvojkové řady. Když ale 3MF uložené ve trojce otevřete ve dvojce, načte se **jen geometrie bez nastavení**. Původní soubor si nechte stranou.

[Zdroj: Prusa Research, představení PrusaSliceru 3.0 Preview](https://blog.prusa3d.com/prusaslicer-3-0-preview-built-for-the-future-of-3d-printing_137672/)

---

## Drážky ve spodku modelu proti kroucení

MakerWorld v březnovém návodu ukázal, jak omezit kroucení velkých výtisků úpravou modelu. Spodní plochu rozdělil mělkými drážkami na menší úseky. Plast se při chladnutí smršťuje a drážky pomáhají omezit tah, který zvedá rohy od podložky.

![Náhled spodní strany modelu s kolmými drážkami tvořícími čtvercovou mřížku](/content/images/2026/09/pod-tryskou-38-2026-drazky-proti-krouceni.webp)

V ukázce mají drážky **šířku i hloubku 1 mm**, rozestupy **30–80 mm** a zkosení **45°**, aby nevznikaly nepodepřené převisy. Podobně může pomoct zaoblení spodních rohů. U dílu se šrouby můžete zesílit stěny jen kolem otvorů, místo abyste přidávali perimetry všude.

Ty rozměry bych nejdřív vyzkoušel na konkrétním dílu. Zářez změní i pevnost, takže do nosné stěny ho nemůžete přidat kamkoliv.

[Zdroj: MakerWorld na fóru Bambu Lab, návod proti kroucení výtisků](https://forum.bambulab.com/t/large-prints-say-goodbye-to-warping/240898)

---

## Prusament PLA ColorMix: pět špulek, 45 odstínů

Prusa Research **8. září uvedla Prusament PLA ColorMix**, částečně průsvitné filamenty pro optické míchání barev. ColorMix představila už v květnu, teď k němu přidala materiály. Z azurové, purpurové, žluté, bílé a černé výrobce uvádí **45 odstínů**. Slicer střídá barevné vrstvy, které pak společně vidíte jako další odstín.

![Tři tištěné rybky ukazují ColorMix se čtyřmi barvami, s přidanou černou a se třpytivými filamenty](/content/images/2026/09/pod-tryskou-38-2026-colormix-rybky.webp)

U těchto filamentů výrobce upravil průsvitnost, aby omezil viditelné pruhování a rozdíly v barvě svislých, šikmých a vodorovných ploch. Na některých modelech ale může prosvítat výplň. Prusa Research přidala také sytější, neprůsvitnou variantu PLA CMYK.

![Barevné vzorky a prostorové výtisky ColorMix pro srovnání odstínů na různě skloněných plochách](/content/images/2026/09/pod-tryskou-38-2026-colormix-plochy.webp)

Při uvedení stál kilogram **32,99 EUR včetně DPH**. Pro všech pět barev potřebujete tiskárnu se systémem na pět filamentů. Se čtyřmi můžete začít bez černé. Kolik odpadu při výměnách vznikne, jsem u těchto filamentů nezkoušel. Obrazové textury z upraveného OrcaSliceru jsme měli ve [vydání 36/2026](/blog/pod-tryskou-36-2026/).

[Zdroj: Prusa Research, materiály Prusament PLA ColorMix](https://blog.prusa3d.com/prusament-pla-colormix-print-45-color-shades-using-just-five-filament-spools-and-more_137835/)

---

## ShiftLens ukáže nedovřené víčko bez elektroniky

Výzkumníci z MIT představili ShiftLens, tištěnou optiku, která při pohybu změní viditelný obraz. Využívá drobné čočky a barevný vzor za nimi. Podobný princip znáte z kartiček, které při naklonění ukážou jiný obrázek. Tady jsou čočky na prostorovém předmětu a obraz se může změnit i posunem nebo otočením jeho části.

![Dvě polohy víčka na lahvi ukazují, jak ShiftLens mění viditelnou barvu ze zelené na oranžovohnědou](/content/images/2026/09/pod-tryskou-38-2026-shiftlens.webp)

V ukázce mají láhev, která **barvou a ikonou upozorní na povolené víčko**, nebo stínidlo, na kterém otočení ovládacího prvku vytvoří animaci plamenů. Líbí se mi možnost zkontrolovat polohu dílu pouhým pohledem. Nepotřebujete k tomu čidlo, displej ani baterii.

Na běžné filamentové tiskárně si ale tyto ukázky neuděláte. Výzkumníci je tiskli na **Stratasys J55**, která umí kombinovat průhledný a barevný materiál. Na webu projektu jsou fotografie, video i celá výzkumná práce.

[Zdroj: MIT, projekt ShiftLens](https://hcie.csail.mit.edu/research/shiftlens/shiftlens.html)
