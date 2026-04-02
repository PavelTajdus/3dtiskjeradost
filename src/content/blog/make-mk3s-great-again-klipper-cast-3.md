---
title: "Make MK3S Great Again: Klipper žije a tiskne! (3. díl)"
pubDate: "2025-11-27T12:00:00.000Z"
updatedDate: "2025-11-27T12:00:00.000Z"
description: "Třetí díl předělávky MK3S — nainstalovali jsme PrusaLink, připájeli piny pro Raspberry Pi, rozběhali Klipper s Mainsailem a vytiskli první testovací tisk na 250 mm/s."
heroImage: "https://img.youtube.com/vi/TuXnwCROYfM/maxresdefault.jpg"
tags: ["Youtube streamy", "Prusa", "Klipper"]
draft: false
---

Třetí díl a velký milník — MK3S s Klipperem tiskne! Od firmware update přes pájení pinů až po první tisk na 250 mm/s. Bylo to minimálně řečeno dobrodružné.

> Celý stream si můžete pustit [na YouTube](https://www.youtube.com/watch?v=TuXnwCROYfM).

---

## Firmware a PrusaLink

Začali jsme s aktualizací originálního firmware na nejnovější verzi — chci vědět, že tiskárna funguje, než se pustím do Klipperu. Self test prošel (na druhý pokus — zase jsem blbě odkliknul ventilátor).

Na Raspberry Pi jsem nahrál **Mainsail OS** a připojil ho k WiFi. Na první dobrou se chytil a web rozhraní naběhlo. Předtím jsem vyzkoušel i PrusaLink — funguje, ale pro Klipper ho nepotřebujeme.

---

## Pájení pinů pro Raspberry Pi

MK3S potřebuje specifické propojení mezi deskou a Raspberry Pi přes GPIO piny. Potřeboval jsem:

- **2×20 pinový header** s piny dlouhými 18 mm
- Já měl delší (12 mm viditelných), ale dalo se to

Pět pinů jsem odpáčil z větší lišty, zapájel do adaptéru a nacvakl na desku. Nebylo to úplně elegantní, ale funkční. Tip: kupte si rovnou správnou délku pinů — ušetříte si trochu nervů.

---

## Klipperizace: dz0ny repo

Pro instalaci Klipperu na MK3S jsem použil repo od [**dz0ny**](https://github.com/dz0ny/klipper-prusa-mk3s/tree/main) — komunitní konfigurace specificky pro Prusa MK3S s Klipperem. Obsahuje:

- Předpřipravený `printer.cfg` pro MK3S
- Nastavení pro Einsy desku
- Základní makra (home, mesh bed leveling, start/end G-code)

Instalace přes Mainsail proběhla bez větších problémů. Největší výzva bylo správné nastavení Z-offsetu — ten jsem musel ručně doladit.

---

## První tisk: 250 mm/s!

A pak přišel ten moment — první tisk na Klipperu. Začal jsem opatrně na 100 %, pak jsem postupně zrychloval:

- **120 mm/s** — v pohodě
- **170 mm/s** — stále OK
- **200 mm/s** — hotend na hranici průtoku (~15-16 mm³/s)
- **250 mm/s** — jde to! Na rovinkách tiskárna fičí

Při 250 mm/s byl flow na hranici toho, co hotend zvládne. Na rovinkách to šlo, ale u složitějších geometrií by to chtělo lepší hotend (Dragon nebo lepší). První vrstva i přes to, že podložka nebyla vyčištěná, vypadala slušně.

**100% úspěšnost prvního tisku na Klipperu.** To jsem nečekal.

---

## Co ještě zbývá

- **Doladit konfiguraci** — adaptive mesh, pressure advance, input shaper
- **Rychlostní testy** — benchy na různých rychlostech
- **Případně lepší hotend** — Dragon by odemknul vyšší průtoky
- **Propojení s [Printerhive](https://printerhive.com/cs)** — vzdálená správa přes Klipper

---

## Stav projektu

| Fáze | Status |
|------|--------|
| Nové ABS díly | ✅ |
| Rozebrat a vyčistit | ✅ |
| Kabeláž | ✅ |
| Extruder | ✅ |
| Firmware update | ✅ |
| Raspberry Pi + Klipper | ✅ |
| První tisk | ✅ 250 mm/s! |
| Kalibrace a ladění | 🔄 Příště |

---

## Shrnutí

- MK3S s Klipperem **tiskne až 250 mm/s** — z pomalé veteránky se stává závodník
- Instalace díky dz0ny repozitáři je relativně přímočará
- Pájení pinů pro RPi je jediná opravdu manuální práce
- Hotend je bottleneck — na vyšší rychlosti by chtělo upgrade
- Klobouk dolů před komunitou, která tohle umožnila
- Příště: kalibrace, input shaper a pořádné testovací tisky
