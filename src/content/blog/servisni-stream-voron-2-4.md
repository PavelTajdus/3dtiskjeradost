---
title: "Servisní stream: Voron 2.4 s ucpaným hotendem"
pubDate: "2026-01-27T12:00:00.000Z"
updatedDate: "2026-01-27T12:00:00.000Z"
description: "Zákazníkův Voron 2.4 přestal tisknout a zajel hotendem do podložky. Na streamu jsme diagnostikovali problém — přidřený ventilátor, přehřátý heat break a zapečený hotend."
heroImage: "https://img.youtube.com/vi/eGs62g1aZQU/maxresdefault.jpg"
tags: ["Youtube streamy", "Members only", "Voron"]
draft: false
---

Přivezli mi Vorona 2.4, kterého jsem sám stavěl. Tiskl, tiskl a najednou se rozhodl zajet hotendem 4 mm do podložky. Na streamu jsme to rozebrali a zjistili, co se stalo.

> Celý stream si můžete pustit [na YouTube](https://www.youtube.com/watch?v=eGs62g1aZQU). Jedná se o members-only obsah — [členství od 45 Kč](https://www.youtube.com/channel/UCACAWyuYlpfH2Jn6HLhhGgw/join).

---

## Co se stalo

Voron 2.4 s 0.8mm tryskou (mašina na velké díly z PETG a PLA pro firmu, která tiskne formy na betonové odlitky). Tisk jel normálně — první vrstva perfektní, čistící lajna v pořádku. A pak se hotend rozhodl jet dolů. Výsledek:

- **Rýha** v podložce
- Hotend **zapečený** v blobu materiálu
- Poškrábaná tisková podložka

---

## Diagnostika na streamu

### Krok 1: Rozborka toolheadu

Sundal jsem plexi panely (klipy na Voronu jsou geniální — prostě sundáte), odpojil konektory a vytáhl celý toolhead.

### Krok 2: Co přežilo?

- **Dragon hotend** — přežil! Žádný zlomený heat break, jak jsem původně tipoval
- **Extruder CW2** — v pořádku, kolečka mají stopy opotřebení, ale fungují
- **LEDky** — fungují
- **Tryska** — vypadá OK
- **Hotend ventilátor** — **PŘIDŘENÝ**

### Krok 3: Příčina

Ventilátor na chlazení heat breaku se přidřel — přestal se točit. Tím pádem:

1. Heat break se přestal chladit
2. Materiál se začal tavit výš, než má
3. Hotend se ucpal
4. Extruder tlačil, ale materiál nešel — Extruder má sílu a vytlačil přehřázý hotend z uchycení
5. Hotend zajel do podložky

### Krok 4: Vyprostění

Nahřál jsem hotend na 150 °C přes displej a materiál se uvolnil. Dragon hotend vyšel celý — čtyři šroubky ho drží pevně, na rozdíl od V6, kde by se pravděpodobně zlomil heat break.

---

## Co se vyměňuje

| Díl | Stav |
|-----|------|
| Dragon hotend | ✅ Přežil |
| Tryska | ✅ OK |
| Extruder CW2 | ✅ OK |
| LEDky | ✅ OK |
| Hotend ventilátor | ❌ Přidřený, výměna |
| Tisková plocha | ❌ Poškrábaná |

---

## Poučení

- **Ventilátor na heat break je kritický** — když přestane foukat, je to průser
- Dragon hotend je odolnější než V6 — čtyři špalky vs. jeden tenký heat break
- **CW2 extruder** je solidní dělník — po tomhle incidentu stále funkční
- Na Vorona doporučuju **kvalitní ventilátory** (Sunon, Delta) místo levných čínských
- Šroubky na motoru extruderu **lepte** — motor se zahřívá a šroubky se povolují

---

## Tip: lepte šroubky

Dva šroubky, které na Voronu pravidelně lepím:
1. **Šroubek na ozubeném kolečku extruderu** — motor se zahřívá, šroubek se časem povolí
2. **Šroubek na motoru** — stejný důvod

Stačí kapka středně pevného zajišťovače závitů. Ušetříte si hodiny diagnostiky.

---

## Shrnutí

- Příčina: **přidřený ventilátor** → přehřátý heat break → ucpaný hotend → crash do podložky
- Dragon hotend přežil bez úhony — robustní konstrukce
- CW2 extruder je spolehlivý i po havárii
- Příště: smontujeme to zpátky, přidáme filament senzor a vrátíme zákazníkovi
