---
title: "Pod tryskou 28/2026: robotický vysavač, INDX držák a keramika z tiskárny"
pubDate: "2026-07-06T05:00:00.000Z"
description: "Tenhle týden vede otevřený robotický vysavač OOMWOO s tištěným šasi, k tomu CAD podklady pro Fitbit Air, praktický držák INDX senzoru, schovaný herní počítač ve ventilátoru a dvě pěkné keramické ukázky."
tags: ["Newsletter"]
heroImage: "/content/images/2026/07/pod-tryskou-28-2026-hero.webp"
---

# Pod tryskou 28/2026: robotický vysavač, INDX držák a keramika z tiskárny

Tenhle týden je výběr trochu víc makerský než produktový. A za mě je to dobře. Místo dalšího teaseru na tiskárnu, která už se mezitím normálně prodává, tu máme robotický vysavač, držák senzoru, šílený počítač ve ventilátoru a pár ukázek, kde 3D tisk dává smysl mimo klasickou dílnu.

Nebudu z toho dělat, že všechno je okamžitě víkendový projekt. Některé věci jsou spíš inspirace. Ale jsou to konkrétní věci, ne jen marketingová mlha.

---

## OOMWOO je otevřený robotický vysavač s tištěným šasi

Maker’s Pet rozjíždí OOMWOO, otevřený robotický vysavač, který si máš postavit sám. Základ tvoří Raspberry Pi, ROS 2, 2D LiDAR, lokální napojení na Home Assistant a 3D tištěné šasi.

LiDAR je zjednodušeně senzor, který měří vzdálenost laserem a pomáhá robotu kreslit mapu místnosti. ROS 2 je robotický software, na kterém se často staví navigace a řízení podobných projektů. Tady je důležité hlavně to, že vysavač nemá stát na povinném cloudu a uzamčené aplikaci výrobce.

Zatím to není hotový návod typu vytiskni, sešroubuj a vysávej. Autor píše o build-in-public projektu, takže se to bude postupně dokumentovat. Ale směr je parádní: domácí spotřebič, kterému rozumíš, můžeš ho opravit a šasi si vytiskneš místo toho, abys čekal na plastový díl z druhého konce světa.

[Zdroj: Maker’s Pet](https://makerspet.com/blog/building-an-open-source-robot-vacuum-meet-oomwoo/)

---

## Google pustil CAD podklady pro Fitbit Air doplňky

Google zveřejnil technické rozměry a 2D CAD výkresy pro Fitbit Air, aby si lidi mohli navrhovat vlastní pásky a doplňky. U wearables je tohle docela důležité, protože nestačí jen trefit tvar. Musí sedět kontakt se senzory, síla zacvaknutí a materiál, který nebude dělat neplechu na kůži.

CAD je zkratka pro návrhová data. Nemusí to hned znamenat hotové STL na tisk. Často je to spíš přesná technická mapa, podle které si uděláš vlastní model. Pro 3D tisk je to ale pořád lepší start než měřit všechno šuplerou a pětkrát tisknout nepřesný prototyp.

Za mě je fajn, když velký výrobce aspoň trochu otevře rozměry příslušenství. Neznamená to automaticky otevřený hardware, ale pro komunitní držáky, pásky a adaptéry je to praktický krok.

[Zdroj: Engadget](https://www.engadget.com/2186347/google-fitbit-air-blueprint-measurements-accessories/)

---

## INDX senzor dostal jednoduchý držák na 2020 profil

Na Printables se objevil držák pro INDX filament senzor na 2020 hliníkový profil. To je přesně ten typ malé úpravy, která na první pohled nevypadá sexy, ale v reálné dílně umí ušetřit dost nadávání.

INDX je Prusa multi tool systém, kde se u Core One pracuje s více nástroji. Filament senzor hlídá, jestli materiál opravdu prochází tam, kde má. Když chceš mít špulky za tiskárnou, na zdi nebo mimo původní pozici, začneš řešit úhel bowdenu, délku kabelu a kam ten senzor vůbec dát.

Autor přidal víc úhlů držáku a počítá s montáží na běžný 2020 profil. Žádná věda, žádný hype. Jen praktický díl pro lidi, kteří si chtějí uspořádat filament po svém.

[Zdroj: Printables](https://www.printables.com/model/1767467-indx-filament-sensor-2020-extrusion-mount)

---

## Herní PC schované ve stojanovém ventilátoru je krásná blbost

Zac Builds rozebral mini počítač AtomMan G7 a schoval ho do stojanového ventilátoru Dreo. 3D tištěné díly drží hardware na místě a samotný ventilátor se stará o proudění vzduchu. Tom’s Hardware uvádí, že ventilátor tlačí vzduch rychlostí 28 stop za sekundu, tedy zhruba 8,5 metru za sekundu.

Není to návod, jak má vypadat normální stavba PC. Je to spíš ukázka toho, že 3D tisk umí propojit věci, které výrobce nikdy nespojil. Kryt, držák, distanční díl, vedení kabelu, přesně tady tisk funguje výborně.

A zároveň pozor: elektřina, prach, vibrace a teplo nejsou sranda. Pokud něco podobného zkoušíš, chce to myslet na izolaci, proudění vzduchu a to, aby se ti z ventilátoru nestal drahý mixér na kabely.

[Zdroj: Tom’s Hardware](https://www.tomshardware.com/3d-printing/enthusiast-hides-gaming-pc-inside-living-room-fan-using-3d-printed-parts-disassembled-atomman-g7-cooled-by-dreo-tower-fan-that-shifts-air-at-28-feet-per-second)

---

## Queen’s University řeší otevřenou protézu nad loket

Studenti z Queen’s University pracují na 3D tištěné protéze pro amputaci nad loktem. Důležitý detail: nejde o drahou robotickou ruku plnou elektroniky, ale o mechanický systém, který má fungovat i v prostředí, kde je servis a náhradní díly problém.

Tým spolupracuje s Burma Children Medical Fund v Thajsku, poblíž hranice s Myanmarem. Podle Queen’s měli dostupné otevřené návrhy pro jednodušší protézy, ale chybělo řešení pro pacienty nad loktem. Tam už musíš řešit pohyb lokte a ruky najednou, a to bez motorů není žádná maličkost.

Pro běžného tiskaře z toho neplyne „vytiskni si doma zdravotnický díl a hotovo“. Tohle patří do rukou lidí, kteří tomu rozumí. Ale jako ukázka open-source přístupu a tisku v místě, kde drahá komerční řešení nedávají smysl, je to hodně silné.

[Zdroj: Queen’s Gazette](https://www.queensu.ca/gazette/stories/queen-s-students-develop-3d-printed-prosthetics)

---

## Studio RAP obložilo trafostanici 322 tištěnými keramickými dlaždicemi

Studio RAP ukázalo Powerwall, fasádu nizozemské trafostanice z 322 zakázkových 3D tištěných keramických dlaždic. Není to domácí FDM, ale robotický tisk keramiky a architektura. Přesto je na tom pěkně vidět jedna věc: 3D tisk nemusí dělat jen finální objekt, ale i celý jazyk povrchu.

Každá dlaždice může mít jiný tvar a dohromady vytvoří vzor, který by se klasickou výrobou dělal mnohem hůř. U keramiky navíc zůstává vidět vrstvení materiálu, takže tisk není schovaný. Naopak, je to součást vzhledu.

Pro hobby svět je to spíš inspirace než návod. Ale pokud někdy tiskneš formy, razítka, textury nebo dekorativní panely, princip je podobný: největší síla není v tom, že vyrobíš jednu věc. Síla je v tom, že každá věc může být trochu jiná.

[Zdroj: Studio RAP](https://studiorap.nl/Powerwall)

---

## Minimal Matter nechává terakotu zarůstat životem

Rameshwari Jonnalagedda vytvořila Minimal Matter, systém 3D tištěných terakotových modulů inspirovaný minimálními plochami. Minimální plocha je tvar, který se snaží mít co nejmenší povrch při daném okraji, podobně jako mýdlová blána. V praxi z toho vznikají organické duté tvary, které umí pracovat se světlem, vzduchem a povrchem.

Zajímavé je, že cílem není dokonale hladký a mrtvý objekt. Naopak. Moduly mají časem hostit mech, hmyz a drobný život. Tisková vrstva zůstává vidět a terakota se nechová jako plastový prototyp, ale jako materiál, který patří ven.

Za mě je to hezká připomínka, že 3D tisk není jen přesnost a rychlost. Někdy jde o geometrii, kterou jinak rozumně nevyrobíš, a o materiál, který se časem mění. To je u tisku keramiky mnohem zajímavější než další render „domu z tiskárny“.

[Zdroj: 3D Printing Industry](https://3dprintingindustry.com/news/rameshwari-jonnalagedda-builds-3d-printed-terracotta-modules-designed-to-be-colonized-by-nature-252711/)
