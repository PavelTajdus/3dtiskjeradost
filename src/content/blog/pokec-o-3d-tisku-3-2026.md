---
title: "Pokec o 3D tisku: non-planar tisk, recyklace filamentu a výroba strun"
pubDate: "2026-02-10T12:00:00.000Z"
updatedDate: "2026-02-10T12:00:00.000Z"
description: "Na members streamu jsme rozebrali non-planar tisk z videa CNC Kitchen, diskutovali o recyklaci filamentů, podpoře projektu 3D Sfinx a koukali na výrobní linky na filamenty."
heroImage: "https://img.youtube.com/vi/T3OlaS_UHls/maxresdefault.jpg"
tags: ["Youtube streamy", "Members only", "Pokec o 3D tisku"]
draft: false
---

Dnešní Pokec byl bohatý — od non-planar tisku přes recyklaci filamentů až po čínské výrobní linky na struny. A samozřejmě tradiční komunální povídání.

> Celý stream si můžete pustit [na YouTube](https://www.youtube.com/watch?v=T3OlaS_UHls). Jedná se o members-only obsah — [členství od 45 Kč](https://www.youtube.com/channel/UCACAWyuYlpfH2Jn6HLhhGgw/join).

---

## Non-planar tisk: hladší povrch bez broušení

CNC Kitchen (Štefan) vydal skvělé video o upraveném Bambu Studiu, které umí **non-planar printing** — místo rovných vrstev tryska mírně zvedá/klesá Z osu podle tvaru objektu.

### Jak to funguje:
Normálně máte na šikmém povrchu "schody" — každá vrstva 0.2 mm vytvoří viditelný skok. Non-planar tisk tyto přechody zjemní tím, že tryska se plynule zvedá a klesá v rámci jedné vrstvy.

### Kdy to dává smysl:
- **Příprava na broušení** — výrazně méně práce s plničem a brusem
- **Kulaté/šikmé objekty** — helmy, kryty, figurky
- **Vyšší vrstvy** (0.3 mm) — víc materiálu na "ubírání", lepší výsledek

### Limity:
- Funguje jen do určitého úhlu sklonu
- Potřebujete speciální upravenou verzi Bambu Studia (na GitHubu)
- Ne každý hotend to zvládne — záleží na tvaru trysky
- Není to mainstream funkce (zatím)

Pokud brousíte 3D tisky pravidelně, tohle může být důvod, proč přejít na Bambu Studio.

---

## 3D Sfinx: podpora českého výrobce filamentů

Lukáš z **3D Sfinx** (3ds.cz) je český výrobce filamentů z Jablonce. Normální týpek, který řeší stejné problémy jako my všichni. Připravuje PLA filament a má kvalitní ASA.

Jak ho podpořit:
- Kupte si jeho filamenty na 3ds.cz
- **Sbírejte prázdné špulky** a posílejte mu je (nebo mně, já přeposílám hromadně)
- Dejte mu feedback na Discordu (nick Brenen)

Sbírám špulky od Devil Designu, Spektra a dalších — Lukáš je recykluje a znovu používá.

---

## Recyklace filamentu: proč to zatím nefunguje

Diskutovali jsme o projektech jako **Eco MB** (už nefungují) a **3D Evo** (profesionální drtič + extruder). Hlavní problém:

- Recyklovaný filament je **dražší** než nový z granulátu
- Kvalita je **horší** — horší vlastnosti, nestabilní průměr
- Thomas Sanlanderer ukázal, že i při 80 % čistého granulátu to není ideální

**Dokud nebude dotace nebo jiná podpora**, recyklace filamentu nedává ekonomicky smysl. Je to smutné, ale realistické. Přitom peníze na spalování odpadu stát dává — proč ne na recyklaci?

---

## Výrobní linky na filament

Ze zvědavosti jsme koukali na výrobní linky:

- **3D Evo** — profesionální, ale drahý (desítky tisíc €)
- **Čínská linka z AliExpressu** — kompletní set za ~160 000 Kč. Reálně dává víc smysl než malý domácí drtič
- **Boco.cz** — český výrobce průmyslových linek (milionové částky, ale i struny do sekaček)

Pro domácí výrobu filamentu to stále nedává smysl. Pro specializované směsi a laboratorní účely ano.

---

## Shrnutí

- **Non-planar tisk** z upraveného Bambu Studia výrazně zlepšuje povrch šikmých ploch
- **3D Sfinx** (3ds.cz) — podpořte českého výrobce filamentů, sbírejte mu špulky
- **Recyklace filamentu** zatím ekonomicky nevychází — dražší a horší než nový
- Čínská výrobní linka za 160K dává víc smysl než domácí drtič
- Hotend.cz filament se nechystá — to je úplně jiný obor
