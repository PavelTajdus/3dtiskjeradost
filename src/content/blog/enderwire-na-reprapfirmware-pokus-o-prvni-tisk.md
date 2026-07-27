---
title: "Enderwire na RepRapFirmware: pokus o první tisk"
pubDate: "2026-05-28T12:00:00.000Z"
updatedDate: "2026-07-27T07:51:19.000Z"
description: "Enderwire na RepRapFirmware prošel PID tuningem, kalibrací extruderu, nastavením Z offsetu a nakonec vytiskl první Benchy."
heroImage: "/content/images/youtube/LM_2iQSUK64.jpg"
tags: ["Youtube streamy", "Pokec o 3D tisku", "Enderwire", "RepRapFirmware"]
draft: false
---

Minule jsme Enderwire dostali do stavu, kdy RepRapFirmware běžel, tiskárna se hýbala a topila, ale ještě netiskla. Teď přišel čas doladit PID, extruder, Z offset a slicer. Cíl byl jednoduchý: dostat z tiskárny první skutečný výtisk.

> Navazuje to na článek [Enderwire na RepRapFirmware: Wi-Fi modul a ostré nasazení](/blog/enderwire-reprapfirmware-wifi-ostre-nasazeni/). Celý dnešní stream si můžeš pustit [na YouTube](https://www.youtube.com/watch?v=LM_2iQSUK64).

## PID tuning a ventilátor hotendu

Po minulém streamu jsem mimo kameru ladil ventilátor hotendu. RepRapFirmware ho řídí pomocí frekvence PWM a já jsem to předtím nikdy nenastavoval. Nechal jsem Codex připojit k tiskárně a podle zvuku a chování ventilátoru jsme našli použitelnou frekvenci.

První pokus o PID tuning bedu jsem minule nedotáhl. Později jsem ho omylem spustil na 50 % výkonu a trval přes hodinu. Na plný výkon to zvládl zhruba za 40 minut. PID hotendu pak proběhl přímo na streamu, tentokrát správně od studené tiskárny a bez přestřelování k 250 °C.

## Kalibrace extruderu a chyba v měření

V konfiguraci jsem měl `M92 E420`, tedy přibližně 420 kroků extruderu na milimetr. Nechal jsem vytlačit 100 mm filamentu, ale naměřil jsem 98 mm. Hodnotu jsem přepočítal na `M92 E411.6`, restartoval tiskárnu a znovu dostal 98 mm. Chvíli jsem nechápal proč.

Pak mě chat upozornil na chybu: měřil jsem výstup z trysky, ne úbytek filamentu před extruderem. Jakmile jsem měřil správně, čísla začala dávat smysl. Finální hodnota skončila přibližně u `M92 E428`.

## Z offset a zbylá chyba v Core XZ makru

RepRapFirmware ukládá výšku sepnutí sondy v parametru Z příkazu `G31` a já tam měl nulu. Tiskárna se proto odmítala posunout níž, protože sonda hlásila sepnutí a firmware pohyb zastavil.

Jedna chyba zůstala také v homovacím makru pro osu Z. Párový pohyb motorů Core XZ nebyl nastavený správně a osa při části homování jela diagonálně. Codex makro opravil. Z offset jsem pak doladil papírkem a baby steppingem v Duet Web Control.

## OrcaSlicer, makra a RepRapFirmware

Nejdřív jsem omylem stáhl fork OrcaSliceru s otevřeným síťovým modulem a myslel si, že v něm chybí profily Voronů. Nakonec se ukázalo, že jsem jen nedojel na konec seznamu. Přeinstaloval jsem čistý OrcaSlicer 2.3.

Typ firmwaru jsem přepnul z Klipperu na RepRapFirmware/RepRap, aby slicer neposílal příkazy, které RRF nezná. Codex připravil makra `print_start.g` a `print_end.g` do systémové složky na SD kartě. Makra přijímají teplotu podložky a hotendu jako parametry, takže startovací G-code zůstal krátký.

Narazil jsem ještě na příkaz `M204 P500`, který OrcaSlicer posílal v G-code. RepRapFirmware pak pro běžící tisk držel akceleraci 500 mm/s², dokud jsem ji nepřenastavil. Tiskárna proto jela výrazně pomaleji, než měla. Odesílání limitů jsem v OrcaSliceru vypnul a akceleraci nastavil ve firmwaru na 1 500 mm/s².

## První Benchy

Nejdřív jsem vytiskl jednoduchý čtverec pro kontrolu první vrstvy. Vrstva vypadala dobře a tiskárna udělala čistou zaváděcí čáru. Pak jsem pustil Benchy.

Výsledek byl průměrný. Šedá PLA ukázala slabé chlazení na každém přesahu a těžký toolhead nechal na stěnách rezonance. Lehčí toolhead a lepší chlazení jsou další dvě věci, které by Enderwiru pomohly.

Tiskárna ale vytiskla celý model na RepRapFirmware, bez Raspberry Pi a jen s řídicí deskou. To byl hlavní cíl večera.

## Zapůjčení tiskárny v Printerhive

Na konci streamu jsem ukázal novou funkci v [Printerhive](https://printerhive.com/cs): zapůjčení tiskárny a prodej tiskového času. Nastavíš dostupné tiskárny, materiály, limity a případnou cenu. Zákazník nahraje připravený soubor, zaplatí přes Stripe a může si objednat také odeslání přes Zásilkovnu.

Ve streamu jsem ukázal celý průchod objednávkou. Nebyla to maketa obrazovky, ale funkční postup od výběru tiskárny po cenu a dopravu.

## Změny ve skladu Hotend.cz

V době streamu jsem také oznámil rušení prodejny a přesun skladu do logistického centra. E-shop pokračoval dál, měnila se jen expedice a fyzické umístění skladu.

## Shrnutí streamu

- PID tuning hotendu proběhl správně od studené tiskárny
- Extruder skončil přibližně na `M92 E428`; původní chyba byla v metodě měření
- Z offset jsem doladil přes `G31` a baby stepping
- OrcaSlicer už neposílá nízké limity akcelerace do každého tisku
- První Benchy se vytiskla, ale ukázala slabé chlazení a těžký toolhead
- Printerhive umí nabídnout tiskový čas a navázat na platbu i dopravu
