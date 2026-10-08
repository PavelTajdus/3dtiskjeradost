---
title: "Pokec o 3D tisku: modelování s AI naživo"
pubDate: "2026-10-06T12:00:00.000Z"
updatedDate: "2026-10-08T12:00:00.000Z"
description: "Zkoušel jsem s AI modelovat stojánek na mobil, krabičku s víkem a tělo makropadu. Tělo makropadu i víko jsem dostal do OrcaSliceru."
heroImage: "/content/images/youtube/ewOaxGOcbGI.jpg"
tags: ["Youtube streamy", "Members only", "Pokec o 3D tisku", "Voron"]
draft: false
---

Nápad na dnešní stream jsem dostal ve sprše. Přešel jsem na Mac, rychle nainstaloval OBS a zkoušeli jsme s AI modelovat stojánek na mobil, krabičku a tělo makropadu. Open-source aplikaci na modelování jsem do té doby nezkoušel.

> Celý stream si můžete pustit [na YouTube](https://www.youtube.com/watch?v=ewOaxGOcbGI). Jedná se o members-only obsah, [členství si můžete pořídit tady](https://www.youtube.com/channel/UCACAWyuYlpfH2Jn6HLhhGgw/join).

---

## Open-source aplikace na modelování s AI

Instalaci open-source aplikace jsem nechal na AI agentovi. V době streamu fungovala na Macu, proto jsem tentokrát opustil svůj linuxový setup.

Píšu zadání AI v terminálu a model vidím v prohlížeči. Agent má k aplikaci skill, tedy instrukce a příkazy, jak s ní pracovat. Jsou v něm i pravidla pro 3D tisk, třeba aby model neměl netisknutelné převisy.

To se mi líbí. Nemusím pokaždé vysvětlovat, že ten tvar potřebuju vytisknout. Můžu sledovat náhled a říkat, co chci změnit.

---

## Trošku kubistický stojánek na mobil

První zadání bylo prosté: navrhněte stojánek na mobil. Vyšel z toho trošku kubistický tvar. Tisknutelně to vypadalo, ale takové tvary bych sám asi nevymodeloval.

Objevily se i parametry. Mohl jsem měnit šířku nebo zvětšit průchod pro kabel. To je fajn, nemusím kvůli každému rozměru zadávat celý model znovu.

Zkusil jsem to ještě s Astrou, ta modeluje trošku líp.

---

## Krabička podle obrázku a nefunkční západka

Pak jsem přes Sonet zadal krabičku s víkem a přidal obrázek jako předlohu. Postupně vzniklo tělo, víko i západky.

Jedna klapka ale vypadala, že by jen visela. Udělal jsem screenshot. Takhle ten zámek asi fungovat nebude. Některé hrany bych taky zkosil nebo zaoblil jinak.

Při složitějším přepočtu se prohlížeč zasekl. Agent hlásil, že aplikace visela na těžkém přepočtu, a restartoval ji. Pak se objevil výsledek i se západkami. Dokonalé to nebylo, ale dál se to dalo upravovat zadáním.

---

## Parametry krabičky a čekání na přepočet

U krabičky šla měnit výška, velikost i tloušťka stěn. Po změně parametru se měnil celý model. To už se mi líbilo docela dost.

Několikrát jsem změnil hodnotu a říkal si, že se nic neděje. Jenže aplikace ještě přepočítávala. Musel jsem jí dát čas. Přiznám se, že AI píše dlouhý elaborát a já se dívám jen na poslední řádek.

Aplikace hlásila převis u zavřené krabičky. Při tisku je ale otevřená, takže mi to nevadilo.

---

## Voron 2.4 Ultra od Formbotu a Cartographer

Během čekání jsme otevřeli nabídku Voronu 2.4 Ultra od Formbotu. Z výbavy je největší změna Cartographer. Jinak jsem tam moc zásadních změn neviděl.

Osobně mám rád, když se tryska dotkne podložky. Při měření vlastních plátů jsem viděl drobné rozdíly v plechu i povrchu. Když se tryska nedotkne podložky, senzor měří plech. Ten ale není všude stejně tlustý a ještě je na něm vrstva PEI.

Cartographer mi na běžném Voronu připadá v pohodě. Dotykem si zkalibruje vzdálenost, pak plochu rychle proskenuje. Na velkých tiskárnách s plochou 600 mm ta rychlost dává velký smysl. Tam jsem s první vrstvou zásadní problém neměl, spíš s tím, aby velké výtisky držely.

---

## Tělo makropadu podle dohledaných rozměrů

Pak jsem zadal makropad, malou klávesnici podobnou Stream Decku. V té terminologii jsem se moc neorientoval. Nechal jsem proto AI nejdřív dohledat podklady a rozměry, pak teprve modelovat.

Takhle začínám i jiné složitější úkoly. Nechám si udělat průzkum, co je potřeba, a můžu mezitím pracovat na něčem jiném.

Vzniklo tělo a víko, otvor pro USB-C i sestava. Aplikace měla také rozložený pohled, jen bych díly potřeboval od sebe odsunout víc. Některé hrany a spoj víka bych udělal jinak. Za mě to není vůbec špatné, i když dokonalé to není.

Tohle bych vymodeloval i sám, ale trvalo by mi to déle.

---

## Tělo a víko jsem dostal do OrcaSliceru

Nechal jsem si nainstalovat OrcaSlicer a stáhl tělo i víko jako 3MF. Export chvíli trval a aplikace se zase trošku zasekávala. Nakonec jsem do sliceru dostal oba díly.

Vypadaly tisknutelně. U zacvakávacího mechanismu jsem si ale pořád nebyl jistý, jestli bude fungovat. **Na streamu jsem díly nevytiskl ani nesestavil.**

Dřív jsem si pro jednoduché věci nechával generovat OpenSCAD, ale měl problémy se zaoblenými rohy. Tady zaoblené rohy problém nedělaly.
