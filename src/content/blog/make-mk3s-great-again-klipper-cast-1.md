---
title: "Make MK3S Great Again: předělávám Průšu na Klipper (1. díl)"
pubDate: "2025-11-13T12:00:00.000Z"
updatedDate: "2025-11-13T12:00:00.000Z"
description: "Dostal jsem starou Prusa MK3S v žalostném stavu. Plán? Nové ABS díly, Raspberry Pi, Klipper a návrat legendy. Na prvním streamu jsme rozebrali tiskárnu, vyčistili ji a začali s montáží."
heroImage: "https://img.youtube.com/vi/PrY7tw83vxw/maxresdefault.jpg"
tags: ["Youtube streamy", "Prusa", "Klipper"]
draft: false
---

Dostal jsem starou Prusa MK3S — plně funkční, ale v žalostném stavu. Pavučiny, opotřebené díly, žádná konektivita. Plán? Kompletní předělávka s novými ABS díly, Raspberry Pi a Klipperem. Tohle bude vícedílný projekt.

> Celý stream si můžete pustit [na YouTube](https://www.youtube.com/watch?v=PrY7tw83vxw).

---

## Proč MK3S?

Na MK3S mám vřelé vzpomínky — je to tiskárna, na které vyrostla velká část české 3D tiskové komunity. Dneska je pomalá a bez konektivity, ale pořád solidní stroj. A s Klipperem z ní jde dostat výrazně víc.

Plus k tomu mám i **MMU3** — ale to si nechám na později. Nejdřív oživíme samotnou tiskárnu.

---

## Plán ve fázích

1. **Nové plastové díly** z ABS — hotovo (22 hodin tisku, cca 1 kg materiálu)
2. **Rozebrat a vyčistit** — dnešní stream
3. **Oživit s Raspberry Pi a Klipperem** — příště
4. **Volitelně: MMU3** — uvidíme

---

## Nové díly: zelená a transparentní

Všechny plastové díly jsem nechal vytisknout z ABS od Fiberlogy:
- **Light Green** — hlavní barva, nádherný zelený odstín
- **Transparentní ABS** — na displej a další díly, zajímavý efekt s viditelným gyroidem

Žádná oranžová — ta je ohraná. Celá sada vypadá skvěle, uvidíme jak bude vypadat na hotové tiskárně.

---

## Rozebírání: překvapení za překvapením

Stream začal klasicky — ležel jsem pod stolem a hledal kabely. Pak jsme se pustili do MK3S:

## Kabeláž
Kabely vedly všude možně — některé natavené, jiné podivně otočené. Chyběly dutinky na koncích, takže to chce přepájet. Bohužel pájku jsem neměl po ruce, takže kabeláž dokončíme příště.

## Hotend
Originální hotend v dost zuboženém stavu. V plánu je Dragon hotend — výkonnější a lépe se s ním pracuje.

## Elektronika
Stará Einsy deska — tu vyhodíme a nahradíme něčím modernějším pro Klipper. Raspberry Pi zajistí konektivitu a moderní rozhraní přes Fluidd nebo Mainsail.

---

## Printerhive kalkulačka — velký zájem

Na začátku streamu jsem ještě ukázal novou funkci [Printerhive](https://printerhive.com/cs) — **tiskovou kalkulačku**. Na pozadí běží reálný slicer (OrcaSlicer), takže výsledná cena není odhad, ale přesný výpočet z naslicovaného souboru.

Co kalkulačka počítá:
- Cena filamentu
- Spotřeba elektřiny
- Amortizace tiskárny
- Údržba (hotendy, trysky…)
- Daně a marže

Kalkulačku si můžete vložit přes iframe na vlastní web. I když tisknete pro kámoše zadarmo, projeďte to kalkulačkou — ať ví, kolik ten tisk reálně stojí.

---

## Jak daleko jsme se dostali?

Za 2,5 hodiny streamu:
- ✅ Kompletní rozebrání tiskárny
- ✅ Výměna plastových dílů rámu
- ✅ Čištění a kontrola mechaniky
- ❌ Kabeláž (chybí pájka a kleště na dutinky)
- ❌ Extruder (nestihli jsme)

---

## Co bude příště?

Dokončíme kabeláž, namontujeme extruder s novým hotendem a zkusíme tiskárnu oživit. Pokud všechno půjde hladce, nahodíme Klipper s Raspberry Pi a uvidíme, co tahle veteránka ještě dokáže.

MK3S s Klipperem — to by mohla být pěkná mašinka.
