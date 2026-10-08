---
title: "Pod tryskou 38/2026: víc podložek v jednom projektu a méně zkroucených rohů"
pubDate: "2026-09-14T06:34:36.000Z"
description: "PrusaSlicer 3.0 zkouší nový systém projektů, drážky ve spodku modelu pomáhají proti kroucení a Prusament přidává průsvitné PLA ColorMix. Nakonec jeden konkrétní test staré špulky PETG."
tags: ["Newsletter"]
heroImage: "/content/images/2026/09/pod-tryskou-38-2026-hero.webp"
---

# Pod tryskou 38/2026: víc podložek v jednom projektu a méně zkroucených rohů

PrusaSlicer 3.0 už jde vyzkoušet vedle stávající verze. Jen bych v něm zatím nepřipravoval tisk, který musí ráno bezpodmínečně vyjet: Prusa Research sama upozorňuje, že tohle je rozpracovaná alfa, ne téměř hotové vydání.

## PrusaSlicer 3.0 spojí různé tiskárny do jednoho projektu

První veřejný náhled vyšel **1. září**. Nejpraktičtější změna? Každá podložka může mít vlastní tiskárnu, materiál i nastavení. V jednom projektu tak připravíš část dílů pro MINI a další pro XL, přesouváš modely mezi podložkami a nemusíš kvůli tomu otevírat několik samostatných oken. Limit devíti podložek padl a slicer je dokáže zpracovávat souběžně.

![PrusaSlicer 3.0 s díly rozmístěnými na několika podložkách pro MINI, CORE One L a XL](/content/images/2026/09/pod-tryskou-38-2026-prusaslicer-podlozky.webp)

Více projektů se otevírá v záložkách a program je průběžně zálohuje na disku. Přibývá také systém doplňků, které mohou třeba vytvořit geometrii přímo ve sliceru. **Komunitní tržiště doplňků je další plán, ne hotový obchod.** Za mě jsou samostatná nastavení podložek užitečná i s jedinou tiskárnou: varianty dílu z různých materiálů konečně zůstanou pohromadě.

Náhled ale ještě nemá všechny funkce řady 2.x a některé se mají vrátit až ve verzi 3.1. Instalace používá oddělený adresář s profily, takže může běžet vedle dvojkové řady. Pozor na cestu zpět: když projekt 3MF uložený ve trojce otevřeš ve dvojce, načte se geometrie, **ne jeho nastavení**. Původní soubor si proto nech stranou.

[Zdroj: Prusa Research, představení PrusaSliceru 3.0 Preview](https://blog.prusa3d.com/prusaslicer-3-0-preview-built-for-the-future-of-3d-printing_137672/)

## Zvednuté rohy můžeš řešit už v modelu, nejen lepidlem

U velkého plochého dílu někdy nepomůže ani čistý plát a široký brim, tedy pomocný lem kolem první vrstvy. Chladnoucí plast se smršťuje a tah se soustředí do rohů. Starší březnový návod týmu MakerWorld, na který teď znovu upozornil Hackaday, ukazuje méně obvyklou cestu: **rozdělit spodní plochu mělkými drážkami na menší úseky**. Není to nová funkce sliceru, ale praktický tip pro vlastní modelování.

![Náhled spodní strany modelu s kolmými drážkami tvořícími čtvercovou mřížku](/content/images/2026/09/pod-tryskou-38-2026-drazky-proti-krouceni.webp)

V ukázce mají drážky **šířku i hloubku 1 mm**, rozestupy 30–80 mm a zkosení pod úhlem 45°, aby nevznikaly nepodepřené převisy. Rozměry ber jako výchozí příklad, ne recept pro každý materiál a díl. Podobně může pomoct zaoblení spodních rohů nebo zesílení stěn jen kolem šroubů místo přidávání perimetrů úplně všude.

Má to i druhou stranu: zářezy a dutiny mění pevnost. U vysokého nebo zatíženého dílu si nemůžeš dovolit bez rozmyslu rozřezat nosné stěny. Nejdřív vyřeš přilnavost a průvan, pak upravuj geometrii tam, kde změna nevadí funkci součástky.

[Zdroj: MakerWorld na fóru Bambu Lab, návod proti kroucení výtisků](https://forum.bambulab.com/t/large-prints-say-goodbye-to-warping/240898)

## PLA ColorMix řeší odstíny průsvitností, ne dalšími desítkami špulek

Prusa Research **8. září uvedla Prusament PLA ColorMix**, sadu částečně průsvitných filamentů pro optické míchání barev. Samotný ColorMix už představila v květnu, novinka jsou teď materiály. Azurová, purpurová, žlutá, bílá a černá mají podle výrobce nabídnout 45 odstínů. Barvy se nemíchají v trysce: slicer střídá barevné vrstvy a jejich kombinaci pak vidíš jako další odstín.

![Tři tištěné rybky ukazují ColorMix se čtyřmi barvami, s přidanou černou a se třpytivými filamenty](/content/images/2026/09/pod-tryskou-38-2026-colormix-rybky.webp)

Oproti experimentům s obrazovými texturami z minulého vydání je tu zajímavá hlavně **průsvitnost samotného filamentu**. Má omezit viditelné pruhování a rozdíly mezi barvou svislé, šikmé a vodorovné plochy. Výrobce ukazuje srovnávací výtisky; není to můj vlastní test. Průsvitnost má i nevýhodu: u některých modelů může být vidět struktura výplně. Vedle ColorMixu proto vznikla také sytější, neprůsvitná varianta PLA CMYK.

![Barevné vzorky a prostorové výtisky ColorMix pro srovnání odstínů na různě skloněných plochách](/content/images/2026/09/pod-tryskou-38-2026-colormix-plochy.webp)

Za kilogram výrobce při uvedení uvádí **32,99 EUR včetně DPH**. Na celou pětibarevnou paletu potřebuješ systém schopný pracovat s pěti filamenty, se čtyřmi začneš bez černé. Pořád počítej s výměnami materiálu a podle tiskárny také s proplachováním. Více odstínů z méně špulek automaticky neznamená kratší tisk nebo nulový odpad.

[Zdroj: Prusa Research, materiály Prusament PLA ColorMix](https://blog.prusa3d.com/prusament-pla-colormix-print-45-color-shades-using-just-five-filament-spools-and-more_137835/)

## Stará špulka PETG ještě nemusí být na vyhození

Maya Posch v autorském článku z **1. září** zkusila čiré PETG Reprapper koupené v březnu 2023. Část času leželo na držáku tiskárny, pak v uzavřeném sáčku. Bez předchozího sušení z něj na Elegoo Neptune 4 vytiskla články kabelového řetězu. Podle jejího popisu šly zacvaknout bez lámání a po krátkém počátečním vytékání materiálu tisk proběhl normálně.

![Čiré články kabelového řetězu, které Maya Posch vytiskla ze starší špulky PETG](/content/images/2026/09/pod-tryskou-38-2026-petg-kabelovy-retez.webp)

**Je to zkušenost s jednou špulkou, ne důkaz, že PETG nepotřebuje sušit.** I PETG přijímá vlhkost a výsledek záleží na skladování, konkrétní směsi a nastavení. U starší role dává smysl nejdřív zkusit malý výtisk a při prskání, bublinách nebo horším povrchu ji vysušit podle doporučení výrobce. Datum nákupu samo o sobě není důvod vyhodit materiál, ze kterého pořád vznikají použitelné díly.

[Zdroj: Maya Posch na Hackaday, vlastní zkouška staršího PETG](https://hackaday.com/2026/09/01/petg-the-pla-filament-alternative-that-just-works/)
