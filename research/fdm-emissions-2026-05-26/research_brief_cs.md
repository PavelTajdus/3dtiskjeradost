# Research brief: splodiny z FDM/FFF 3D tisku

Datum: 2026-05-26  
Umístění dat: `/home/hermes/workspace/projects/3dtiskjeradost/research/fdm-emissions-2026-05-26`

## Co jsem prošel

- PubMed / Europe PMC / Crossref / OpenAlex / Semantic Scholar endpointy.
- Exa Research Paper API: 3 cílené dotazy, uložené v `exa/`.
- Parallel Search API: 3 cílené dotazy, uložené v `parallel/`.
- Perplexity/OpenRouter helper byl spuštěn, ale selhal na `OpenRouter HTTP 401: User not found`; nepoužil jsem jeho výstup jako zdroj.
- Firecrawl-backed `web_search` selhal na nedostatek kreditů, takže web fallback jsem neopakoval a opřel jsem se o akademické API + Exa/Parallel.

Výstup:
- `literature_records.json` — 413 hrubě deduplikovaných záznamů.
- `bibliography.md` — plná bibliografie z API.
- `relevant_studies.csv` — 112 relevantně filtrovaných studií.
- `key_studies.md` — 36 nejdůležitějších studií pro článek.
- `raw/`, `exa/`, `parallel/` — původní odpovědi API.

## Hlavní mapa problematiky

### 1) UFP: největší opakující se signál
FDM/FFF tisk běžně generuje ultrajemné částice, často pod 100 nm. Emisní míra se v literatuře liší o řády, protože závisí na materiálu, teplotě, tiskárně, geometrii, proudění a metodice měření. Meta-analýza z roku 2018 potvrzuje, že i přes metodickou roztříštěnost se opakuje závěr: dominantní částice jsou ultrajemné.

Praktická pointa pro čtenáře: nejde jen o “smrad”. I když nic dramaticky necítíš, můžeš mít v místnosti velké množství částic, které se dostanou hluboko do plic.

### 2) VOC: materiálově specifický chemický problém
VOC profil je silně závislý na materiálu a teplotě. U ABS/ASA se opakuje styren a další aromatické/sloučeniny z rozkladu. U nylonu se sleduje mimo jiné caprolactam. U PLA se typicky objevuje nižší rizikový profil než ABS, ale “PLA = nulové emise” je špatně. PETG/NGEN/PETG-like materiály mívají podle dostupných studií nižší VOC než ABS, ale pořád produkují UFP/VOC.

### 3) ABS je problémovější než PLA, ale PLA není kouzelně bezpečné
ABS v literatuře vychází jako častý “nejhorší běžný” materiál pro hobby prostředí: vyšší VOC, typicky styren, zápach, často vyšší částicové emise. PLA bývá nižší riziko, ale některé studie pořád měří UFP, VOC, případně buněčné/toxikologické efekty. Aditiva, barviva a kompozity mohou být důležitější než samotná zkratka materiálu.

### 4) Teplota trysky je páka, kterou lidi podceňují
Studie s řízenou teplotou ukazují, že vyšší teplota zvyšuje emise UFP a VOC. To je prakticky důležité: tisk “radši o 20 °C víc, ať to drží” může zhoršit vzduch v místnosti. U materiálů jako ABS/ASA/PC to má větší váhu.

### 5) Kompozity a aditiva: slepá skvrna hobby scény
CNT, kovové plnivo, barviva, flame retardanty nebo recyklované plasty mění složení emisí. Jsou studie na CNT/ABS, kovové složení částic a aditiva ve filamentech. Pro článek dobrá linka: “Nejhorší nemusí být značka PLA vs PETG, ale to, co výrobce přimíchal dovnitř.”

### 6) Zdravotní důkazy: už nejsou jen hypotéza, ale nejsou ani jednoduchá panika
Důkazová linie je složená:
- měření emisí v komorách a reálných místnostech,
- modelování vnitřní dávky v plicích,
- buněčné studie na dýchacích epitelech / A549,
- zvířecí inhalační studie,
- krátký experiment u dobrovolníků ABS vs PLA.

Závěr pro popularizační článek: nepsat “3D tisk způsobuje nemoc X”. Férové je: emise jsou reálné, některé složky jsou toxikologicky relevantní, krátkodobé studie ukazují měřitelné biologické signály hlavně u ABS, dlouhodobá epidemiologie u hobby uživatelů prakticky chybí.

### 7) Filtrace a větrání fungují, ale musí odpovídat typu emisí
HEPA řeší částice, aktivní uhlí řeší část VOC, větrání ředí obojí. Uzavřená tiskárna bez odtahu/filtru je hlavně box, ne řešení. Makerspace studie ukazuje, že snížení počtu současně běžících tiskáren, ventilace a vzdálenost od tiskáren umí výrazně snížit potenciální dávku.

### 8) Praktická hierarchie rizika pro hobby čtenáře
Hrubě, pro běžný článek:
1. ABS/ASA/PC/Nylon v obytné místnosti bez ventilace: špatný nápad.
2. Více tiskáren najednou v malé místnosti: násobí problém.
3. PLA/PETG nejsou bezemisní, ale jsou rozumnější volba do hobby prostředí.
4. Uzavřený box + HEPA + aktivní uhlí + odtah ven je nejpraktičtější kombinace.
5. Netisknout tam, kde spíš, pracují děti, nebo kde je špatná výměna vzduchu.

## Počty podle hrubé klasifikace

- core_emissions_measurement: 111
- health_toxicology: 72
- materials: 66
- workplace_indoor_air: 39
- mitigation_filtration: 27
- resin_or_other_am: 14

## Materiálové pokrytí v relevantní sadě

- ABS: 39 záznamů
- PLA: 39 záznamů
- PETG: 9 záznamů
- Nylon/PA: 5 záznamů
- ASA: 4 záznamů
- TPU: 4 záznamů
- PC: 4 záznamů
- kompozity/CNT/kovy: 9 záznamů

## Co z toho udělat v článku později

Doporučená osa článku:
1. “Ano, 3D tisk smrdí, ale důležitější jsou částice, které necítíš.”
2. Co jsou UFP a VOC lidsky.
3. Materiály: ABS/ASA vs PLA/PETG vs nylon/PC/kompozity.
4. Teplota a aditiva.
5. Co víme o zdraví a co nevíme.
6. Praktický checklist: větrat, boxovat, filtrovat, netisknout ABS v obyváku, minimalizovat teplotu, nekupovat divné kompozity bez důvodu.

## Pozor na formulace

- Nepsat: “PLA je bezpečné.” Lepší: “PLA bývá výrazně méně problematické než ABS, ale bezemisní není.”
- Nepsat: “Každý 3D tisk je karcinogenní.” Lepší: “U některých emisí a materiálů existují toxikologické signály a látky s jasným rizikovým profilem; expozici je rozumné snižovat.”
- Nepsat: “Enclosure to vyřeší.” Lepší: “Enclosure bez filtrace/odtahu hlavně drží emise uvnitř, ale při otevření se mohou dostat ven.”
