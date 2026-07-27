---
title: "Enderwire na RepRapFirmware: pokus o první tisk"
pubDate: "2026-05-28T12:00:00.000Z"
updatedDate: "2026-05-28T12:00:00.000Z"
description: "Pavel ladí Enderwire na RepRapFirmware od PID tuningu přes kalibraci extruderu až po první tisk benchmarku."
heroImage: "/content/images/youtube/LM_2iQSUK64.jpg"
tags: ["Youtube streamy", "Pokec o 3D tisku", "Enderwire", "RepRapFirmware"]
draft: false
---

Minule jsme dostali RepRapFirmware do použitelného stavu. Dneska přišel čas zjistit, jestli z toho konečně poleze i nějaký tisk. Spoiler: poleze, ale cesta k tomu trvala celé tři hodiny a zahrnovala PID tuning, kalibraci extruderu, ladění Z offsetu a pár momentů, kdy jsem byl přesvědčený, že jsem úplný debil.

> Celý stream si můžete pustit [na YouTube](https://www.youtube.com/watch?v=LM_2iQSUK64).

## PID tuning a záhada s ventilátorem

Po minulém streamu jsem mimo kamery ladil ventilátor hotendu. Zní to jako banalita, ale RepRapFirmware to řeší přes frekvenci a já jsem to nikdy předtím nedělal. Otevřel jsem Codex, nechal ho připojit se k tiskárně a společně jsme podle zvuku a chování ventilátoru naladili frekvenci. Taková věc, na kterou bych sám normálně ani nepomyslel.

PID tuning bedu trval minule přes hodinu, protože jsem ho omylem spustil na 50 % výkonu. Podruhé, na plný výkon, to zvládl za 40 minut. PID hotendu pak proběhl v klidu přímo na streamu, tentokrát správně od studené tiskárny. Výsledek vypadal zdravě, žádné přestřelování na 250 °C jako dřív.

## Kalibrace extruderu a záhada, která záhadou nebyla

Nastavená hodnota rotation distance byla E420. Vytlačil jsem 100 mm, vylezlo 98 mm. Přepočítal jsem to, nastavil E411,6, restartoval tiskárnu a znovu vytlačil 100 mm. Vylezlo opět 98 mm. Chvíli jsem z toho byl úplně mimo.

Pak mi někdo v chatu napsal, co jsem dělal špatně: měřil jsem výstup z trysky, ne úbytek filamentu před extruderem. Klasická chyba. Jakmile jsem přeměřil správně, čísla dávala smysl. Finální hodnota skončila někde kolem E428 a extruder tlačil, co má.

## Z offset a Core XZ kinematika

Tohle byl nejdelší boj večera. RepRapFirmware ukládá offset sondy v parametru Z příkazu G31 a já jsem tam měl nulu. Začal jsem ladit, tiskárna se mi odmítala sunout dolů, protože sonda hlásila sepnutí a firmware to bral jako překážku.

Přidal jsem záporný offset, pak kladný, pak jsem to celé killnul a začal znovu. Codex mezitím opravil i chybu v homovacím makru, kde jsem měl špatně nastavený párový pohyb motorů pro Core XZ osu. Předtím se při homování Z osa nezvedala nahoru, ale jela diagonálně. Po opravě to konečně fungovalo jak má. Z offset jsem doladil papírkem a baby steppingem přímo v Duet Web Control.

## Orca Slicer, makra a nastavení pro RepRapFirmware

Než jsem vůbec mohl tisknout, musel jsem vyřešit slicer. Stáhl jsem si omylem nějaký fork Orca Sliceru s otevřeným síťovým modulem, kde chyběly profily Voronů. Pak jsem zjistil, že Voron není na začátku abecedy a já jsem prostě nedojel na konec seznamu. Nakonec jsem přeinstaloval čistý Orca Slicer 2.3.

Firmware flavor jsem přepnul z Clipper na RepRap/Marlin, jinak Orca generovala příkazy jako `EXCLUDE_OBJECT`, které RRF nezná. Codex mi vygeneroval `print_start.g` a `print_end.g` makra přímo do systémové složky na SD kartě tiskárny. Makra přijímají parametry B pro teplotu bedu a H pro hotend, takže startovací Gcode v Orce vypadá čistě.

Narazil jsem ještě na jeden problém: Orca ve výchozím nastavení posílá do tiskárny příkaz M204 s nízkou hodnotou akcelerace a firmware si ji uloží natrvalo. Výsledek byl, že tiskárna jela celý tisk rychlostí šneka. Vypnul jsem odesílání limitů do Gcodu a nastavil akcelerace přímo ve firmware na rozumnějších 1500 mm/s².

## První tisk a co z toho leze

Spustil jsem nejdřív jednoduchý čtverec jako test první vrstvy. Výška vrstvy vypadala dobře, čistící lajnu udělal tiskárna hezky. Pak jsem hodil Benchi.

Výsledek byl... průměrný. Šedá PLA neodpustí vůbec nic a chlazení na tomhle toolheadu je slabé. Ventilátor fouká málo a na malých objektech to jde vidět na každém přesahu. Toolhead je navíc těžký, na stěnách je vidět rezonance. Říkám si, že by tam slušel nějaký lehčí toolhead, třeba CAN verze s menším kabelem.

Ale tiskárna tiskla. Na RepRapFirmware, bez Raspberry Pi, s jednou deskou. To byl cíl.

## Novinka v Printer Hubu a změny ve skladu

Na konci streamu jsem ukázal novou funkci v Printer Hubu: zapůjčení tiskárny. Nastavíte dostupné tiskárny, materiály, limity tisků a případně i cenu. Zákazník nahraje naslicovaný soubor, zaplatí kartou přes Stripe a tisk se spustí. Zásilkovna je integrovaná, takže se vygeneruje i štítek. Reálně to už pár lidí využilo.

Zmínil jsem také velkou změnu: prodejna se ruší, sklad se stěhuje do logistického centra. Eshop pokračuje dál, expedice by měla být rychlejší. Příští týden jde zboží na palety, pár dní výpadek expedice a pak jedeme z nového místa.

## Shrnutí streamu

- PID tuning hotendu proběhl správně od studené tiskárny, hodnoty vypadají zdravě
- Kalibrace extruderu: chyba byla v měření výstupu místo úbytku před extruderem, finální hodnota kolem E428
- Z offset vyladěn přes G31, opravena chyba párového pohybu motorů pro Core XZ
- Firmware flavor v Orca Sliceru přepnut na RepRap, vypnuto odesílání limitů akcelerace do Gcodu
- Makra print_start a print_end vygenerována Codexem a nahrána do systémové složky RRF
- První tisk Benchi proběhl, chlazení slabé, toolhead těžký, ale tiskárna funguje
- Printer Hub má novou funkci zapůjčení a prodeje tiskového času
- Prodejna se ruší, sklad přechází do logistického centra, eshop pokračuje
