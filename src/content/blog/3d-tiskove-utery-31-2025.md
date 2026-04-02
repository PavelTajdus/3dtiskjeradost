---
title: "Pokec o 3D tisku: Bambu Lab H2C a Vortek v praxi"
pubDate: "2025-11-18T12:00:00.000Z"
updatedDate: "2025-11-18T12:00:00.000Z"
description: "Na members streamu jsme rozebrali čerstvě oznámenou Bambu Lab H2C s Vortek systémem. Jak rychle se mění trysky? Dává to smysl pro farmy? A proč je P2S pořád nejlepší volba pro většinu?"
heroImage: "https://img.youtube.com/vi/3HcwCYUy_es/maxresdefault.jpg"
tags: ["Youtube streamy", "Members only", "Pokec o 3D tisku", "Bambu Lab"]
draft: false
---

Bambu Lab na Form Nextu představilo H2C — svou nejpokročilejší tiskárnu s Vortek systémem výměnných hotendů. Na streamu jsme rozebrali, jak to funguje v praxi a pro koho to dává smysl.

> Celý stream si můžete pustit [na YouTube](https://www.youtube.com/watch?v=3HcwCYUy_es). Jedná se o members-only obsah — [členství od 45 Kč](https://www.youtube.com/channel/UCACAWyuYlpfH2Jn6HLhhGgw/join).

---

## Bambu Lab H2C: co to je

H2C je nová vlajková loď od Bambu Lab za 2 249 €. Hlavní novinka je **Vortek** — systém rychlé výměny celých hotendů místo klasického střihání a zavádění filamentu přes AMS.

### Jak to funguje v praxi

Zní to jako magie — výměna hotendu za 7-8 sekund. Ale realita je složitější:

1. Tiskárna ustřihne aktuální filament
2. Vyjede hotend nahoru a zaparkuje ho
3. Nabere nový hotend (to jsou ty slavné sekundy)
4. Počká na nahřátí přes indukci (~10 sekund u PLA)
5. Zavede nový filament z AMS
6. Očistí trysku na čistící věži
7. Pokračuje v tisku

Celý cyklus od tisku po tisk: **cca 47 sekund** (měřeno na videu u Thomase Sanlanderera). Není to špatné, ale není to ani ty úžasné sekundy z promo videí.

---

## Až 7 hotendů

Na jedné straně máte klasický duální hotend (jako H2D), na druhé straně lištu s vyměnitelnými hotendy. Celkem až 7 různých hotendů — můžete mít různé velikosti trysek, různé materiály, flexibilní i standardní.

Zajímavé: komunikace mezi tryskou a tiskárnou je **bezdrátová** — pravděpodobně NFC. Tryska hlásí svou teplotu i teplotu heat sinku. Pokud se špatně zacvakne, tiskárna to pozná.

---

## Pro koho to dává smysl?

### Nedává smysl pro farmy
Kdo provozuje tiskovou farmu, ten jede na **P2S**. Je to nejmodernější tiskárna v řadě, stojí zlomek ceny H2C a pro masovou výrobu jednobarevných tisků (klíčenky, díly, zakázky) je ideální. Za cenu jedné H2C máte skoro tři P2S.

Velké farmy (třeba Wiglitz s 1200 tiskárnami) jedou na X1C/P1S a nemají důvod přecházet na dražší stroje.

### Dává smysl pro kreativce
Pokud tisknete hodně vícebarevných nebo vícemateriálových tisků (třeba flex + PLA, nebo potřebujete různé velikosti trysek v jednom tisku), pak je H2C zajímavá. Žádné hovínka z čistící věže (resp. výrazně méně) a rychlejší výměny.

### Můj use case
Pro moje klíčenky a běžné tisky mi Vortek nedává smysl. Na plném plátu klíčenek je těch pár hovínek a kousek plastu z čistící věže zanedbatelných. Kdybych kupoval novou tiskárnu, spíš bych zvažoval **H2D s laserem** — vypálit logo do klíčenky laserem je výrazně detailnější než tisk.

---

## Printerhive kalkulačka — velký zájem pokračuje

Registrace do kalkulačky na [Printerhive](https://printerhive.com/cs) rostou — během streamu se hlásili noví uživatelé. Připomínám klíčové funkce:

- Na pozadí běží **reálný slicer** (OrcaSlicer)
- Cena není odhad, ale přesný výpočet
- Kalkulačka jde vložit přes iframe na vlastní web
- Nově pracujeme na tom, aby se poptávky daly rovnou vytisknout

---

## Shrnutí

- **H2C s Vortekem** je technologicky fascinující, ale prakticky to dává smysl jen pro specifické use case
- Výměna trysky trvá sekundy, ale celý cyklus s nahřátím a zavedením filamentu je **cca 47 sekund**
- Pro farmy a zakázkový tisk je **P2S** pořád nejlepší volba
- Pro kreativní vícebarevné/vícemateriálové tisky může být H2C zajímavá
- Cena 2 249 € — za tři P2S dostanete víc práce
