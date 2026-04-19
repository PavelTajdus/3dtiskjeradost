---
title: "Servisní stream: Voron 2.4 zpátky v akci (pokračování)"
pubDate: "2026-01-29T12:00:00.000Z"
updatedDate: "2026-01-29T12:00:00.000Z"
description: "Pokračování servisu Vorona 2.4 — výměna přidřeného ventilátoru, nové tištěné díly, PID tuning a přidání filament senzoru. Tiskárna zase běží."
heroImage: "/content/images/youtube/qj7YX8Vgd3A.jpg"
tags: ["Youtube streamy", "Voron"]
---

Druhý díl servisu zákazníkova Vorona 2.4. Minule jsme diagnostikovali problém (přidřený ventilátor → přehřátý hotend → crash do podložky), dneska to dáváme do kupy.

> Celý stream si můžete pustit [na YouTube](https://www.youtube.com/watch?v=qj7YX8Vgd3A).

---

## Nové díly a výměna ventilátoru

## Viník: přidřený ventilátor
Ventilátor 4010 na chlazení heat breaku byl totálně zadřený — ani se nechtěl točit. To je příčina celého průšvihu. Nahradil jsem ho ventilátorem z vlastních zásob — není to originální Delta, ale na rozběhání stačí. Kvalitní kuličkový ventilátor objednám a vyměním později.

**Důležité:** Na Vorona **nedávejte Maglev ventilátory** (ani Noctua) — nesnesou otřesy při rychlém tisku. Kuličkové ložisko je nutnost.

## Nové tištěné díly
Vytiskl jsem kompletní sadu:
- Nové čelo toolheadu (staré bylo spálené od přehřátého hotendu)
- Držák Dragona
- Kompletní extruder (pro případ)
- Dvířka
- **Filament senzor** — jednoduchý design s mikrospínačem a kolečkem

## Extruder CW2: stále v kondici
Po rozborce jsem zkontroloval ozubená kola, ložiska i motor. Všechno v pořádku — CW2 je fakt odolný extruder. Jen jsem vyčistil filamentové zbytky z ozubených kol.

---

## Montáž a PID tuning

Smontoval jsem toolhead zpátky, zapojil konektory (ty mikro JST konektory na FYSTEC desce jsou peklo) a pustil testy.

## PID tuning hotendu
Pustil jsem PID autotune na 255 °C (ABS teplota). Po pěti cyklech výsledek:
- Teplota kolísá o **půl stupně** — výborné
- 50W tělísko stačí, ale ohřev je pomalejší než u Bambu tiskáren
- Konfiguraci uložit a hotovo

## Test ventilátorů
- **Delta fan na ofuk tisku** — fouká krásně, příjemný basový zvuk (žádné kvíčení)

---

## Filament senzor

Přidal jsem jednoduchý filament senzor vlastní výroby:
- **Mikrospínač** + kolečko v tištěném pouzdře
- Kolečko tištěné se scarf joint švem — hladké, bez viditelného švu
- Umístěný **před vstupem do extruderu** (ne uvnitř toolheadu)
- Když dojde filament, kolečko uvolní spínač → tiskárna se zastaví

Proč venku a ne v toolheadu? Jednodušší montáž, jednodušší výměna a spolehlivější detekce. Zůstane sice metr filamentu v PTFE trubce, ale to není problém.

---

## Tip: nylonová stahovací páska na PTFE

Můj osvědčený trik: **provléknu stahovací pásku skrz oplet kabeláže** a nechám ji volnou — PTFE trubka po ní krásně klouže a kabeláž se nemotá. Vypadá to jednoduše, ale výrazně to zlepšuje pohyb toolheadu.

---

## Stav po servisu

| Díl | Akce |
|-----|------|
| Ventilátor heat break | ✅ Vyměněn (dočasný, kvalitní objednán) |
| Tištěné díly toolheadu | ✅ Nové |
| Dragon hotend | ✅ Původní, funkční |
| Extruder CW2 | ✅ Vyčištěný, původní |
| PID tuning | ✅ Hotovo |
| Filament senzor | ✅ Přidán |
| Podložka | ⚠️ Poškrábaná, ale funkční |

---

## Shrnutí

- Voron 2.4 je **zpátky v provozu** po výměně ventilátoru a tištěných dílů
- CW2 extruder přežil havárii bez problémů — solidní konstrukce
- PID tuning ukazuje stabilní teplotu (±0.5 °C)
- Přidaný filament senzor zabrání budoucím problémům při dojití materiálu
- **Tip:** kuličkové ventilátory na Vorona, ne Maglev/Noctua
