---
title: "Pokec o 3D tisku: Core One Plus upgrade a Ston 3D tiskárna"
pubDate: "2025-12-09T12:00:00.000Z"
updatedDate: "2025-12-09T12:00:00.000Z"
description: "Na members streamu jsme rozebrali kontroverzní Core One Plus upgrade s anténkou za 3 tisíce, obdivovali ručně dělanou Stone 3D tiskárnu od Nata a ladili Klipper makra na MK3S."
heroImage: "/content/images/youtube/iBEyNy-F9r8.jpg"
tags: ["Youtube streamy", "Members only", "Pokec o 3D tisku", "Prusa", "Klipper"]
draft: false
---

Dneska novinek ze světa 3D tisku moc nebylo — o to víc času jsme věnovali Core One Plus upgradu (který mě dost překvapil), krásné Ston 3D tiskárně a ladění Klipper maker na MK3S.

> Celý stream si můžete pustit [na YouTube](https://www.youtube.com/watch?v=iBEyNy-F9r8). Jedná se o members-only obsah — [členství od 45 Kč](https://www.youtube.com/channel/UCACAWyuYlpfH2Jn6HLhhGgw/join).

---

## Core One → Core One Plus: anténka za 3 tisíce

Průša přejmenoval Core One na Core One Plus a nabízí upgrade kit. Co je v něm?

- **Přepínač na filament** — umožňuje tisknout flexibilní materiály
- **Páčka s anténkou** na manuální ovládání ventilační mřížky
- Samolepky a pár šroubků

Za **3 000 Kč**.

Budu upřímný — tohle mi přijde zvláštní. Na tiskárnu za 33 tisíc korun dostanete upgrade, kde hlavní novinka je plastová anténka, která manuálně přepíná mřížku. Srovnejte to s Bambu, kde se ventilace řeší automaticky.

Nemyslím to jako hejt — Core One tiskne výborně a mám ji rád. Ale u tiskárny v této cenové kategorii bych čekal servo, ne anténku. Za mě by dávalo víc smysl buď to poslat stávajícím majitelům zdarma, nebo rovnou vyvinout automatické řešení.

---

## Ston 3D: ručně dělaná tiskárna od Nata

Mnohem pozitivnější téma — [Ston 3D](https://ston-3d.com/) tiskárna od Nathana. Tohle je stroj, ze kterého jde cítit vášeň:

- **CNC hliníkový rám** — 8-10mm stěny, brutální pevnost
- Zajímavý kartézský kinematický systém s unikátní gantry
- **Microswiss hotend** (vyrobeno v USA)
- Karbonové osy
- Benchy za 7 minut
- Posedlost detaily — každý šroubek, každý sloupek je přesný na setinu

Aktuální lead time je 8 týdnů. Nat nestíhá vyrábět, protože se objevil i na videu od Nerda (600K odběratelů). Sledujte jeho kanál — je fascinující sledovat, jak vzniká tiskárna od člověka, který nedělá kompromisy.

---

## MK3S Klipper: ladění maker

Na konci streamu jsem se vrátil ke Klipperu na MK3S. Řešil jsem makro pro automatické rozpoznání tiskárny z G-code — aby Klipper věděl, pro jakou tiskárnu je soubor naslicovaný.

Problém byl v parsování stringu z G-code komentářů. Po chvíli debugování (a s pomocí Claude Sonnet) jsme to vyřešili — makro teď správně přečte název tiskárny z G-code a zobrazí ho na displeji.

Drobnost, ale důležitá pro správné fungování tiskových profilů.

---

## Shrnutí

- **Core One Plus** upgrade za 3 000 Kč je kontroverzní — "anténka" na manuální otevírání ventilace u tiskárny za 33K
- **Ston 3D** od Nata je ukázka toho, jak může vypadat tiskárna bez kompromisů
- **MK3S Klipper** makra fungují — automatické rozpoznání tiskárny z G-code vyřešeno
- Bambu vydalo firmware pro P2S s podporou nových wolframových trysek
