---
title: "Pod tryskou 37/2026: od recyklátu po tištěnou botu"
pubDate: "2026-09-07T05:00:00.000Z"
description: "3devo ukázalo FMX10 pro výrobu filamentu z pelet a recyklátu, Meshy 7 měří shodu 3D modelu s předlohou, adidas chystá plně tištěné boty a The Next Layer řeší další strop FDM."
tags: ["Newsletter"]
heroImage: "/content/images/2026/09/pod-tryskou-37-2026-hero.webp"
---

# Pod tryskou 37/2026: od recyklátu po tištěnou botu

Tentokrát se 3D tisk posouvá o kus dál od samotné tiskárny. 3devo chce zpracovávat pelety, regranulát i odpad do vlastního filamentu, Meshy řeší, jestli AI vytvoří opravdu ten správný model, a adidas zkouší dostat celou botu z jediné tištěné konstrukce. Do toho se vrací otázka, jestli se FDM už blíží svému stropu.

## 3devo FMX10 chce dělat filament rovnou z pelet a odpadu

3devo představilo **Filament Maker X10**, automatický extruzní systém pro výrobu filamentu ve větších dávkách. Do násypky může jít prášek, regranulát nebo pelety a na druhém konci vzniká navinutá cívka. Výrobce ho staví mezi laboratorní extrudér a průmyslovou linku: má běžet bez obsluhy, průběžně hlídat průměr a nechat člověka jen měnit cívky.

![Filament Maker X10 od 3devo s násypkou, chlazením a navíjením filamentu](/content/images/2026/09/pod-tryskou-37-2026-3devo-fmx10.webp)

Čísla vypadají zajímavě. 3devo uvádí výkon až **1,5 kg filamentu za hodinu** u referenčního PLA, čtyři vyhřívané zóny do **450 °C** a celkem **2,80 metru chladicí dráhy**. Průměr se měří až po vychladnutí a firma pro rPA12 s uhlíkovým vláknem uvádí přesnost **±30 mikrometrů na celé cívce**. Vstupní SmartFlow Hopper má objem 7,25 litru a systém počítá i s abrazivními nebo plněnými směsmi.

Tohle nejsou parametry pro domácí tiskárnu vedle pracovního stolu. Důležitější je jiná část příběhu: 3devo píše, že během testování zpracovalo přes **2 000 kg odpadu z MJF prášku PA12** a zkoušelo patnáct strojů déle než šest měsíců. Jsou to údaje výrobce, ne nezávislý srovnávací test, ale dobře ukazují, kde chce zařízení dávat ekonomický smysl.

U malé tiskové farmy nebo vývojového oddělení totiž vlastní filament není jen ekologická nálepka. Znamená možnost upravit směs podle konkrétního použití, využít vlastní odřezky a nebýt odkázaný na jednu dodavatelskou cívku. Pořád ale musí vyjít cena práce, třídění a sušení vstupního materiálu. Z odpadu se nestane dobrý filament jen tím, že ho nasypeš do násypky.

[Zdroj: 3devo, Filament Maker X10](https://www.3devo.com/filament-maker-x10) a [zpráva 3DPrint.com](https://3dprint.com/331487/3devo-releases-filament-maker-x10/)

## Meshy 7 nechce vytvořit jen správný druh objektu

U generování 3D modelů už není největší problém dostat z obrázku nějaký objekt. Těžší je vytvořit objekt, který odpovídá právě předloze. Meshy to u verze 7 pojmenovalo jako **geometry alignment**, tedy shodu geometrie s referenčním obrázkem. Sleduje zvlášť celkové proporce, rozmístění hmoty a jemné povrchové detaily.

![Meshy 7 ukazuje cestu od konceptu mechanického ptáka přes šedou geometrii k finálnímu 3D renderu](/content/images/2026/09/pod-tryskou-37-2026-meshy-7.webp)

Meshy na vlastním benchmarku uvádí u vstupu z jednoho pohledu skóre **81,0 %** pro celkové proporce, **79,7 %** pro prostorové rozmístění a **59,8 %** pro povrchové detaily. Při čtyřech pohledech se hodnoty mění na 84,4, 81,8 a 60,6 %. Firma porovnávala generované modely s referenčními geometriemi vynechanými z tréninku a 100 % znamená shodu referenčního modelu se sebou samým.

Je to užitečnější měřítko než hlasování, jestli obrázek „vypadá dobře“. Zároveň jde pořád o benchmark přímo od Meshy. Nezávislý test, který se objevil ve stejném týdnu, pracoval s **Meshy 6**, nikoli se sedmičkou. Engineering tým 3D Printing Industry při něm narazil na vysoké počty polygonů, opravy neuzavřené geometrie a omezenou rozměrovou přesnost.

Pěkný detail je zkouška obyčejné kostky o straně 25 mm. První prompt s textem na stěnách měl podle měření rozdíl mezi šířkou a hloubkou **2,918 mm**. Jednodušší prompt bez písmen skončil s rozdílem **0,008 mm**. To neznamená, že je Meshy přesný CAD nástroj. Znamená to, že složitější zadání může do geometrie přidat chyby, které na náhledu neuvidíš.

Za mě je Meshy 7 zajímavé hlavně jako rychlý start: koncept, figurka, kulisa nebo základ pro další modelování. U držáku s přesnou roztečí děr bych pořád začal v CADu, ne obrázkem a modlitbou. AI může ušetřit první hodinu, ale kontrola sítě a rozměrů zůstává na člověku.

Zdroj: [Meshy, benchmark geometrické shody Meshy 7](https://www.meshy.ai/blog/meshy-7-image-to-3d-geometry-alignment) a [praktická recenze Meshy 6 na 3D Printing Industry](https://3dprintingindustry.com/news/review-meshy-ai-tested-across-six-practical-3d-modelling-tests-254447/)

## adidas chce dostat celou botu z tiskárny na běžné nohy

adidas oznámil **Futurecool**, další pokus o 3D tištěnou obuv. Nejde jen o podrážku nebo vložku. Záměrem je bezešvá, plně tištěná konstrukce, která spojuje materiál, tvar a větrání v jednom páru. Značka ji popisuje jako další krok po systému Climacool a mluví o **360stupňové ventilaci**.

![Oficiální snímek k oznámení adidas Futurecool](/content/images/2026/09/pod-tryskou-37-2026-adidas-futurecool.webp)

První uvedení mělo být malé a kontrolované: **400 individuálně číslovaných párů** šlo do slosování v aplikaci CONFIRMED od 28. srpna. Širší uvedení je podle zveřejněných informací naplánované na **1. dubna 2027** za 180 eur, v unisex velikostech UK 4 až 14. To je plán značky, ne výsledek nezávislého testu pohodlí, životnosti nebo chování při sportu.

Na Futurecool je zajímavé právě měřítko. Jednu efektní botu z aditivní výroby už umí ukázat víc firem. Mnohem těžší je vyrábět stejný tvar opakovaně, trefit velikosti, udržet pohodlí a dostat kusy k lidem za cenu, která nepůsobí jako laboratorní suvenýr. U obuvi navíc nestačí, že se díl vytiskne. Musí se ohnout na správném místě, držet nohu a přežít kontakt s vodou, potem i asfaltem.

Tady se 3D tisk potkává s módou i výrobou ve velkém. Pokud Futurecool zůstane jen limitovaným experimentem, pořád ukáže, jak daleko lze posunout konstrukci bez klasického šití a lepení. Pokud se podaří plánované širší vydání, bude důležitější než samotný vzhled otázka, jestli se celý proces dá opakovat ve stovkách a tisících párů.

Zdroj: [adidas Group, oficiální seznam oznámení](https://www.adidas-group.com/en/investors) a [3D Printing Industry, podrobnosti k Futurecool](https://3dprintingindustry.com/news/from-novelty-to-volume-adidas-bets-on-3d-printed-scale-with-futurecool-254323/)

## FDM nenarazilo na strop, jen už nepřináší takové skoky

Hackaday rozebírá video The Next Layer s otázkou, jestli už spotřebitelské FDM dosáhlo svého vrcholu. Dnešní tiskárny umí z běžné dílny dostat konzistentní díly s vysokým rozlišením překvapivě rychle. Input shaping, CoreXY konstrukce, barevný tisk a dostupnější toolchangery posunuly věci, které ještě před pár lety působily jako profesionální technika.

![Náhled videa The Next Layer o tom, zda FDM dosáhlo svého vrcholu](/content/images/2026/09/pod-tryskou-37-2026-fdm-peak.webp)

Porovnání s minulou dekádou ale dává otázce smysl. Rozdíl mezi tiskárnou zhruba z roku 2020 a současným strojem je menší než rozdíl mezi prvními MakerBoty, Ultimakerem II a pozdějšími dostupnými tiskárnami. Základní mechanika už není hlavní překážka. Další zrychlení proto nepřinese takový wow efekt jako přechod na CoreXY nebo automatické vyrovnání podložky.

To ovšem neznamená, že se FDM přestane vyvíjet. Prostor je v materiálech, měření, automatickém řízení, výměně nástrojů a v celém pracovním postupu kolem tiskárny. Vedle toho se zlepšují i jiné technologie, třeba UV tisk a SLS. FDM nemusí vyhrát každou disciplínu, aby zůstalo nejpraktičtější volbou pro spoustu prototypů a menších sérií.

Za mě je pro domácí tisk největší posun méně efektní než další rekord v rychlosti. Tiskárna, která opakovaně trefí první vrstvu, sama zvládne změnu materiálu a nezabere večer laděním profilu, je často užitečnější než stroj o pár procent rychlejší. Strop se možná přibližuje u samotné mechaniky, ale ne u toho, co s hotovým strojem dokážeme dělat.

Zdroj: [Hackaday, rozbor otázky kolem vrcholu FDM](https://hackaday.com/2026/09/02/has-fdm-3d-printing-hit-its-peak/) a [video The Next Layer](https://www.youtube.com/watch?v=4lJJW8wNnLk)

Čtyři zprávy spojuje stejný posun: 3D tisk se méně řeší jako samotné kladení vrstev a víc jako celý řetězec. Od vstupního odpadu přes návrh a kontrolu geometrie až po výrobek, který musí fungovat mimo tiskárnu. To je méně efektní než další závod o rychlost, ale pro běžné použití podstatně důležitější.
