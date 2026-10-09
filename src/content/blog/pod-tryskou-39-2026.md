---
title: "Pod tryskou 39/2026: rádio s ohýbanou mřížkou a výlet vytištěný z GPS"
pubDate: "2026-09-21T05:00:00.000Z"
description: "Mřížku rádia můžete vytisknout naplocho a vytvarovat za tepla. K tomu FreeCAD 1.1, mapa vlastní trasy z TrailPrint3D a nylon z odpadního prášku MJF."
tags: ["Newsletter"]
heroImage: "/content/images/2026/09/pod-tryskou-39-2026-hero.webp"
---

# Pod tryskou 39/2026: rádio s ohýbanou mřížkou a výlet vytištěný z GPS

U tištěného rádia mě zaujal postup s mřížkou reproduktoru. Autor ji nejdřív tiskl rovnou zakřivenou, pak zkusil plochý výtisk ohnout za tepla. Docela pěkný nápad i pro jiné kryty.

---

## Mřížka rádia vytištěná naplocho a ohnutá za tepla

Zion Brock postavil přehrávač v tištěném retro rádiu. Původní zakřivená mřížka se tiskla **sedm hodin** a potřebovala spoustu podpěr. Pak ji vytiskl naplocho, nahřál a vytvaroval přes formu. Tomuhle se říká tvarování za tepla: plast změkne a po vychladnutí drží nový tvar.

![Retro rádio se zaoblenou skříní, tmavou mřížkou reproduktoru a kovovým knoflíkem na dřevěném stole](/content/images/2026/09/pod-tryskou-39-2026-radio.webp)

První pokusy mu protáhly otvory v mřížce. Upravil proto vzor, hustotu výplně i formu a přidal přítlačný prstenec. Později zkusil místo horkovzdušné pistole **vodu o 70 °C**. Ani tam to napoprvé nevyšlo, měknul mu i okraj, který měl držet díl na místě. Na webu popisuje obě varianty i nepovedené pokusy.

Líbí se mi, že je u toho vidět celý postup. Jestli máte podobný tenký kryt, můžete zkusit plochý výtisk a vlastní formu. Počítejte ale s tím, že při ohýbání se mění rozměry otvorů. A se sedmdesátistupňovou vodou opatrně, autor používá tepelně odolné rukavice.

[Zdroj: Zion Brock, vývoj tištěného rádia a tvarování mřížky](https://www.zionbrock.com/radio-journey)

---

## FreeCAD 1.1 ukáže úpravu dílu ještě před potvrzením

FreeCAD v březnu vydal verzi 1.1. Při modelování přidala průsvitné náhledy a ovládací prvky přímo u modelu. Při úpravě můžete sledovat změnu na dílu a upravit rozměry tažením ovládacích prvků. Nástroj Clarify Selection zase dočasně zprůhlední okolní geometrii, abyste vybrali hranu schovanou za jinou plochou.

![Model montážního úhelníku s otvory a žebry, kolem kterého FreeCAD zobrazuje ovládací prvky úpravy](/content/images/2026/09/pod-tryskou-39-2026-freecad.webp)

V sestavách přibyla simulace pohybu spojů, animace a seznam součástek. Můžete tak ještě před tiskem prohlédnout, jak se jednotlivé díly vůči sobě pohybují. FreeCAD zůstává zdarma a s otevřeným zdrojovým kódem. Nové náhledy by se mohly hodit při kreslení držáků nebo krabiček. Nezkoušel jsem je, takže zatím nevím, jak se s nimi pracuje.

[Zdroj: FreeCAD, poznámky k vydání 1.1](https://freecad.github.io/Website/download/releases/1-1/)

---

## TrailPrint3D: mapa vašeho výletu z GPX souboru

TrailPrint3D je doplněk do Blenderu. Načtete **GPX**, tedy soubor se zaznamenanou trasou třeba z Komootu nebo Garminu, a program k ní stáhne výšková data. Z nich vytvoří terénní model s trasou, který můžete poslat do sliceru. Na webu jsou skutečné výtisky s horami, vodou a barevně vyznačenou cestou.

![Tištěná terénní mapa s horskými hřebeny, modrými vodními plochami a červenou trasou vedoucí údolím](/content/images/2026/09/pod-tryskou-39-2026-trailprint3d.webp)

Základní verze je zdarma. Umí také jednobarevný model, takže kvůli tomu nepotřebujete systém na výměnu filamentů. Nastavíte si měřítko, zvýraznění výšek i tloušťku základny. Skládání více tras do jedné mapy nebo rozdělení velké mapy na více tiskových dílů patří do placené verze. Jako památka na vlastní výlet se mi to docela líbí.

[Zdroj: TrailPrint3D, doplněk a ukázky výtisků](https://trailprint3d.com/)

---

## Filamentive rPA12: nylon z odpadního prášku

Filamentive s 3devo vyrábí **rPA12 z odpadního nylonového prášku MJF**. MJF je průmyslový tisk z práškového plastu. Část nezpracovaného prášku časem přestane vyhovovat dalšímu tisku. Tady z něj udělají filament pro běžný extruder. Výrobce uvádí stoprocentní podíl tohoto recyklovaného prášku, průměr 1,75 mm a kilogramovou špulku.

![Béžový filament Filamentive rPA12 na kartonové cívce](/content/images/2026/09/pod-tryskou-39-2026-rpa12.webp)

V technickém listu jsou i podmínky tisku: **tryska 265 °C, podložka 105–110 °C a komora 55 °C**. Před tiskem doporučuje dvě hodiny sušení při 55 °C. Takže pokud chcete zkusit recyklovaný nylon na funkční díly, nejdřív porovnejte tyhle teploty s tím, co zvládne vaše tiskárna. Materiál jsem nezkoušel.

[Zdroj: Filamentive, představení rPA12](https://www.filamentive.com/worlds-first-nylon-filament-made-from-recycled-mjf-waste) a [technický list rPA12](https://www.filamentive.com/wp-content/uploads/2026/02/TDS_rPa12-filament_3devo.pdf)
