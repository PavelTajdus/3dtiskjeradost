---
title: "Pokec o 3D tisku: Bambu Vortek, INDX od Bondtechu a slicerové triky"
pubDate: "2025-10-28T12:00:00.000Z"
updatedDate: "2025-10-28T12:00:00.000Z"
description: "Na members streamu jsme rozebrali novinku Bambu Lab Vortek (tool changer pro H2C), porovnali ji s INDX od Bondtechu a ponořili se do nastavení sliceru pro lepší povrch tisků."
heroImage: "https://img.youtube.com/vi/uR6fyBG9BVc/maxresdefault.jpg"
tags: ["Youtube streamy", "Members only", "Pokec o 3D tisku", "Bambu Lab"]
draft: false
---

Na dnešním members streamu jsme se podívali na horkou novinku — Bambu Lab Vortek (systém výměnných trysek pro chystanou H2C), srovnali to s INDX řešením od Bondtechu a na závěr se ponořili do nastavení sliceru pro hezčí povrch tisků.

> Celý stream si můžete pustit [na YouTube](https://www.youtube.com/watch?v=uR6fyBG9BVc). Jedná se o members-only obsah — [členství od 45 Kč](https://www.youtube.com/channel/UCACAWyuYlpfH2Jn6HLhhGgw/join).

---

## Bambu Lab Vortek: výměna trysek jako šicí stroj

Bambu Lab ukázalo systém Vortek — tool changer, který bude součástí chystané tiskárny H2C. Jak to funguje?

- Celý hotend vyjede nahoru a vymění se za jiný — **během zlomku sekundy**
- Každá tryska má vlastní nahřívání přes **indukci** — proto tak rychlý start
- Bezdrátová komunikace (pravděpodobně NFC) — tryska hlásí svou teplotu a stav heat sinku
- Až **7 hotendů** (1 hlavní + 6 vyměnitelných)
- Zero waste — žádné plýtvání materiálem při výměně barvy (jen čistící věž zůstává)

Když jsem si pustil video na 0,25× rychlosti, bylo krásně vidět, jak si tiskárna nabere trysku, docvakne ji a jede dál. V plné rychlosti to ani nezaregistrujete.

---

## Bondtech INDX: jiný přístup, stejný cíl

Pro srovnání jsme se podívali i na INDX řešení od Bondtechu, které cílí na Prusa tiskárny (potenciálně Core One, spíš XL). Jiný koncept:

- Tool changer s **lištou trysek** na přední straně rámu
- Každá tryska má vedení filamentu přímo u sebe
- Na Voron 350 se vejde až 9 trysek
- Na Core One by se teoreticky vešlo 4-5 do předního prostoru

Technologicky je to komplexnější než Vortek, ale taky velmi elegantní. Uvidíme, kdy (a jestli) se to dostane do produkce.

---

## Core One na streamu: první ASA tisk

Mezitím jsem pustil tisk na Core One — Sub-Zero figurku z modré Fiberlogy ASA. Pár postřehů:

- **Fiberlogy ASA** na 260 °C trochu čmoudí při výměně filamentu — nic dramatického, ale viditelné
- Zasouvání filamentu vyžaduje ostřižení špičky — vstup do hotendu není tak plynulý
- **Prusa Connect** funguje, ale vždy se musíte přepnout na displej tiskárny pro potvrzení tisku — bezpečnostní opatření
- Tisk samotný běžel bez problémů

---

## Slicerové triky: uniformní povrch tisku

Na konci streamu jsme se ponořili do nastavení sliceru pro lepší povrch. Hlavní problém: tiskárna na převisech zpomaluje, což vytváří viditelné přechody (lesklé vs. matné plochy).

### Řešení v PrusaSliceru:

1. **Automatická rychlost** — nastavíte maximální objemový průtok (třeba 15 mm³/s) a slicer si sám spočítá optimální rychlost pro každý úsek
2. **Snížit rychlost vnějšího perimetru** — vnitřek může jet rychle, vnějšek zpomalte pro uniformní povrch
3. **Minimální čas vrstvy** — zajistí dostatečné chlazení malých vrstev (komíny, špičky)
4. **Vyhlazení extruze** (ironing) — pro úplně hladké horní plochy

Klíč je, aby vnější perimetr jel co nejvíce konstantní rychlostí — pak je povrch barevně i texturově uniformní.

---

## Shrnutí

- **Bambu Vortek** vypadá jako revoluce v multi-materiálovém tisku — rychlost výměny je šílená
- **Bondtech INDX** je zajímavá alternativa pro Prusa/Voron ekosystém
- **H2C** s Vortekem by měla přijít v prvním kvartálu příštího roku
- **PrusaSlicer** má užitečné funkce pro uniformní povrch — automatická rychlost a vyhlazení
- Core One tiskne z ASA bez problémů, ale drobné neduhy (vstup filamentu, potvrzování tisku) zůstávají
