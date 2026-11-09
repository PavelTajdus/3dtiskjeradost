---
title: "Pod tryskou 46/2026: OrcaSlicer dostal pluginy a klávesnici složíte po klávesách"
description: "OrcaSlicer 2.5 přidává pluginy a texturování modelů, Stealthburner dostal upravené tištěné díly, EEW Maker Kit spojí výtisky s elektrickým kolovrátkem, Keybytes skládá klávesnici z jednotlivých kláves a Prusa firmware 8.0 čte OpenPrintTag."
pubDate: "2026-11-09T05:15:00+01:00"
heroImage: "/content/images/2026/11/pod-tryskou-46-2026-hero.webp"
tags: ["Newsletter"]
draft: false
---

# Pod tryskou 46/2026: OrcaSlicer dostal pluginy a klávesnici složíte po klávesách

Do OrcaSliceru si nově můžete přidávat nástroje přes pluginy. Voron upravil Stealthburner a autor Keybytes staví klávesnici, u které si sami poskládáte jednotlivé klávesy. K tomu elektrický kolovrátek s tištěnou konstrukcí a nové čtení štítků na špulkách u Prusy.

---

## OrcaSlicer 2.5 přidává pluginy i textury na povrch modelu

Vývojáři vydali **OrcaSlicer 2.5.0**. Přidali Python pluginy, podporu pásových tiskáren a funkci Texture Displacement, která vytvoří skutečnou prostorovou texturu na povrchu modelu. V experimentální záložce Design můžete navrhovat parametrické díly přímo ve sliceru.

Pluginy najdete v nabídce Plugins. Přes účet Orca Cloud si vyberete doplněk a slicer ho nainstaluje. Může jít o jednoduchý nástroj na jedno kliknutí, úpravu vrstev nebo celé nové panely. **Doplňky mají vlastní oprávnění k souborům, síti a spouštění programů.** Vývojáři výslovně upozorňují, že nejde o úplné oddělení pluginu od počítače. Vybíral bych tedy podle autora a toho, co doplněk potřebuje.

![Záložka Permissions v OrcaSliceru s oprávněními pluginu Gridfinity Generator](/content/images/2026/11/pod-tryskou-46-2026-orca.webp)

*Obrázek: vývojáři OrcaSliceru, poznámky k vydání 2.5.0.*

Při přechodu z verze 2.4 si zkontrolujte výplň. Výchozí procesní profily Bambu Lab nově používají **Grid místo Cross Hatch**. Pokud váš vlastní profil typ výplně nepřepisuje, převezme tuhle změnu také. Cross Hatch si můžete nastavit zpátky.

[Zdroj: OrcaSlicer, vydání 2.5.0](https://github.com/OrcaSlicer/OrcaSlicer/releases/tag/v2.5.0)

---

## Stealthburner má větranější kryt elektroniky a větší okno na převody

Tým Voron vydal **revizi r2 Stealthburneru**. Upravil tištěné díly extruderu, který teď nese označení Clockwork 2.5, zvětšil okno pro kontrolu převodů BMG a odstranil mechanismus antisquish. Nový kryt desky má víc místa pro elektroniku a větrací otvory.

![Červený Stealthburner s dvojicí ventilátorů na tiskárně Voron](/content/images/2026/11/pod-tryskou-46-2026-voron.webp)

*Foto: Voron Design, původní Stealthburner.*

Přibyla také možnost osadit čidlo filamentu s Hallovým senzorem. K němu potřebujete samotný senzor a magnet N52. Vstup PTFE trubičky si můžete vybrat ve variantě pro bowdenovou spojku nebo ECAS04. Tým zesílil i některá místa kolem šroubů, aby omezil praskání a deformace.

Pokud už Stealthburner máte a chystáte rozborku, stojí za to projít změny a vybrat si potřebné díly. Kvůli lepšímu výhledu na převody bych se na nové tělo podíval. Celou funkční hlavu bych kvůli tomu hned nepřetiskoval.

[Zdroj: Voron Design, Stealthburner r2](https://github.com/VoronDesign/Voron-Stealthburner/releases/tag/r2)

---

## EEW Maker Kit promění výtisky v elektrický kolovrátek

Maurice Ribble z Dreaming Robots připravil **EEW Maker Kit**, stavebnici elektrického kolovrátku na předení příze. Konstrukci si vytisknete. V sadě dostanete motor, elektroniku, ocelové vřeteno, ložiska a další součástky, které z tiskárny nevylezou.

STL i původní soubory z Autodesk Fusion autor zveřejňuje přes svůj web. Montáž podle něj nevyžaduje pájení ani programování. Díly se do tištěné konstrukce zasouvají a šroubují. Líbí se mi možnost upravit si části podle toho, jak s kolovrátkem pracujete. V kampani už najdete i větší cívku od Craftmehappy.

**Základní odměna v kampani stojí 99 dolarů**, k tomu potřebujete výtisky a vlastní napájení 12 V / 3 A. Kolik bude stát doprava a případné daně, popis kampaně neuvádí. Sada zatím není skladem, autor teprve vybírá peníze na výrobu a u standardní odměny uvádí předpokládané dodání v srpnu 2027. S objednáním tištěných dílů doporučuje počkat blíž k expedici, protože soubory bude ještě upravovat.

[Zdroj: Maurice Ribble, EEW Maker Kit a dokumentace](https://www.dreamingrobots.com/eew-maker-kit/) a [aktuální kampaň na Kickstarteru](https://www.kickstarter.com/projects/dreamingrobots/eew-maker-kit)

---

## Keybytes skládá klávesnici z jednotlivých magnetických kláves

Nathan Alspaugh, na GitHubu jako notaroomba, vyvíjí **Keybytes**. Každá klávesa je samostatný modul Keybit s vlastním mikrokontrolérem. Magnetické krabičky drží moduly pohromadě a pružné kontakty mezi nimi vedou napájení i komunikaci. Hlavní modul Keyword připojíte přes USB nebo Bluetooth.

![Dva moduly kláves Keybit připojené k hlavnímu modulu Keyword v průhledných krabičkách](/content/images/2026/11/pod-tryskou-46-2026-keybytes.webp)

*Foto: notaroomba, projekt Keybytes. Autor uvádí licenci MIT.*

V repozitáři najdete návrhy elektroniky, firmware a STEP soubory krabiček. U první verze si musíte hlídat natočení modulů. Kontakty na všech stranách nemají stejné pořadí, takže každé otočení nefunguje. Autor už pracuje na druhé verzi s ohebnou deskou a magnetickými kontakty, které mají dovolovat volnější skládání.

Na malý panel klávesových zkratek mi to přijde docela zajímavé. U celé klávesnice bych nejdřív spočítal desky, součástky a čas na sestavení. Tisk krabiček je tady jen část práce a druhá verze zatím zůstává rozpracovaná.

[Zdroj: notaroomba, Keybytes včetně konstrukce a vývojového deníku](https://github.com/notaroomba/keybytes)

---

## Prusa firmware 8.0 čte OpenPrintTag, INDX si ještě počká

Prusa vydala **Buddy firmware 8.0.0**. Na CORE One a CORE One L s kompatibilní čtečkou umí načíst údaje o filamentu z NFC štítku OpenPrintTag. Spotřebu potom zapisuje zpátky na štítek. Při přenášení špulky mezi tiskárnami tak může cestovat i údaj o tom, kolik filamentu už zmizelo.

**Na CORE One INDX tahle funkce zatím není** a při zapnutém MMU se čtení OpenPrintTag vypne. Před tiskem může tiskárna upozornit na nedostatek filamentu podle zaznamenaného zůstatku. Bez příslušné čtečky samotná aktualizace firmwaru štítky číst nezačne.

Pokud vás překvapil rychlý skok ze sedmičky na osmičku, tým změnil číslování. První číslo se nově zvyšuje při vydání z hlavní vývojové větve, takže bude přibývat častěji. U verze 7.0.0 už Prusa doporučuje přejít rovnou na 8.0.0, která zahrnuje i předchozí opravy.

[Zdroj: Prusa Research, firmware 8.0.0](https://github.com/prusa3d/Prusa-Firmware-Buddy/releases/tag/v8.0.0) a [změna číslování u 7.0.0](https://github.com/prusa3d/Prusa-Firmware-Buddy/releases/tag/v7.0.0)
