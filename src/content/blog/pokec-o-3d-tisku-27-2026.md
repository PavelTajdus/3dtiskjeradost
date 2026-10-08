---
title: "Pokec o 3D tisku: modelování s AI naživo"
pubDate: "2026-10-06T12:00:00.000Z"
updatedDate: "2026-10-06T12:00:00.000Z"
description: "Zkouším s AI navrhnout stojánek na mobil, krabičku s víkem a tělo makropadu. Od parametrů a chyb návrhu až k exportu do OrcaSliceru."
heroImage: "/content/images/youtube/ewOaxGOcbGI.jpg"
tags: ["Youtube streamy", "Members only", "Pokec o 3D tisku", "Voron"]
draft: false
---

Tentokrát jsem si místo montování tiskárny zkusil nechat AI navrhnout něco k vytištění. Začali jsme stojánkem na mobil, pak přišla krabička podle obrázku a nakonec tělo makropadu. Byl to můj první pokus s touhle aplikací, takže jsme její možnosti i chyby objevovali společně přímo na streamu.

> Celý stream si můžete pustit [na YouTube](https://www.youtube.com/watch?v=ewOaxGOcbGI). Jedná se o members-only obsah, [členství si můžete pořídit tady](https://www.youtube.com/channel/UCACAWyuYlpfH2Jn6HLhhGgw/join).

---

## Zadání v terminálu, model v prohlížeči

Ukazoval jsem open-source aplikaci pro modelování s AI. V době streamu byla připravená pro Mac, takže jsem tentokrát pracoval na MacBooku. Instalaci a spuštění jsem nechal řešit Codex. Sám jsem ten software předem nezkoušel, nebyla to připravená ukázka s hotovými výsledky.

Princip je docela příjemný. AI dostane zadání a pomocí instrukcí k aplikaci vytváří model, který vidím v prohlížeči. Nemusím jí jen říct „udělej STL“ a čekat, co z ní vypadne. Mám před sebou náhled a můžu zadání postupně upřesňovat.

Zaujalo mě, že instrukce počítají přímo s 3D tiskem. Řeší orientaci dílů, převisy a další věci, které by jinak člověk musel modelu pokaždé vysvětlovat. **Není to záruka správného návrhu**, ale je to lepší začátek než generovat libovolný tvar a až potom přemýšlet, jak ho vytisknout.

## Stojánek na mobil byl trochu kubistický, ale upravitelný

První zadání bylo jednoduché: navrhni stojánek na mobil. Výsledek vypadal trochu kubisticky a nebyl to tvar, který bych si hned chtěl postavit na stůl. Na první pokus mi ale nepřipadal špatný. Působilo to jako model, který by šel vytisknout, ne jen hezký obrázek.

V aplikaci se objevily parametry a mohl jsem měnit šířku nebo velikost průchodu pro kabel. To se mi líbí víc než jediný pevný model. Když potřebuješ větší otvor, upravíš rozměr místo dalšího dlouhého zadání od začátku.

Zkoušel jsem i různé AI modely. Nešlo mi o přesný benchmark, spíš o to, co zvládnou během obyčejného používání. Některé úpravy se táhly, jiné měnily náhled rychleji. Za mě je zajímavé hlavně to, že si k tomu může sednout i člověk, který neumí modelovat. Nebude mít automaticky krásný návrh, ale má od čeho začít.

## Krabička podle obrázku už ukázala slabiny návrhu

Další pokus byla odolnější krabička s víkem. Nejdřív vzniklo něco hodně jednoduchého, takže jsem AI přidal obrázek jako předlohu. Tady už se ukázalo, že zadat „krabičku“ a zadat konkrétní krabičku se západkami je velký rozdíl.

V náhledu jsme měli tělo, víko a postupně i zavírání. Jenže první západka nevypadala, že by mohla správně fungovat. Udělal jsem screenshot a řekl modelu, co je na ní špatně. Ten pak návrh dál upravoval.

To je přesně místo, kde bych se nenechal ukolébat pěkným náhledem. **Model může vypadat jako krabička, ale víko a západka ještě nemusí fungovat.** Musíš kontrolovat, co na sebe dosedá a jak se díly mají spojit. Já jsem u některých detailů pořád pochyboval a nechtěl jsem je vydávat za hotové řešení.

Při složitější úpravě se navíc prohlížeč zasekl. Agent pak hlásil těžký přepočet modelu a aplikaci restartoval. Není to tedy kouzelný postup, při kterém napíšeš jednu větu a za deset vteřin máš bezchybný výrobek.

## Parametry fungují, jen nesmíš předbíhat přepočet

U krabičky šlo měnit velikost, výšku nebo tloušťku stěn. Když jsem upravil rozměry, měnil se celý návrh včetně souvisejících částí. To už je pro mě užitečnější než ručně natahovat hotové STL.

Několikrát jsem ale změnil hodnotu a hned usoudil, že se nic nestalo. Aplikace přitom ještě pracovala. Musíš jí dát čas na přepočet a nesnažit se současně posouvat parametry i nechávat AI přestavovat celý model.

Podobně jsme narazili na hlášení převisů u sestavené krabičky. To, co vypadá jako převis v zavřeném celku, nemusí odpovídat poloze jednotlivých dílů při tisku. Za mě je důležité sledovat nejen sestavu, ale také to, jak budou tělo a víko ležet na podložce. Samotné upozornění v aplikaci ještě neříká, že je celý návrh špatný.

## Odbočka k Voronu 2.4 a měření podložky

Než AI dokončila práci, podívali jsme se na Voron 2.4 Ultra od Formbotu. Z výbavy mě zaujal hlavně Cartographer, vedle kamery, osvětlení a dalších doplňků. Nic z toho jsem na tomhle konkrétním kitu netestoval, jen jsme procházeli nabídku.

U sond jsme se dostali k rozdílu mezi rychlým snímáním plechu a dotykem trysky. Já mám rád, když se tryska podložky skutečně dotkne. Při hraní se svými pláty jsem viděl, že plech ani povrchová vrstva nejsou všude úplně stejné, a zajímá mě skutečný povrch, na který tisknu.

To ale neznamená, že Cartographer odmítám. Na běžném Voronu mi dává smysl a rychlost měření je velká výhoda hlavně u větších ploch. Zmiňoval jsem i zkušenost z velkých tiskáren, kde jsem s první vrstvou neměl zásadní problém. Je to moje preference způsobu měření, ne tvrzení, že každý musí svoji sondu zahodit.

## Tělo makropadu: nejdřív zjistit rozměry, pak modelovat

Další zadání přišlo z chatu. Zkusili jsme tělo makropadu, tedy malé klávesnice pro zkratky a vlastní akce. Já se v téhle terminologii moc neorientuju, takže jsem AI nechal nejdřív dohledat podklady a rozměry a teprve potom něco navrhovat.

Tohle používám i u jiných úkolů. Když jde o složitější věc, nezačínám rovnou výrobou. Nechám si nejdřív zjistit, co je potřeba a jaké jsou možnosti. U krabičky pro konkrétní součástky je to mnohem rozumnější než jen odhadnout několik otvorů.

Vzniklo tělo a víko, otvor pro USB-C i náhled sestavy. Aplikace měla také rozložený pohled, i když se díly rozestoupily méně, než bych chtěl. Vidět je pohromadě mi ale pomohlo pochopit, co vlastně vzniklo.

Detaily bych udělal trochu jinak. U spoje víka a těla jsem si nebyl jistý zacvakáváním a některé hrany bych upravil. Přesto mi to jako základ nepřipadalo špatné. Takovou jednoduchou krabičku bych zvládl navrhnout i sám, jen bych nad ní nejspíš strávil více času.

## Export do OrcaSliceru je začátek kontroly, ne potvrzení funkčnosti

Nakonec jsem si nechal nainstalovat OrcaSlicer a stáhl tělo i víko jako 3MF. Export chvíli trval a aplikace se znovu nechovala úplně plynule, ale oba díly jsem do sliceru dostal.

Vypadaly jako modely, které by šly připravit k tisku. **Na streamu jsme je ale nevytiskli ani nesestavili.** Nemůžu tedy říct, že skutečné součástky sednou do otvorů nebo že zacvakávací mechanismus funguje. To by musel potvrdit až výtisk a zkouška.

Dřív jsem na jednoduché věci používal AI generování v OpenSCADu. Tady mě bavilo, že vidím model živě, můžu měnit parametry a návrh zvládá i zaoblení. Za mě je to zajímavý pomocník na jednodušší parametrické díly. Zkušeného konstruktéra tím automaticky nenahradíš, ale člověku, který s modelováním začíná, to může pomoci dostat první nápad do použitelného tvaru.

Výsledkem večera je návrh krabičky a soubory ve sliceru, ne odzkoušený makropad. Další krok je vytisknout, zkontrolovat rozměry a upravit to, co nebude sedět. Přesně tam se ukáže, kolik práce nám AI opravdu ušetřila.
