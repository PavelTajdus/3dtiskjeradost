---
title: "Pod tryskou 23/2026: Barvy, bed slingery a AI, která hlídá tisk"
pubDate: "2026-06-01T05:03:11.000Z"
description: "Tento týden přišlo víc zajímavých zpráv najednou. Prusa otevřela systém pro střídání barev, Bambu Lab naznačil další tiskárnu, vědci z ORNL ukázali AI, co koriguje tisk za chodu. A k tomu patentové ta"
tags: ["Newsletter"]
---

Tento týden přišlo víc zajímavých zpráv najednou. Prusa otevřela systém pro střídání barev, Bambu Lab naznačil další tiskárnu, vědci z ORNL ukázali AI, co koriguje tisk za chodu. A k tomu patentové tahanice, varování před výpary a pár spekulací o tom, co nás čeká.

---

## Prusa představila ColorMix: Víc barev z pár filamentů

Prusa vydala **ColorMix** – otevřený systém pro vícebarevný tisk, který je teď součástí PrusaSliceru i EasyPrintu. Princip je prostý: slicer střídá tenké vrstvy různých filamentů, takže oko výsledek vnímá jako smíšený odstín. Fyzicky se materiály nemíchají – jde o optický efekt skládání barev.

Podobné experimenty tu byly dřív – třeba Ratdoux se svým *OrcaSlicer-FullSpectrum*. Teď je to ale přístupné každému bez dalšího bastlení.

Pár věcí, které bych zmínil rovnou: výsledné spektrum závisí na konkrétních filamentech, geometrii modelu i profilu tisku. A čím víc barev chceš, tím déle tiskneš. Pro hobby použití je to přesto zajímavý posun – místo tuctu rolí si vystačíš s pár základními a zbytek odvedou algoritmy.

Zatím to není dokonalé, ale jde o rozumný krok správným směrem.

[Více informací](https://blog.prusa3d.com/our-new-open-source-colormix-model-in-prusaslicer-and-easyprint_136079/)

---

## Bambu Lab chystá A2L: Velký bed slinger za přijatelnou cenu?

Bambu Lab na sociálních sítích ukázal náhled tiskárny **A2L** s potvrzeným představením 1. června. Víc zatím není potvrzeno – zbytek jsou dohady z teaser obrázků.

Podle dostupných indicií by mělo jít o **bed slinger s větší tiskovou plochou**. Bed slinger je typ tiskárny, kde se pohybuje tisková podložka (na rozdíl od CoreXY konstrukcí, kde se pohybuje tisková hlava). Výhoda je jednodušší mechanika, nevýhoda je třepotání při vyšších rychlostech a nižší přesnost u větších modelů.

Bambu Lab dosud uměl kombinovat slušný hardware s rozumnou cenou. Jestli se to povede i tady a jestli se podaří vyřešit typické slabiny tohoto typu konstrukce – to ukáže až červen.

Víc konkurence na trhu každopádně prospívá všem.

[Více informací](https://www.tomshardware.com/3d-printing/bambu-lab-teases-new-a2l-3d-printer-june-1-launch-confirmed)

---

## Kalifornie zpřísňuje regulaci 3D tištěných zbraní

Kalifornský zákonodárný sbor schválil **Assembly Bill 2047**, který rozšiřuje stávající omezení. Nově by se zákaz měl vztahovat nejen na hotové modely, ale i na soubory a návody určené k jejich tisku.

Zákon čeká na podpis guvernéra. Nadpis „zakazuje zbraně" by byl přesný jen částečně – jde spíš o zpřísnění regulace toho, co se smí sdílet a vyrábět. Pro ty, kdo tisknou figurky, náhradní díly nebo cokoliv jiného legálního, to nic nemění. Ale stojí za to sledovat, jak podobná legislativa postupně kreslí hranice celého oboru.

[Více informací](https://3dprintingindustry.com/news/california-bill-targeting-3d-printed-firearms-passes-assembly-251887/)

---

## AI z ORNL koriguje chyby tisku za chodu

Výzkumníci z **Oak Ridge National Laboratory** vyvinuli systém, který pomocí kamer a umělé inteligence detekuje odchylky od očekávaného průběhu tisku a průběžně koriguje parametry procesu. Zatím jde o průmyslové nasazení – ne o funkci, kterou by sis zítra zapnul v Marlinu.

Přesto je to zajímavý směr. Místo toho, abys po pěti hodinách zjistil, že se model rozjel, systém reaguje průběžně. Ušetřilo by to filament, čas i nervy. Jestli se podobný přístup dostane i do hobby segmentu – a kdy – to teď nikdo neví. Ale princip dává smysl.

[Více informací](https://3dprintingindustry.com/news/ornls-ai-powered-system-fixes-3d-printing-errors-in-real-time-251908/)

---

## Bosch patentuje vyhřívaný kroužek kolem trysky

Bosch si nechal patentovat **trysku s vyhřívaným prstencem kolem výstupu filamentu**. Cílem je přesnější kontrola teploty a menší riziko ucpání – zejména u vysokoteplotních materiálů jako PEEK nebo nylon.

Kdo někdy strávil odpoledne čištěním ucpané trysky, pochopí, proč je každá změna v téhle oblasti vítaná. Bosch ale není výrobce 3D tiskáren, takže pokud se to dostane do praxe, půjde nejspíš cestou licencování jiným firmám. Kdy a jestli vůbec – to patent neříká.

[Více informací](https://www.fabbaloo.com/news/bosch-patent-targets-hotter-fff-nozzle-control)

---

## 3000 hodin tisku ABS: co zůstane v odtahu

Uživatel na Redditu sdílel fotku výfukového systému tiskárny po 3000 hodinách tisku ABS. Vypadalo to jako komín po tuhé zimě. Dobrá připomínka, že ABS není materiál, u kterého by se dalo větrání odbýt otevřeným oknem.

Pár upřesnění: u emisí z 3D tisku nejde jen o pevné částice, na které HEPA filtr stačí. ABS a podobné materiály uvolňují i těkavé organické sloučeniny (VOC), které HEPA nezachytí – na ty potřebuješ aktivní uhlí nebo kombinovaný filtr. ABS, PETG a nylon se v tomto ohledu chovají různě, ale žádný z nich bych netisknul v uzavřené místnosti bez odtahu.

Plíce máš jen jedny.

[Více informací](https://www.fabbaloo.com/news/that-abs-printer-exhaust-photo-is-a-blunt-reminder-that-fumes-are-part-of-the-print-job)

---

## Trinckle patentuje systém, který chrání začátečníky před sebou samými

Trinckle si nechal patentovat konfigurátor, který **automaticky omezuje nastavení vedoucí k nefunkčnímu tisku** – příliš tenké stěny, špatná orientace modelu a podobně. Software uživatele navede dřív, než stiskne Start.

Myšlenka je dobrá. Snížit bariéru vstupu pro lidi, kteří 3D tisk teprve zkouší, dává smysl. Problém je jinde: patentování takto obecného konceptu může ostatním firmám zkomplikovat vývoj podobných funkcí, i když by je implementovaly úplně jinak. A to už je jiná kapitola.

[Více informací](https://www.fabbaloo.com/news/trinckle-patents-user-guided-3d-printing-configuration)

---

## Deset věcí, které by mohly 3D tisk zásadně posunout

Fabbaloo sestavil seznam deseti možných změn, které by mohly obor v příštích letech výrazně přeformovat. Pár z nich:

- **AI generované modely** – funguje to už teď, ale výsledky jsou zatím hodně nekonzistentní
- **Amazon jako výrobce tiskáren** – masové distribuční kanály by mohly trh otočit naruby
- **Biologický tisk domácích uživatelů** – to je zatím opravdu vzdálená budoucnost
- **Recyklace filamentu přímo v tiskárně** – tohle by byl skutečný posun pro každého, kdo má plný šuplík špatných výtisků

Část z toho se pravděpodobně prosadí, část zůstane na papíře. Ale přemýšlet o tom, co přijde, má smysl – obor se pohybuje rychle.

[Více informací](https://www.fabbaloo.com/news/ten-potential-disruptions-that-could-reshape-the-3d-printing-industry)

---

Nabitý týden. Barevné experimenty, AI korekce tisku, patentové tahanice i připomínka, že větrání není volitelná výbava. Co z toho vás zaujalo nejvíc? Napište do komentářů – k zajímavým tématům se rád vrátím podrobněji. 🚀
