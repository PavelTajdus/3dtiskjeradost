---
title: "Pod tryskou 14/2026: LEGO tiskne a ráčna vyjede v jednom kuse"
pubDate: "2026-03-31T12:20:29.000Z"
updatedDate: "2026-10-08T12:00:00.000Z"
description: "Tiskárna z LEGO kostek, ráčnový šroubovák bez montáže, rychlejší MMU3, rehabilitační pomůcky z Tenerife a mikroroboti pohánění elektrickým polem."
tags: ["Newsletter"]
draft: false
---

## Studprint: tiskárna z LEGO kostek

Adam Turaj postavil Studprint, funkční 3D tiskárnu s rámem, pohybovým systémem a částí extruderu z LEGO. Použil hlavně klasické kostky. Motory, elektroniku a hotend má běžné, některé držáky si vytiskl. Těch **92 % LEGO** počítá podle počtu součástek v seznamu dílů, takže to neznamená 92 % hmotnosti tiskárny.

Nejvíc mě na tom zaujala kolečka, která jezdí přímo po výstupcích kostek. Tam bych dal hladké krycí kostky, aby to tolik nedrncalo. Sám autor přiznává vůle v osách X a Y a výrazné vady na vytištěné Benchy. Ale tiskne to a na GitHubu najdete CAD model i seznam dílů, pokud byste se do podobné stavby chtěli pustit.

[Zdroj: GitHub, Studprint](https://github.com/AdamTuraj/Studprint)

---

## Ráčnový šroubovák vytištěný v jednom kuse

Joe Sturge navrhl šroubovák, u kterého se ráčna vytiskne rovnou uvnitř rukojeti. Nemusíte ji skládat z jednotlivých dílů. Přepínačem zvolíte směr otáčení nebo mechanismus zamknete a nasadíte běžný šestihranný bit 6,35 mm. Než se k funkční verzi dostal, udělal asi 30 zkušebních výtisků.

Autor doporučuje vrstvy 0,2 mm a výplň 15–20 %. V mechanismu nechal vůle kolem 0,3 mm, takže přetékající materiál může pohyblivé části spojit. První rozhýbání může jít ztuha. Vyzkoušel PLA; PETG zatím jen navrhuje jako další možnost.

V jeho článku najdete postup návrhu, nepovedené pokusy i odkaz na model. Pokud vás zajímají tištěné mechanismy, je tam docela dost konkrétních věcí k prohlédnutí.

[Zdroj: Joe Sturge, návrh ráčnového šroubováku](https://dev.joesturge.com/p/3d-print-in-place-a-design-journey/)

---

## MMU3 mění filament až o 9 sekund rychleji

Prusa Research vydala aktualizaci, která zkracuje výměnu filamentu u MMU3 **až o 9 sekund**. Část pohybů teď probíhá současně a tiskárna nemusí čekat na dokončení některých kroků, než začne znovu tisknout. U modelu se stovkami výměn už se to nasčítá.

Potřebujete firmware tiskárny 6.5.3, firmware MMU3 3.0.4 a nové profily v PrusaSliceru. Nestačí aktualizovat jen samotnou MMU. Pozor také na MK3S+: Prusa Research výslovně uvádí, že firmware MMU3 3.0.4 s její sestavou není kompatibilní.

[Zdroj: Prusa Research, zrychlení MMU3](https://blog.prusa3d.com/massive-mmu3-speed-boost-new-fw-slashes-filament-change-times-core-one-l-mmu3-news_132957/)

[Zdroj: GitHub, firmware MMU3 3.0.4](https://github.com/prusa3d/Prusa-Firmware-MMU/releases/tag/v3.0.4)

---

## Rehabilitační pomůcky za 56 eur místo 2 316

Nemocnice La Candelaria na Tenerife tiskne pomůcky pro rehabilitaci rukou. Terapeutka Teresa Fernández zadává, co konkrétní pacient potřebuje, a technici z IT oddělení navrhnou a vytisknou díly. Třeba menší desku pro procvičování jediného prstu, když je běžná velká deska zbytečná.

Podle původní reportáže El Día stojí objednaná sada pomůcek 2 316 eur, zatímco vlastní výroba vyšla na 56 eur. Odtud pochází uváděná úspora 97,6 %. Týká se téhle sady, nikdo tím nesnížil náklady celé nemocnice.

Tohle se mi líbí, jen mi u těch 56 eur chybí rozepsaná práce lidí, kteří pomůcky modelují, zkoušejí a tisknou. Větší rehabilitační deska se podle technika tiskne 18 hodin. Když už máte hotový a odzkoušený model, další kus se vyrábí snáz. Ten první ale někdo musel připravit.

[Zdroj: El Día, reportáž z nemocnice La Candelaria](https://www.eldia.es/tenerife/2026/03/20/candelaria-personaliza-asistencia-sanitaria-impresion-127902339.html)

---

## Mikroroboti se vyhnou překážce bez elektroniky

Daniela Kraft a Mengshi Wei z Leidenské univerzity vytiskli na mikrotiskárně Nanoscribe pružné řetízky dlouhé jen desítky mikrometrů. Jednotlivé články mají 5 µm a spoje mezi nimi 0,5 µm. Pro představu: mikrometr je tisícina milimetru.

Po zapnutí elektrického pole se řetízky začnou pohybovat. Když předek narazí na překážku, zadní články dál tlačí, řetízek se ohne a změní směr. Nepotřebuje k tomu čidla ani řídicí elektroniku, pohyb ovlivňuje jeho tvar a pružnost. Energii mu ale pořád dodává elektrické pole.

Na první pohled mě to moc nezaujalo. Pak jsem si pustil video a koukal, jak se pohybují jako červíci, vyhnou se překážce a pokračují dál. To už je docela zvláštní podívaná. Video najdete přímo u univerzitní zprávy.

[Zdroj: Leidenská univerzita](https://www.universiteitleiden.nl/en/news/2026/03/alive-or-not-tiny-3d-printed-robots-without-a-brain-that-swim-and-navigate-just-like-animals)
