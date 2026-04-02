---
title: "Průša MK4S na servis: oprava, kalibrace a první multimateriálový tisk"
pubDate: "2025-12-11T12:00:00.000Z"
updatedDate: "2025-12-11T12:00:00.000Z"
description: "Přivezli mi nesestavenou MK4S s MMU3 a boxem na opravu. Na streamu jsme řešili nefunkční filament senzor, kalibraci Nextruderu a nechtěně jsem spustil svůj první multimateriálový tisk."
heroImage: "https://img.youtube.com/vi/b12TW_WTpA8/maxresdefault.jpg"
tags: ["Youtube streamy", "Prusa"]
draft: false
---

Zavolala mi paní, že potřebuje dát do kupy Průšu. Junior se pokoušel sestavit MK4S s MMU3 a boxem, ale nějak se to zaseklo. Přivezla mi celý ten moloch na prodejnu — a já se do toho pustil živě na streamu.

> Celý stream si můžete pustit [na YouTube](https://www.youtube.com/watch?v=b12TW_WTpA8).

---

## Co přišlo na stůl

Celý set: **MK4S + MMU3 + box** — obří kostka, kterou jsem sotva protáhl dveřmi. Na prodejně jsem to demontoval z boxu, oddělal PTFE trubky a začal diagnostiku.

Zajímavá cenová kalkulace z chatu:
- MK4S stavebnice: 16 990 Kč
- Box: ~9 000 Kč  
- MMU3: ~8 600 Kč
- **Celkem: ~33 800 Kč**

To je cena sestavené Core One — bez MMU a bez boxu. Nebo dvě P2S s AMS. Na zamyšlenou.

---

## Diagnostika: filament senzor nefunguje

Po zapnutí jsem projel všechny kalibrace. Většina svítila zeleně, ale **filament senzor odmítal detekovat filament**. Proto neprocházela kompletní kalibrace a tiskárna se zasekla.

Co jsem vyzkoušel:
1. Různé filamenty se zastřiženou špičkou
2. Kontrola konektoru senzoru
3. Rozborka extruderu a vizuální kontrola

Nakonec se ukázalo, že problém byl v špatně zasunutém konektoru filament senzoru — po přepojení vše naběhlo. Klasická montážní chyba, která dokáže potrápit i zkušenějšího tiskaře.

---

## Kalibrace MK4S: Nextruder a load cell

MK4S má oproti MK3S pár novinek v kalibraci:

## Load cell
Snímač síly na hotendu — citlivý na dotek, funguje výborně. Stačí se lehce dotknout trysky a čísla skáčou. Slouží pro přesné měření Z-offsetu a automatické levelování.

## Zarovnání převodovky
Nový krok v kalibraci — Nextruder má převodovku, která se musí správně zarovnat. Povolíte šrouby o 1,5 otáčky, necháte proběhnout automatickou kalibraci a zase dotáhnete. Není to složité, ale kdo to přeskočí, může mít problémy s extrudérem.

## Self test
Projel bez problémů — motory, ventilátory, vyhřívání, bed leveling. Tiskárna je mechanicky v pořádku.

---

## První tisk a neplánovaný multimateriál

Pustil jsem testovacího medvídka přes MMU3 — a nevšiml jsem si, že mám v jednom kanálu PLA a ve druhém PETG. Výsledek? **Můj první multimateriálový tisk v životě** — nechtěný, ale funkční!

PLA s PETG se k sobě úplně neváží, takže se daly od sebe oddělit. Čistící věž z PETG šla sundat celá a pod ní zůstalo čisté PLA. Kredit pro MK4S — zvládla to i s dvěma různými materiály a různými teplotami.

---

## Dojmy z MK4S

- **Nextruder** je mohutnější než extruder na MK3 — vodící tyče vypadají na desítky místo osmiček
- **Displej** je dotykový, ale ovládání kolečkem je příjemnější (na to je celý systém stavěný)
- **Tiskne dobře** — tady jsem problém nečekal - potvrzeno
- **Je docela tichá** — příjemně překvapilo
- Box dává smysl, pokud chcete uzavřený prostor — ale Core One to řeší elegantněji
- **MMU3** funguje, ale setup s externími špulkami a PTFE trubkami je pořád poměrně komplikovaný

---

## Shrnutí

- Nefunkční filament senzor = špatně zasunutý konektor — typická montážní chyba
- Kalibrace MK4S je přímočará, ale nesmíte přeskočit zarovnání převodovky
- MK4S tiskne spolehlivě a tiše
- První nechtěně multimateriálový tisk (PLA + PETG) zvládla výborně
- Celý set (MK4S + MMU3 + box) stojí tolik co sestavená Core One — zvažte, jestli to potřebujete
