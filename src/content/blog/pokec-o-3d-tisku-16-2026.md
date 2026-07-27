---
title: "Pokec o 3D tisku: Nintendo Switch s Klipperem a nový slicer Preflight"
pubDate: "2026-05-19T12:00:00.000Z"
updatedDate: "2026-05-19T12:00:00.000Z"
description: "Nintendo Switch jako Klipper server, nový slicer Preflight, bambu filament switch a rýžové PLA. Recap members streamu 16/2026."
heroImage: "/content/images/youtube/eSXriUD57SM.jpg"
tags: ["Youtube streamy", "Members only", "Pokec o 3D tisku"]
draft: false
---

Tentokrát to byl stream trochu jiného druhu. Umřel mi streamovací stroj, takže jsem skočil na Mac, nainstaloval Streamlabs v rychlosti a jel. Mikrofon ležel na stole, kamera přepálená, klávesové zkratky jsem míchal windowsové s macovými. Ale obsah byl fajn, takže pojďme na to.

> Celý stream si můžete pustit [na YouTube](https://www.youtube.com/watch?v=eSXriUD57SM). Jde o members-only obsah, [členství od 45 Kč](https://www.youtube.com/channel/UCACAWyuYlpfH2Jn6HLhhGgw/join).

## Nintendo Switch jako Klipper server

Tohle mě fakt zaujalo. Někdo vzal čipnutý Nintendo Switch, nahrál na něj Ubuntu a rozjel na tom Klipper s Mainsailem. Výsledek? Plnohodnotný Klipper server se sedmipalcovým dotykovým displejem za cenu použitého herního zařízení.

Aby tohle fungovalo, potřebujete čipnutý Switch. Buď máte jednu z prvních verzí, kde šlo nahrát patch přes USB, nebo si musíte nechat přidat čipík dovnitř. Není to úplně triviální, ale dá se to. Na Bazoši seženete starší Switch klidně za 3 500 Kč i s hrami.

Ubuntu tam běží v upravené verzi, terminál funguje, prohlížeč taky, a hlavně Klipper s Mainsailem bez problémů. Dotykový displej je bonus navíc. Nevím, jestli by tam šel rozjet i Klipper Screen, ale základní ovládání přes Mainsail na dotyku dává smysl. Jasně, jakmile Switch vypnete, tiskárna se zastaví, takže to není řešení pro dlouhé tisky bez dozoru. Ale jako levná alternativa k Raspberry Pi nebo starému notebooku? Docela zajímavá volba.

## Preflight Slicer

O tomhle sliceru jsem před streamem neslyšel. Jmenuje se Preflight a vychází z Prusa Sliceru, ale parta vývojářů za ním si přidala vlastní vychytávky. Nejzajímavější je systém interlocking perimeters.

V praxi to vypadá tak, že perimetry se tisknou způsobem, který je vzájemně proplete s infillem. Výsledek je výrazně pevnější díl hlavně v ose Z, kde jsou 3D tisky tradičně nejslabší. Zkoušel jsem to na kostce přímo ve streamu a výsledek byl zajímavý. Pět interlocking perimetrů plus dva vnitřní a jeden vnější. Spotřeba materiálu šla nahoru, čas tisku taky, ale pevnost by měla být znatelně lepší.

Slicer má i další funkce: adaptive pressure advance, paint-on supporty různého typu, export do skriptu, import z Orca Sliceru nebo třeba emboss obrázků přímo do povrchu tisku. GitHub se aktualizuje pravidelně, takže to není mrtvý projekt. Stáhnout to jde pro Mac, Windows i Linux. Nemá v galerii Benchi, což je samozřejmě diskvalifikační kritérium, ale jinak to vypadá slibně.

## Orca Slicer fork od Luise

Minule jsme to nakousli, teď jsme se k tomu vrátili. Původní vývojář Orca Sliceru se bál právních problémů s Bambu Lab, takže repozitář předal Luisovi. Ten ho nahrál na svůj GitHub a od té doby si ho forklo přes 4 600 lidí. To znamená, že 4 600 lidí má teď kopii u sebe v repozitáři.

Bambu by teoreticky mohlo žalovat každého z nich, ale reálně si myslím, že do toho nepůjdou. Projekt je teď příliš velký a viditelný. Pokud chcete open source verzi Orca Sliceru, odkaz na Luisův repozitář jsem hodil do chatu přímo ve streamu.

## Bambu Filament Switch pro X2D a H2D

Bambu přišlo s příslušenstvím zvaným Filament Switch. Jde o zařízení, které umožňuje natahovat filament z jednoho AMS do obou toolheadů na X2D nebo H2D. Cena je kolem 60 eur, tedy zhruba 1 500 Kč.

Výhoda je v tom, že nemusíte mít jedno AMS napevno přiřazené k jednomu toolheadu. Můžete si namapovat barvy dynamicky a využít osm barev na obou hlavách zároveň, místo abyste měli čtyři barvy na každé hlavě zvlášť. Pro lidi, kteří mají X2D a chtějí víc flexibility při vícebarevném tisku, to dává smysl. Není to nutnost, ale jako upgrade za 1 500 Kč to není špatné.

## Tisk ze skla a rýžové PLA

Dvě kratší novinky na závěr.

Někde na univerzitě tisknou z recyklovaného skla. Skleněný prášek se spéká podobně jako u SLS, výsledky vypadají detailně a materiál samozřejmě snese teploty, které by plast nezažil. Zatím jde o výzkumný projekt, ne o něco, co si koupíte na Hotend.cz, ale směr je zajímavý.

A pak je tu rýžové PLA. Vědci přišli na to, že biochar z rýžových plev, tedy odpad z loupání rýže spálený pyrolýzou bez přístupu kyslíku, se dá přimíchat do PLA a výsledný materiál lépe klouže. Minule jsme měli PLA s vlnou, teď máme PLA s rýžovým odpadem. Kam to dojde, to nevím, ale materiálový výzkum kolem bioplastů je fakt aktivní.

## Shrnutí

- Nintendo Switch s čipem a Ubuntu zvládne rozjet Klipper s Mainsailem, dotykový displej je bonus
- Preflight Slicer přináší interlocking perimeters pro pevnější tisky v ose Z, stojí za vyzkoušení
- Orca Slicer fork od Luise je dostupný na GitHubu, přes 4 600 lidí si ho forklo
- Bambu Filament Switch za 60 eur umožňuje flexibilnější mapování barev na X2D a H2D
- Tisk ze skleněného prášku zatím jako univerzitní projekt, rýžové PLA jako nový směr v biomateriálech
- Příští stream snad bez provizorního Streamlabs a mikrofonu na stole
