---
title: "Pod tryskou 35/2026: průtok hotendu bez hádání a banjo s balónkem"
pubDate: "2026-08-24T05:00:00.000Z"
description: "MeltCalc porovnává průtok 95 hotendů, nafukovací banjo ukazuje chytré spoje a The Next Layer otestoval 16 praktických tištěných nástrojů."
tags: ["Newsletter"]
heroImage: "/content/images/2026/08/pod-tryskou-35-2026-hero.webp"
---

# Pod tryskou 35/2026: průtok hotendu bez hádání a banjo s balónkem

Tenhle týden vede nástroj, který se snaží nahradit marketingová čísla o průtoku hotendů výpočtem. K tomu mám nafukovací hudební nástroj, praktický test tištěných pomůcek a dvě skutečně dostupné tiskárnové novinky.

Výběr má pět položek. Zbytek kandidátů byl hlavně z medicíny, kovového tisku, firemních sporů a 3D skenování. To do hobby FDM newsletteru cpát nebudu.

---

## MeltCalc počítá, co hotend a filament opravdu zvládnou

MeltCalc porovnává **95 hotendů od 25 výrobců a 36 materiálů** v osmi skupinách. Zadáš hotend, materiál a průměr trysky a dostaneš odhad udržitelného objemového průtoku, potřebného výkonu topení, doby pobytu plastu v tavicí zóně i rychlosti tisku. Počítá také s delšími CHT tryskami, které vedou teplo blíž ke středu filamentu.

Objemový průtok říká, kolik krychlových milimetrů plastu hotend roztaví za sekundu. Právě tenhle údaj často určí skutečný rychlostní limit dřív než motory nebo firmware. Autor Robert Samples staví výpočty na termodynamickém modelu a zveřejnil i teorii, zdrojový kód a stránku s validací.

Pořád je to model, ne náhrada vlastního flow testu s konkrétní špulkou. Za mě je ale užitečnější než slepě věřit jednomu číslu z krabice. Hlavně když vybíráš nový hotend nebo zkoušíš, proč PLA stíhá a technický materiál už při stejné rychlosti ne.

[Zdroj: MeltCalc](https://meltcalc.baconmilkshake.com/)

---

## Banjo s balónkem si naladíš vlastním dechem

Co:Creation Lab postavil malý čtyřstrunný nástroj, jehož ozvučnici tvoří obyčejný nafukovací balónek. Kobylka přenáší chvění strun přímo do vzduchu uvnitř. Když balónek přifoukneš nebo upustíš, změní se rezonance a tím i zvuk.

Zajímavější než samotné banjo je konstrukční zadání: rodič ho má složit společně s dítětem. Projekt má 19 tištěných dílů v sedmi STL souborech, nepoužívá lepidlo ani kovové šrouby a plastové šrouby jdou utáhnout prsty. Autor omezil i zacvakávací spoje, protože síla, která dospělému připadá malá, může být pro šestileté dítě moc.

Tohle je pěkná ukázka, že dobrý model nevzniká jen podle toho, co jde vytisknout. Musí dávat smysl i člověku, který ho bude skládat, opravovat a používat.

[Zdroj: Hackaday.io](https://hackaday.io/project/206413-balloon-banjo-a-tunable-resonator-you-inflate)

---

## Šestnáct tištěných nástrojů, ale ne všechny stojí za filament

The Next Layer vytiskl a zkusil 16 pomůcek. Fungoval třeba kopírovací přípravek na obkreslení profilu, magnetický hledač kovových profilů ve stěně, jednoruční držák sond multimetru nebo dvoustupňový cyklonový odlučovač prachu. U záchranného bloku pro utržený support zase můžeš odlomit výšku, kterou tisk právě potřebuje, a přilepit blok na podložku.

Test ukázal i limity. Polohovací nůžkový zvedák se při prvním pokusu zlomil, protože brim spojil pohyblivé části. Dvojnásobná verze fungovala až po úpravě postupu. Přípravek pro řezání šroubů nešel vyzkoušet kvůli chybějící variantě pro běžný nástavec a tištěná pásová bruska měla slabý návod i pochybné uchycení vrtačky.

Za mě je pointa přesně v tomhle. Model s tisíci staženími ještě nemusí být dobrý nástroj. Než do něj pošleš půl kila filamentu, zkontroluj orientaci vrstev, potřebné železo, návod a komentáře lidí, kteří ho opravdu postavili.

[Zdroj: The Next Layer](https://www.youtube.com/watch?v=vFtwbc8nUBg)

---

## Prusa Research začala odesílat běžné sady INDX

Prusa Research začala posílat první standardní konverzní sady Bondtech INDX a znovu otevřela objednávky upgradu. Nově jde objednat také celou CORE One+ (Gen 2) s INDX, jako stavebnici nebo sestavenou tiskárnu se čtyřmi či osmi nástroji. Tohle tedy není další teaser, objednávky jsou otevřené a první sady opouštějí výrobu.

Každý nástroj má vlastní materiál a trysku. Výměna podle výrobce trvá kolem 12 sekund a primování spotřebuje asi 13 miligramů plastu, takže systém nepotřebuje klasickou čistící věž. Můžeš kombinovat barvy, pevný materiál s TPU, rozpustné podpěry nebo různé průměry trysek.

Prusa Research zároveň upřesnila omezení povrchově kalených trysek, o kterém jsem psal už dřív. Pro běžné neabrazivní materiály je doporučuje bez omezení. U karbonových, skleněných a silně svítících filamentů počítej s rychlejším opotřebením, plně kalená náhrada zatím hotová není.

[Zdroj: Prusa Research](https://blog.prusa3d.com/prusa-core-one-gen-2-indx-shipping-has-started-complete-printers-open-for-orders_137623/)

---

## Creality zmenšila čtyřbarevný systém pro SPARKX i7 Nano

Creality začala 15. srpna prodávat v americkém obchodě SPARKX i7 Nano s kompaktním systémem CFS nano. Jednotka sedí nahoře na tiskárně, přepíná až čtyři barvy a má dva motory, jeden pro volbu kanálu a druhý pro podávání a zatahování filamentu. Podle výrobce funguje i se staršími stroji řady i7.

Tiskový prostor má 260 × 260 × 255 mm, kalená tryska zvládá až 300 °C a Creality uvádí maximální rychlost 500 mm/s. Kamera má rozlišení 720p a má hlídat špagety nebo tisk naprázdno. Cena 299 dolarů pochází z amerického trhu, českou cenu ani dostupnost z toho zatím odvozovat nejde.

Líbí se mi snaha nacpat automatické přepínání barev do menšího prostoru. Čísla o rychlosti a automatickém rozpoznání chyb ale beru jako údaje výrobce, dokud se mašina neukáže v normálních nezávislých testech.

[Zdroj: 3D Printing Industry](https://3dprintingindustry.com/news/creality-launches-sparkx-i7-nano-technical-specifications-and-pricing-253938/)
