---
title: "Anycubic Kobra X: PLA, flex a multimateriálový test naživo"
pubDate: "2026-07-03T12:00:00.000Z"
updatedDate: "2026-07-03T12:00:00.000Z"
description: "Praktický test Anycubic Kobra X: měkké TPU neprošlo výměnami, PLA s PETG podpěrami naopak překvapilo čistým výsledkem."
heroImage: "/content/images/youtube/n90yK_VRDb4.jpg"
tags: ["Youtube streamy", "Anycubic Kobra X", "PLA", "TPU", "PETG", "multimateriálový tisk"]
draft: false
---

[Anycubic Kobra X](https://store.anycubic.com/products/kobra-x-combo-3d-printer) mě v předchozím streamu příjemně překvapila, takže jsem ji chtěl vzít trochu víc za slovo. Ne jen další barevný tisk, ale kombinaci tvrdého PLA a pružného flexu, ideálně na jednom modelu. Spoiler: flex nás nakonec vyškolil, ale multimateriálové podpěry dopadly překvapivě dobře.

> Celý veřejný stream si můžeš pustit [na YouTube](https://www.youtube.com/watch?v=n90yK_VRDb4). Není to members-only Pokec, ale praktický test Anycubic Kobra X s PLA, TPU a PETG.

## Plán: PLA tělo a pružná část uvnitř

Cíl byl jednoduchý: vytisknout kleště, kde bude hlavní část z PLA a uvnitř pružná část z flexu. Nešlo mi o laboratorní měření ani o dokonalý výrobek. Chtěl jsem zjistit, jestli Kobra X zvládne praktickou kombinaci PLA a TPU, co bude potřeba nastavit ve sliceru a kde se to celé začne sypat.

Na stole jsem měl růžový silk, černý [Noctuo Grip](https://www.noctuo.pl/) a později ještě starý bílý Extrudr Flex Semisoft. Noctuo Grip je hodně měkké TPU s tvrdostí 88A a v ruce se chová skoro jako tkanička. Uděláš na něm uzlík a drží. To je fajn na manipulaci, ale pro podavač a dlouhé vedení filamentu už to začíná být problém.

První zádrhel přišel hned při zavádění. Měkké TPU se nechtělo dostat do toolheadu. V dlouhé PTFE trubičce pružilo, nešlo pořádně tlačit dopředu a nebylo jasné, jestli se vůbec posouvá správným směrem. Pomohl jsem si kouskem PTFE, pinzetou a nakonec jsem dlouhou trubku vyhodil úplně. Vedení jsem udělal na prasáka venkem s krátkým kouskem PTFE, protože jinak bychom se přes první krok ani nedostali.

## První slicování: vysoká vrstva, 65 °C bed a nízký průtok pro TPU

Model kleští jsem nakonec musel změnit. První stažený soubor nebyl jeden multimateriálový díl, ale sada částí k vytištění a složení. To nebylo to, co jsem chtěl testovat. Našel jsem tedy jiný model v jednom kuse a rozsekal ho ve sliceru na PLA a TPU část.

Nastavení jsem držel spíš praktické než krásné. Vrstva byla 0,28 mm, aby tisk netrval zbytečně dlouho. Podložku jsem dal na 65 °C pro oba materiály, ať se při výměnách zbytečně nemění teplota bedu. Růžový silk jsem nechal okolo 240 °C, protože Devil Design Silk chce trochu víc tepla. U Noctuo Grip jsem začínal kolem 250 °C a další vrstvu posunul na 260 °C.

Důležitější byl průtok. U tak měkkého TPU jsem preventivně stáhl maximální objemovou rychlost. Nejdřív jsem uvažoval o 6 mm³/s, pak jsem to snížil na 3 mm³/s, protože s tímhle materiálem jsem měl z dřívějška odzkoušené, že nízký průtok pomáhá. Flow kalibraci jsem nepouštěl, u takového testu mi nedávala moc smysl.

Slicer ukazoval zhruba 40 výměn materiálu a asi 27 minut jen na čištění. To je přesně ten moment, kdy si řekneš: buď to bude pecka, nebo krátký servisní stream.

## Noctuo Grip: první výměna a konec

První vrstvy z PLA vypadaly dobře. Kobra X si držela pěknou první vrstvu, kamera v aplikaci byla svižná a displej ukazoval, která lajna materiálu je aktivní. To je drobnost, ale praktická. U Bambu ne vždycky takhle jasně vidíš, co se zrovna děje.

Pak přišla první výměna na TPU. Tryska měla 250 °C, v čistící oblasti se něco černého snažilo objevit, ale reálně z toho skoro nic nelezlo. Špulka se netočila tak, jak by měla, materiál se do trysky nedostal a tisk pokračoval, jako by se nic nestalo. To je špatně. U multimateriálu nechceš, aby tiskárna jen jela dál a tvářila se, že je všechno v pohodě.

Tisk jsem stopnul. Nechtěl jsem riskovat, že se měkké TPU někde namotá tak blbě, že pak budu rozebírat extruder. Po vytažení a zavedení běžného silku bylo jasné, že hotend ucpaný není. PLA šlo ven normálně. Problém byl někde po cestě, pravděpodobně v zavedení nebo přepínání měkkého filamentu uvnitř toolheadu.

## Druhý pokus: šest let starý Extrudr Flex Semisoft

Abychom test flexu neodpískali po prvním kopanci, vytáhl jsem historický artefakt: [Extrudr Flex Semisoft](https://extrudr.com/en/de/products/flex-semisoft/). Měl jsem ho několik let, ještě z kurzu 3D tisku z roku 2020. Na ruce působil tvrdší než Noctuo Grip, takže byla šance, že se s ním Kobra X popere líp.

Materiál jsem nastavil jako bílý TPU. Výrobce u něj uváděl 85A, doporučenou rychlost 20 až 100 mm/s a teplotu jsem nechal kolem 260 °C. Podložka zůstala na 65 °C. Maximální objemovou rychlost jsem zvedl na 5 mm³/s, pořád opatrně, ale ne tak přidušeně jako u prvního pokusu.

Ruční load vypadal nadějně. Při 250 °C začal materiál po chvíli opravdu lézt z trysky, špulka se točila a hovínka padala tam, kam měla. Na šest let starý flex dobré. Jenže při samotném tisku se scénář zopakoval. První zavedení ještě prošlo, další výměna už ne. Bílý materiál se do trysky nedostal, tiskárna netlačila nic a znovu bylo hotovo.

Tohle je za mě důležitý výsledek. Kobra X si s běžným filamentem poradí dobře, ale s hodně měkkým flexem v multimateriálových výměnách ne. Neříkám, že žádné TPU nikdy nepůjde. Naopak si myslím, že tvrdší TPU kolem 95A, třeba od Devil Designu, by mohlo být úplně jiná pohádka. Ale Noctuo Grip a starý Semisoft v tomhle testu neprošly.

## Náhradní plán: PLA výtisk a PETG kontaktní vrstvy podpor

Flex nás vyškolil, takže jsem test otočil na něco praktičtějšího: podpěry z jiného materiálu. Tohle je u multimateriálových tiskáren možná méně sexy než pružné kleště, ale v reálném tisku to dává velký smysl. PLA a PETG se k sobě nechytají tak agresivně, takže PETG umí posloužit jako oddělovací kontaktní vrstva pro PLA podpěry, nebo obráceně.

Vzal jsem jednoduchý bridge test. Hlavní tisk šel z bílého PLA, kontaktní vrstva podpěr z černého PETG. Nastavil jsem normální podpěry, PETG jen na kontaktní vrstvu a horní rozestup jsem stáhl prakticky na nulu, kolem 0,02 mm. Tisk trval asi 16 minut, takže ideální rychlý pokus.

Tady už Kobra X fungovala bez dramatu. Materiály přepínala, aktivní pozice na displeji dávala přehled a čistící věž tentokrát nevypadala tak rozplácnutě jako u předchozího pokusu. U Devil Design PETG padlo i to, že se dá tisknout relativně nízko, klidně okolo 230 °C, takže teplotní rozdíl proti PLA nemusí být obrovský.

Po dokončení šly podpěry dolů krásně. Trochu se utrhla i část mostu, takže nastavení vzoru a kontaktní vrstvy by chtělo ještě doladit. Spodní plocha pod podpěrou ale byla hladká a na dotek fakt pěkná. Tohle z klasického mostu bez podpěr nedostaneš.

Byl tam i otisk vzoru kontaktní vrstvy. Kdybych použil klasický grid nebo jiný jednodušší vzor, výsledek by podle mě vypadal rozumněji. U bílé a černé kombinace bylo taky vidět lehké barevné ovlivnění. Na světlém dílu bych příště volil podpůrný materiál v podobnější barvě, třeba šedé PETG k bílému PLA.

## Co jsem si odnesl z Kobra X

Kobra X mě pořád baví hlavně poměrem ceny a schopností. V době streamu padla cena kolem 6 741 Kč v Datartu a 309 € u slovenského prodejce. Za ty peníze je to hodně zajímavá mašina, pokud víš, do čeho jdeš.

Hotend nahřívá rychle. Při změnách mezi 240 a 260 °C teplota skákala svižně a přestřel byl zhruba o 2 °C, pak se zase srovnala. To je u výměn materiálu příjemné. Konstrukčně působí tiskárna jednoduše: masivní základna pod podložkou a lineární vedení na všech osách. Nečekám, že by se na tom mělo rozpadat něco složitého, spíš budeš časem řešit trysky, hotend, podložku nebo čistítko.

Vadí mi hladká podložka, radši bych texturovanou PEI. Vadí mi i krytka vzadu, která se při čištění trysky viditelně prohne dolů. A tichá tiskárna to úplně není. Není to nepříjemné, ale vedle postele bych ji běžet nenechal.

## Shrnutí

- Měkké TPU v multimateriálovém tisku neprošlo. Noctuo Grip ani Extrudr Flex Semisoft se při výměnách spolehlivě nedostaly do trysky.
- Tvrdší TPU kolem 95A bych ještě neodepisoval, ale v tomhle streamu nebylo po ruce.
- PLA a PETG jako oddělovací kontaktní vrstva podpor fungovaly překvapivě dobře.
- Spodní plocha po PETG podpěře byla hladká, jen vzor kontaktní vrstvy a barevná kombinace chtějí doladit.
- Anycubic Kobra X pořád působí jako hodně schopná tiskárna za rozumné peníze, jen flex není její silná disciplína.
