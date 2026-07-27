---
title: "Pod tryskou 31/2026: TopoSaic, PA11 na ozubená kola a rychlejší barevný tisk"
pubDate: "2026-07-27T05:00:00.000Z"
description: "TopoSaic skládá krajinu do tisknutelného puzzle, Prusament PA11 míří na namáhané pohyblivé díly a nový způsob barevného tisku omezuje počet změn filamentu."
tags: ["Newsletter"]
heroImage: "/content/images/2026/07/pod-tryskou-31-2026-hero.webp"
---

# Pod tryskou 31/2026: TopoSaic, PA11 na ozubená kola a rychlejší barevný tisk

Tenhle týden vede TopoSaic, čerstvý otevřený nástroj, který z libovolného místa udělá tisknutelné topografické puzzle. Vedle něj tu mám čistý PA11 pro namáhané díly, chytřejší barevný tisk a dvě pěkné ukázky, kde komunita vzala výrobu do vlastních rukou.

Výběr je tentokrát kratší. Radši šest konkrétních věcí než osm vycpávek z medicíny, stavebnictví a Kickstarteru.

---

## TopoSaic promění kus krajiny v tisknutelné puzzle

TopoSaic je nový otevřený program, ve kterém si vybereš místo na mapě a složíš z něj reliéfní puzzle. Umí přidat silnice, budovy, trasy z GPX nebo KML, rámeček i držák na zeď. Výsledek vyexportuje jako STL nebo 3MF.

3MF je proti obyčejnému STL praktičtější balíček. Kromě geometrie umí přenést také barvy a další informace pro slicer. TopoSaic připraví barevné přiřazení pro Bambu Studio a OrcaSlicer, takže les, voda, skály nebo cesty nemusíš znovu ručně malovat.

Projekt běží lokálně na počítači, má verze pro Windows, macOS i Linux a zdrojový kód pod licencí Apache 2.0. Za mě parádní kombinace map, 3D tisku a dárku, který může být opravdu osobní.

[Zdroj: TopoSaic na GitHubu](https://github.com/theatrus/toposaic)

---

## Prusament PA11 Natural míří na ozubená kola a pohyblivé díly

Prusa Research uvedla Prusament PA11 Natural bez karbonové výplně. Čistý PA11 má podle výrobce dobrou soudržnost vrstev, odolnost proti nárazu a nízké tření. To dává smysl pro ozubená kola, kluzné díly, panty nebo součástky, které se opakovaně ohýbají.

Není to ale špulka, kterou jen hodíš vedle Průši a pustíš profil na PLA. PA11 silně nasává vlhkost, před tiskem chce sušení při 90 °C po dobu 6 až 8 hodin a uzavřenou tiskárnu. Prusa Research doporučuje aktivní filtraci nebo dobře větranou místnost, protože při tisku polyamidu vzniká zápach a ultrajemné částice.

Po správném žíhání při 110 °C výrobce uvádí teplotní odolnost 122,5 °C. Žíhání je řízené zahřátí hotového výtisku, které změní vnitřní strukturu plastu. Cena je 107 eur za 800 gramů, takže za mě jde o materiál na konkrétní funkční díl, ne na krabičku k Arduinu.

[Zdroj: Prusa Research](https://blog.prusa3d.com/prusament-pa11-natural-material-with-extreme-mechanical-and-chemical-resistance_137458/)

---

## Barevný tisk s menším počtem změn filamentu

YKG3D ukázal slicer založený na výzkumu z roku 2018, který skládá barevný povrch jinak než běžné střídání filamentu v každém detailu. Základní barvy pravidelně rotují po vrstvách a jejich viditelnost upravuje množství vytlačeného materiálu nebo posun hran. Výsledkem mohou být plynulejší přechody s menším počtem výměn.

Má to háček. Když tiskneš třemi barvami při výšce vrstvy 0,2 mm, barevný vzor se opticky opakuje po 0,6 mm. Na strmých stěnách se navíc míchání barev začne rozpadat. Není to náhrada za plnobarevnou průmyslovou tiskárnu, ale chytrý způsob, jak ze známého hardwaru vytáhnout něco navíc.

Pro běžný multifilamentový tisk je zajímavý hlavně nižší počet změn. Každá změna znamená čas a u systémů s jednou tryskou často také odpad při proplachování. Pokud se tenhle přístup dostane do normálně použitelného sliceru, může zrychlit dekorativní tisky bez dalšího bazmeku na tiskárně.

[Zdroj: YKG3D na YouTube](https://www.youtube.com/watch?v=B5cvfSPWjlU)

---

## Printed Solid se přejmenoval na Prusa USA

Americký Printed Solid, který Prusa Research koupila v roce 2022, se nově jmenuje Prusa USA. Podle Tom's Hardware jde zatím hlavně o sjednocení názvu. Běžný provoz firmy se nemění a Josef Průša zůstává ředitelem obou společností.

Zajímavější než nové logo je zázemí v Delaware. Firma má ve své hale kopii tiskové farmy a vyrábí tam tiskárny i filament. Stroje zatím nejsou kompletně americké, část dílů pořád přichází z Prahy.

Pro českého hobby tiskaře se přes noc nic nemění. Je to ale jasný signál, že Prusa Research nechce v USA jen prodávat krabice dovezené z Evropy. Buduje tam vlastní výrobu a servisní zázemí, což dává větší smysl než další marketingová vlaječka na webu.

[Zdroj: Tom's Hardware](https://www.tomshardware.com/3d-printing/delawares-printed-solid-rebrands-to-prusa-usa)

---

## Levný senzor proudění podzemní vody vzniká na 3D tiskárně

Purdue University staví senzor, který měří pohyb podzemní vody pomocí tepla. Místo jednoho drahého komerčního přístroje kombinuje desky plošných spojů, tištěné součástky a díly zpracované v upravené malé troubě. Jeden kus má stát několik stovek dolarů.

První prototypy podle univerzity pracovaly pod vodou nepřetržitě sedm až osm měsíců. Data posílají přes LoRa, tedy úspornou bezdrátovou síť s dlouhým dosahem, a zároveň je ukládají lokálně pro případ výpadku spojení.

Purdue projekt označuje jako open-source alternativu, ale veřejné výrobní podklady jsem zatím nenašel. Bral bych to tedy hlavně jako dobrou ukázku levné lokální výroby přístroje, ne jako hotový víkendový návod ke stažení.

[Zdroj: Purdue University](https://ag.purdue.edu/news/2026/07/purdue-researchers-use-3d-printing-to-make-open-source-alternative-to-costly-groundwater-sensors.html)

---

## Companion Cube pro Steam Machine si můžeš vytisknout doma

Dbrand zrušil svůj kryt Steam Machine ve stylu Companion Cube z Portalu, protože neměl licenci od Valve. Uživatel Jaron pak podle obrázků navrhl vlastní neoficiální verzi a zveřejnil ji na Printables.

Není to jeden velký barevný tisk. Kryt zvládne tiskárna s jedním extruderem, když umí pozastavit tisk kvůli výměně filamentu. Ke složení ale potřebuješ také šroubky, závitové vložky, magnety a páječku. Autor přidal seznam dílů, montážní postup i videa.

Jediný velký otazník je chlazení. Autor uvádí, že nezakryl původní průduchy, ale rozsáhlé teplotní testy ještě neudělal. Model je tedy pěkný projekt pro člověka, kterého baví Portal a stavba počítačů, ne bezmyšlenkovitý kryt typu vytiskni a zapomeň.

[Zdroj: Tom's Hardware](https://www.tomshardware.com/3d-printing/3d-printing-enthusiast-resurrects-cancelled-dbrand-steam-machine-companion-cube-as-diy-project-project-shelved-due-to-copyright-can-now-be-made-and-assembled-at-home)
