---
title: "Pod tryskou 41/2026: tištěný most pro LEGO vlaky a odolnější podávání filamentu"
pubDate: "2026-10-05T05:00:00.000Z"
description: "Most pro LEGO vlaky ukazuje, co se při návrhu pozná až jízdou. E3D přidává povlak na podávací kola, PrintDry sušení do 85 °C a Snapmaker zveřejnil úpravy firmwaru U1."
tags: ["Newsletter"]
heroImage: "/content/images/2026/10/pod-tryskou-41-2026-hero.webp"
---

# Pod tryskou 41/2026: tištěný most pro LEGO vlaky a odolnější podávání filamentu

Tištěný most pro LEGO vlaky vypadá jednoduše, dokud po něm nepustíte delší soupravu. V popisu stavby je i vykolejování a problémy se stoupáním. Takové zkušenosti mě u sdílených modelů zajímají víc než samotná fotka výtisku.

---

## Most pro LEGO vlaky: téměř dva metry a náročné stoupání

Na Hackadayi vyšel od Zoe Skyforest popis vlastních kolejí a mostu kompatibilního s LEGO železnicí. Most má **sedm dílů**, tři rampy na každé straně a rovnou část uprostřed. Pod ní může projet druhý vlak. Celá stavba měří téměř dva metry, protože lokomotiva potřebuje prostor na výjezd i sjezd.

![Barevný tištěný model železničního mostu s řadou oblouků leží na šedém koberci](/content/images/2026/10/pod-tryskou-41-2026-most-lego.webp)

Díly jsou vytištěné z PLA s vrstvou **0,2 mm**. Oblouky a zakřivené podpěry jsou navržené tak, aby se daly tisknout bez podpěr ze sliceru. Při jízdě se ale ukázalo, že **stoupání 10°** dává lokomotivám zabrat. Většina zkoušených vlaků špatně táhla víc než jeden vagón a delší vozy vykolejovaly na ostrém přechodu mezi rovinou a rampou.

Krátké soupravy po mostě jezdit dokázaly, průjezd pod ním fungoval bez problémů. Pro další verzi je v plánu mírnější sklon 5–7° a plynulejší přechody. Soubory jsou dostupné i s popisem těchto nedostatků. Pokud si most vytisknete, vybíral bych nejdřív krátký vlak a nechal kolem dost rovné koleje.

[Zdroj: Zoe Skyforest, vlastní stavba a jízdní test na Hackaday](https://hackaday.com/2026/03/16/how-i-3d-printed-my-own-lego-compatible-train-bridges/)

---

## E3D Bastion chrání podávací kola extruderu

E3D prodává podávací kola Bastion pro **Bambu Lab X1C, X1E, P1P a P1S**. Kola jsou z kalené oceli a mají povlak Bastion, který podle E3D omezuje tření a opotřebení. Výrobce u něj popisuje uhlíkové vazby podobné grafitu. Povlak mají i zuby, které přímo zabírají do filamentu.

![Detail podávacích kol E3D Bastion s filamentem mezi ozubenými válečky](/content/images/2026/10/pod-tryskou-41-2026-bastion.webp)

Zajímavé je to hlavně při tisku plněných materiálů, třeba s uhlíkovými nebo skleněnými vlákny. Abrazivní filament opotřebovává i podávání. E3D na stránce ukazuje porovnání použitých válečků a píše, že oba prošly stejnou zátěží, včetně nejméně 20 kg vláknem plněných materiálů a 10 kg svítícího filamentu. Jak dlouho vydrží ve vašem provozu, z těch fotek určit nejde. Výrobce dál doporučuje občasné mazání.

[Zdroj: E3D, Bastion Coated Extruder Gears](https://e3d-online.com/products/bastion-gears-for-bambu-lab-x1c-x1e-p1p-p1s)

---

## PrintDry PRO4 má nastavení do 85 °C

PrintDry PRO4 má šest předvoleb od **35 do 85 °C**, časovač do 48 hodin a ukazatel relativní vlhkosti v sušičce. K základně můžete přidat další komoru. Majitelé starších PRO a PRO3 mají také možnost koupit jen novou základnu a ponechat si komory.

U teploty je důležitý údaj, který výrobce píše přímo na stránce: čidlo měří přibližně **15 mm od výdechu teplého vzduchu**. Teplota uvnitř není všude stejná. Nastavených 85 °C tedy neznamená, že stejnou teplotu má celá špulka. Před sušením bych zkontroloval doporučení pro konkrétní filament i jeho cívku. A ukazatel měří vlhkost vzduchu, množství vody uvnitř filamentu z něj přímo nevyčtete.

[Zdroj: PrintDry, Filament Dryer PRO4](https://www.printdry.com/product/printdry-filament-dryer-pro4/)

---

## Snapmaker zveřejnil úpravy Klipperu pro U1

Snapmaker v březnu zveřejnil své verze **Klipperu, Moonrakeru a Fluiddu** pro U1. Klipper řídí tiskárnu, Moonraker mu přidává rozhraní pro ovládání a Fluidd je webové prostředí, které vidíte v prohlížeči. V repozitářích najdete úpravy pro výměnu nástrojů, kalibraci jejich vzájemné polohy nebo zavádění filamentu.

![Webové rozhraní Fluidd pro Snapmaker U1 s ovládáním nástrojů, teplotami a konzolí](/content/images/2026/10/pod-tryskou-41-2026-fluidd.webp)

Na Pokecu jsem říkal, že jsem se Snapmakerem U1 hodně spokojený a jako první počin mi připadá dost dobrý. Zveřejněný kód je fajn hlavně pro lidi, kteří si chtějí projít, jak tiskárna funguje, nebo na úpravách dál pracovat. Některé další funkce U1 ale Snapmaker podle svého oznámení zpracovává v samostatných modulech. Z těchto tří repozitářů proto celý systém nesestavíte.

[Zdroj: Snapmaker, zveřejnění firmwaru U1](https://www.snapmaker.com/blog/snapmaker-u1-firmware-now-on-github) a [repozitář u1-klipper](https://github.com/Snapmaker/u1-klipper). [Moje zkušenost na Pokecu 23/2026](https://www.youtube.com/watch?v=HjLKF-5HjlU)
