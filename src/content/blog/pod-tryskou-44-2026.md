---
title: "Pod tryskou 44/2026: hotend na 400 °C a hladký povrch bez žehlení"
pubDate: "2026-10-26T05:00:00.000Z"
description: "Prusa Research prodává HT Hotend pro CORE One+/L+, návod na hladkou horní vrstvu šetří čas bez žehlení, Blender pomůže s úpravou STL a NeoSander s broušením detailů."
tags: ["Newsletter"]
heroImage: "/content/images/2026/10/pod-tryskou-44-2026-hero.webp"
---

# Pod tryskou 44/2026: hotend na 400 °C a hladký povrch bez žehlení

U nového HT Hotendu mě zajímá hlavně to, co vyšší teplota udělá se spojením vrstev u běžně dostupných filamentů. A k povrchu výtisků mám tentokrát i starší návod, který je mi docela blízký. Místo dlouhého žehlení nejdřív pořádně nastavit horní vrstvu.

---

## HT Hotend pro CORE One+/L+ tiskne do 400 °C

Prusa Research začala prodávat **HT Hotend pro CORE One+/L+**. Můžete ho koupit jako upgrade nebo už osazený v nové CORE One L+. Výrobce uvádí výměnu za méně než minutu. **S INDX kompatibilní není**, takže před objednáním zkontrolujte, jakou sestavu máte.

![HT Hotend s dlouhou kovovou trubičkou a zeleným přívodním kabelem na tmavé podložce](/content/images/2026/10/pod-tryskou-44-2026-ht-hotend.webp)

Vyšší teplota pomáhá i u stávajících Prusamentů. Prusa Research ve svém měření uvádí lepší spojení vrstev u PA11 Carbon Fiber, ASA a obou variant PC Blend. K tomu přidala materiály PPS-CF, PPS-GF a PPA-CF Core. Jde o technické plasty plněné uhlíkovými nebo skleněnými vlákny pro náročnější díly.

**Teplota komory zůstává omezením.** Výrobce u ještě náročnějšího PEKK-A CF upozorňuje, že komora s 60 °C nemusí stačit a zkoušet se dají malé součástky. U velkého dílu z PEKK-A CF bych proto na vyšší teplotu samotného hotendu nespoléhal. Prusa Research k tisku vysokoteplotních materiálů doporučuje filtraci nebo napojení zadního výdechu na vzduchotechniku.

[Zdroj: Prusa Research, HT Hotend, kompatibilita a měření spojení vrstev](https://blog.prusa3d.com/ht-hotend-is-out-plus-we-offer-new-materials-and-hightemp-sheets-for-core-one-l_138625/)

---

## Hladší horní vrstva bez dlouhého žehlení

Autor videa **Get rid of top surface layer lines in your 3D prints** zkoušel místo žehlení doladit šířku čáry, průtok a rychlost horní vrstvy. Žehlení je další přejezd trysky po hotovém povrchu s malým množstvím vytlačovaného plastu. Umí ho vyhladit, ale přidává čas. Autor u svých vzorků dosáhl podobného vzhledu bez něj a uvádí **zhruba o 34 % kratší tisk** oproti své variantě se žehlením.

S kamarádem CriticalPrinted dali dohromady návod a zkušební model. Ten obsahuje různé tvary, aby se ukázaly i chyby kolem otvorů a přechodů. Začíná se zkalibrovaným průtokem filamentu. Při ověřování u dalších lidí jeden pokus nevyšel právě kvůli problému s průtokem tiskárny, po jeho opravě se výsledek zlepšil. Těch 34 % je z jeho vzorků, jak to dopadne na vašem modelu, nevím.

Tohle mám podobně. Když jsem zkoušel tisknout medaile, po doladění horní vrstvy byl rozdíl proti žehlení malý a ušetřený čas velký. Pokud vás žehlení zdržuje, začal bych tímhle návodem a malým vzorkem. Video je z prosince 2025, postup můžete vyzkoušet pořád.

[Zdroj: původní video a ukázky zkoušek](https://www.youtube.com/watch?v=mAxZt6s6R0E) a [CriticalPrinted, zkušební model a návod na MakerWorldu](https://makerworld.com/en/models/2083080-advanced-top-surface-guide-understand-improve).

---

## V Blenderu upravíte tvar staženého STL

Kryštof Kohout zveřejnil u Prusa Research krátký návod na úpravu hotového modelu v Blenderu. Na jednoduché váze ukazuje, jak vybrat část modelu, rozšířit ji nebo pootočit a nechat změnu plynule přejít do okolí. Používá **Proportional Editing**, tedy úpravu, která postupně slábne se vzdáleností od výběru. STL přitom tvoří síť trojúhelníků, se kterými můžete pracovat přímo.

![Tři vytištěné vázy s různě zvlněným a zkrouceným tvarem, doplněné tištěnými květinami](/content/images/2026/10/pod-tryskou-44-2026-blender-vazy.webp)

V návodu je důležitý drobný krok: zapnout drátový pohled, aby výběr zahrnul i zadní stranu vázy. Jinak upravíte jen část směrem k sobě a model bude nesouměrný. Po exportu zpět do STL autor kontroluje výsledek ve sliceru. Příliš tenká stěna může v náhledu zmizet, prudký převis zase potřebovat podpěry.

Pro změnu tvaru vázy mi to přijde jako příjemný začátek s Blenderem. Návod obsahuje jednotlivé kroky i výsledné výtisky. Navazuje na něj samostatný kurz Prusa Academy, ale popsanou úpravu můžete projít přímo podle článku.

[Zdroj: Kryštof Kohout, úprava STL v Blenderu krok za krokem](https://blog.prusa3d.com/blender-for-3d-printing-the-5-minute-guide-to-direct-mesh-editing_138255/)

---

## NeoSander se dostane do rohů a drážek

HOZO prodává **NeoSander**, malou akumulátorovou brusku s pohybem nástavce tam a zpět. Má nastavitelný zdvih **0,6 až 1,8 mm** a výrobce uvádí **13 000 zdvihů za minutu**. V základní sadě je osm tvarů brusných hlav, mimo jiné úzká plochá, špičatá, oblouková a pravoúhlá. Právě tvary nástavců mě zajímají pro místa, kam se s obyčejným brusným špalíkem špatně dostává.

![Ruka vede malou brusku NeoSander po hraně šedého modelového dílu](/content/images/2026/10/pod-tryskou-44-2026-neosander.webp)

Tělo bez nástavce váží podle výrobce **89 g** a nabíjí se přes USB-C. Pilové listy a nabíjecí stojánek se prodávají zvlášť. Na fotkách výrobce je vidět práce na drobných hranách a detailech modelů. Jak rychle s tím zmizí vrstvy z konkrétního PLA výtisku, nevím, brusku jsem nezkoušel.

[Zdroj: HOZO, NeoSander a obsah základní sady](https://hozodesign.com/products/neosander)
