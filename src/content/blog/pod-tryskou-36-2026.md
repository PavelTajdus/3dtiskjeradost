---
title: "Pod tryskou 36/2026: barevný tisk s jednou výměnou na vrstvu"
pubDate: "2026-08-31T05:00:00.000Z"
description: "OrcaSlicer-ImageMap tiskne obrazové textury s jedinou výměnou filamentu na vrstvu, Polymaker ukázal odolnější HT-PLA Pro a tři otevřené projekty používají 3D tisk tam, kde drahá běžná řešení nedávají smysl."
tags: ["Newsletter"]
heroImage: "/content/images/2026/08/pod-tryskou-36-2026-hero.webp"
---

# Pod tryskou 36/2026: barevný tisk s jednou výměnou na vrstvu

Nejzajímavější novinka tentokrát není další krabice s vyšším číslem rychlosti. Je to upravený OrcaSlicer, který skládá barevný obraz na povrchu výtisku s jedinou výměnou filamentu na vrstvu. K tomu mám odolnější PLA do tepla, tři užitečné projekty z běžných FDM tiskáren a jeden rozumně jednoduchý patent na automatické sundávání výtisků.

---

## Obraz na výtisku s jedinou výměnou filamentu na vrstvu

OrcaSlicer-ImageMap je experimentální fork OrcaSliceru pro tisk obrazových textur na boční stěny modelu. Každá vrstva používá jen jednu barvu a slicer mezi vrstvami střídá pevně danou paletu. Výslednou barvu mění šířkou a přesahem vnějšího perimetru, takže spodní vrstvy různě prosvítají. U čtyřbarevné palety tak mašina nemusí během jediné vrstvy přepínat filament pořád dokola.

![Zkušební barevný výtisk obrazu Velká vlna vytvořený pomocí OrcaSlicer-ImageMap](/content/images/2026/08/orcaslicer-imagemap-print.webp)

Fork umí načíst textury a barvy z OBJ, glTF nebo GLB, promítnout obrázek na model a pracovat s CMYK, RGBW i vlastní paletou. Autor zveřejňuje beta sestavení pro Windows a macOS a píše, že je zkoušel na skutečné tiskárně. Pořád jde o aktivně vyvíjený fork, ne o hotovou funkci běžného OrcaSliceru.

Má to i limity. Čím víc barev paleta používá, tím vyšší je celý barevný cyklus vrstev a na strmých stěnách se optický efekt rozpadá. Za mě je ale jedna výměna na vrstvu podstatně zajímavější směr než další optimalizace čistící věže, která jen spotřebuje o něco méně filamentu.

[Zdroj: GitHub, OrcaSlicer-ImageMap](https://github.com/sentientstardust-dev/OrcaSlicer-ImageMap)

---

## HT-PLA Pro chce spojit snadný tisk s odolností po vyžíhání

Polymaker uvedl HT-PLA Pro, tedy houževnatější verzi svého PLA určeného pro teplejší prostředí. Podle technických dat má proti původnímu HT-PLA přibližně dvojnásobnou rázovou houževnatost a o 30 % vyšší pevnost spoje mezi vrstvami v ose Z. Tiskne se kolem 230 °C bez vyhřívané komory.

![Modrý filament Polymaker HT-PLA Pro s ukázkovými výtisky](/content/images/2026/08/polymaker-ht-pla-pro.webp)

Důležitá je hvězdička u odolnosti proti teplu. Bez zatížení materiál podle výrobce drží tvar i při vysoké teplotě, ale pro díly namáhané v teple je potřeba výtisk vyžíhat. Třicet minut při 100 °C má zvednout teplotu průhybu při zatížení 0,45 MPa z 56,3 na 107,6 °C. Vyžíhání může změnit rozměry, takže funkční díl je potřeba navrhnout a změřit s rezervou.

Čísla pocházejí od Polymakeru, ne z nezávislého srovnání. Přesto je to praktická volba pro člověka, který chce tisknout podobně snadno jako z PLA a potřebuje držák do auta nebo k teplejšímu stroji. Jen bych z názvu samotného neodvozoval, že nevyžíhaný díl automaticky nahradí ASA nebo polykarbonát.

[Zdroj: Polymaker](https://shop.polymaker.com/products/polymaker-ht-pla-pro)

---

## Senzor podzemní vody stojí stovky dolarů místo nedostupné specializované techniky

Tým Purdue University postavil snímač, který sleduje rychlost a směr pohybu podzemní vody. Uvnitř tištěného pouzdra je pole teplotních čidel. Z drobných rozdílů teploty dokáže systém odvodit, kudy voda v půdě proudí. Jeden kus vyjde na několik stovek dolarů a konstrukci může tým rychle upravit přímo v laboratoři.

![Výzkumník Purdue University drží 3D tištěný snímač proudění podzemní vody](/content/images/2026/08/purdue-groundwater-sensor.webp)

První prototypy podle univerzity běžely pod vodou sedm až osm měsíců bez poruchy. Další testy proběhnou ve studních USGS a v mokřadu spravovaném Purdue. Návrh je zatím patentovaný prototyp, ne hotový měřák, který si vytiskneš doma a hned s ním získáš vědecká data.

Zajímavý je hlavně způsob vývoje. 3D tisk tu nenahrazuje citlivou elektroniku, ale umožňuje levně vyrábět tělo čidla, měnit geometrii a nasadit víc měřicích bodů. Přesně tam FDM dává smysl, když běžný specializovaný přístroj existuje jen v pár kusech.

[Zdroj: Purdue University](https://ag.purdue.edu/news/2026/07/purdue-researchers-use-3d-printing-to-make-open-source-alternative-to-costly-groundwater-sensors.html)

---

## Mechanická protéza nad loket nepotřebuje baterii ani servisní centrum

Studenti Queen's University vyvíjejí mechanickou protézu pro lidi s amputací nad loktem. Vzniká pro Burma Children Medical Fund na hranici Thajska a Myanmaru, kde tým už vyrábí jednodušší protézy na sedmi 3D tiskárnách. Běžné elektronické paže jsou tam drahé, obtížně opravitelné a závislé na bateriích.

![Prototypy mechanických a 3D tištěných protéz týmu Queen's University](/content/images/2026/08/queens-3d-printed-prosthetic.webp)

Nová konstrukce používá postroj a pohyb těla. Za dva roky vývoje tým dostal systém do stavu, kdy zvládá samostatně ovládat loket i jednotlivé prsty bez motorů a elektroniky. Tištěné díly zároveň může místní pracoviště upravit podle konkrétního člověka a po poškození znovu vyrobit.

Projekt má zveřejnitelnou dokumentaci a studenti už ukázali technický návrh na soutěžích, ale vývoj pokračuje podle připomínek pacientů a místních techniků. Není to univerzální zdravotnický model ke stažení bez odborného nasazení. Je to dobrá ukázka, proč otevřená konstrukce a opravitelnost někdy znamenají víc než další servomotor.

[Zdroj: Queen's University](https://www.queensu.ca/gazette/stories/queen-s-students-develop-3d-printed-prosthetics)

---

## Tištěná pomůcka vrátila veteránce samostatné hraní bowlingu

Americké ministerstvo pro záležitosti veteránů navrhlo pro Francine Goode, veteránku letectva po amputaci, speciální pomůcku pro bowling. Dlouhá rukojeť jí dovolí zvednout a vést kouli bez běžného úchopu. Tým vytiskl několik verzí, zkoušel je přímo s Francine a podle její zpětné vazby upravoval délku, tvar i způsob vypuštění koule.

![Veteránka Francine Goode používá při bowlingu pomůcku s 3D tištěnými díly](/content/images/2026/08/va-3d-printed-bowling-stick.webp)

Výsledek není složitý robot ani drahá zakázková protéza. Je to konkrétní nástroj pro jednu činnost a jednoho člověka. Právě rychlé iterace jsou tady největší výhodou 3D tisku: změna modelu stojí pár hodin práce a další verzi může člověk rovnou vyzkoušet.

Za mě je to užitečná připomínka, že dobrý tištěný projekt nemusí oslnit složitostí. Musí vyřešit skutečný problém a jít upravit podle člověka, který ho bude používat.

[Zdroj: U.S. Department of Veterans Affairs](https://news.va.gov/147865/vas-3d-printed-bowling-stick-veteran-athletes/)

---

## Patent používá pohyb tiskárny k automatickému sundání dílu

Německá patentová přihláška DE102024135536A1 popisuje odnímatelnou čepel, kterou si po dokončení tisku převezme existující pohybová soustava mašiny. Vozík s nástrojem vede čepel po podložce, nejdřív pod malým úhlem podjede výtisk a pak ho druhým pohybem naklopí nebo odstrčí mimo tiskovou plochu.

Myšlenka šetří samostatný motor, lineární vedení i místo kolem podložky. Dokument počítá také s opakovaným pohybem, zatřesením a kamerou, která ověří, že je plocha opravdu prázdná. Pak by tiskárna mohla dokončit kus, sundat ho a sama spustit další úlohu.

Je to zveřejněná patentová přihláška, ne hotové příslušenství ani ověřený výrobek. Největší otázka bude přilnavost různých materiálů a riziko, že čepel poškodí plát, výtisk nebo přesnou mechaniku tiskárny. Jednoduchost nápadu se mi ale líbí víc než další velký robot postavený vedle mašiny.

[Zdroj: Google Patents](https://patents.google.com/?q=DE102024135536A1)
