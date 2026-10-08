---
title: "Pod tryskou 36/2026: barevný obraz s jednou výměnou na vrstvu"
pubDate: "2026-08-31T05:00:00.000Z"
updatedDate: "2026-10-08T12:00:00.000Z"
description: "Upravený OrcaSlicer tiskne barevný obraz s jednou výměnou filamentu na vrstvu, Polymaker vydal HT-PLA Pro a tři tištěné projekty pro konkrétní lidi."
tags: ["Newsletter"]
heroImage: "/content/images/2026/08/pod-tryskou-36-2026-hero.webp"
---

# Pod tryskou 36/2026: barevný obraz s jednou výměnou na vrstvu

Tentokrát mě nejvíc zaujal upravený OrcaSlicer, který tiskne barevný obraz na stěnu modelu a filament mění jen jednou za vrstvu. K tomu nové HT-PLA Pro od Polymakeru a tři projekty, kde 3D tisk pomohl konkrétním lidem.

---

## Barevný obraz na stěně modelu, jedna barva na vrstvu

OrcaSlicer-ImageMap je experimentální fork OrcaSliceru. Každá vrstva se tiskne jen jednou barvou a barvy se střídají po vrstvách. Výsledný odstín slicer skládá tak, že mění šířku a přesah vnějšího perimetru. Spodní vrstvy pak různě prosvítají. Tiskárna tak nemusí měnit filament několikrát v jedné vrstvě.

![Zkušební barevný výtisk obrazu Velká vlna vytvořený pomocí OrcaSlicer-ImageMap](/content/images/2026/08/orcaslicer-imagemap-print.webp)

Načte textury z OBJ, glTF nebo GLB, umí promítnout obrázek na model a pracuje s paletou CMYK, RGBW nebo vlastní. Autor vydal beta verze pro Windows a macOS a píše, že je zkoušel na skutečné tiskárně. V běžném OrcaSliceru to zatím není, je to samostatný projekt.

Čím víc barev, tím víc vrstev zabere jeden barevný cyklus. Na strmých stěnách se efekt rozpadá. Mně se ale tenhle přístup líbí víc než další ladění čistící věže. Méně výměn znamená méně odpadu i času.

[Zdroj: GitHub, OrcaSlicer-ImageMap](https://github.com/sentientstardust-dev/OrcaSlicer-ImageMap)

---

## HT-PLA Pro od Polymakeru

Polymaker vydal HT-PLA Pro. Tiskne se jako klasické PLA, kolem 230 °C, a nepotřebujete k tomu zakrytovanou tiskárnu. Podle výrobce má proti původnímu HT-PLA zhruba dvojnásobnou rázovou houževnatost a o 30 % pevnější spoj vrstev v ose Z.

![Modrý filament Polymaker HT-PLA Pro s ukázkovými výtisky](/content/images/2026/08/polymaker-ht-pla-pro.webp)

U teploty pozor, jsou tam dva údaje. Bez zatížení drží tvar i při vysoké teplotě. Pod zatížením (0,45 MPa) ale vytištěný díl měkne už kolem 56 °C. Až když ho 30 minut žíháte na 100 °C, posune se tahle hranice na 107,6 °C. A protože bez zatížení vydrží víc, při žíhání by se díl neměl zkroutit.

Žíhat se dá teoreticky i na podložce tiskárny. Jenže na podložce máte 100 °C, v celé komoře ne. Tak spíš u plochých dílů. Jestli se při žíhání mění rozměry, výrobce nepíše. To bych si u funkčního dílu vyzkoušel.

Za mě zajímavý matroš, když potřebujete něco odolnějšího a nemáte zakrytovanou tiskárnu na ASA.

[Zdroj: Polymaker](https://shop.polymaker.com/products/polymaker-ht-pla-pro)

---

## Tištěné čidlo podzemní vody za pár stovek dolarů

Tým z Purdue University postavil čidlo, které měří, kudy a jak rychle teče podzemní voda. V tištěném pouzdře je řada teplotních čidel. Z malých rozdílů teploty systém spočítá směr a rychlost proudění. Jeden kus vyjde na několik stovek dolarů a pouzdro si tým může upravit a vytisknout sám.

![Výzkumník Purdue University drží 3D tištěný snímač proudění podzemní vody](/content/images/2026/08/purdue-groundwater-sensor.webp)

První prototypy vydržely pod vodou sedm až osm měsíců bez poruchy. Dál je budou testovat ve studních amerického geologického ústavu USGS a v mokřadu, který univerzita spravuje. Doma si to zatím nevytisknete, je to výzkumný prototyp. Ale je to přesně to použití, kde mi 3D tisk dává smysl. Elektroniku koupíte, tělo si vytisknete a můžete ho rychle předělat.

[Zdroj: Purdue University](https://ag.purdue.edu/news/2026/07/purdue-researchers-use-3d-printing-to-make-open-source-alternative-to-costly-groundwater-sensors.html)

---

## Mechanická protéza paže bez baterie

Studenti z kanadské Queen's University vyvíjejí mechanickou protézu pro lidi s amputací nad loktem. Je pro Burma Children Medical Fund na hranici Thajska a Myanmaru. Tam už tým tiskne jednodušší protézy na sedmi 3D tiskárnách. Elektronické protézy jsou tam drahé, špatně se opravují a potřebují baterie.

![Prototypy mechanických a 3D tištěných protéz týmu Queen's University](/content/images/2026/08/queens-3d-printed-prosthetic.webp)

Protéza se ovládá postrojem a pohybem těla, bez motorů a elektroniky. Po dvou letech vývoje zvládne samostatně ovládat loket i jednotlivé prsty. Díly se dají upravit na míru a po poškození znovu vytisknout. Do tištěných protéz přes e-NABLE jsem se kdysi taky zapojoval, takže tohle mě potěšilo.

[Zdroj: Queen's University](https://www.queensu.ca/gazette/stories/queen-s-students-develop-3d-printed-prosthetics)

---

## Tištěná pomůcka na bowling

Americké ministerstvo pro veterány navrhlo pro Francine Goode, veteránku letectva po amputaci, pomůcku na bowling. Dlouhou rukojetí zvedne a navede kouli i bez běžného úchopu. Tým vytiskl několik verzí, zkoušel je přímo s ní a podle toho upravoval délku, tvar i to, jak se koule pouští.

![Veteránka Francine Goode používá při bowlingu pomůcku s 3D tištěnými díly](/content/images/2026/08/va-3d-printed-bowling-stick.webp)

Žádná složitá technika, jen pár verzí, než to sedlo. Upravit model a vytisknout další kus trvá pár hodin a hned se to dá vyzkoušet. Takové projekty mám rád.

[Zdroj: U.S. Department of Veterans Affairs](https://news.va.gov/147865/vas-3d-printed-bowling-stick-veteran-athletes/)
