---
title: "Voron Trident: upgrade na TAP a CAN a boj s mikro konektory"
pubDate: "2026-04-21T12:51:03.000Z"
updatedDate: "2026-04-21T12:51:03.000Z"
description: "Na veřejném streamu jsem rozdělal Voron Trident, chystal upgrade na TAP a CAN, uklízel kabeláž, rušil endstopy a zasekl se na mrňavých konektorech."
heroImage: "/content/images/youtube/Iw45IfhOrM8.jpg"
tags: ["Youtube streamy", "Voron"]
draft: false
---

Ve čtvrtečním streamu jsem rozdělal **Voron Trident**, který měl dostat **TAP** a **CAN**. Na papíře to zní jako pěkný večer s pár konektory a trochou kabeláže. V realitě z toho bylo hlavně krimpování, přemýšlení nad zapojením a připomínka toho, že jeden mrňavý konektor dokáže zastavit půlku upgradu.

Na podobných streamech mě baví právě to, že neukazují naleštěný výsledek po víkendu v dílně, ale reálné bastlení se vším, co k tomu patří.

> Celý stream si můžete pustit [na YouTube](https://www.youtube.com/watch?v=Iw45IfhOrM8).

---

## Co bylo v plánu

Cíl byl celkem jasný. Dotáhnout rozdělaný **upgrade toolheadu**, odstranit zbytečnosti typu **Z-endstopu**, rozchodit **CAN**, učesat kabeláž a pokud to půjde, posunout Trident zase o kus dál.

Pro nezasvěcené jen rychlé přeložení: **TAP** řeší snímání podložky přímo přes toolhead a **CAN** pomáhá zjednodušit kabeláž do hlavy tiskárny.

Už na začátku ale bylo vidět, že to nebude stream o jednom heroickém kroku. Spíš série menších prací, které samy o sobě nevypadají dramaticky, ale ve výsledku rozhodují o tom, jestli se z tiskárny stane spolehlivý stroj, nebo jen další zdroj nervů.

## Ventilátory, Duponty a krimpování

Jedna z prvních věcí byla výměna ventilátoru a příprava kabeláže kolem toolheadu. Na stole ležely náhradní díly, krimpovací kleště a klasický bastlířský chaos, bez kterého by to snad ani nešlo.

Velkou část streamu nakonec sežralo **krimpování Dupontů a dalších konektorů**. A přesně tady je krásně vidět rozdíl mezi teorií a praxí. Na fotce to vypadá jako banalita. Ve skutečnosti řešíš, jestli kleště sedí na daný pin, jestli máš správnou délku vodiče, jestli necháš trochu rezervu a jestli to celé nebudeš za půl hodiny dělat znovu.

Na streamu padlo i srovnání kleští. Ty, které používám na menší konektory, mi přišly přesnější než jiné kusy, co mám doma. A to je přesně ten detail, který člověk ocení až ve chvíli, kdy místo jednoho pěkného krimpu vyrobí tři zmetky po sobě.

## CAN deska a proč je dobré všechno si znovu přečíst

Další část večera jsem strávil nad popisky na CAN desce a ověřováním, co kam skutečně patří. **CAN L, CAN H, USB, TH0, hotend, filament senzor**, různé zkratky a do toho realita, že ne všechno je na první pohled tak jasné, jak by člověk chtěl.

Tohle je přesně moment, kdy se nevyplatí hrát machra. Když si nejsi jistý, je lepší se zastavit, podívat se do návodu a znovu si ověřit, co kam patří. U podobných úprav je totiž strašně snadné udělat chybu, která se projeví až později, a pak ji hledáš zbytečně dlouho.

Padla i zmínka o tom, že přechod na **sensorless** dává smysl, ale není to automaticky nejlepší řešení pro každého. Tohle mám rád. Žádná univerzální pravda, ale normální přiznání, že každá úprava má svoje plusy a svoje limity.

## Kabeláž je nuda, dokud ji nemusíš zavřít do tiskárny

Další velké téma byl prostě **úklid kabeláže**. Přesně ta práce, kterou každý rád odkládá, protože není vidět na Instagramu, ale bez ní to pak vypadá i funguje na houby.

Na streamu bylo několikrát vidět, že kabelů je tam prostě moc. Něco se musí zkrátit, něco rozdělit, něco vést jinudy. Do toho jsem si v jednu chvíli uvědomil, že jsem zapomněl připojit jeden vodič, takže se část práce vracela zpátky. Klasika.

Zazněla i dobrá poznámka ke společné **zemi**. U podobných zapojení mi dává smysl mít **společnou zem** a nespoléhat na to, že se to nějak samo potká. Kdo někdy debugoval podobné věci kolem Raspberry nebo jiné elektroniky, ví, jak snadno dokáže zem udělat nepříjemný bordel.

## Kde se to zaseklo: TAP a mikro konektory

Největší brzda přišla ve chvíli, kdy došlo na **TAP** a konektory kolem toolheadu. Tam už to nebyly běžné piny, ale opravdu maličké konektory, u kterých si člověk dvakrát rozmyslí, jestli se do nich chce vůbec pouštět.

A právě tady se ukázalo, že samotná mechanická část upgradu je často ta jednodušší. Když nemáš správný konektor, správné krimpování nebo jasně popsané zapojení, můžeš mít půlku práce hotovou a stejně se nikam neposuneš.

Na konci streamu už byl připravený spodek, část kabeláže a odstraněný Z-endstop, ale bez dořešení těchhle mrňavých konektorů se nedalo rozumně dokončit **TAP, termistor ani filament senzor**. A nemá smysl to lámat přes koleno jen proto, aby bylo za každou cenu hotovo.

## Co si z toho odnést

Tenhle stream byl za mě dobrá připomínka jedné věci. U Voronů a podobných stavebnic se často mluví o rychlostech, hotendech, deskách a upgradu jako takovém. Ve skutečnosti ale spousta času padne na úplně obyčejné věci kolem - kabely, konektory, ventilátory, vedení svazků a hledání toho jednoho detailu, který nesedí.

A právě tam se rozhoduje, jestli bude tiskárna fungovat dlouhodobě dobře. Ne na plakátové fotce, ale v normálním provozu.

Pokračování bude logicky potřeba. Tenhle večer nebyl o velkém finále, ale o tom dostat Trident do bodu, kdy dává smysl na něj příště navázat a neposílat se zase o tři kroky zpátky.

---

## Shrnutí

- Cílem streamu bylo dotáhnout **upgrade Voron Tridentu na TAP a CAN**
- Velkou část večera sežralo **krimpování, ventilátory a příprava kabeláže**
- Přechod na **sensorless** a odstranění endstopů dává smysl, ale není to bez kompromisů
- Největší problém nakonec nebyla mechanika, ale **mikro konektory na toolheadu**
- Bez správného zapojení nemá smysl tlačit dokončení za každou cenu
- Přesně tyhle nudné detaily rozhodují, jestli bude Voron fungovat dobře i po delší době
