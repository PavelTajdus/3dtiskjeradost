---
title: "Pokec o 3D tisku: OpenSCAD s AI a návrat ke starým konstrukcím"
pubDate: "2026-10-13T12:00:00.000Z"
updatedDate: "2026-10-13T12:00:00.000Z"
description: "AI mi v OpenSCADu vytvořila stojánek na telefon. Prošli jsme staré konstrukce tiskáren, tištěnou pickleballovou pálku i Klipper pro Snapmaker U1."
heroImage: "/content/images/youtube/mZALFDkooEo.jpg"
tags: ["Youtube streamy", "Members only", "Pokec o 3D tisku", "Klipper"]
draft: false
---

Zkusil jsem nechat AI vymodelovat stojánek na telefon v OpenSCADu. Než se dopracovala k výsledku, stihli jsme projít kus historie domácích tiskáren a já zase hledal konstrukci, na kterou mám dodnes nakoupené díly. Nakonec došlo i na tištěnou pickleballovou pálku, kterou jsem si rovnou otevřel ve sliceru.

> Celý stream si můžete pustit [na YouTube](https://www.youtube.com/watch?v=mZALFDkooEo). Jedná se o members-only obsah, [členství si můžete pořídit tady](https://www.youtube.com/channel/UCACAWyuYlpfH2Jn6HLhhGgw/join).

---

## Stojánek na telefon z OpenSCADu

Minule jsme si hráli s modelováním přes AI, tentokrát jsem otevřel OpenSCAD. V něm model popisujete kódem. Píšete něco podobného programu a vedle vidíte, jaká geometrie z toho vzniká. Nikdy jsem tomu nepropadl tolik, abych v tom sám pořádně modeloval, ale pro zadání přes AI mi to přijde docela zajímavé.

V Codexu jsem zadal stojánek na iPhone Pro Max. AI nejdřív vytvořila soubor u sebe, místo aby rovnou psala do otevřeného okna. Pak jsme se dostali i k modelu v OpenSCADu. Chvilku to trvalo a ovládání oken na počítači mi do streamu přidávalo trošku zmatku.

Výsledek ale vypadal použitelně. Stojánek měl výřez na kabel a dokonce i zkosené hrany, které jsem ani nečekal. **Na pohled to byla tisknutelná věc a měl jsem i STL pro slicer.** Normálně něco zadám AI a jdu dělat další věci, což na streamu nejde.

---

## TPU a návrat k pružným výtiskům

Během modelování přišla řeč na TPU. Já jsem z něj naposledy tiskl vložky do bot a byly překvapivě dobré. V chatu padl i obal na telefon. To mi přijde jako jedna z nejpraktičtějších ukázek pružného tisku, protože telefon má skoro každý a použití takového výtisku je hned jasné.

U materiálů jsme se zastavili u Fiberflexu. Ten jsem na streamu chválil, patří podle mě k nejlepším flexům. Možná existují lepší, ale zatím se mi do ruky nedostaly.

---

## Kartézská tiskárna s jiným pojezdem

Z chatu přišla ukázka další konstrukce tiskárny. Při prohlížení pohybu os jsem v ní viděl běžný kartézský systém, byť měl jinak udělaný pojezd. Jedna osa pohybuje hlavou doprava a doleva, druhá dopředu a dozadu. Zaujalo mě hlavně provedení kolem tyčí a pohonu.

Připomnělo mi to Ultimaker a jeden starý domácí projekt, který jsem si kdysi chtěl postavit. Na Thingiverse jsem proto začal hledat mezi tiskárnami. Samozřejmě jsem si nemohl vzpomenout na název, takže se z krátké ukázky stala docela dlouhá retro přehlídka.

Konstrukce tiskáren mě pořád baví. Dřív jsem tyhle stránky procházel a říkal si, co všechno jednou postavím. U jednoho vlastního návrhu jsem se dostal až k ručně vyřezané překližce. Chtěl jsem místo tyčí použít lineární vedení, jenže jsem pohořel na tom, že jsem to nedokázal pořádně nakreslit.

---

## El Cheapo a Annex K3

Nakonec jsme hledaný projekt našli pod názvem El Cheapo. Je to domácí konstrukce na principu Ultimakeru. Na tuhle stavbu jsem měl nakoupené tyče, ložiska a další díly. Část mám dodnes.

Na ukázce bylo pěkně vidět, jak jsou pojezdy propojené a jak pohybují hlavou. Zastavili jsme se také u Annex K3, kde místo tyčí najdete lineární vedení. I tam mě zajímal hlavně samotný pohyb a uspořádání os.


---

## LulzBot mě pořád láká konstrukcí

Přes staré projekty jsme se dostali k LulzBotu. TAZ mě vždycky fascinoval a pořád se mi líbí jeho rám. Bavilo by mě podobnou tiskárnu postavit po svém, s lineárním vedením a s vlastními úpravami. Při procházení obrázků jsem ale u některých částí jen odhadoval, jak přesně je mají udělané.

Zaujala mě i menší tiskárna s ohýbanými plechy. Líbí se mi představa připravených otvorů, tyčí a rámu, který sešroubujete dohromady. Naopak u Sidekicku mi cena přišla dost odvážná. Tištěných dílů tam bylo hodně a z té ukázky jsem nadšený nebyl.


---

## Pickleballová pálka zabrala velkou podložku

Na stránkách jsme narazili na tištěnou pickleballovou pálku. Pickleball jsem si už dvakrát zahrál a překvapilo mě, že jsme si opravdu zahráli, i když se s tenisovou raketou moc nekamarádím. Takže mě zajímalo, co by zvládla vytištěná varianta.

Otevřel jsem model ve sliceru. Měl přibližně **402 × 209 mm a tloušťku 6 mm**. Pro svou tiskárnu s podložkou 600 × 300 mm jsem si začal chystat profil odvozený od Tridentu. Na takovou plochu už se pálka vešla.

Zkoušel jsem plnou výplň a soustředný vzor, tedy concentric. Stejný vzor jsem nastavoval i na horní a spodní povrch. V chatu padlo TPU, ale připomínal jsem, že pickleball se hraje tvrdou pálkou. Nakonec jsem ji netiskl. Po ukázkovém videu k pálce mi to přišlo jako blbost.

---

## Retro počítačová skříň a Klipper pro U1

Na konci jsem ještě rychle prošel pár věcí, které jsem si chtěl prohlédnout. Byla mezi nimi tištěná mini-ITX skříň v retro stylu Sunu. Ta se mi moc líbila. U projektu se objevovalo zhruba 85 hodin tisku, takže to není drobnost na jedno odpoledne.

Zaujalo mě také, že si můžete na GitHubu prohlédnout Klipper upravený pro Snapmaker U1. Díval jsem se na nahlášené problémy i návrhy změn od dalších lidí. To mi přišlo fajn, protože se dá podívat přímo na to, jak mají firmware udělaný.

A ještě mě čeká tisk hudebního nástroje pro známého. Model jsem zatím netiskl, schovával jsem si ho kvůli streamu. Podle ukázky má být tisk jednoduchý, zato hraní už tak snadné být nemusí. Na to jsem zvědavý.
