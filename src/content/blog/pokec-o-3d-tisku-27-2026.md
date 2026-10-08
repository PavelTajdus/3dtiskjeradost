---
title: "Pokec o 3D tisku: modelování s AI naživo"
pubDate: "2026-10-06T12:00:00.000Z"
updatedDate: "2026-10-08T12:00:00.000Z"
description: "Zkouším s AI navrhnout stojánek na mobil, krabičku s víkem a tělo makropadu. Od parametrů a chyb návrhu až k exportu do OrcaSliceru."
heroImage: "/content/images/youtube/ewOaxGOcbGI.jpg"
tags: ["Youtube streamy", "Members only", "Pokec o 3D tisku", "Voron"]
draft: false
---

Nápad na dnešní stream jsem dostal ve sprše. Zkusíme modelování s AI. Přesunul jsem se na MacBook, rychle nainstaloval OBS a pustili jsme se do stojánku na mobil, krabičky a těla makropadu. Aplikaci jsem předtím nezkoušel, takže jsme ji objevovali společně.

> Celý stream si můžete pustit [na YouTube](https://www.youtube.com/watch?v=ewOaxGOcbGI). Jedná se o members-only obsah, [členství si můžete pořídit tady](https://www.youtube.com/channel/UCACAWyuYlpfH2Jn6HLhhGgw/join).

---

## AI dostává zadání, v prohlížeči vzniká model

Instalaci open-source aplikace jsem nechal na Codexu. V době streamu fungovala na Macu, proto jsem tentokrát opustil svůj linuxový setup.

Píšu zadání AI v terminálu a model vidím v prohlížeči. Agent má k aplikaci skill, tedy instrukce a příkazy, jak s ní pracovat. Jsou v něm i pravidla pro 3D tisk, třeba orientace dílů a převisy.

To se mi líbí. Nemusím pokaždé vysvětlovat, že ten tvar potřebuju vytisknout. Můžu sledovat náhled a říkat, co chci změnit.

---

## Trošku kubistický stojánek na mobil

První zadání bylo prosté: navrhněte stojánek na mobil. Vyšel z toho trošku kubistický tvar. Na stůl bych si ho takhle asi nedal, ale vypadal tisknutelně. Některé jeho tvary bych se svými modelářskými schopnostmi nedělal snadno.

Objevily se i parametry. Mohl jsem měnit šířku nebo zvětšit průchod pro kabel. To je fajn, nemusím kvůli každému rozměru zadávat celý model znovu.

Zkoušel jsem různé AI modely a sledoval, co z nich vypadne. Pro někoho, kdo o modelování nic neví a potřebuje něco vytvořit, mi to nepřipadá jako špatný začátek.

---

## Krabička podle obrázku a nefunkční západka

Pak jsem zadal odolnější krabičku s víkem. První návrh byl hodně jednoduchý, tak jsem přidal obrázek jako předlohu. Postupně vzniklo tělo, víko i západky.

Jedna klapka ale vypadala, že by jen visela. Udělal jsem screenshot a napsal agentovi, že takhle zámek fungovat nebude. Návrh začal upravovat. Některé hrany bych taky zkosil nebo zaoblil jinak.

Při složitějším přepočtu se prohlížeč zasekl. Agent hlásil, že aplikace visela na těžkém přepočtu, a restartoval ji. Chvíli jsem na návrh nadával, pak se konečně objevil výsledek i se západkami. Dokonalé to nebylo, ale dál se to dalo upravovat zadáním.

---

## Parametry krabičky a čekání na přepočet

U krabičky šla měnit výška, velikost i tloušťka stěn. Rozměry se promítaly do celého návrhu. To už se mi líbilo docela dost.

Několikrát jsem změnil hodnotu a říkal si, že se nic neděje. Jenže aplikace ještě přepočítávala. Musel jsem jí dát čas. Já vždycky říkám ostatním, ať čtou, co jim počítač píše, a pak sám koukám jen na poslední řádek.

Aplikace hlásila převis u zavřené krabičky. V tiskové poloze ale díly ležely jinak. Díval jsem se proto i na jednotlivé části, ne jen na sestavu.

---

## Voron 2.4 Ultra od Formbotu a Cartographer

Během čekání jsme otevřeli nabídku Voronu 2.4 Ultra od Formbotu. Z výbavy mě zaujal hlavně Cartographer. Vedle kamery a osvětlení jsem tam proti tomu, co už znám, moc zásadního neviděl.

Osobně mám rád, když se tryska dotkne podložky. Při měření vlastních plátů jsem viděl drobné rozdíly v plechu i povrchu. Při bezkontaktním skenování se měří odezva kovu, zatímco mě zajímá plocha, na kterou pak tisknu.

Cartographer mi na běžném Voronu připadá v pohodě. Dotykem si zkalibruje vzdálenost, pak plochu rychle proskenuje. Na velkých tiskárnách s plochou 600 mm ta rychlost dává velký smysl. Tam jsem s první vrstvou zásadní problém neměl, spíš s tím, aby velké výtisky držely.

---

## Tělo makropadu podle dohledaných rozměrů

Z chatu přišlo zadání na makropad, malou klávesnici podobnou Stream Decku. V té terminologii jsem se moc neorientoval. Nechal jsem proto AI nejdřív dohledat podklady a rozměry, pak teprve modelovat.

Takhle začínám i jiné složitější úkoly. Nechám si udělat průzkum, co je potřeba, a můžu mezitím pracovat na něčem jiném.

Vzniklo tělo a víko, otvor pro USB-C i sestava. Aplikace měla také rozložený pohled, jen bych díly potřeboval od sebe odsunout víc. Některé hrany a spoj víka bych udělal jinak. Jako základ mi to ale nepřipadalo špatné.

Takovou krabičku bych zvládl navrhnout i sám. Jen bych nad ní podle mě strávil víc času.

---

## Tělo a víko jsem dostal do OrcaSliceru

Nechal jsem si nainstalovat OrcaSlicer a stáhl tělo i víko jako 3MF. Export chvíli trval a aplikace se zase trošku zasekávala. Nakonec jsem do sliceru dostal oba díly.

Vypadaly tisknutelně. U zacvakávacího mechanismu jsem si ale pořád nebyl jistý, jestli bude fungovat. **Na streamu jsem díly nevytiskl ani nesestavil.**

Dřív jsem si pro jednoduché věci nechával generovat OpenSCAD. Tady se mi líbí živý náhled, parametry i zaoblené rohy. Na jednodušší parametrické díly mi aplikace připadá jako zajímavý pomocník. U složité konstrukce bych pořád potřeboval zkušenosti člověka, který ji navrhuje.

Z večera mám tělo makropadu a víko ve sliceru. Teď je potřeba je vytisknout a zkusit, jestli do sebe sednou.
