---
title: "Pod tryskou 23/2026: Barvy z pár špulek, regulace a tiskárny, které hlídají samy sebe"
pubDate: "2026-06-01T05:03:11.000Z"
description: "Prusa otevřela ColorMix, Bambu Lab láká na další bed slinger, Kalifornie řeší 3D tištěné zbraně a výzkumníci ukazují, kam se může posunout automatická kontrola tisku."
tags: ["Newsletter"]
heroImage: "/content/images/2026/06/pod-tryskou-23-2026-hero.webp"
---

Tenhle týden je pěkná směs. Na jedné straně barvy, slicery a tiskárny, které se snaží člověku ubrat práci. Na druhé straně zákony a patenty, které nám zase připomínají, že 3D tisk už dávno není malý hobby rybníček někde v garáži.

---

## Prusa Research otevřela ColorMix

Prusa Research vydala **ColorMix**, otevřený model pro PrusaSlicer a EasyPrint. Princip je jednoduchý: slicer nestřídá barvy proto, aby vytvořil čistě oddělené plochy, ale skládá tenké vrstvy různých filamentů tak, aby oko vidělo nový odstín.

Fyzicky se materiály nemíchají. Je to optický trik. Něco jako když se z dálky díváš na jemný rastr, zblízka vidíš jednotlivé vrstvy, z dálky jinou barvu.

Za mě je na tom zajímavé hlavně to, že to není uzavřená hračka pro jeden stroj. Když se to chytne, může z toho být docela praktický způsob, jak z pár základních špulek dostat víc barev bez toho, abys doma skladoval půlku Pantone katalogu.

[Zdroj: Prusa Research](https://blog.prusa3d.com/our-new-open-source-colormix-model-in-prusaslicer-and-easyprint_136079/)

---

## Bambu Lab láká na A2L

Bambu Lab ukázalo teaser na **A2L** a podle dostupných indicií má jít o větší bed slinger. Tedy tiskárnu, kde se při tisku hýbe podložka. Je to jednodušší konstrukce než CoreXY, ale u větších modelů a vyšších rychlostí se u ní rychleji ukáže fyzika.

To neznamená, že je to špatně. Bed slinger pořád dává smysl, když chceš levnější a jednodušší mašinu. Jen se od toho nesmí čekat magie.

Bambu Lab je v tomhle nepříjemné hlavně pro konkurenci. Umí vzít obyčejnou kategorii tiskáren, dobře ji zabalit, přidat pár chytrých funkcí a najednou se všichni ptají, proč ostatní stroje stojí tolik.

[Zdroj: Tom's Hardware](https://www.tomshardware.com/3d-printing/bambu-lab-teases-new-a2l-3d-printer-june-1-launch-confirmed)

---

## Kalifornie tlačí na regulaci 3D tištěných zbraní

Kalifornský návrh **AB 2047** řeší 3D tištěné zbraně a související digitální podklady. Nejde o běžný hobby tisk, ale o další dílek v debatě, kde se stát snaží regulovat fyzický problém přes soubory, návody a software.

A tady začíná být zajímavé, kde se nakreslí hranice. Jasně, nelegální zbraně nikdo nechce. Jenže 3D tisk je obecná technologie. Stejná tiskárna může udělat držák na kameru, náhradní díl do auta i věc, kterou zákonodárce nechce vidět.

Pro běžného tiskaře se teď nic nemění. Ale stojí za to to sledovat, protože podobné návrhy bývají první vlaštovka. Ne kvůli panice, spíš kvůli tomu, aby nás pak nepřekvapilo, že někdo začne řešit i slicery, firmware nebo distribuci modelů.

[Zdroj: California Legislative Information](https://leginfo.legislature.ca.gov/faces/billNavClient.xhtml?bill_id=202520260AB2047)

---

## ORNL ukazuje tisk, který se umí opravovat za chodu

Výzkumníci z **Oak Ridge National Laboratory** pracují na systému, který sleduje tisk kamerou a průběžně upravuje parametry. Cíl je jasný: nenechat chybu růst pět hodin, ale zasáhnout hned, když se tisk začne chovat jinak, než má.

Tohle zatím není funkce pro domácí tiskárnu za dvacet tisíc. Je to průmyslový výzkum. Ale směr je správný. Běžný tiskař dneska pořád tráví dost času tím, že ladí flow, teplotu, retrakce a pak doufá, že se model nerozjede po třetí hodině.

Kdyby tiskárna uměla část těchhle věcí hlídat sama, ušetří to filament, čas i nervy. Nevyřeší to všechno, ale přesně takhle podle mě bude vypadat další rozumný posun automatizace.

[Zdroj: 3D Printing Industry](https://3dprintingindustry.com/news/ornls-ai-powered-system-fixes-3d-printing-errors-in-real-time-251908/)

---

## Bosch řeší teplotu přímo kolem trysky

Bosch má patent okolo přesnější kontroly teploty u výstupu filamentu. Zjednodušeně: nejde jen o to topit celý hotend, ale lépe řídit, co se děje přímo u trysky a kolem vytékajícího materiálu.

U běžného PLA ti to možná zní jako akademická hračka. U technických materiálů už ne. Jakmile tiskneš nylon, PC, PEEK nebo cokoliv citlivějšího na teplotu, malý rozdíl v reálném chování materiálu umí udělat velký bordel.

Patent samozřejmě neznamená produkt. Může zůstat v šuplíku, může se licencovat, může se objevit v úplně jiné podobě. Ale ukazuje, že i tak obyčejná věc jako tryska pořád není vyřešená jednou provždy.

[Zdroj: Google Patents](https://patents.google.com/?q=Bosch+heated+ring+FFF+nozzle)

---

## Trinckle patentuje hlídání špatných nastavení

Trinckle si nechal patentovat systém, který má uživatele navést dřív, než si sám připraví model k nefunkčnímu tisku. Typicky tenké stěny, špatná orientace, nevhodné rozměry nebo nastavení, které na první pohled vypadá nevinně a pak skončí špagetami na podložce.

Myšlenka je dobrá. Každý, kdo někdy pomáhal začátečníkovi, ví, že největší problém není vždycky tiskárna. Často je to špatně připravený model nebo očekávání, že slicer nějak zázračně pochopí fyziku.

Trochu mě ale zvedá ze židle patentování obecného konceptu typu „software poradí uživateli, aby si nerozbil tisk“. Takové věci by měly být normální součást nástrojů, ne minové pole pro ostatní vývojáře.

[Zdroj: Google Patents](https://patents.google.com/?q=Trinckle+user-guided+3D+printing+configuration)

---

Za mě solidní týden. ColorMix je praktická novinka, automatická kontrola tisku ukazuje směr a regulace připomíná, že 3D tisk už je dost velký na to, aby si ho všímali i právníci. Co si budem vykládat, trochu radši bych řešil ty barvy než zákony.
