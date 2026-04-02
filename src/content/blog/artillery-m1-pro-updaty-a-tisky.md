---
title: "Artillery M1 Pro: updaty, ladění a pohled pod kapotu"
pubDate: "2025-10-02T12:00:00.000Z"
updatedDate: "2025-10-02T12:00:00.000Z"
description: "Vrátil jsem se k Artillery M1 Pro po pár týdnech. Aktualizace firmware, boj s displejem, levelování podložky a první nahlédnutí do útrob tiskárny. Zkrátka klasický stream plný překvapení."
heroImage: "https://img.youtube.com/vi/62K2OG5dyE4/maxresdefault.jpg"
tags: ["Youtube streamy", "Artillery"]
draft: false
---

Vrátil jsem se k Artillery M1 Pro po pár týdnech odmlky. Na programu bylo: aktualizace firmware, pokusy o rozumný tisk a trochu detektivní práce s podložkou. Spoiler — bylo to dobrodružství.

> Celý stream si můžete pustit [na YouTube](https://www.youtube.com/watch?v=62K2OG5dyE4).

---

## Displej: šest minut čekání na zázrak

Po zapnutí tiskárna vypadá mrtvě. Displej svítí, ale nereaguje. Po šesti až deseti minutách se probere a začne fungovat. Proč? Nemám tušení. Prostě to tak je. Kdo si kupuje budget tiskárnu, musí počítat s tím, že ne všechno bude dokonalé — a displej Artillery M1 Pro je toho důkazem.

Navíc displej svítí jako reflektor a na kameru z něj prakticky nic nepřečtete. Pomohl by inverzní režim, ale ten bohužel chybí. Na druhou stranu — aspoň umí zhasnout, což je víc, než nabízí některá konkurence.

---

## Firmware update: Fluidd přežil restart

Ráno jsem aktualizoval firmware na nejnovější verzi. Minule jsem řešil problém, že po každém restartu firmware smazal složku s Fluidd. Tentokrát jsem to obešel — **zablokoval jsem akci, která mazala obsah složky Fluidd**, a díky tomu po updatu všechno funguje. Fluidd naběhne, kamera jede. Malé vítězství.

---

## Start G-code: záhadné zmizení

Po aktualizaci jsem zjistil, že mi zmizely všechny upravené Start G-code a makra v OrcaSliceru. Prázdný `print_start`, žádné nastavení nahřívání — nic. Musel jsem se vrátit k originálnímu Artillery Studiu, vytáhnout z něj původní G-code a ručně ho nakopírovat zpátky do Orcy. Tip: **zálohujte si svoje profily**, ať nemusíte jako já přepisovat všechno znovu.

---

## Levelování: papírkový test jako za starých časů

Hlavní boj dneška byl s podložkou. Mesh bed leveling ukázal odchylku 1,5 mm — to je brutální číslo. Pro srovnání, na jiných tiskárnách mívám kolem 0,2 mm.

Vzal jsem to od základu:

1. **Papírkový test** na čtyřech rozích — klasika jako za starých časů s Enderem
2. Postupné dotahování šroubů pod podložkou
3. Opakované kalibrace

A pak jsem objevil skutečného viníka — **magnetická podložka měla vlnu**. Samolepka byla špatně nalepená a dělala hrb uprostřed. Stačilo posunout šroubek a pomačkat samolepku na správné místo. Odchylku jsem stáhl z 1,5 mm na 0,7 mm. Pořád to není ideální, ale výrazné zlepšení.

---

## Printerhive: připojení Artillery

Mezi laděním jsem se pokusil připojit M1 Pro do [Printerhive](https://printerhive.com/cs). Šlo to s drobnými zádrhely kolem portů — Moonraker běží na jiném portu, než jsem očekával. Nakonec se to povedlo a v Printerhive mám krásné statistiky: kolik jsem toho za měsíc vytiskl, z jakého materiálu, jaká byla úspěšnost. Nejvíc tisknu z ABS-K, což nikoho nepřekvapí.

---

## Pod kapotou: co se skrývá uvnitř

Na konci streamu jsem tiskárnu rozebral a podíval se dovnitř. Pár postřehů:

- **Zdroj** je volně přístupný, bez krytování — teoreticky bys mohl dostat ránu
- **Uzemnění** je místy přes barvu, která nevodí. Šrouby na kostře jsou uzemněné, ale plechy pod povrchovou úpravou už ne úplně
- Při dotyku závitové tyče jsem dostával kopačky od statiky — pravděpodobně indukce z motorů přes neuzemněnou kostru
- **Deska** je označená jako MKS Drive V23 — pravděpodobně custom verze od MKS
- **Filtr vzduchu** vypadá spíš jako lapač hrubého prachu než skutečný uhlíkový filtr
- Jsou tam **připravené díry pro AMS** (multi-materiálový systém) — v době streamu ještě nebyl dostupný
- Kabeláž je v pořádku, nic neupadlé — nějaká quality control proběhla

---

## Osobní poznámky ze streamu

Padlo i pár osobních věcí. Zůstal jsem na prodejně Hotend.cz sám — Oli odešla za novou prací, takže teď řeším všechno od příjmu přes balení po účetnictví. Makerfaire letos vynechávám (Ostrava byla slabá, na zbytek nemám kapacitu). Příští rok plánuju minimálně Prahu a Brno.

---

## Shrnutí

- Firmware update proběhl OK, **Fluidd po restartu přežil** díky zablokování mazací akce
- Displej se probouzí 6 až 10 minut — s tím počítejte
- Start G-code po updatu zmizel — **zálohujte si profily**
- Podložka měla odchylku 1,5 mm — vlna v magnetické samolepce, po opravě 0,7 mm
- Uvnitř tiskárny žádné hrůzy, ale uzemnění mohlo být lepší
- Na oficiálním sliceru Artillery Studio to tiskne slušně
- Za cenu kolem 9 000 Kč je to fajn mašinka, ale **počítejte s laděním**

---

## Co bude příště?

Plánuju rozebrat toolhead a podívat se na trysku zblízka. Taky bych chtěl zjistit, jestli je kalená nebo standardní — po tom škrábání podložkou by mě to nepřekvapilo. Stay tuned.
