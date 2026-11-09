---
title: "Pod tryskou 30/2026: kalibrace extruze z čidla v hlavě a rychloupínací držáky"
description: "CNC Kitchen zkouší automatickou kalibraci Pressure Advance, Platethora nabízí rychloupínací držáky, v Mini Skyline vznikly mapy okruhů a Hembased zpracovává palmové listy."
pubDate: "2026-07-20T07:00:00+02:00"
updatedDate: "2026-11-09T12:43:00+01:00"
heroImage: "/content/images/2026/07/pod-tryskou-30-2026-hero.webp"
tags: ["Newsletter"]
draft: false
---

# Pod tryskou 30/2026: kalibrace extruze z čidla v hlavě a rychloupínací držáky

Čidlo, kterým tiskárna hledá povrch podložky, může sledovat i průběh extruze. CNC Kitchen to využil při automatické kalibraci Pressure Advance. Vedle toho tu mám rychloupínací systém pro vlastní příslušenství, tištěné mapy závodních okruhů a materiál, do kterého výrobce zpracovává odpad z palmových listů.

## Pressure Advance podle síly působící na trysku

Stefan z CNC Kitchen připravil **otevřený nástroj pro automatické hledání hodnoty Pressure Advance**. Tohle nastavení kompenzuje zpoždění průtoku při změnách rychlosti. Při špatné hodnotě může být v rozích příliš mnoho materiálu nebo naopak vzniknou mezery.

Pokus používá silové čidlo v Nextruderu tiskáren Prusa. Tiskárna vytlačuje filament do volného prostoru a střídá pomalou a rychlou extruzi. Nástroj zaznamenává sílu působící na trysku a postupně mění hodnotu K. Z průběhu pak vybere nastavení, při kterém se po zpomalení ještě neobjeví krátký propad síly pod ustálenou hodnotu.

![Graf síly ze snímače v tiskové hlavě během střídání pomalé a rychlé extruze v nástroji CNC Kitchen](/content/images/2026/07/pod-tryskou-30-2026-kalibrace.webp)

Autor porovnal výsledek s vytištěnými kalibračními vzory. U většiny vyzkoušených materiálů vyšla automatická hodnota stejně nebo o něco výš než jeho ruční volba. Výrazněji se lišil výsledek u ASA tištěného při vysoké teplotě. V červenci tedy šlo o experiment, který ještě potřeboval další ladění a širší testování.

![Srovnávací kalibrační vzory pro jednotlivé materiály z experimentu CNC Kitchen](/content/images/2026/07/pod-tryskou-30-2026-vzory.webp)

Zajímavé je využití čidla, které už v hlavě je. Žádná další kamera ani měřicí přípravek. Samotný pokus ale ještě neznamená, že tiskárna dostala hotovou automatickou funkci ve firmwaru. Autor nástroj zveřejnil samostatně a zpracování přímo ve firmwaru tiskárny uvádí jako vhodnější budoucí řešení.

[Zdroj: CNC Kitchen, automatická kalibrace Pressure Advance](https://www.cnckitchen.com/blog/i-automated-pressure-advance-using-a-bed-leveling-sensor)

## Platethora přidá rychloupínání vlastnímu příslušenství

**Platethora** je systém tištěné základny a rychloupínací destičky. Autor se inspiroval stativy, Gridfinity a závěsnými stěnami, ale místo držáku na jednu konkrétní věc připravil rozhraní, kolem kterého si můžete navrhovat vlastní příslušenství.

K sestavení potřebujete šroub M4 dlouhý 14 až 16 mm a matici s nylonovou pojistkou. Autor doporučuje PETG a přiložil upravitelné STEP soubory. Projekt zveřejnil jako public domain, takže si můžete základnu i destičku přizpůsobit vlastní sestavě.

Jako použití ukazuje světla nebo pomocné držáky při práci, které přendáváte ze stolní základny na svěrku. Tady mi rychloupínání připadá užitečné. Vytisknete různé spodní držáky a stejné příslušenství mezi nimi přehazujete, místo abyste pokaždé povolovali celý spoj.

Autor zároveň výslovně nepovažuje tištěnou destičku za náhradu kvalitního kovového uchycení drahého fotoaparátu. Nosnost pro upravené sestavy neuvádí.

[Zdroj: Platethora, popis autora a upravitelné soubory na MakerWorldu](https://makerworld.com/en/models/3044747-platethora-the-quick-release-plate-for-everything)

## Tištěné mapy závodních okruhů

Vývojář Mini Skyline ukázal dvě tištěné mapy okruhů **Daytona a Lime Rock**, které v tomto nástroji připravil. V původním příspěvku uvádí přibližně šest hodin na každý tisk na Bambu Lab P2S a kolem stovky změn barvy. Model tedy vznikl z mapového nástroje, autor nemusel ručně překreslovat každý úsek tratě.

Model Lime Rock zveřejnil i s tiskovým profilem. Popisuje ho jako převážně plochý tisk připravený pro AMS. Pokud chcete jednobarevnou variantu, můžete přiřazení barev změnit. Pro člověka, který má oblíbený okruh nebo hledá dárek pro fanouška motorsportu, je to konkrétní nápad, co z map vytisknout.

Počet výměn filamentu bych před tiskem porovnal s výsledkem ve sliceru. U nízkého barevného modelu může i malý detail znamenat další barvu na stejné vrstvě. Zjednodušení barevného návrhu tak stojí za vyzkoušení ještě před celou podložkou.

[Zdroj: původní ukázka okruhů z Mini Skyline](https://www.reddit.com/r/3Dprinting/comments/1uwg7ut/daytona_lime_rock_race_tracks_made_with_mini/) a [model Lime Rock na MakerWorldu](https://makerworld.com/en/models/3050512-lime-rock-race-track-made-with-mini-skyline)

## Hembased zpracovává palmové listy do filamentu

Nizozemský **Hembased** vyrábí filament ze suroviny, jejímž základem jsou spadané palmové listy. Podle výrobce se listy suší a melou a jejich materiál se kombinuje s existujícími bioplasty, například PLA. Surovinu dodává HemCell, filament pak Hembased vyrábí v Nizozemsku.

Firma uvádí, že se materiál může rozkládat i bez průmyslového kompostování. To je slib výrobce. V dohledaném popisu složení není nezávislá zkouška, ze které by šlo vyčíst, za jak dlouho se rozpadne konkrétní hotový výtisk v běžném domácím kompostu.

Zajímalo by mě porovnání s běžným PLA v tiskárně i po vytištění. Vedle původu suroviny bych chtěl vidět, jakou má materiál pevnost, jak se tiskne a jak se rozkládá hotový díl. Z popisu zatím nejde určit, na který konkrétní výrobek bych tenhle filament zvolil.

[Zdroj: Hembased, původ a zpracování materiálu](https://hembased.nl/blogs/news/van-palmblad-tot-filament-het-materiaalverhaal-achter-hembased)
