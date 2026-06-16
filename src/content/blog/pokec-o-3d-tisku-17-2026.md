---
title: "Pokec o 3D tisku: Printerhive, Průšův patent a vzduch u tiskáren"
pubDate: "2026-05-26T12:15:00.000Z"
updatedDate: "2026-05-26T12:15:00.000Z"
description: "Members stream o novinkách v Printerhive, zapůjčení tiskárny, Enderwire na RepRapFirmware, patentu Průši, Bambu kauze a vzduchu u tiskáren."
heroImage: "/content/images/youtube/pe1e3Jt8WQU.jpg"
tags: ["Youtube streamy", "Members only", "Pokec o 3D tisku", "Printerhive", "Bambu Lab"]
draft: false
---

Tenhle Pokec byl kratší, protože se blížil hokej, ale témat se tam nakonec vešlo dost. Největší kus streamu jsem věnoval Printerhive, protože tam přibyly věci, které už nejsou jen kosmetika.

Pak jsme stihli můj Enderwire na RepRapFirmware, Průšův patent na čištění trysky, další pokračování Bambu kauzy, AI asistované slicování a nakonec i trochu vážnější téma kolem vzduchu u tiskáren.

> Celý stream si můžete pustit [na YouTube](https://www.youtube.com/watch?v=pe1e3Jt8WQU). Jde o members-only obsah, [členství od 45 Kč](https://www.youtube.com/channel/UCACAWyuYlpfH2Jn6HLhhGgw/join).

---

## Printerhive má živé video a lepší práci se zakázkami

Začal jsem klasicky malým reklamním blokem, protože od poslední ukázky se v [Printerhive](https://printerhive.com/cs) zase něco posunulo. První praktická drobnost je živé video z tiskárny. Ne jen jeden snímek za pár vteřin, ale normální stream, když to konkrétní tiskárna umí.

U farmy nebo zakázkového tisku je to za mě hodně příjemné. Když se něco začne dít, člověk to vidí hned, ne až po další aktualizaci náhledu.

Ukazoval jsem taky projekty a propojení s objednávkami. Když potřebuju nacenit zakázku s víc pláty, naházím si ji do projektu, nastavím počet kusů a Printerhive mi spočítá cenu podle nastavené cenotvorby. U e-shopu pak umí objednávky z platformy typu Upgates rovnou dostat do fronty tisků.

Tohle není funkce pro člověka s jednou tiskárnou na stole. Ale pokud děláš zakázkový tisk nebo prodáváš tištěné díly, ušetří to strašně moc klikání a ručního počítání.

## Zapůjčení tiskárny: tiskneš na cizí mašině, ale pořád pod kontrolou

Hlavní novinka bylo zapůjčení tiskárny. Název zní trochu divně, ale princip je jednoduchý: máš volnou tiskárnu, nastavíš limity a pošleš někomu odkaz. Ten člověk si připraví soubor ve sliceru, nahraje ho přes odkaz a tiskárna začne tisknout.

Limity jsou důležité. Dá se nastavit maximální množství filamentu, počet tisků, délka tisku, platnost odkazu a taky heslo. Není to veřejná brána typu „tiskněte si u mě cokoliv“. Pořád je tam domluva a pořád musí být někdo u tiskárny, aby výtisk sundal a případně poslal.

Když chceš za tisk peníze, je potřeba IČO a registrace přes Stripe. Printerhive má platební bránu integrovanou, takže zákazník zaplatí při objednání a peníze pak přijdou přes platformu. Poplatky se řeší podle tarifu a počítá se i se Stripe poplatkem.

Zatím je to čistě pro Bambu Lab tiskárny. A dává mi to smysl. U bambulí je celý řetězec víc uzavřený a bezpečnější. U Vorona s vlastními makry, Klipperem a milionem nastavení by to mohlo dopadnout všelijak.

## Enderwire na RepRapFirmware už se tváří živě

Krátce jsem se vrátil i k Enderwire / Switchwire projektu na RepRapFirmware. Zjistil jsem, že jsem měl blbě nastavené všechny osy. Všechno šlo opačně, takže se to tvářilo, že to funguje, ale homing byl reálně zrcadlově špatně.

Došlo mi to až při mesh bed levelingu, kdy místo začátku vpředu začala tiskárna jezdit vzadu a narazila. Klasika. Osy jsem opravil, endstopy mám hotové, mesh jsem dělal, PID tuning bedu taky, i když jsem ho nejdřív zabil kvůli špatnému parametru.

Ještě mě čeká kalibrace extruderu. Na dalším streamu bychom se snad mohli konečně dostat k reálnému tisku. Nechci slibovat zázraky, protože u podobných předělávek se vždycky něco najde, ale už to vypadá mnohem živěji.

## Průša si patentuje čištění trysky

Pak jsme koukli na patent Průši kolem čištění trysky. Podle toho, co bylo ve streamu vidět, jde o systém se stříhacím prvkem, kartáčkem a stabilní ploškou, kde se tryska po vyčištění opře.

Principiálně mi to připomíná to, co Bambu používá už od X1. Neříkám, že je to stoprocentní kouzlo, protože ve 3D tisku není stoprocentní skoro nic. Ale u bambulí to funguje dost dobře na produkční provoz a první vrstvě to pomáhá.

Pokud se tohle dostane do Prusa ekosystému v rozumné podobě, může to být praktická věc. Čistá tryska před tiskem je přesně ta nudná drobnost, která rozhoduje o tom, jestli první vrstva sedne, nebo člověk řeší nalepený bordel na špičce.

## Bambu Lab vs SFC: kauza jede dál

Vrátili jsme se i k Bambu Lab a otevřenému softwaru. Minule jsme řešili tlak na komunitní forky a tentokrát padla SFC organizace, která se do věci pustila kvůli kombinaci otevřeného softwaru a uzavřených částí.

Nechci z toho dělat právní rozbor, protože nejsem právník a ve streamu jsme to taky nepitvali do paragrafů. Důležité je spíš to, že téma nezmizelo. Pořád rezonuje a pořád může Bambu dost bolet reputačně.

Za mě je to jednoduché. Bambu Lab dělá dobré tiskárny, ale když se dostane do konfliktu s open source komunitou, na které celý tenhle svět dlouho stojí, není to drobnost. V téhle komunitě se podobné věci pamatují.

## AI ve sliceru a český SliceDog

Další zastávka byl výzkum kolem AI asistovaného slicování. Na první pohled to vypadalo trochu jako klasické „před AI hnusné, po AI krásné“, což ve mně vždycky rozsvítí kontrolku.

Když jsem se do toho víc podíval, pointa byla zajímavější. Systém má upravovat výšku vrstvy podle zakřivení, lokálně zesilovat slabá místa, měnit výplň a rychlosti v ostrých částech modelu. Část věcí umí zkušenější tiskař nastavit ručně, část by jako plugin do sliceru mohla dávat smysl.

V té souvislosti jsem si vzpomněl i na český SliceDog. Ten řeší podobnou logiku bez velkého AI divadla: díl nemusí mít všude stejnou výplň. Kde je potřeba pevnost, přidá materiál, kde není, šetří čas a filament.

Pro hobby tisk to asi nebude věc, kterou člověk nutně potřebuje každý den. Pro firmy, které tisknou funkční držáky a díly ve větším množství, to ale smysl mít může. Čtyři hodiny tisku ušetřené na jednom větším dílu už nejsou úplná drobnost.

## Vzduch u tiskáren není téma jen pro strašení

Na konci jsme se dostali k emisím z 3D tisku. Tohle nechci hnát do paniky, ale ani to nechci zamést pod stůl. Všechny materiály něco generují. PLA bude mírnější než ABS nebo ASA, ale nulové to není.

Praktická rada je pořád stejná: netisknout ABS a ASA v ložnici nebo v dětském pokoji. Když tiskneš technické materiály pravidelně, řeš uzavřenou tiskárnu, filtr v komoře a větrání. U PC, nylonu nebo materiálů s karbonem bych byl opatrnější ještě víc.

Zmiňoval jsem i filtraci z minulého streamu. Rád bych to někdy změřil pořádně, ale nemám na to citlivý měřák. Obyčejný PM2.5 měřák ti neřekne všechno a kupovat přístroj za několik tisíc jen kvůli jednomu streamu se mi úplně nechce.

Tohle téma si nejspíš zaslouží samostatný článek. Ne proto, abychom se báli každé špulky PLA, ale aby člověk věděl, kdy stačí otevřít okno a kdy už dává smysl řešit filtraci seriózněji.

## Shrnutí

- **Printerhive** přidal živé video, projekty, e-shop objednávky a hlavně zapůjčení tiskárny přes odkaz.
- **Zapůjčení tiskárny** dává smysl hlavně pro lidi, kteří mají volnou kapacitu a umí řešit zákazníka i fyzický výtisk.
- **Enderwire na RepRapFirmware** už má opravené osy, hotový mesh a snad se příště dostane k prvnímu tisku.
- **Průšův patent na čištění trysky** může být nudná, ale hodně praktická věc pro lepší první vrstvu.
- **Bambu Lab kauza** nekončí a reputačně to pro ně může být větší problém než samotný technický detail.
- **AI slicování a SliceDog** ukazují, že chytrá lokální výplň může šetřit čas i materiál.
- **Vzduch u tiskáren** není důvod k panice, ale u ABS, ASA a technických materiálů bych to neignoroval.

Příště bych se rád vrátil k Enderwire a konečně něco vytiskl. Uvidíme, co mi ještě RepRapFirmware nachystá za zábavu.
