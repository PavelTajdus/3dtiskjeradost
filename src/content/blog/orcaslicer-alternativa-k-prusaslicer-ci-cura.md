---
title: "OrcaSlicer - zajímavá alternativa k Průša Sliceru či Cura"
pubDate: "2023-09-06T11:36:24.000Z"
updatedDate: "2025-04-07T11:41:55.000Z"
description: "Orca Slicer je open-source slicer, který je určený pro FDM tiskárny. Je postavený na základech Bambu Studia, které je zase postavené na Prusa Sliceru. Takže pokud máte rádi Prusa Slicer, najdete zd..."
heroImage: "https://3dtiskjeradost.cz/content/images/2025/04/orca-slicer-platy.png"
tags: ["Základy 3D tisku"]
---

Orca Slicer je open-source slicer, který je určený pro FDM tiskárny. Je postavený na základech Bambu Studia, které je zase postavené na Prusa Sliceru. Takže pokud máte rádi Prusa Slicer, najdete zde známé předvolby, ale s několika extra vychytávkami.

**OrcaSlicer je příjemně ovladatelný a řekl bych že oproti jiným programům i uživatelsky přívětivější slicer, který nabízí několik velmi zajímavých funkcí. Například více tiskových plátů v projektu, testy pro vyladění tiskárny, jeden perimetr pro spodní a horní vrstvu, průvodce kalibrací tiskárny a mnoho dalších funkcí.**

![](https://3dtiskjeradost.cz/content/images/2025/04/image-2.png)## Hlavní přednosti OrcaSlicer- Pokročilé nastavení infillu, perimetrů, vrstev, flow a rychlostí- Více tiskových plátů v projektu- Možnost tisku více modelů najednou s různými nastaveními- **Jednoduché a intuitivní uživatelské rozhraní** s náhledem modelu a tiskového plánu- Integrace s cloudovou službou Bambu lab, která umožňuje zálohovat a synchronizovat tiskové profily- Automatické generování podpěr s možností manuální úpravy### Má ale také některé nevýhody- Omezená podpora pro více barevný tisk. Tady bych chtěl doplnit, že **skvěle zvládá barevný tisk pomocí AMS** od Bambu lab, ale podpora ERCF a jiných systému není aktuálně moc funkční.- Nemožnost importovat nebo exportovat nastavení z jiných slicerů.## Jak se OrcaSlicer používá?

Jedno z témat na mých streamech jsou i slicery. A tento software jsem nemohl vynechat, neboť je to můj hlavní slicer. Takže mrkněte na záznam živého streamu na YouTube.## Nejzajímavější funkce OrcaSliceru### Více tiskových plátů

![Tiskové pláty v OrcaSlicer](https://3dtiskjeradost.cz/content/images/2025/04/image-4.png)*Několik tiskových plátů a možnost je pojmenovat.*

Tuhle funkci vyloženě miluju. Když tisknete nějaký větší projekt který má hromadu dílů, můžete si jednoduše vyskládat všechny díly na jednotlivé plochy (tiskové pláty), rozdělit jak potřebujete a třeba popřehazovat mezi pláty, aby byl tisk co nejoptimálnější.

Jednotlivé tiskové pláty se dají pojmenovat, takže si můžete uložit poznámku třeba o barvě, materiálu, času tisku a tak podobně.### Jeden perimetr pro horní či spodní vrstvu

![Náhled na jeden perimetr u horní vrstvy v programu OrcaSlicer](https://3dtiskjeradost.cz/content/images/2025/04/image-5.png)*Náhled na jeden perimetr u horní vrstvy v programu OrcaSlicer*

Nativně tuhle funkci umí tuším jen SuperSlicer a Bambu Studio. V jiných slicerech jste také schopni tohoto efektu docílit, ale už to není tak jednoduché.

Jeden perimetr na spodní a horní vrstvě vypadá prostě o kus lépe, ale zachovává stále potřebnou pevnost modelu, protože v ostatních vrstvách máte stále nastavený počet perimetrů.### Synchronizace tiskových profilů

Je to taková "blbost", ale potěší to. Pokud si vytvoříte Bambu účet, bude si slicer pamatovat nesystémové profily. Systémové profily si pamatovat nemusí, protože ty si tam kdykoliv můžete znovu doplnit.

Pokud přecházíte mezi více počítači, ušetří tahle funkce neustálé udržování stejných profilů.### Kalibrace pro tvou tiskárnu

![Kalibrace v programu OrcaSlicer](https://3dtiskjeradost.cz/content/images/2025/04/image-3.png)*Jednoduchá kalibrace různých parametrů tiskárny*

Kalibrovat tiskárnu byl vždycky opruz. Ale tady za nás slicer udělá hromadu práce, a tak nám ten opruz dost usnadní. Na nás je jen vygenerovat kalibrační modely, pustit tisk, a výsledky konzultovat s [tutoriálem](https://github.com/SoftFever/OrcaSlicer/wiki/Calibration). A samozřejmě výsledky testů pak implementovat do našich profilů nebo do nastavení 3D tiskárny.## Alternativy pro OrcaSlicer?

OrcaSlicer se snaží konkurovat jiným slicerům tím, že nabízí jednoduchost, rychlost a kvalitu tisku. Ale jak se říká - 100 lidí, 100 chutí. Pojďme se tedy podívat na další alternativy:- **Ultimaker Cura** je asi nejznámější a nejpoužívanější slicer pro FDM 3D tisk. Je také zdarma a open source. Cura má velkou komunitu uživatelů a vývojářů, kteří přispívají k jeho vylepšování. Cura má také mnoho funkcí, které umožňují detailní nastavení tisku. Na druhou stranu, Cura může být pro některé uživatele příliš složitá nebo zmatená.- **Prusa Slicer** je velice populární slicer, který je vyvíjen českou firmou Prusa Research. PrusaSlicer je také zdarma a open source. PrusaSlicer je optimalizován pro tiskárny Prusa, ale podporuje i jiné značky. Má také mnoho funkcí, které umožňují detailní nastavení tisku. PrusaSlicer má navíc možnost nastavení tisku vícebarevných modelů. OrcaSlicer často implementuje nové a zajímavé funkce z Prusa Sliceru (ale i jiných).- **Bambu Studio** je oficiální slicer pro tiskárny Bambu lab, OrcaSlicer z něj vychází a nabízí prakticky totožné rozhraní, jen rozšířené o nové funkce a vychytávky. Zajímavostí je, že Bambu studio přejímá nové věci z OrcaSliceru a naopak.- [Další slicery](https://3dtiskjeradost.cz/co-je-3d-tisk-kompletni-pruvodce-3d-tiskem/#Slicer), které můžete vyzkoušet, jsou například **Slic3r**, **IdeaMaker**, **Repetier-Host**, **KISSlicer** nebo **IceSL**. Každý z nich má své vlastnosti, výhody a nevýhody. Nejlepší způsob, jak zjistit, který slicer vám vyhovuje, je vyzkoušet si je a porovnat jejich výsledky.## Shrnutí

Za sebe určitě můžu říci, že OrcaSlicer je velmi zajímavý slicer pro FDM 3D tisk. Může se stát velmi silným konkurentem i pro jiné slicery, pokud bude pokračovat ve svém vývoji a vylepšování.

Denně jej používám pro své tiskové projekty, a bez funkce více tiskových plátů si už dnes ani nedokážu představit práci se slicerem.

Ačkoliv je vývojový tým velmi malý, doufám že se tento fajn slicer bude dále vyvíjet podobným tempem jako doposud a držím tomuto projektu palce.## Zdroje a odkazy- Oficiální depozitář - [https://github.com/SoftFever/OrcaSlicer](https://github.com/SoftFever/OrcaSlicer)- Aktuální verze ke stažení: [https://github.com/SoftFever/OrcaSlicer/releases/](https://github.com/SoftFever/OrcaSlicer/releases/)- Průša Slicer: [https://www.prusa3d.com/cs/stranka/prusaslicer_424/](https://www.prusa3d.com/cs/stranka/prusaslicer_424/)- Ultimaker Cura: [https://ultimaker.com/software/ultimaker-cura/](https://ultimaker.com/software/ultimaker-cura/)