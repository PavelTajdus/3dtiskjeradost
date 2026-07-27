---
title: "Enderwire na RepRapFirmware: Wi-Fi modul a ostré nasazení"
pubDate: "2026-05-21T12:00:00.000Z"
updatedDate: "2026-05-21T12:00:00.000Z"
description: "Pavel Tajduš konečně nasadil RepRapFirmware na Enderwire, rozchodil Wi-Fi modul ESP32-ETH a vyladil homování Core XZ."
heroImage: "/content/images/youtube/W7RyScuLdKc.jpg"
tags: ["Youtube streamy", "Pokec o 3D tisku", "Enderwire", "RepRapFirmware"]
draft: false
---

Minule nám chyběl Wi-Fi modul. Tentokrát dorazil, takže jsem se pustil do toho, co jsem slíbil: RepRapFirmware na Enderwire opravdu nasadit a dostat tu mašinu do použitelného stavu. Trvalo to skoro tři hodiny a bylo to místy dost divoké.

> Celý stream si můžete pustit [na YouTube](https://www.youtube.com/watch?v=W7RyScuLdKc).

## Wi-Fi modul a první zmatek s firmwarem

Modul, který dorazil, je ESP32-ETH, tedy varianta s Ethernetem. To je vlastně lepší, než jsem čekal, protože kabel je spolehlivější než Wi-Fi. Jenže hned na začátku jsem narazil na klasiku: stáhl jsem špatný firmware. BTT má pro E3 Ultra víc souborů, než by člověk čekal, a chvíli trvalo, než jsem pochopil, že potřebuju konkrétně variantu pro ESP32-ETH, ne obecný ESP32 soubor.

SD kartu jsem naformátoval oficiální utilitkou od sdružení SD karet. Stupidní appka, ale funguje a nedělá problémy s oddíly. Na kartu pak přišly tři věci: firmware pro desku, firmware pro Wi-Fi modul a složka `www` s Duet Web Control.

## Generátor konfigurace a config.g

RepRapFirmware se konfiguruje přes G-kód soubory, hlavně `config.g`. Použil jsem online konfigurační generátor, kde jsem nastavil Core XZ kinematiku, rozměry 230 x 200 mm, endstopy na maximech a BLTouch na pinu PC5. Výsledný JSON jsem si otevřel ve VS Code, přehledně naformátoval a ručně opravil název Wi-Fi modulu na `ESP32-ETH`.

Jeden záludný detail: generátor mi do JSON zapsal obecný `ESP32`, ale deska hledala soubor podle přesného názvu. Jakmile jsem to opravil a přeflashnul SD kartu, firmware naběhl a Duet Web Control se otevřel v prohlížeči. Přihlášení proběhlo, tiskárna odpověděla. To byl první větší úspěch večera.

## Homování Core XZ a ladění maker

Tady to začalo být opravdu zábavné. Core XZ kinematika znamená, že oba Z motory pohybují zároveň osou X i Z. Když se při `Home X` točí jen jeden motor, jede hlava šikmo a nic nedává smysl.

Problém byl ve více vrstvách najednou. Zaprvé špatně nastavené směry motorů v `M569`. Zadruhé homovací makra vygenerovaná generátorem počítala s kartézskou tiskárnou, ne s Core XZ. Parametr `H2` v `G1` příkazu způsoboval, že se při pohybu aktivoval jen jeden motor místo obou. Po přepnutí na `H1` a úpravě maker se oba motory začaly točit správně.

Další věc byl endstop na maximu osy X. Generátor předpokládal minimum, takže jsem musel v `M574` nastavit `X2` místo `X1`. Rychlosti homování jsem zvedl z výchozích hodnot na rozumných 3000 mm/min pro rychlý nájezd a 1000 mm/min pro pomalý dotyk.

## Teploty a PID tuning

Hotend i bed se zpočátku odmítaly nahřívat. Příčina byla dvojí. Jednak jsem měl v konfiguraci špatně nastavený pull-up rezistor pro termistor, jednak jsem si pletl režimy Active a Standby. RepRapFirmware umožňuje nastavit dvě různé teploty pro každý nástroj: aktivní teplotu při tisku a standby teplotu, když nástroj zrovna netiskne. Dokud jsem nepochopil, že musím přepnout do režimu Active, hotend se prostě nehřál.

Po opravě jsem spustil PID autotuning hotendu příkazem `M303`. Výsledné hodnoty jsem zapsal do `M307` v `config.g`. Bed tuning jsem na streamu nedokončil, protože 24V podložka se ladí pomalu a čekat hodinu by bylo pro všechny utrpení.

## AI jako pomocník při ladění

Tohle byl moment, který stojí za zmínku. Otevřel jsem Codex od OpenAI, napsal jsem mu, co řeším, a on se sám připojil k rozhraní tiskárny, přečetl config a začal spouštět příkazy. Bez toho, abych na cokoliv klikal. Spustil mi PID tuning, navrhl opravy maker, vysvětlil rozdíl mezi `H1` a `H2` v G-kódu.

Pokud se bijete s konfigurací tiskárny a nevíte kudy kam, zkuste tohle. Ale pozor na jeden detail: nepoužívejte levné modely. GPT-4o mini nebo podobné varianty jsou rychlé, ale dělají chyby v technických věcech. Při ladění tiskárny to může nadělat více škody než užitku. Sáhněte po GPT-4.5, Claude Sonnet nebo Opus, a teprve pak to dává smysl.

## Kde jsme skončili

Na konci streamu tiskárna homuje správně ve všech osách, Duet Web Control běží přes Wi-Fi, hotend se nahřívá a PID je naladěný. LAN port zatím nefunguje, to bude na příště. Bed leveling přes mesh jsem nestihl, ale základ je funkční.

## Shrnutí

- Wi-Fi modul ESP32-ETH je na desce BTT E3 Ultra, přihlášení do Duet Web Control funguje i bez antény
- Firmware pro Wi-Fi modul musí mít přesný název odpovídající variantě modulu, jinak ho deska nenajde
- Core XZ homovací makra z generátoru jsou pro kartézskou tiskárnu a je potřeba je přepsat, zejména parametr `H` v `G1` příkazech
- Směry motorů se nastavují v `M569`, endstopy na maximu v `M574` s hodnotou `X2`
- Active a Standby jsou dvě různé teploty pro jeden nástroj, ne přepínač zapnuto/vypnuto
- AI agent jako Codex dokáže přímo ovládat tiskárnu přes API, ale jen s kvalitním modelem
