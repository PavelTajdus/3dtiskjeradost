---
title: "Klíčenky znovu a lépe: čtyřbarevný tisk na A1 mini"
pubDate: "2025-10-30T12:00:00.000Z"
updatedDate: "2025-10-30T12:00:00.000Z"
description: "Pokračování klíčenkového streamu — tentokrát s čtyřbarevným tiskem na A1 mini se swap modem. Návrh v Affinity Designeru, modelování v Onshape a automatická výroba."
heroImage: "/content/images/youtube/6u44vHFKW6A.jpg"
tags: ["Youtube streamy"]
---

Minulý klíčenkový stream nebyl úplně ono — tentokrát jsem to vzal pořádně. Čtyři barvy, oboustranná klíčenka se zapuštěným textem a automatický tisk na A1 mini se swap modem.

> Celý stream si můžete pustit [na YouTube](https://www.youtube.com/watch?v=6u44vHFKW6A).

---

## Proč znovu?

Na prvním klíčenkovém streamu jsme zvládli jednoduchou dvoubarevnou klíčenku s vystouplým textem a manuální výměnou barvy. Funguje to, ale chtěl jsem víc — čtyři barvy, text zapuštěný z obou stran a plně automatický tisk bez zásahu.

---

## Postup: od grafiky po hotovou klíčenku

## 1. Návrh v Affinity Designeru

Začínám v grafickém programu, ne přímo v CADu. Proč?

- Práce s textem a logem je v grafickém programu výrazně příjemnější
- Nastavíte si **72 DPI a milimetry** — pak rozměry přesně odpovídají v CADu
- Exportujete jako DXF a importujete do Onshape

Klíčenka má 70 × cca 15 mm. Text "htnd.cz" v černé, tečka červeně, pozadí bílé, základ černý. Čtyři barvy = čtyři výměny filamentu na vrstvu.

## 2. Modelování v Onshape

Import DXF do sketche → extrude:

- **Základ klíčenky**: 3 mm výška
- **Text spodní strana**: zapuštěný 0,6 mm (3 vrstvy) s offsetem od spodku
- **Text horní strana**: mirror + transform celého textu na druhou stranu

Klíčenka je oboustranná — ať ji otočíte jakkoliv, vždy je vidět logo. Text je zapuštěný, takže povrch je hladký a nic neodpadne.

Tip: **Transform** v Onshape funguje na rotate + translate. Nejdřív otočíte o 180°, pak posunete o tloušťku klíčenky.

## 3. Export po vrstvách

Každou barvu exportujete jako samostatné STL:
- Tělo klíčenky (černá)
- Text "htnd" (bílá)
- Tečka (červená)
- "cz" (modrá)

Spodek a vrch zvlášť — celkem 8 STL souborů. V OrcaSliceru je nastavíte jako objekty s přiřazenými barvami.

## 4. Tisk na A1 mini se swap modem

Tady se to teprve rozjede. A1 mini se swap modem umí:
- Automaticky vyměnit tiskový plát po dokončení tisku
- Nasadit nový plát a spustit další tisk
- Celý plát klíčenek bez zásahu

Nastavení sekvence barev je důležité — **od nejtmavší po nejsvětlejší**. Důvod: čištění trysky. Když jedete z černé do červené, drobný zbytek černé není vidět. Ale z bílé do černé by byl problém.

---

## Pár tipů na cestu

- **72 DPI v grafickém programu** — jinak vám nebudou sedět rozměry v CADu
- **Zapuštěný text** vypadá profesionálněji než vystouplý a méně se opotřebuje
- **Oboustranný design** — když už tisknete čtyřbarevně, udělejte obě strany
- **Sekvence barev**: tmavá → světlá pro čistší přechody
- **Čistící věž** sežere materiál — u masové výroby optimalizujte pořadí barev

---

## NFC uvnitř

Samozřejmě i do téhle klíčenky se vejde NFC čip. Nalepíte ho dovnitř před zapuštěním textu, zakryjete vrstvou plastu a máte chytrou vizitku, promo materiál nebo přístupový token — v klíčence, kterou si každý rád nechá.

---

## Shrnutí

- Čtyřbarevná oboustranná klíčenka se zapuštěným textem
- Workflow: **Affinity Designer → DXF → Onshape → OrcaSlicer → A1 mini**
- Automatický tisk díky swap modu — plát za plátem bez zásahu
- Sekvence barev od tmavé po světlou pro čisté přechody
- Kdo chce streamovou klíčenku — napište mi, přihodím k objednávce
