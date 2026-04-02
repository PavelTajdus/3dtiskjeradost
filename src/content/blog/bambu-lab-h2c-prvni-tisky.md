---
title: "Bambu Lab H2C: první tisky a Vortek v akci"
pubDate: "2026-01-08T12:00:00.000Z"
updatedDate: "2026-01-08T12:00:00.000Z"
description: "Konečně tisknem na H2C! Vyzkoušeli jsme Vortek systém s vícebarevnou jahodou z ASA, sledovali výměny hotendů v reálu a probrali upgrade z H2S/H2D na H2C."
heroImage: "https://img.youtube.com/vi/Y9s4dMJB3co/maxresdefault.jpg"
tags: ["Youtube streamy", "Bambu Lab"]
draft: false
---

Po úterním unboxingu je čas na tisky. Na H2C jsme pustili vícebarevnou jahodu z ASA a sledovali, jak Vortek systém funguje v praxi. Spoiler: funguje parádně.

> Celý stream si můžete pustit [na YouTube](https://www.youtube.com/watch?v=Y9s4dMJB3co).

---

## Idle spotřeba: 18 W

Malá zajímavost hned na začátku — H2C v idle stavu (zhasnutá, displej vypnutý, nic se neděje) žere **18 W nonstop**. Pro šetřílky důležitá informace.

---

## Co jsme tiskli: mimozemská jahoda z ASA

Na Maker Worldu jsem našel Kubovu jahodu — roztomilý vícebarevný model, ideální na test výměn hotendů. Barvy:

- **Zelená** (Fiberlogy ASA light green) — tělo jahody
- **Modrá** (ASA) — lístky
- **Černá** (Polymaker ASA) — očička
- **Natural** (ASA) — doplňky

Výsledek? Mimozemská jahoda s neštovicemi. Ne úplně podle originálu, ale na test Vorteku dokonalá.

---

## Vortek v praxi: jak to vypadá

### Před tiskem
Tiskárna si nejdřív **přečte všechny hotendy v racku** — potřebuje vědět, jaké trysky má k dispozici. LED na pozicích svítí, kamera v toolheadu skenuje. Trvá to pár desítek sekund.

### Výměna hotendu
Při změně barvy/materiálu:
1. Tiskárna odjede stranou
2. Hotend vyjede nahoru, zaparkuje do racku
3. Nabere nový hotend (pár sekund)
4. Indukce nahřeje trysku
5. Zavede filament z AMS
6. Očistí se na čistící věži
7. Pokračuje v tisku

V reálu to celé trvá kolem **47 sekund** od tisku po tisk. Není to okamžité, ale je to plynulé a spolehlivé. Na 2,5 hodinovém tisku jahody proběhly desítky výměn bez jediného problému.

### Co se mi líbí
- **LED feedback** — pozice hotendů svítí, víte co je kde
- **Automatická kontrola** — tiskárna ověřuje, jaké trysky máte
- Tisk z **různých velikostí trysek** v jednom tisku (0.2 detaily + 0.6 infill) teprve plánují
- Stabilní, žádný jam, žádné chyby

---

## Upgrade z H2S/H2D na H2C

V Bambu shopu je dostupný upgrade kit:

- Na **H2D**: cca 935 € — nový toolhead, bed s výřezem pro Vortek, Vortek rack
- Na **H2S**: podobná cena, ale navíc měníte i desku

Za ty peníze dostanete dost komponent. Ale dává to smysl hlavně pro ty, kdo si koupili H2S/H2D s tím, že chtěli Vortek — tehdy ještě nebyl k dispozici.

Můj názor: pokud kupujete nově, rovnou H2C. Upgrade z H2S za tisícovky eur nedává moc smysl — spíš si nechte H2S jako workhorse a H2C kupte jako novou.

---

## Bambu Studio pro H2C

Musel jsem nainstalovat nejnovější Bambu Studio — H2C profily tam jsou. Slicování vícebarevného modelu je stejné jako u jiných Bambu tiskáren — přiřadíte barvy k extruderům, vyberete materiál a jedete.

Zajímavost: můžete mít na jedné straně 0.2mm trysku pro detaily a na druhé 0.6mm pro rychlý infill. Slicer to zvládne v jednom tisku.

---

## Zajímavost: jak dlouho se třepou nožky

H2C stojí na antivibrační nožkách, které jsou záměrně měkké — tlumí vibrace při vysokých rychlostech. Výsledek: celá tiskárna se při tisku viditelně třepe. Vypadá to dramaticky, ale je to záměr — vibrace jdou do nožek místo do stolu.

---

## Shrnutí

- **Vortek funguje spolehlivě** — desítky výměn bez problému
- Výměna hotendu trvá reálně **~47 sekund** celý cyklus
- Idle spotřeba **18 W** — i když nic nedělá
- **ASA ve vyhřívané komoře** tiskne bez problémů
- Upgrade z H2S/H2D možný, ale finančně dává víc smysl koupit H2C rovnou
- Tisk z různých velikostí trysek v jednom jobu je killer feature
