---
title: "Pokec o 3D tisku: pokerový žeton, Printerhive a drahé MMU"
pubDate: "2026-06-30T12:00:00.000Z"
updatedDate: "2026-06-30T12:00:00.000Z"
description: "Windows klient Printerhive, experimentální belt větev OrcaSliceru, Anycubic Kobra, EMU a BIQU BMCU v jednom members streamu."
heroImage: "/content/images/youtube/gidGbMVnP9Q.jpg"
tags: ["Youtube streamy", "Members only", "Pokec o 3D tisku", "Printerhive", "Anycubic"]
draft: false
---

Tenhle Pokec byl přesně ten typ streamu, kdy se nejdřív vaří místnost, pak slicer a nakonec i člověk. Chtěl jsem jen pustit rychlý dvoubarevný tisk jako podkres, ale hledání normálního modelu zabralo skoro čtvrt hodiny. Nakonec z toho byl pokerový žeton, mezitím pár novinek kolem [Printerhive](https://printerhive.com/cs), Anycubicu, OrcaSliceru a zase jedno připomenutí, že DIY multicolor umí být krásná hračka, ale levné to být nemusí.

> Celý stream si můžete pustit [na YouTube](https://www.youtube.com/watch?v=gidGbMVnP9Q). Jedná se o members-only obsah, [členství začíná na 45 Kč](https://www.youtube.com/channel/UCACAWyuYlpfH2Jn6HLhhGgw/join).

---

## Rychlý dvoubarevný tisk, který rychlý nebyl

Začali jsme úplně prakticky: najít něco malého, barevného a dost krátkého, aby se to během streamu stihlo vytisknout. Zní to jednoduše, jenže realita je taková, že na modelech člověk často narazí na rozdělené soubory, schované objekty, divné projekty nebo věci, které se tváří jako dvoubarevné, ale ve sliceru se chovají úplně jinak.

Nakonec padla volba na pokerový žeton. Modrá, bílá, pár čísel, pár skrytých objektů, trocha klikání a tisk se rozjel. Mimochodem, už samotné hledání modelu je pěkná ukázka toho, proč mě u repozitářů modelů štve, když náhled slibuje něco, co pak člověk v projektu reálně nenajde.

## Printerhive bez Raspberry jako vstupní bariéra

V beta testu už běží [nativní klient Printerhive pro Windows](https://docs.printerhive.com/changelog/), takže připojení tiskáren nemusí nutně znamenat Raspberry Pi nebo jiné dedikované zařízení. Nainstaluješ klienta, spustíš ho, přihlásíš se a můžeš tiskárny připojit přes stroj, který už doma máš.

Má to ale jeden háček, lokální klient musí pořád běžet. Když vypneš počítač, tiskárny sice samy fyzicky tisknou dál, ale spojení přes klienta prostě nežije. U mě to dává smysl třeba na Macu mini, který běží nonstop, ale pro někoho bude pořád lepší dedikované Raspberry nebo podobná krabička. Výhoda Windows klienta je hlavně v tom, že snižuje psychologickou bariéru. Spousta lidí nechce řešit Linux, síťové krabičky a další vrstvu domácí infrastruktury.

## OrcaSlicer a návrat belt printerů

Ve [vývojové belt větvi OrcaSliceru](https://github.com/OrcaSlicer/OrcaSlicer/releases) se objevila experimentální podpora tiskáren s posuvnou pásovou podložkou. To mě zaujalo, protože těchhle strojů na trhu moc není. Vybavím si hlavně Creality CR-30, ze které hotové výtisky z pásu postupně odpadávaly.

Je otázka, jestli vývoj někdo zasponzoroval, nebo jestli se pásové tiskárny používají víc, než se na první pohled zdá. Zatím jde o samostatné experimentální buildy, ne standardní verzi OrcaSliceru. Není to funkce pro každého, ale pro zakázkové tisky nebo sériové drobnosti může mít pásová tiskárna pořád svoje místo.

## Anycubic Kobra mě zatím překvapuje

Na stole běžela Anycubic mašina a musím říct, že zatím příjemně překvapuje. Jeden velký tisk mi zabil výpadek proudu, protože kolem baráku rozkopali teplovod a elektřina teď padá častěji než normálně. Jinak ale tiskárna fungovala dobře, tiskla hezky a dvoubarevnou výměnu během streamu zvládla bez dramatu.

Co mi vadí? Plasty působí levněji a divně se mi samovolně rozsvěcovalo světlo, i když tiskárna stála. Nechci z toho dělat špionážní drama, klidně to může být jen softwarový bug nebo nějaká kontrola přes kameru, která se spouští i ve špatný moment. I tak je to zvláštní. První věc bude LAN mód a konektor do Printerhive, protože tiskárny připojené do cloudu nechci nechávat jen tak.

Naopak mě baví krátká cesta filamentu. Filament zaleze dovnitř jen pár centimetrů, takže se špulky zbytečně nerozmotávají a není potřeba navíječ. Taková blbost, ale v praxi příjemná.

## Kobra S1, ACE a nové krabice od Anycubicu

Pak jsme koukli i na aktuální nabídku Anycubicu: [Kobra S1 s ACE 2 Pro](https://eu.anycubic.com/products/kobra-s1-ace-2-pro-combo-3d-printer) a [Kobra X](https://store.anycubic.com/products/kobra-x-combo-3d-printer). Přiznám se, v jejich značení se člověk lehce ztratí. Některé varianty vypadají skoro stejně, rozdíly nejsou na první pohled jasné a člověk hledá sedm rozdílů.

Designově ale některé nové krabice nevypadají špatně. Líbí se mi, jak pracují s místem, displejem a kompaktností. Ceny už ale působí dost bambulabovsky. U některých hotendů jsem z obrázků neměl nejlepší pocit, vypadalo to jako něco mezi Volcanem a V6. Tady bych byl opatrný, protože z obrázků se nedá soudit všechno, ale úplně nadšený jsem z toho nebyl.

## EMU MMU vypadá dobře, cena už méně

Další odbočka byla [EMU, modulární a rozšiřitelný MMU systém](https://github.com/DW-Tas/EMU/). Na první pohled se mi líbí víc než některé jiné komunitní pokusy, protože řeší i navíjení. To je pro mě důležité. U vícebarevných systémů není jen otázka, jestli filament nějak protlačíš do hotendu, ale taky co se děje se špulkou, když se materiál vrací zpátky.

Jenže pak přijde cena. V orientačním počítání během streamu vyšly desky, elektronika, mechanika a tištěné díly pro pět drah někam k deseti až dvanácti tisícům korun. To už není drobnost. Jako projekt mě to zajímá, ale jako běžné doporučení pro člověka, který chce jen víc barev, bych byl hodně opatrný.

## BMCU a levné kity, které levné moc nejsou

Na konci jsme koukli i na [BIQU BMCU-370](https://biqu.equipment/products/biqu-bmcu-370-full-multi-color-feeding-system) a podobné vícebarevné kity. Některé vypadají jako zajímavá alternativa, ale když se začne počítat poštovné, elektronika, motory, tištěné díly a čas, najednou to není taková výhra. U A1 navíc existuje AMS Lite, takže když se kit cenově přiblíží originálu, musí nabídnout fakt dobrý důvod.

U jednoho řešení mi vadila velikost na stole, chybějící zakrytování a celkově pocit, že si člověk koupí polotovar, který pak ještě musí doladit. Když si chceš hrát, chápu to. Sranda musí být. Ale pokud chceš hlavně tisknout, radši bych se díval po jednodušším kitu, třeba přímo od BIQU.

## Shrnutí

- **Printerhive klient pro Windows** snižuje bariéru, ale lokální stroj musí běžet pořád.
- **OrcaSlicer testuje belt printery**, což je malá, ale zajímavá větev 3D tisku.
- **Anycubic Kobra zatím tiskne líp, než jsem čekal**, i když levnější plasty a divné světlo mi vadí.
- **Nové Anycubic krabice vypadají slušně**, ale značení a ceny jsou trochu guláš.
- **EMU MMU je zajímavý projekt**, jen se může dost prodražit.
- **BMCU a podobné kity dávají smysl hlavně pro hraní**, ne nutně jako levná cesta k multicoloru.
- A pokerový žeton? Spodek pěkný, vršek chtěl ubrat materiál, ale zvuk měl skoro kasinový.
