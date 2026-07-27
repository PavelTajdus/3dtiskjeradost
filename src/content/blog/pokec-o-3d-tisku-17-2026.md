---
title: "Pokec o 3D tisku: Printerhive, AI slicování a emise z tisku"
pubDate: "2026-05-26T12:00:00.000Z"
updatedDate: "2026-05-26T12:00:00.000Z"
description: "Printerhive má novou funkci zapůjčení tiskárny, Průša patentuje čištění trysky a AI ve slicerech pomalu dává smysl."
heroImage: "/content/images/youtube/pe1e3Jt8WQU.jpg"
tags: ["Youtube streamy", "Members only", "Pokec o 3D tisku"]
draft: false
---

Úterní stream byl nabitý. Prošli jsme novinky z PrinterHive, koukli jsme na nový patent od Průši, zabrousili do AI-assisted slicování a na závěr jsme se dotkli tématu, které se mě osobně týká víc, než bych chtěl: co vlastně dýcháme při 3D tisku.

> Celý stream si můžete pustit [na YouTube](https://www.youtube.com/watch?v=pe1e3Jt8WQU). Jde o members-only obsah, [členství od 45 Kč](https://www.youtube.com/channel/UCACAWyuYlpfH2Jn6HLhhGgw/join).

## Printerhive: zapůjčení tiskárny přes odkaz

Tohle je ta největší novinka, které jsem věnoval hodně času. Printerhive teď umí vygenerovat odkaz, přes který může někdo jiný odeslat tisk přímo na vaši tiskárnu. Vy mu pošlete heslo, on si otevře odkaz, nahraje Gcode a tisk se spustí.

Celé to jde nastavit dost granulárně. Můžete omezit maximální váhu filamentu, počet tisků, délku tisku v hodinách i platnost odkazu do konkrétního data. Takže pokud víte, že v sobotu přijde zakázka, nastavíte limit do pátku a hotovo.

Funguje to zatím jen pro Bambu tiskárny. Důvod je jednoduchý: u Bambu je ekosystém sliceru a tiskárny dost uzavřený na to, aby to celé fungovalo předvídatelně. U Vorona s milionem startovacích maker by to mohlo dopadnout špatně.

## Placené zapůjčení a propojení s e-shopem

Pokud chcete za zapůjčení inkasovat peníze, potřebujete IČO a projít registrací přes Stripe. Platební brána je přímo integrovaná, zákazník zaplatí při objednávce a peníze vám přijdou přes Printerhive. Stripe si bere poplatky za transakce, Printerhive přidá něco za platformu podle tarifu.

Kdo prodává tisky přes e-shop, ocení i propojení s e-shopem. Objednávky padají přímo do Printerhive, produkty jsou nalinkované a zakázka se automaticky hodí do fronty. Já to používám i na nacenění složitějších zakázek s víc pláty. Namrskám to do projektu, nastavím počty a cena je tam hned. Vůbec nic nepočítám ručně.

## Průša patentuje čištění trysky

Průša si nechává patentovat systém čištění trysky, který principiálně připomíná to, co má Bambu od X1. Tryska přejede přes stříhací element, pak na kartáč s polymerovými štětinami a nakonec se ukotvuje na stabilní plošce. Celé to má zlepšit první vrstvu.

U Bambu tohle funguje dost spolehlivě už několik let. Není to 100%, ale na produkční použití to stačí. Uvidíme, jak to Průša implementuje a jestli to bude součást Core One nebo něčeho nového.

## AI ve slicerech a SliceDoc

Narazil jsem na výzkum z King Saud University o AI-assisted slicování. Systém upravuje výšku vrstvy podle zakřivení modelu, zesiluje nosné oblasti, kde hrozí selhání, a mění rychlosti na ostrých změnách směru. Zatím je to výzkum, ne plugin ke stažení.

Blíž k praxi je česká firma SliceDoc. Mají placený plugin, který analyzuje model, najde mechanicky namáhané části a upraví infill tak, aby byl silný tam, kde to dává smysl, a šetřil materiál tam, kde pevnost nepotřebujete. Pracuje prý i s Orca Slicerem a Bambu Studiem, nejen s Curou. Cenu na webu nemají, chtějí demo. Pro firmy, co tisknou funkční díly ve větším objemu, to ale dává smysl.

## Co dýcháme při 3D tisku

Tohle téma se mě osobně týká. Dlouhé roky jsem měl tiskárny v pracovně, seděl jsem u nich celé dny, ABS bez filtru. Připravuju k tomu článek, takže teď jen základní shrnutí toho, co jsem na streamu říkal.

Všechny materiály něco emitují. Čím techničtější materiál, tím hůř. ABS, ASA, nylon, polykarbonát a filament s příměsí karbonu jsou na tom nejhůř. PLA je nejmirnější, ale nulový taky není. Tiskárnu v dětském pokoji nebo ložnici s ABS bych nedoporučoval. Větrat dává smysl vždy. Uzavřená tiskárna s filtrem v komoře je lepší než otevřená bez ničeho.

Rád bych to změřil přímo, ale citlivý měřák částic stojí 5 až 7 tisíc a kvůli jednomu streamu do toho jít nechci. Pokud někdo takový měřák má, ozvěte se.

## Reprap a Switch Wire pokračuje

Na závěr krátká aktualizace k mému Switch Wire projektu. Zjistil jsem, že jsem měl všechny osy nastavené obráceně. Tiskárna fungovala, ale homovala do špatného konce. Přišel jsem na to až při mesh bed levelingu, kdy mi to místo vpředu začalo vzadu a hned narazilo. Osy jsem přehodil, PID tuning bedu jsem dělal asi dvě hodiny, pak znovu od začátku kvůli špatnému parametru. Kalibrace extruderu ještě čeká. Na příštím streamu bychom mohli konečně tisknout.

## Shrnutí

- Printerhive umí zapůjčit tiskárnu přes odkaz s heslem, s limity na váhu, počet tisků a délku
- Placené zapůjčení vyžaduje IČO a registraci přes Stripe
- Propojení s e-shopem šetří čas při zakázkovém tisku
- Průša patentuje čištění trysky podobné systému Bambu
- SliceDoc je český plugin pro inteligentní optimalizaci infillu podle namáhání modelu
- ABS a ASA v uzavřených prostorách bez ventilace není dobrý nápad, větrat je základ
- Switch Wire je blízko prvního tisku, zbývá kalibrace extruderu
