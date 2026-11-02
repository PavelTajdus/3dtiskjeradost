---
title: "Pod tryskou 45/2026: hasiči tisknou držáky a kalkulačka překlápí číslice"
pubDate: "2026-11-02T05:00:00.000Z"
description: "Pražští hasiči tisknou vybavení na míru, Flapulator počítá s překlápěcími číslicemi, Kelcite upravuje modely v prohlížeči, Spooletarium rozhýbe planety a tištěný most rozšíří LEGO kolejiště."
tags: ["Newsletter"]
heroImage: "/content/images/2026/11/pod-tryskou-45-2026-hero.webp"
---

# Pod tryskou 45/2026: hasiči tisknou držáky a kalkulačka překlápí číslice

U pražských hasičů mě zaujalo, kolik drobností si na stanici tisknou sami. K tomu kalkulačka s překlápěcími číslicemi a planetárium na prázdné špulce. U kalkulačky počítejte s pájením, u planetária hlavně se skládáním ozubených kol.

---

## Pražští hasiči si tisknou držáky i pomůcky pro kontrolu výstroje

Na pražské centrální hasičské stanici tisknou **držáky vybavení, dveřní klíny a záslepky pro zkoušení těsnosti suchých obleků**. Podle reportáže Prusa Research začal s tiskem hasič Lukáš, který měl tiskárnu už doma. Po návštěvě výrobce dostala stanice tiskárnu do pilotního provozu a dnes používá CORE One L.

![Černý přístroj v oranžovém držáku vedle tlakové láhve ve výbavě hasičského vozidla](/content/images/2026/11/pod-tryskou-45-2026-hasici.webp)

Tisknou i držáky seker, mopů a stěrek. Díly dělají převážně oranžové, aby byly mezi vybavením dobře vidět. Na každé směně mají proškoleného člověka, který se o tisk stará.

**Hasiči podle reportáže výtisky před nasazením zkoušejí**, včetně vystavení teplu a plameni ve výcvikovém kontejneru. Z čeho ty díly tisknou a jak přesně je zkoušejí, nevím. To v reportáži není.

[Zdroj: Prusa Research, reportáž z pražské hasičské stanice](https://blog.prusa3d.com/how-firefighters-use-3d-printing-to-save-lives-time-and-money_138620/)

---

## Flapulator počítá s překlápěcími číslicemi

**Applepie postavil Flapulator**, kalkulačku se šesti mechanickými pozicemi displeje a ručně zapojenou klávesnicí. Číslice se překlápějí na malých destičkách podobně jako na starých letištních tabulích. Výpočet obstarává Raspberry Pi Pico 2, každou pozicí otáčí servo a výchozí polohu zjišťuje magnetické čidlo.

![Černá kalkulačka Flapulator s mechanickým displejem a velkými klávesami na vzorovaném koberci](/content/images/2026/11/pod-tryskou-45-2026-flapulator.webp)

Autor uvádí přibližně **350 g PLA a 13 hodin tisku na Bambu Lab P1S**. Dvoubarevné destičky a popisky kláves vyžadují výměnu filamentů během tisku. Díly navrhl bez podpěr a pro podložku alespoň 205 × 150 mm. K tomu vás čeká sestavení mechanismů, pájení a nahrání programu.

Líbí se mi, že autor dal ven zapojení, kód i STL a STEP soubory. U každé číslice popisuje také kontrolu volného pohybu destiček a případné dobroušení. Je to projekt z dubna, návod je pořád dostupný.

[Zdroj: Applepie, vlastní návod ke stavbě Flapulatoru](https://www.instructables.com/Flapulator-Pi-Centric-Fully-3D-Printable-and-World/)

---

## Kelcite přidává modelům chlupy v prohlížeči

Maker's Muse ukázal **Kelcite**, aplikaci na úpravu 3D modelů v prohlížeči. Zaujala ho hlavně funkce Hair, která na model přidává chlupy. Na úvodní obrazovce aplikace si můžete otevřít demonstrační scénu a podívat se na jednotlivé nástroje, aniž byste nejdřív sháněli vlastní model.

V ukázkové scéně si můžete projít i přidávání textu, kombinování objektů, opravu sítě a rozdělení modelu. Pracujete s ploškami, které tvoří povrch třeba staženého STL.

Maker's Muse v popisu videa upozorňuje na chyby aplikace. Jak spolehlivě z ní dostanete složitější model připravený k tisku, nevím. Na první pokus bych vzal malý soubor a výsledek zkontroloval ve sliceru.

[Zdroj: Kelcite, aplikace a demonstrační scéna](https://kelcite.app/) a [Maker's Muse, ukázka funkce Hair](https://www.youtube.com/watch?v=MbTFubw-354).

---

## Spooletarium rozhýbe šest planet na prázdné špulce

M4NU zveřejnil **Spooletarium**, mechanický model sluneční soustavy postavený na prázdné špulce od Prusamentu. Klikou poháníte osmnáct ozubených kol a nad nimi obíhá šest planet od Merkuru po Saturn. Převody přibližují poměry skutečných oběžných dob, takže se každá planeta pohybuje jinou rychlostí.

Autor připravil verzi pro klasickou špulku i pro novější variantu s NFC. Doporučuje PLA, trysku 0,4 mm a vrstvy nejvýš 0,20 mm. Na stránce je obrázkový postup sestavení a také přehled převodů pro jednotlivé planety.

Projekt pochází z jara. Při stahování verze pro klasickou špulku si pohlídejte **opravenou konstrukční desku z 20. května**. Autor u původní varianty opravoval chybu a uvádí i náhradní díl pro lidi, kteří už ji vytiskli.

[Zdroj: M4NU, Spooletarium a montážní postup na Printables](https://www.printables.com/model/1700026-spooletarium-mechanical-solar-system)

---

## Tištěný most pro LEGO vlaky potřebuje mírnější nájezd

Autor vlastní stavby na Hackaday navrhl most pro LEGO koleje včetně samotných kolejnic. Jednotlivé díly tiskl po úhlopříčce podložky, aby mohly být delší. Sedmidílná sestava měří téměř dva metry a **pod mostem vede další kolej**. Oblouky a sloupky navrhl tak, aby většinu konstrukce vytiskl bez podpěr.

![Dlouhý tištěný železniční most s oblouky a barevným přechodem od černé přes červenou k fialové](/content/images/2026/11/pod-tryskou-45-2026-most.webp)

Při jízdě ale narazil na sklon **10 stupňů** a příliš prudké přechody mezi rovinou a nájezdem. Některé lokomotivy nezvládaly vytáhnout více než jeden vagón, delší vozy vykolejovaly a nízko umístěná část jedné lokomotivy narážela do spojky kolejí. S vybranou soupravou a vhodně poskládanou tratí most fungoval, podjezd nedělal problémy.

Autor by příště zmenšil sklon a výrazně vyhladil nájezdy. Nájezd bych vytiskl jako první a zkusil ho s nejdelším vagónem. Celý postup najdete v jeho březnovém článku.

[Zdroj: původní stavitel, návrh a jízdní zkoušky mostu na Hackaday](https://hackaday.com/2026/03/16/how-i-3d-printed-my-own-lego-compatible-train-bridges/)
