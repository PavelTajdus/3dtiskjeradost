---
title: "Pod tryskou 29/2026: lepší textury modelů a štítky podle vlastního seznamu"
description: "BumpMesh vylepšil práci s texturami, Filament ukazuje barevné 3MF ve Finderu, MagTag generuje magnetické štítky a Ikigaiform navrhl šroubovací kolíky do písku."
pubDate: "2026-07-13T07:00:00+02:00"
updatedDate: "2026-11-09T12:43:00+01:00"
heroImage: "/content/images/2026/07/pod-tryskou-29-2026-hero.webp"
tags: ["Newsletter"]
draft: false
---

# Pod tryskou 29/2026: lepší textury modelů a štítky podle vlastního seznamu

Červencová aktualizace BumpMeshe přidala ukládání projektů a zlepšila geometrii textur. Vedle ní tu mám náhledy tiskových souborů na Macu, generátor magnetických štítků a tištěné kolíky do písku. Dva programy pro práci s modely a dvě věci, které můžete rovnou připravit k tisku.

## BumpMesh ukládá projekty a lépe připravuje síť pro textury

Stefan z CNC Kitchen ukázal další verzi **BumpMeshe**, bezplatného nástroje pro přidávání prostorových textur na modely. Načtete model a obrázek textury a program podle něj upraví skutečný povrch. Tak si můžete připravit třeba rukojeť s hrubším povrchem nebo kryt s kresbou dřeva.

![Zelená krychle s krystalickou texturou v rozhraní BumpMesh od CNC Kitchen](/content/images/2026/07/pod-tryskou-29-2026-bumpmesh.webp)

Nově můžete uložit celý projekt včetně modelu nebo jen nastavení. Přibylo vracení změn a kontrola sítě při importu. Ta upozorní na problémovou geometrii, sama ji ale neopraví. Zpracování modelu podle autora běží přímo v prohlížeči na vašem počítači.

Pro výsledek je zajímavější nové přesíťování modelu, tedy přestavba jeho trojúhelníkové sítě. Velmi úzké nebo nestejně velké trojúhelníky totiž při deformování vytvářely vady povrchu. Program je umí nahradit rovnoměrnější sítí. Stefan přidal také export do 3MF a volbu, která při texturování neposouvá povrch směrem dolů, aby na převisech nevznikaly malé samostatné ostrůvky.

Líbí se mi hlavně ukládání rozpracovaného projektu. U textury nestačí trefit vzor, ještě ladíte měřítko, hloubku a přechod do hladké plochy. Možnost vrátit se k nastavení se hodí. Import STEP v tomto červencovém přehledu autor teprve připravoval.

[Zdroj: CNC Kitchen, červencová aktualizace BumpMeshe](https://www.cnckitchen.com/blog/half-a-million-views-later-bumpmesh-is-way-better)

## Filament ukáže barevný 3MF přímo ve Finderu

Autor aplikace **Filament** připravil pro macOS náhledy souborů 3MF, STL, OBJ a PLY. Ve Finderu vyberete soubor, stisknete mezerník a model si prohlédnete, otočíte nebo přiblížíte. Kvůli tomu, abyste poznali jeden držák mezi deseti podobnými soubory, nemusíte pokaždé otevírat slicer.

U vícebarevných 3MF z Bambu Studia nebo OrcaSliceru zachovává náhled přiřazené barvy. Umí přepínat mezi barevným a jednobarevným zobrazením a u projektu s více podložkami vybrat konkrétní podložku. Finder dostane i malé obrázkové náhledy souborů.

Červencová verze vyžadovala macOS 14 nebo novější a sestavení ze zdrojových kódů pomocí Xcode a XcodeGenu. Hotová aplikace ke stažení tehdy nebyla. Kód je pod licencí MIT. Pro někoho, kdo už si na Macu podobné nástroje sestavuje, je to příjemná drobnost pro každodenní práci se soubory.

[Zdroj: Filament, dokumentace ve verzi z 9. července 2026](https://github.com/akshaymaloo/filament/tree/8d7fe6da6374d01577b916172f4f4e9b1c8a5fd4)

## MagTag Studio připraví magnetické štítky z tabulky

**MagTag Studio** je generátor štítků na zásuvky, skříňky nebo jiné magnetické plochy. Texty můžete napsat ručně nebo načíst ze seznamu v Excelu či CSV. Nastavíte písmo, rozměry štítku, velikost magnetů a tiskové podložky. Program pak rozdělí štítky do tiskových dávek a vyexportuje soubor pro OpenSCAD.

Autor v červencovém představení ukazoval skryté magnety o průměru 15 mm a vystouplý dvoubarevný text. Rozměr magnetu se dá upravit, takže nejste odkázaní jen na jednu velikost. Z jednoho seznamu tak můžete připravit celou sadu popisků, místo abyste každý zvlášť přepisovali v modelovacím programu.

Nejvíc mě na tom zajímá právě dávková příprava. U jednoho štítku je ruční modelování rychlé, u třiceti už se opakuje pořád stejná práce. Před tiskem celé sady bych si udělal jeden vzorek a ověřil, jak do něj pasuje konkrétní magnet a jak je text čitelný v zamýšlené velikosti.

[Zdroj: MagTag Studio, původní představení autora](https://www.reddit.com/r/BambuLab/comments/1uqc7wp/i_made_a_customizable_magnetic_label_generator/) a [generátor a soubory na MakerWorldu](https://makerworld.com/en/models/2946017-magtag-studio-custom-magnetic-drawer-labels)

## Šroubovací kolíky mají široký závit do písku

Autor Ikigaiform navrhl **tištěné kotvy do písku** se širokým šroubovým závitem. Místo zatloukání se zašroubují do země. V původním představení byly tři varianty: Medium, delší XL a XL s širším závitem pro jemný písek. Geometrii připravil pro tisk bez podpěr.

![Vizualizace oranžových a žlutých kolíků do písku se šroubovým závitem od Ikigaiform](/content/images/2026/07/pod-tryskou-29-2026-koliky.webp)

Pro pobyt na slunci autor doporučuje ASA, u PETG počítá se zapuštěním pod povrch písku. Podle písku si můžete vybrat variantu, XL s širším závitem je na jemný písek. Zajímavá je i možnost vytisknout si náhradní kus stejného tvaru, když nějaký ztratíte.

V titulku příspěvku na Redditu autor uvádí vítr 80 km/h. Popsanou zkoušku zatížení ale nepřikládá, takže podle toho bych jistotu ukotvení neposuzoval. U konkrétního použití bude záležet také na písku, hloubce zapuštění a na tom, co kolík drží.

[Zdroj: Ikigaiform, původní návrh a odkaz na soubory](https://www.reddit.com/r/BambuLab/comments/1upor2h/supportfree_heavyduty_screw_sand_pegs_engineered/)
