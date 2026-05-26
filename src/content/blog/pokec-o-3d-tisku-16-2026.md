---
title: "Pokec o 3D tisku: Nintendo Switch s Klipperem, PreForm a rýžové PLA"
pubDate: "2026-05-19T17:09:24.000Z"
description: "Recap streamu: Nintendo Switch jako Klipper počítač, slicer PreForm, kauza Orca Sliceru, 3D tisk ze skla a rýžové PLA."
heroImage: "/content/images/youtube/eSXriUD57SM.jpg"
tags: ["Youtube streamy", "Members only", "Pokec o 3D tisku"]
draft: false
---

Tentokrát to byl stream ve velmi punkovém režimu. Streamovací počítač mi umřel těsně před vysíláním, takže jsem narychlo rozběhal Streamlabs na Macu, mikrofon položil na stůl a Richarda měl skoro před obličejem.

I tak jsme stihli několik zajímavých věcí. Nintendo Switch jako počítač pro Klipper, slicer PreForm s interlocking perimetry, otevřenou Orcu po bambulí kauze, tisk ze skleněného prášku, filament switch pro Bambu a nakonec PLA s rýžovým odpadem.

> Celý stream si můžeš pustit [na YouTube](https://www.youtube.com/watch?v=eSXriUD57SM). Jedná se o members-only obsah, [členství začíná na 45 Kč](https://www.youtube.com/channel/UCACAWyuYlpfH2Jn6HLhhGgw/join).

---

## Stream začal totální improvizací

Nejdřív omluva všem, kdo čekali. Umřel mi streamovací stroj a nešlo ho vůbec nastartovat. Vypadalo to na zdroj.

Takže žádné připravené studio. Narychlo nainstalovaný Streamlabs, kamera přepálená, bez filtrů, bez Stream Decku, mikrofon na stole a všechno tak nějak poskládané za pochodu.

Na druhou stranu to mělo svoje kouzlo. Aspoň bylo vidět, že i když se technika rozhodne zlobit, dá se stream nějak odjet.

## Nintendo Switch jako Klipper počítač

První věc mě fakt bavila. Frajer použil Nintendo Switch pro běh Linuxu, Klipperu a Mainsailu. Nešlo tam ani tak o rychlou Benchy, ale o to, že z herní konzole udělal ovládací počítač pro tiskárnu.

U starých Switchů šlo využít chybu a nahrát jiný systém přes USB. U novějších kusů už je potřeba čip. To není úplně jednoduchá sranda a přicházíš tím o záruku, ale u starého kusu z bazaru to může dávat smysl.

Na Switch se dá nahrát upravené Ubuntu, potom přes Kiauh nahodit Klipper, Mainsail a další věci. Výhoda je jasná: máš malý sedmipalcový dotykový displej, na kterém běží normální linuxový systém.

Jasně, levnější řešení existují. Klipper můžeš pustit na starém notebooku, mini počítači nebo Raspberry Pi. Ale jako hračka je Switch s Klipperem hodně zajímavý.

## Klipper na Switchi má háček

Je potřeba nezapomenout na jednu praktickou věc. Jakmile ten Switch vypneš nebo odpojíš, tiskárna závislá na Klipperu je mrtvá.

Takže to není jen efektní tablet u tiskárny. Je to reálný řídicí počítač. Pokud přes něj tiskárna běží, musí běžet spolehlivě po celou dobu tisku.

Ve videu byla i Benchy za zhruba 8 minut na Průšovi v Bear rámu s Klipperem a input shapingem. Rychlé to bylo, ale kvalita na ukázce nebyla žádný zázrak. Tohle je přesně ta část, kde se člověk může utopit v ladění.

## PreForm slicer a interlocking perimetry

Pak jsme koukli na slicer PreForm. Přiznám se, před streamem jsem ho neměl pořádně proklikaný. Na první pohled vychází z PrusaSliceru, ale má několik vlastních nápadů.

Nejzajímavější byly interlocking perimetry. Slicer umí perimetry a výplň poskládat tak, aby se mezi sebou víc provázaly. To může pomoct hlavně u dílů, které jsou slabé v ose Z, protože vrstvy jsou u FDM tisku pořád největší slabina.

V nastavení jsem našel i další věci: vlastní generátor perimetrů, adaptive pressure advance, import z Orca Sliceru, náhled s clipping plane, podporu pro malování různých typů supportů a embosování obrázků do povrchu.

## První dojem z PreFormu nebyl jen růžový

Na Macu s M4 a 16 GB RAM se mi PreForm nechoval úplně hladce. Myš se v náhledu kousala, rozhraní v češtině bylo dost nepřehledné a po přepnutí jazyka slicer spadl.

Taky mě pobavilo, že v galerii nebyla Benchy. To je skoro slicerová svatokrádež.

Když jsem zkusil obyčejnou kostku a zapnul interlocking perimetry, bylo vidět, že slicer přidává dost materiálu do stěn. V ukázce se objevilo pět interlocking perimetrů plus další vnitřní a vnější perimetry. Pevnost asi půjde nahoru, ale materiálu navíc je tam hodně.

Zajímavé je, že čas tisku podle sliceru nevyskočil tak brutálně, jak bych čekal. Přesto je to funkce, kterou bych chtěl příště vyzkoušet pořádněji na reálném dílu.

## Otevřená Orca a Bambu kauza

Vrátili jsme se i ke kauze kolem Orca Sliceru a Bambu. Luis vzal repo, které původní vývojář nechtěl dál tlačit, a dal ho na svůj GitHub.

Z toho repozitáře si pak udělaly fork tisíce lidí. Ve streamu padlo číslo kolem 4 600 forků. To znamená, že kdyby se Bambu chtělo pustit do právní války, muselo by reálně řešit obrovské množství lidí. To mi nepřijde pravděpodobné a hlavně by si tím podle mě dost uškodili.

Orcu z toho repozitáře jsem měl staženou a krátce jsem zkoušel jeden test. Fungovalo to, ale v tu chvíli jsem neměl vedle sebe jinou verzi na přímé porovnání.

## 3D tisk ze skla

Další zastávka byla 3D tisk ze skleněného materiálu. Šlo o recyklované sklo, ze kterého se tiskly třeba dlaždice. Působilo to spíš jako univerzitní projekt než něco, co si zítra koupíš domů.

Princip vypadal podobně jako práškový tisk. Skleněný prášek se nějak spéká, takže teploty tam budou určitě hodně vysoko.

Zaujalo mě hlavně to, že sklo se podle mě recykluje líp než plasty. U plastů řešíme degradaci materiálu, u skla mi to přijde obecně přímočařejší. Ber to ale jako můj dojem ze streamu, ne jako laboratorní závěr.

## Filament switch pro Bambu H2D a X2D

Pro majitele bambulí jsme koukli na filament switch. Ve streamu padly modely H2D a X2D. Zařízení umí přepínat filament mezi více cestami a dostat materiál z AMS do různých toolheadů.

Nejdřív jsem úplně nechápal, v čem je výhoda. Když máš dvě AMS, standardně řešíš, které AMS je navázané na kterou hlavu. Přes switch jde materiály mapovat pružněji a dostat barvy z jednoho nebo více AMS do obou hlav.

Prakticky to znamená méně ručního přehazování cívek a lepší využití barev nebo materiálů napříč hlavami. Cena ve streamu padla 60 eur, tedy zhruba patnáct stovek.

Za mě to není nesmyslný upgrade. Spousta lidí si kupuje AMS už jen proto, aby k tiskárně nemusela pořád chodit a měnit filament ručně. Pro někoho s dvěma toolheady to může být přesně ten doplněk, který bude dávat smysl.

## PLA s rýžovým odpadem

Na konec přišla materiálová vědcovina. Vědci vzali odpad po loupání rýže, tedy rýžové plevy, udělali z nich biochar a přimíchali ho do PLA.

Biochar je jemný uhlíkatý materiál vzniklý pyrolýzou, tedy zahřátím biomasy bez přístupu kyslíku. Pointa ve streamu byla jednoduchá: příměs z rýžového odpadu má pomoct tomu, aby materiál lépe klouzal.

Minule jsme měli materiál s vlnou, teď rýžové PLA. Tímhle tempem se skoro bojím hádat, co přijde příště.

## Závěr

Byl to kratší a hodně improvizovaný stream, ale témata stála za to. Switch jako Klipper počítač je krásná ukázka toho, co všechno jde zrecyklovat pro 3D tisk. PreForm vypadá zajímavě, ale zaslouží si pořádný test. A filament switch pro Bambu může být pro část lidí praktický upgrade, ne jen další krabička navíc.

Příště snad zase s normálním streamovacím strojem, lepší kamerou a bez lovení klávesových zkratek za pochodu.
