---
title: "Pokec o 3D tisku: DIY vzduchový filtr pro tiskárny"
pubDate: "2025-11-25T12:00:00.000Z"
updatedDate: "2025-11-25T12:00:00.000Z"
description: "Představil jsem prototyp 3D tištěného vzduchového filtru pro místnost s tiskárnami. Komplet tištěný na Venture XL, šest ventilátorů, dvě filtrační vrstvy. Plus novinky z Form Nextu."
heroImage: "https://img.youtube.com/vi/vUcsNblj3Bg/maxresdefault.jpg"
tags: ["Youtube streamy", "Members only", "Pokec o 3D tisku"]
draft: false
---

Rok a půl jsem měl v hlavě projekt vzduchového filtru pro místnost plnou 3D tiskáren. Nakonec se toho ujal Marek a dneska jsem na streamu ukázal první funkční prototyp — kompletně 3D tištěný.

> Celý stream si můžete pustit [na YouTube](https://www.youtube.com/watch?v=vUcsNblj3Bg). Jedná se o members-only obsah — [členství od 45 Kč](https://www.youtube.com/channel/UCACAWyuYlpfH2Jn6HLhhGgw/join).

---

## Proč stavět vlastní filtr?

Sedím v malé místnosti s 20 tiskárnami, většina jede nonstop na ABS a ASA. Začal jsem řešit, jak filtrovat vzduch. Komerční filtry z Alzy?

- Stojí od 3 000 Kč výš
- Filtrují mikročástice, ale **profiltrují minimum vzduchu** za hodinu
- V recenzích se ukazuje, že účinnost je v praxi mizerná

Pak jsem narazil na video od alergika, který zjistil klíčový princip: **lepší je profiltrovat hodně vzduchu přes méně jemný filtr, než málo vzduchu přes super jemný filtr**. Když vzduch v místnosti "přeperete" několikrát za hodinu, je ve výsledku čistější.

---

## Jak to vypadá

- **Kompletně 3D tištěné** tělo — hlavní díl 51 cm, tištěný na Venture XL v jednom kuse
- **6 ventilátorů** (120mm PC ventilátory) tlačí vzduch dovnitř
- **Dvě vrstvy filtrační látky** různé jemnosti — hrubší + jemnější
- Filtrační panely na **magnetech** — snadno vyměnitelné
- **12V napájení** s potenciometrem na regulaci otáček
- Nožky z TPU flex

Design navrhl Marek — magnety na filtrech, rozebíratelná konstrukce, poctivé tloušťky stěn (minimum 8 mm). Je to tank.

---

## Funguje to?

Subjektivně: **ano**. Vzduch v místnosti je citelně jiný. Objektivně: zatím nemám čím měřit. Hledám měřák kvality vzduchu, abych mohl udělat pořádný test — zapnout tiskárny, zavřít místnost, pustit filtr a měřit rozdíl.

## Co je potřeba doladit:
- **Snížit otáčky** — ventilátory na plný výkon tlačí víc vzduchu, než filtrační látka propustí
- **Najít optimální výkon** — aby to filtrovalo efektivně a nebylo zbytečně hlučné
- **ESP32 s displejem** — plán je přidat ovládání a monitoring, ideálně propojit s [Printerhive](https://printerhive.com/cs)
- **Verze pro menší tiskárny** — varianta na 350mm bed pro běžné Vorony

---

## Novinky z FormNextu

Na konci streamu jsme probrali i shrnutí z FormNext 2025:

- **3D tisk se přesouvá od prototypování k reálné výrobě** — Apple tiskne díly hodinek, armáda tlačí na tisk náhradních dílů přímo v terénu
- **Konsolidace dodavatelů** přináší pozitivní výsledky
- **Integrace AI do workflow** — zatím spíš buzzword, ale směr je jasný
- Příští FormNext: **17.–20. listopadu 2026** ve Frankfurtu — plánuju jet

---

## Shrnutí

- DIY vzduchový filtr pro 3D tiskovou místnost — funkční prototyp
- Princip: **hodně vzduchu přes dostatečný filtr** 

> málo vzduchu přes super filtr
- Kompletně 3D tištěný, šest ventilátorů, dvě filtrační vrstvy, magnety
- Subjektivně funguje, objektivní měření teprve přijde
- Plán: ESP32 ovládání, verze pro menší tiskárny, měření účinnosti
