---
title: "Pod tryskou 26/2026: PLA Pure, Snapmaker U1, 3D skenování a modely od NASA"
pubDate: "2026-06-22T05:00:00.000Z"
description: "Tenhle týden: Bambu Lab PLA Pure s certifikacemi k emisím, tištěné airbrush šablony od Prusa Research, Hi3D pro tisknutelnější AI modely, Snapmaker U1 v EU akci, levnější 3D skener, pedálový drtič odpadu a veřejný archiv 3D modelů od NASA."
tags: ["Newsletter"]
heroImage: "/content/images/2026/06/pod-tryskou-26-2026-hero.webp"
---

Tenhle týden mám mix věcí pro domácí tisk a dílnu: filament s důrazem na nižší emise, šablony na airbrush, AI modely pro 3D tisk, čtyřhlavý Snapmaker U1, levnější 3D skenování, drtič plastového odpadu a jeden pěkný archiv modelů od NASA.

Beru to prakticky. Co se dá použít, co je zatím hlavně slib, a kde má smysl se na to aspoň podívat.

---

## Bambu Lab PLA Pure míří na tisk v bytě

Bambu Lab uvedlo PLA Pure. Zajímavé nejsou barvy, ale certifikace. Výrobce uvádí UL GREENGUARD 2904 pro nízké emise při tisku, EN 71 pro dětské hračky a suroviny s food-contact certifikací.

U domácího tisku tohle dává smysl sledovat. Když tiskneš v pracovně, dětském pokoji nebo malém bytě, nejde jen o zápach. Řešíš i prachové částice a VOC, tedy těkavé organické látky. PLA bývá v tomhle ohledu příjemnější než ABS nebo ASA, ale složení konkrétní špulky pořád hraje roli.

Neznamená to, že z PLA Pure je univerzálně bezpečný filament na všechno. Pořád větrej a výtisky na jídlo ber opatrně, i když materiál pracuje s food-contact surovinami. Jako směr je ale dobré, že výrobci začínají u běžných materiálů ukazovat konkrétnější certifikace.

[Zdroj: Bambu Lab](https://eu.store.bambulab.com/products/pla-pure)

---

## Prusa Research ukázala tištěné šablony pro airbrush

Prusa Research vydala návod na 3D tištěné šablony pro airbrush. Vytiskneš si masku, štít nebo vzor přesně podle modelu, který zrovna barvíš.

Airbrush je stříkací pistolka na barvu. U modelů se hodí na jemné přechody, stíny, maskování panelů nebo patinu. Tištěná šablona ti dovolí zopakovat stejný tvar na více dílech bez ručního stříhání pásky.

Důležité jsou i limity. U malých symbolů narazíš na průměr trysky, tloušťku šablony a ostrost hran. Na kamufláž, skvrny, krycí štíty nebo větší grafiku je to ale hodně použitelná dílenská věc.

[Zdroj: Prusa Research](https://blog.prusa3d.com/airbrushing-tricks-with-3d-printed-stencils_136901/)

---

## Hi3D chce generovat modely použitelnější pro tisk

Hi3D posouvá svůj maker toolkit směrem k 3D tisku. Slibuje export do STL, OBJ, FBX nebo GLB a hlavně kontrolu věcí, které u tisku rozhodují: uzavřená geometrie, správně otočené plochy, méně chyb v síti a převisy, které slicer zvládne připravit.

Mesh je síť trojúhelníků, ze které je 3D model složený. Když má díry, převrácené plochy nebo samoprůniky, slicer z něj nemusí udělat správný G-code. U AI generovaných modelů je to častý rozdíl mezi hezkým náhledem a modelem, který se dá opravdu vytisknout.

Zatím bych to bral jako nástroj ke sledování, ne jako hotovou náhradu za CAD. Pokud ale podobné služby začnou dělat čistší a uzavřené modely bez ruční opravy v Meshmixeru nebo Blenderu, bude to pro běžné tiskaře užitečné.

[Zdroj: Hi3D](https://www.hi3d.ai/3dmodeling/home)

---

## Snapmaker U1 je v EU shopu za 849 €

Snapmaker U1 je teď v evropském shopu za 849 € včetně DPH a dopravy. U1 je čtyřhlavá FDM tiskárna se systémem SnapSwap, kde se nemění filament v jedné hlavě, ale přepíná se mezi čtyřmi samostatnými tiskovými hlavami.

To je hlavní rozdíl proti AMS/MMU stylu. U jedné trysky musíš při změně barvy nebo materiálu čistit hotend. U1 místo toho přehodí celou hlavu. Snapmaker uvádí výměnu za 5 sekund a výrazně menší odpad při barevném tisku.

Z parametrů stojí za zmínku pracovní prostor 270 × 270 × 270 mm, rychlost až 500 mm/s, zrychlení až 20 000 mm/s², čtyři hlavy v základu a tryska do 300 °C. Pro domácí nebo dílenský barevný tisk je to zajímavá alternativa k systémům s jednou tryskou a velkým množstvím odpadu.

[Zdroj: Snapmaker EU](https://eu.snapmaker.com/products/snapmaker-u1-3d-printer)

---

## Revopoint Inspire 2 tlačí levnější 3D skenování

Revopoint Inspire 2 cílí na dostupnější 3D skenování. Výrobce uvádí kombinaci infračerveného laseru a strukturovaného světla, přesnost jednoho snímku až 0,05 mm a volumetrickou přesnost 0,05 mm + 0,1 mm na metr délky objektu.

Strukturované světlo znamená, že skener promítá vzor na objekt a z jeho deformace počítá tvar. Lesklé, černé nebo průhledné věci umí skenery pořád potrápit a často pomůže matný skenovací sprej.

Pro 3D tisk je levnější skener zajímavý hlavně u reálných dílů. Krytka, držák, tvar v autě, starý díl bez dokumentace. Nenahradí to CAD, ale může to ušetřit dost měření šuplerou.

[Zdroj: Revopoint](https://www.revopoint3d.com/products/infrared-laser-3d-scanner-inspire2)

---

## Pedálový drtič plastu řeší odpad z tiskárny po dílensku

Na Hackaday se objevil projekt pedálového drtiče na odpad z 3D tisku. Brogan M. Pratt se studenty řešil hromadu zbytků z tiskáren a postavili drtič poháněný kolem.

Drtič z odpadu neudělá automaticky nový filament. Aby z drti vznikla použitelná struna, musíš řešit čistotu materiálu, sušení, průměr a stabilní extruzi. Bez toho je to spíš školní nebo dílenský experiment.

I tak je to dobrá ukázka problému, který zná skoro každý tiskař. Supporty, brimy, kalibrační kostky a nepovedené výtisky se hromadí rychle. I jednoduché mechanické zpracování odpadu je lepší téma než jen další krabice plastu pod stolem.

[Zdroj: Hackaday](https://hackaday.com/2026/06/16/bike-powered-shredder-makes-short-work-of-3d-printer-waste/)

---

## PLA profily v betonu ukazují, že geometrie není detail

Studie v Construction and Building Materials řeší malé betonové nosníky vyztužené 3D tištěnými polymerovými pruty a deskami. Podle souhrnu má geometrie tištěného PLA profilu velký vliv na ohybovou pevnost.

Tohle není návod na domácí tisk výztuže do stropu. Je to výzkum na malých vzorcích a stavebnictví má úplně jiná pravidla než držák na zeď. Zajímavé je ale to, že tvar povrchu a profilu rozhoduje o tom, jak dobře se plast chytí v maltě nebo betonu.

Pro běžný tisk je v tom jednoduchá připomínka: tvar dílu není detail. Žebrování, drážky, textury, orientace vrstev a kontaktní plocha často rozhodnou víc než samotný materiál napsaný na špulce.

[Zdroj: DOI / Construction and Building Materials](https://doi.org/10.1016/j.conbuildmat.2025.144659)

---

## FDM díly na kole nejsou jen hračka z garáže

AMPulse vytáhl příklad nízkonákladových 3D tištěných komponent pro kola, včetně Fairlight Cycles a věcí kolem závodního prostředí. Nejde o to, že by sis měl vytisknout rám na Enderu. Spíš o drobné díly, přípravky, vedení kabelů, krytky a zakázkové úpravy.

FDM je klasický tisk z filamentu po vrstvách. Na kole je potřeba být opatrný, protože vibrace, UV, voda a mechanické namáhání nejsou kamarádi levného PLA. Pro prototypy, montážní přípravky nebo nenamáhané držáky to ale smysl má.

Tohle je místo, kde 3D tisk funguje dobře. Ne jako náhrada celé továrny, ale jako rychlý způsob, jak udělat malý konkrétní díl pro jeden konkrétní problém.

[Zdroj: AMPulse](https://www.ampulse.online/news/pogacar-fairlight-cycles-show-low-cost-3d-printed-components-for-bikes-p7ohj)

---

## Tip na víkendový tisk: NASA 3D Resources

NASA má na GitHubu veřejný archiv modelů pro 3D tisk. Najdeš tam Perseverance Rover, Saturn V, Hubble, JWST, měsíční krátery, modely asteroidů i věci spojené s ISS.

Není to katalog připravený stejně pohodlně jako Printables nebo MakerWorld. Některé modely budou chtít kontrolu ve sliceru, jiné jsou spíš pro trpělivější tisk. Jako zdroj zajímavých projektů je to ale pěkné.

Jen pozor na použití log a dojmu oficiální podpory. Pro osobní nebo vzdělávací tisk je to super, ale u komerčního použití se vyplatí číst pravidla NASA.

[Zdroj: NASA 3D Resources](https://github.com/nasa/NASA-3D-Resources/tree/master/3D%20Printing)

---

**Shrnutí:**

- **Bambu Lab PLA Pure** řeší nižší emise a certifikace u běžného PLA.
- **Prusa Research** ukazuje praktické tištěné šablony pro airbrush.
- **Hi3D** slibuje AI modely lépe připravené pro reálný 3D tisk.
- **Snapmaker U1** je v EU shopu za 849 € a staví na čtyřech samostatných tiskových hlavách.
- **NASA 3D Resources** je dobrý zdroj modelů, když chceš tisknout něco mimo běžné držáky a krabičky.
