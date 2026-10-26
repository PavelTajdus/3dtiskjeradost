---
title: "Pod tryskou 43/2026: hmatové čidlo z TPU a panoramatický foťák z tiskárny"
pubDate: "2026-10-19T05:00:00.000Z"
description: "Tištěné hmatové čidlo eFlesh, panoramatický fotoaparát Infidex, sušicí kryt pro AMS Lite, srovnání PC-ABS na třech tiskárnách a limity čisticí tyčky NoClogger."
tags: ["Newsletter"]
heroImage: "/content/images/2026/10/pod-tryskou-43-2026-hero.webp"
---

# Pod tryskou 43/2026: hmatové čidlo z TPU a panoramatický foťák z tiskárny

U hmatového čidla eFlesh mě zaujalo, že jeho pružnou část vytisknete z TPU a během tisku do ní vložíte magnety. Kromě něj jsem vybral pár starších projektů a nástrojů, ke kterým se dá pořád vrátit. Třeba funkční fotoaparát na film, u kterého stavitel otevřeně popisuje i opakovaný tisk těla.

---

## eFlesh: pružný výtisk, který pozná dotyk

Výzkumníci z New York University zveřejnili **eFlesh**, hmatové čidlo pro robotická chapadla nebo chodidla. Pružnou část vytisknou z **TPU**. Uprostřed tisku vloží do připravených kapes magnety a pak je dalšími vrstvami uzavřou. Když se výtisk zmáčkne, magnety změní polohu. Deska s magnetometrem, tedy čidlem magnetického pole, tu změnu změří.

![Pružná čidla eFlesh na robotické ruce a noze, návrh kapes pro magnety a postup jejich vložení během tisku](/content/images/2026/10/pod-tryskou-43-2026-eflesh.webp)

V repozitáři jsou nástroje pro návrh vlastního tvaru, postup tisku, kód i data pro učení čidla. Autoři používají **TPU 95A**. Samotný výtisk tedy nestačí, potřebujete ještě magnety, elektroniku a zpracování naměřených dat. Počítejte s programováním i kalibrací.

Docela se mi líbí možnost přizpůsobit čidlo konkrétnímu prstu chapadla. U malého robotického projektu si tak můžete vytisknout i část, která pozná kontakt s předmětem. Jak pracné je takové čidlo rozchodit doma, nevím. Nezkoušel jsem ho.

[Zdroj: tým eFlesh, princip a výroba čidla](https://e-flesh.com/) a [soubory, kód a postup na GitHubu](https://github.com/notvenky/eFlesh).

---

## SUNLU přidává k AMS Lite sušení během tisku

**AMS Lite Heater** je vyhřívaný kryt pro Bambu Lab AMS Lite. Vlastní podavač do něj vložíte, součástí balení není. SUNLU uvádí nastavení do **70 °C**, proudění vzduchu dvěma kanály a automatický odvod vlhkého vzduchu. Filament můžete sušit i během tisku.

![Bílý sušicí kryt SUNLU AMS Lite Heater s průhledným víkem a ovládacím panelem](/content/images/2026/10/pod-tryskou-43-2026-sunlu.webp)

Čidlo sleduje vlhkost vzduchu v krytu a podle nastavené hranice může spustit sušení. Kolik vody zůstává uvnitř filamentu, z něj nevyčtete. U nylonu bych se proto dál řídil teplotou a dobou sušení pro konkrétní materiál.

U podobné věci bych chtěl slyšet i ventilátory. Starší jednošpulková sušička SUNLU mi vedle počítače vadila hlukem. O hlučnosti tohoto krytu to nic neříká, ten jsem nezkoušel. Obchod ho navíc stále označuje jako předprodej a uvádí termíny pro dřívější objednávky. Aktuální odeslání bych si před nákupem ověřil.

[Zdroj: SUNLU, AMS Lite Heater a podmínky předobjednávek](https://store.sunlu.com/products/sunlu-ams-lite-heater-upgraded-your-bambu-lab-ams-lite)

---

## Infidex: tištěný fotoaparát na široké filmové snímky

**Denis Aminev navrhl Infidex 176**, panoramatický fotoaparát na běžný 35mm film. Tělo si vytisknete, objektiv potřebujete skutečný. Stavitel Josh na svém webu popsal vlastní sestavení a přidal fotky hotového foťáku i snímky, které s ním pořídil.

![Černý tištěný fotoaparát Infidex s objektivem a kazetou kinofilmu na dřevěném stole](/content/images/2026/10/pod-tryskou-43-2026-infidex.webp)

Původně chtěl použít objektiv Mamiya, ale nepodařilo se mu ho vyjmout z původního uchycení a nechtěl ho poškodit. Nakonec sáhl po objektivu z **Lomo 166B**. Tělo tiskl na několik pokusů. Expozici měří aplikací v telefonu a píše, že by se mu hodil i hledáček.

Tohle mě baví i s těmi nedostatky. Vidíte hotový výtisk, použitý objektiv i skutečné fotografie. Pokud vás láká film, před tiskem bych začal právě tím objektivem a ověřením, pro jakou variantu těla se hodí.

[Zdroj: Josh, vlastní stavba a zkušební fotografie Infidexu](https://thatjoshguy.com/infidex-176-3d-printed-panoramic-35mm-camera/)

---

## PC-ABS na Fortusu, H2D a CORE One L

Autor kanálu **My Tech Fun** porovnal vzorky z průmyslového Stratasys Fortus 450mc s výtisky z Bambu Lab H2D a Prusa CORE One L. Na Fortusu použil PC-ABS od Stratasysu, na stolních tiskárnách PC-ABS od Polymakeru. Jde o směs polykarbonátu a ABS pro namáhanější díly.

Ve videu prochází rozměry, smrštění, tah, spojení vrstev, ohyb i nárazy. Přidal také teplotní test a **tečení**, tedy pomalou změnu tvaru při dlouhodobém zatížení. Právě to bych u držáku, který má něco trvale nést, sledoval vedle krátké zkoušky pevnosti.

Při sledování bych si porovnal hlavně rozměry a výsledky tečení. V tomhle testu se mění tiskárna i filament zároveň, takže mě zajímá, kterou kombinaci bych mohl použít na vlastní díl.

[Zdroj: My Tech Fun, Stratasys vs Polymaker PC-ABS](https://www.youtube.com/watch?v=orRpDW-_Ehk)

---

## NoClogger: co tyčka v hotendu nevyřeší

**NoClogger** je kovový nástroj, který zasunete shora do cesty filamentu a za tepla jím vytlačujete materiál z hotendu. Na webu výrobce najdete průřez i postup použití. Je to jiný přístup než tenká čisticí jehla zasouvaná otvorem trysky.

![Průřez třemi hotendy s tyčkou NoClogger zasunutou shora do filamentové cesty](/content/images/2026/10/pod-tryskou-43-2026-noclogger.webp)

Výrobce sám upozorňuje, že **mechanickou překážku u podávacího kola tyčkou neodstraníte**. Když nástroj nejde zasunout, nemáte tlačit silou. A pokud problémy pokračují, doporučuje i cold pull: nechat filament v trysce částečně vychladnout a vytáhnout ho spolu s přichycenými nečistotami.

Než za takový nástroj utratíte, zjistil bych, kde se filament zastavil. Vytlačení změklého zbytku a vytažení nečistoty jsou dvě různé věci. Při nahřívání se držte limitů vlastní tiskárny a hotendu, teploty z obecného návodu nepřebírejte automaticky. Sám jsem NoClogger nezkoušel.

[Zdroj: NoClogger, návod a omezení použití](https://noclogger.com/pages/guide)
