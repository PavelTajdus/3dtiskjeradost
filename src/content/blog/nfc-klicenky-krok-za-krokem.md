---
title: "NFC klíčenky: jak je navrhnout, vytisknout a naprogramovat"
pubDate: "2025-10-16T12:00:00.000Z"
updatedDate: "2025-10-16T12:00:00.000Z"
description: "Krok za krokem jsem ukázal, jak vytvořit 3D tištěnou klíčenku s NFC čipem. Od návrhu v Onshape, přes slicování s výměnou barvy, až po naprogramování čipu přes mobil."
heroImage: "https://img.youtube.com/vi/aIFI9HV6eHU/maxresdefault.jpg"
tags: ["Youtube streamy"]
draft: false
---

Přišly mi NFC čipy z AliExpressu a z Láska Kitu, tak jsem si řekl — uděláme z toho klíčenky. Na streamu jsem ukázal celý postup od návrhu přes tisk až po naprogramování čipu.

> Celý stream si můžete pustit [na YouTube](https://www.youtube.com/watch?v=aIFI9HV6eHU).

---

## Co jsou NFC čipy a na co se hodí

NFC (Near Field Communication) tagy jsou malé samolepicí čipy, které si naprogramujete přes mobil. Přiložíte telefon a ten otevře web, připojí se na WiFi, zobrazí kontakt — cokoliv nastavíte.

Používám dva typy:
- **NTag 213** — základní, levnější, kratší dosah
- **NTag 215** — kvalitnější, lepší dosah (cca 4–5 mm), cena kolem 10 Kč/kus na Láska Kitu

Čipy jsou malé (11 × 21 mm ty obdélníkové, kolečka mají průměr 25 mm) a krásně se vejdou do 3D tištěné klíčenky.

---

## Naprogramování: 30 sekund práce

1. Stáhněte si aplikaci **NFC Tools** (oranžová ikonka, zdarma)
2. Přiložte čip k telefonu → přečte se typ a kapacita
3. Záložka **Write** → Add record → URL (nebo WiFi, kontakt, cokoliv)
4. Zadejte adresu (třeba váš eshop, portfolio, vizitku)
5. Klikněte **Write** a přiložte čip → hotovo

Od teď kdokoliv přiloží telefon ke klíčence a otevře se mu váš web. Na mých klíčenkách mám nastavený odkaz na eshop Hotend.cz.

---

## Návrh klíčenky v Onshape

Pro modelování používám **Onshape** — je zdarma (veřejné soubory) a běží v prohlížeči. Na klíčenku nepotřebujete žádné pokročilé znalosti.

Základní postup:
1. **Obdélník** 70 × 15 mm (dost velký na čip 11 × 21 mm)
2. **Díra na kroužek** — kružnice 7,5 mm na jednom konci
3. **Extrude** na výšku 3 mm — standard pro klíčenky
4. **Chamfer/Fillet** — zaoblení hran pro příjemný pocit v ruce
5. **Text** — přidáte nápis (logo, URL, jméno) vysunutý o 0,6 mm (3 vrstvy po 0,2 mm)

Vystouplý text umožňuje **jednoduchou výměnu barvy** — tisknete jednu barvu, v určité vrstvě pozastavíte tisk, vyměníte filament a pokračujete. Žádné AMS nepotřebujete.

---

## Slicování s výměnou barvy

V OrcaSliceru (nebo PrusaSliceru):
1. Importujte STL klíčenky
2. Najděte vrstvu, kde začíná text (přepněte na náhled vrstev)
3. Přidejte **změnu filamentu** (filament change) na tu vrstvu
4. Tiskárna se pozastaví, vyměníte barvu a jedete dál

Výsledek: dvoubarevná klíčenka s jedinou výměnou. Když tisknete jednu klíčenku, je to pohodlné. Na sto klíčenek (jako já pro zakázky) se vyplatí swap mod na A1 mini.

---

## Kam vložit NFC čip

Čip vlepíte **dovnitř klíčenky** — buď vymodelujete kapsu v modelu, nebo jednoduše nalepíte čip ze zadní strany a zakryjete druhou vrstvou. U mých hotendáckých klíčenek mám čip schovaný uvnitř, takže zvenku nic nevidíte a přitom to funguje.

---

## Tipy z praxe

- **NTag 215 má lepší dosah** než 213 — přečte se i přes 3 mm plastu
- **Chamfer místo filletu** na hranách — automaticky 45°, tiskne se bez problémů
- **0,6 mm výška textu** (3 vrstvy po 0,2 mm) je ideální kompromis — dostatečně viditelný, rychle se tiskne
- Pro hromadnou výrobu doporučuju **A1 mini se swap modem** — automatická výměna plátů
- Grafiku (logo, složitější tvary) připravte v grafickém programu a importujte jako SVG do Onshape

---

## Shrnutí

- NFC čip stojí 5–10 Kč, klíčenka se vytiskne za pár minut
- Naprogramování přes NFC Tools trvá 30 sekund
- Onshape na návrh je zdarma a stačí na to prohlížeč
- Výměna barvy v jedné vrstvě = dvoubarevná klíčenka bez AMS
- Skvělý dárek, vizitka, promo materiál nebo prostě sranda
