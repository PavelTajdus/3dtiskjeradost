---
title: "Pokec o 3D tisku: pergola z fotek přes AI a novinky pro Voron"
description: "V SolidCraftu jsem nechal AI vymodelovat pergolu podle fotek. K tomu další aplikace ArtCraft, Hallův senzor ve Stealthburneru a nová hlava DownDraft."
pubDate: "2026-11-10T12:00:00.000Z"
updatedDate: "2026-11-10T12:00:00.000Z"
heroImage: "/content/images/youtube/6cp7Ab5ZytY.jpg"
tags: ["Youtube streamy", "Pokec o 3D tisku", "Members only"]
draft: false
---

Podle dvou fotek jsem nechal AI vymodelovat malou pergolu na dort, rozdělenou na díly pro 3D tisk. Model i sestava vznikaly v SolidCraftu přímo před očima. Potom jsme prošli další aplikace ArtCraft a novinky pro Voron, hlavně úpravy Stealthburneru a novou hlavu DownDraft.

> [Celý záznam Pokecu o 3D tisku 29/2026 najdete na YouTube](https://www.youtube.com/watch?v=6cp7Ab5ZytY). Stream je pro členy kanálu. [Přidat se můžete tady](https://www.youtube.com/channel/UCACAWyuYlpfH2Jn6HLhhGgw/join).

---

## Pergola na dort podle dvou fotek

K [SolidCraftu](https://solidcraft.io/) jsem se dostal při zkoušení aplikací kolem ArtCraftu. Už před streamem jsem si v něm nechal udělat zápich s padesátkou a model pergoly pro švagrův narozeninový dort. Na dortu měla být jejich zahrada a právě pergolu se nedařilo hezky vymodelovat. Ručně bych se s ní trápil dost dlouho.

Na streamu jsem zadání zopakoval od začátku. Codex dostal dvě fotky a nadiktovaný požadavek na základnu 6 × 5 cm. Důležité bylo rovnou říct, že to chci tisknout. Jednotlivé stěny měly být oddělené, abych je potom mohl slepit a sestavit.

První sestava vznikla za 2 minuty a 17 vteřin. Nebyla úplně přesná, chyběly jí prostřední stojiny a část zadního zábradlí. Ale na takhle malé provedení mě výsledek potěšil. AI sama přidala i výřezy, které měly pomoct při skládání.

## Doplnění trámků a příprava pro slicer

Další úpravy jsem zadával slovně a pomohl si i obrázkem. Ne vždycky jsme se pochopili napoprvé. Doplnění stojin a zadního zábradlí potřebovalo další pokus.

Zhruba ve třinácté minutě streamu jsem hrubý model otevřel v OrcaSliceru. Měl jsem jednotlivé části nachystané k tisku a mohl se podívat, jak se naslicují. V rozích ještě chyběly příčné podpěry. AI je doplnila, sestava se při tom jednou rozpadla a následovala další verze. Samotný tisk a lepení už součástí téhle ukázky nebyly.

Líbilo se mi, že v SolidCraftu zůstaly rozdělené náčrty, tělesa, jednotlivé prvky i sestava. Oproti tomu, co AI dřív dělala v OpenSCADu, je to úplně jiný level. Pro drobnosti typu zápich nebo takováhle dekorace je to pro mě hodně užitečné. U návrhu celého stroje do práce vstupuje spousta dalších věcí, které samotné vygenerování geometrie nevyřeší.

## PDF, vektory a tabulka přes AI

Pak jsme se podívali i na další [aplikace ArtCraft](https://getartcraft.com/apps). V PdfCraftu jsem zkusil vytvořit PDF z obrázku, uložit ho a otevřít v náhledu. Na první osahání to fungovalo a zaujal mě i přehled nástrojů pro další práci s dokumentem.

S VectorCraftem jsem se naopak trápil. Jsem zvyklý na Affinity a při práci s textem mi tenhle způsob ovládání nesedl. Při předchozím zkoušení mi aplikace i spadla. Na streamu jsme alespoň prošli převod textu na křivky a export SVG, které jsem pak vložil do náčrtu v SolidCraftu.

V GridCraftu jsem dal Codexu úkol vytvořit složitější ukázkovou tabulku. Postupně v ní vznikala analýza prodeje. Propojení přes MCP mi při takové práci přijde výrazně rychlejší než nechat agenta klikat po jednotlivých buňkách. SolidCraft mě z celé téhle sestavy zatím zaujal nejvíc, ostatní aplikace jsem teprve zkoušel.

## Craft Anything dostal za úkol předělat web

U Craft Anything jsem zkusil zadat nové provedení webu 3Dtiskjeradost.cz. Zadání bylo dost volné, chtěl jsem ho moderní a pořádně výrazný. Aplikace začala pracovat a průběžně se ptala na povolení dalších nástrojů.

Zajímalo mě, co z toho vypadne, takže jsem ji nechal běžet i během procházení novinek pro Voron. Ještě po více než dvaceti minutách ale pokračovala v práci. Do konce streamu jsem hotový výsledek neukázal.

## Stealthburner s Hallovým senzorem

U aktualizovaného [Stealthburneru](https://github.com/VoronDesign/Voron-Stealthburner) jsme otevřeli montážní manuál a prošli úpravy. Podívali jsme se na volitelný Hallův senzor filamentu s magnetem. Zrovna potřebný magnet N52 jsem doma neměl, takže to nebyla úprava, do které bych se mohl hned pustit.

Celek na mě působil kompaktně. Prošli jsme i nový vozík a možnosti uchycení sond. Se Stealthburnerem a Clockworkem 2 jsem přitom dlouhodobě spokojený. Funguje mi, tiskne a zatím jsem neměl potřebu kvůli každé nové hlavě předělávat tiskárnu.

## DownDraft a zkušenosti s Cartographerem

Nový [DownDraft](https://github.com/VoronDesign/voron-downdraft) mě ale zaujal. Prošli jsme manuál, uspořádání dílů, montáž extruderu i návaznost na Tap. Přemýšlel jsem, že bych na něj dal Orbiter v2 a celé si to postavil. Na pohled mi ta hlava přišla docela jednoduchá.

Při debatě o sondách jsem se vrátil ke svým testům Cartographeru na Tridentu. Zkoušel jsem různé podložky, které se na něj vešly. Když jsem stejnou podložku otočil, změnil se i průběh naměřených vln. Hodně záleželo na samotném plechu a jeho povrchu.

U DownDraftu jsme se potom pokoušeli dopočítat hmotnost proti Stealthburneru. Zamotali jsme se do toho, co už zahrnuje motor, extruder a další díly. Mě láká postavit si ho a vyzkoušet na něm vyšší akcelerace.

## Další stavba Rat Rigu a cesta na Formnext

Na závěr došlo na rozdělané projekty. Robotická ruka zůstala tam, kde jsem s ní skončil na streamu. U Rat Rigu jsem k 10. listopadu čekal na kabely a doufal, že se ve čtvrtek zase dostanu ke stavbě.

Na další týden jsem oznámil cestu na Formnext, kvůli které nepočítám s úterním ani čtvrtečním streamem. Ve středu chci projít výstavu. Rád bych odtamtud poslal něco zajímavého, ale po minulé návštěvě vím, kolik času zabere jen to všechno obejít.

[Další členské streamy najdete po připojení ke kanálu.](https://www.youtube.com/channel/UCACAWyuYlpfH2Jn6HLhhGgw/join)
