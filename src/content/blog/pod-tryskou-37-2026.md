---
title: "Pod tryskou 37/2026: od recyklátu po tištěnou botu"
pubDate: "2026-09-07T05:00:00.000Z"
updatedDate: "2026-10-08T12:00:00.000Z"
description: "3devo představilo FMX10 pro výrobu filamentu, Meshy 7 porovnává modely s předlohou, adidas oznámil tištěné boty Futurecool a The Next Layer se ptá na další vývoj FDM."
tags: ["Newsletter"]
heroImage: "/content/images/2026/09/pod-tryskou-37-2026-hero.webp"
---

# Pod tryskou 37/2026: od recyklátu po tištěnou botu

## 3devo FMX10: vlastní filament z pelet a recyklátu

3devo představilo **Filament Maker X10**, zařízení na výrobu filamentu. Do násypky můžete dát prášek, regranulát nebo pelety. Stroj materiál roztaví, ochladí a navine na cívku. Průběžně hlídá průměr filamentu a podle výrobce může běžet bez obsluhy až do výměny cívky.

![Filament Maker X10 od 3devo s násypkou, chlazením a navíjením filamentu](/content/images/2026/09/pod-tryskou-37-2026-3devo-fmx10.webp)

U referenčního PLA výrobce uvádí až **1,5 kg za hodinu**. Stroj má čtyři vyhřívané zóny do **450 °C**, chladicí dráhu dlouhou **2,80 metru** a násypku SmartFlow Hopper o objemu **7,25 litru**. Zpracuje i směsi s plnivy, která obrušují části stroje.

Průměr měří až po vychladnutí. U recyklovaného PA12 s uhlíkovým vláknem 3devo uvádí odchylku **±30 mikrometrů na celé cívce**. Během testování podle firmy zpracovalo přes **2 000 kg odpadního prášku PA12 z MJF tisku**. Patnáct strojů zkoušelo déle než šest měsíců.

Možnost zpracovat vlastní materiál se mi líbí. Jen bych do nákladů počítal i třídění a sušení odpadu a čas člověka, který připraví směs. Samotný extrudér tohle za vás neudělá.

[Zdroj: 3devo, Filament Maker X10](https://www.3devo.com/filament-maker-x10)

---

## Meshy 7: jak moc model odpovídá obrázku

Meshy u verze 7 měří, jak dobře vygenerovaný 3D model odpovídá předloze. Porovnává celkové proporce, rozmístění hmoty a detaily povrchu. To mě zajímá víc než samotný hezký render, na kterém chybný tvar snadno přehlédnete.

![Meshy 7 ukazuje cestu od konceptu mechanického ptáka přes šedou geometrii k finálnímu 3D renderu](/content/images/2026/09/pod-tryskou-37-2026-meshy-7.webp)

Ve vlastním benchmarku Meshy uvádí při zadání jednoho pohledu skóre **81,0 %** pro proporce, **79,7 %** pro prostorové rozmístění a **59,8 %** pro povrchové detaily. Se čtyřmi pohledy dosáhlo **84,4 %, 81,8 % a 60,6 %**. Referenční modely firma vynechala z tréninku. Hodnota 100 % znamená, že se referenční model porovná sám se sebou.

Ve stejném týdnu vyšla praktická recenze od týmu 3D Printing Industry. Ten ale testoval **Meshy 6**. Narazil na vysoké počty polygonů, neuzavřenou geometrii a chyby v rozměrech.

U kostky se stranou 25 mm a textem na stěnách naměřil rozdíl mezi šířkou a hloubkou **2,918 mm**. Když zadání zjednodušil a odstranil písmena, rozdíl byl **0,008 mm**. To jsou výsledky dvou konkrétních zadání ve starší verzi. Jak by stejná kostka dopadla v sedmičce, z těch čísel nevíme.

[Zdroj: Meshy, benchmark geometrické shody Meshy 7](https://www.meshy.ai/blog/meshy-7-image-to-3d-geometry-alignment) a [vlastní test Meshy 6 od 3D Printing Industry](https://3dprintingindustry.com/news/review-meshy-ai-tested-across-six-practical-3d-modelling-tests-254447/)

---

## Plně tištěné boty adidas Futurecool

adidas oznámil **Futurecool**, boty s bezešvou, plně tištěnou konstrukcí. Po systému Climacool tak pokračuje s tiskem celé boty. Výrobce uvádí **360stupňové větrání**.

![Oficiální snímek k oznámení adidas Futurecool](/content/images/2026/09/pod-tryskou-37-2026-adidas-futurecool.webp)

První série měla **400 individuálně číslovaných párů**. Slosování v aplikaci CONFIRMED začalo **28. srpna**. Širší uvedení adidas plánuje na **1. dubna 2027**, za **180 eur**, v unisex velikostech **UK 4 až 14**.

Na obrázku vypadají docela zajímavě. Jak pohodlně se v nich chodí a co vydrží, nevím. Za 180 eur bych chtěl vědět hlavně tohle.

[Zdroj: adidas, oznámení Futurecool](https://news.adidas.com/sportswear/adidas-unveils-futurecool---the-next-era-of-3d-printed-footwear/s/644401b9-189e-47f6-8328-4460c4448805)

---

## The Next Layer o dalším vývoji FDM

The Next Layer ve videu rozebírá, jestli už domácí FDM tiskárny dosáhly svého vrcholu. Input shaping omezuje vibrace při rychlých pohybech, CoreXY tiskárny jsou běžně dostupné a přibývají stroje s výměnou tiskových hlav. Co se dá ještě zlepšit?

![Náhled videa The Next Layer o tom, zda FDM dosáhlo svého vrcholu](/content/images/2026/09/pod-tryskou-37-2026-fdm-peak.webp)

Vedle rychlosti se dá dál pracovat na výměně materiálů, měření a automatickém nastavení tisku. Mně se líbí hlavně možnost ubrat ruční ladění.

[Zdroj: The Next Layer](https://www.youtube.com/watch?v=4lJJW8wNnLk)
