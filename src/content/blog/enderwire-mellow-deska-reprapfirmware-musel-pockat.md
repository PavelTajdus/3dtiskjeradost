---
title: "Enderwire na Mellow desce: RepRapFirmware musel počkat"
pubDate: "2026-05-07T20:00:00.000Z"
updatedDate: "2026-05-07T20:00:00.000Z"
description: "Veřejný stream z přestavby Enderwire na Mellow Fly E3 Ultra. RepRapFirmware nakonec musel počkat, protože desce chyběl WiFi modul, takže jsme nejdřív rozchodili Klipper."
heroImage: "/content/images/youtube/ofxoEGkubI0.jpg"
tags: ["Youtube streamy", "Enderwire", "RepRapFirmware", "Klipper"]
draft: false
---

Tenhle stream měl být o tom, jak Enderwire rozjedeme na **RepRapFirmware**. Jenže realita servisních streamů je taková, že plán vydrží asi pět minut. Mellow Fly E3 Ultra dorazila bez WiFi modulu, takže jsme změnili směr: nejdřív přehodit kabeláž, nechat Raspberry Pi ve hře a rozchodit tiskárnu přes Klipper.

> Celý stream si můžete pustit [na YouTube](https://www.youtube.com/watch?v=ofxoEGkubI0).

---

## Co je Enderwire

Enderwire je starší přestavba Enderu na styl **Voron Switchwire / CoreXZ**. Není to dokonalá moderní tiskárna, ale jako projekt na hraní a učení je skvělá. Člověk pochopí mechaniku, kabeláž, firmware a všechny ty drobnosti, které u hotové krabicové tiskárny vůbec neřeší.

Tenhle konkrétní kus běžel na Klipperu s původní elektronikou a Raspberry Pi. Cíl byl zjednodušit elektroniku a zkusit Mellow desku, na které může běžet RepRapFirmware. Teoreticky pěkné: jedna deska, drivery v ceně, webové rozhraní, žádné extra Raspberry.

## Mellow Fly E3 Ultra vypadá dobře, ale pozor na WiFi

Deska sama o sobě působí zajímavě. Formátově sedí do Ender 3 světa, má integrované TMC drivery, dost konektorů, CAN, výstupy pro ventilátory a výměnné mosfety. Za cenu pod tisíc korun to vůbec nevypadá špatně.

Jenže hned na začátku přišlo zjištění, že konkrétní varianta nemá osazený **ESP WiFi modul**. A to je u RepRapFirmware docela zásadní problém, protože bez sítě člověk přijde o pohodlné webové rozhraní a celé kouzlo „všechno na jedné desce“ se rozpadá.

Takže titulek streamu byl trochu zavádějící. RepRapFirmware se nekonal naplno. Ne proto, že by to nešlo, ale protože bez WiFi modulu to nedávalo smysl tahat přes koleno.

## Záloha configu a překáblování

Než jsem začal cokoliv trhat ven, stáhl jsem si původní Klipper config. To je přesně ta věc, kterou člověk nechce podcenit. Když se něco pokazí, mít možnost vrátit se k původní konfiguraci je k nezaplacení.

Pak přišla klasická servisní část: stará deska ven, nová deska dovnitř, projít konektory, endstopy, termistory, hotend, bed, ventilátory a napájení. Na papíře jednoduché. V reálu hromada drobných rozhodnutí typu „kam vede tenhle kabel“ a „proč je tady Z endstop, když používám sondu“.

Enderwire je navíc přestavba. To znamená, že část věcí je původní Ender, část věcí je Voron/Switchwire styl a část věcí je prostě dobová improvizace. Přesně ten typ stroje, který člověka naučí víc než deset hotových návodů.

## Místo RepRapFirmware přišel Klipper

Protože WiFi modul chyběl, dávalo největší smysl nechat Raspberry Pi funkční a novou desku rozchodit přes Klipper. Mellow má referenční config pro E3 Ultra, takže jsme měli aspoň rozumný start.

Firmware pro čip **STM32H723** šel připravit a nahrát přes SD kartu. Tohle byla ta příjemnější část. Horší byla konfigurace pinů, protože starý config z původní desky samozřejmě nešel jen tak překopírovat.

U CoreXZ je potřeba dávat pozor na kinematiku. Y osa zůstává samostatná, X a Z spolupracují jinak než u běžného cartesian Enderu. Když se piny nebo směry spletou, tiskárna se nechová „trochu špatně“. Chová se úplně jinak, než člověk čeká.

## Termistory, ventilátory a klasické pinové radosti

U teplot se rychle ukázalo, že nestačí jen zapojit kabel a doufat. Když termistor ukazuje nesmysl, první podezření je špatný typ v configu. U podobných přestaveb je `Generic 3950` často první věc, kterou člověk zkusí.

Ventilátory byly další drobná radost. Na desce jsou výstupy s konkrétními piny a když se člověk trefí vedle, nic nefouká. Ve streamu padaly piny typu **PD14** a **PD15**, což hezky ukazuje realitu podobného debugování: člověk přepíná, restartuje, zkouší a čeká, co se konečně roztočí.

Bed i hotend se nakonec podařilo otestovat, ventilátory se daly řešit a tiskárna postupně začala ožívat. Žádná naleštěná instalace na deset minut. Spíš poctivý večer ve stylu „tohle musí být ono, ne? aha, tak není“.

## Co z toho plyne

Mellow Fly E3 Ultra za ty peníze nevypadá špatně. Jen je potřeba dobře hlídat, jakou variantu člověk kupuje. Pokud chcete RepRapFirmware kvůli webovému rozhraní a jednoduchému provozu bez Raspberry Pi, **WiFi modul není detail**. Je to věc, která rozhodne, jestli ten plán dává smysl.

Zároveň se potvrdilo, že přestavba starší tiskárny je dobrá škola. Člověk řeší věci, které u hotového stroje nevidí: piny, termistory, napájení, výstupy ventilátorů, config, firmware a mechaniku. Je to občas opruz, ale přesně v tom je hodnota.

## Co bude dál

Další krok je jednoduchý: dorazit WiFi modul, vrátit se k RepRapFirmware a zkusit Enderwire rozchodit tak, jak byl původní plán. Teprve pak bude férové říct, jestli Mellow deska dává pro podobnou přestavbu smysl.

Pro tenhle stream je závěr jasný: RepRapFirmware musel počkat, ale Enderwire dostal novou elektroniku a máme dobrý základ pro další pokus.
