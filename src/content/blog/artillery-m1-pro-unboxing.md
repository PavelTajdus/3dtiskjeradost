---
title: "Artillery M1 Pro: unboxing"
pubDate: "2025-09-04T15:38:38.000Z"
updatedDate: "2026-04-01T12:00:00.000Z"
description: "Tento článek není recenze. Je to shrnutí prvních dojmů z rozbalení, sestavení a oživení Artillery M1 Pro. Pokud chcete vědět, jak to vypadá, když tiskárna dorazí z obchodu až po první tisk, jste ta..."
heroImage: "/content/images/2025/09/artillery_m1_pro_3dtiskjeradost--2-.webp"
tags: ["Artillery", "Youtube streamy"]
---

Tento článek není recenze. Je to shrnutí prvních dojmů z rozbalení, sestavení a oživení Artillery M1 Pro. Pokud chcete vědět, jak to vypadá, když tiskárna dorazí z obchodu až po první tisk, jste tady správně.

> Celý čtyřhodinový stream najdete v členské sekci na YouTube (členství od 45 Kč)

---

## Unboxing a sestavení: co čekat?

Krabice je těžká a tiskárna taky. Všechno je bezpečně zabalené, nechybí základní nářadí a manuál. Výrobce přihodil i kilový vzorek filamentu – za to palec nahoru.

Sestavení není nic složitého. Imbus, zapojit kabely, zacvaknout displej. Během půl hodiny je stroj na stole a připravený. Kdybych u toho tolik nekecal tak i dříve.

Tiskárna působí poctivě: robustní rám, kov, sklo, boční panely z plastu. Magnetická podložka jde snadno sundat, povrch na jedné straně je jemný (saténový) a je ideální pro PLA, druhá strana je hrubší a měla by fungovat na PLA, PETG, ABS i další běžné materiály. Všechno drží na svém místě. S podložkou se na její místo dobře trefuje. Bed samotný se dá dorovnat manuálně po sundání podložky (4 šrouby na bedu)

---

## Elektronika a ovládání

Displej je základní – žádné 4K rozmazlování, ale je rychlý a přehledný. Angličtina v základu, můžete přepnout na pár dalších jazyků (výchozí je čínština). Ovládání zvládne každý: home, autolevel, výměna filamentu nebo nastavení výhřevu komory.

AI funkce? Je tu snaha o detekci problémů v tisku nebo špaget, ale moc bych na to nespoléhal – hlavní je, že základní věci fungují.

---

## První tisky a praktické postřehy

Testovací Benchy i Buddhu jsem pustil hned po sestavení. Výsledky odpovídají tomu, co čekáte od lepší hobby tiskárny. Povrch hladký, vrstvy čisté, žádné velké chyby. U ABS potěšila aktivní vyhřívaná komora – vytáhne bez problému i na 60 °C. Firmware teplotu aktivního výhřevu neomezuje a tak můžete vesele topit, dokud vás neomezí přehřívání driveru u extruderu. Mě to začalo naskakovat okolo 57 stupňů v komoře. Pak jsem aktivní výhřev vypnul a tisk jel vesele dále. Nastavil bych ve firmware preventivě 55 stupňů max.

Tisk samotný vypadal dobře, ale kvůli silně ohnutému bowdenu to měl extruder dost těžké. Po streamu jsem se jej snažil uvolnit, uvidíme jestli to zabere.

---

## Software a síťové možnosti

Teď k realitě:

**Musíte** používat **

Artillery Studio** (převlečený OrcaSlicer). Teda pokud nechcete být otrokem SD karty. Posílání tisku po síti jde pouze přes něj.

Chcete mít víc možností a ovládat tiskárnu vzdáleně i spravovat více strojů?

> Na [**

Printerhive**](https://printerhive.com/cs) můžete připojit M1 Pro, odesílat tiskové úlohy online, mít monitoring a vzdálený přístup. Celý proces je jednodušší, hlavně když doma máte víc tiskáren, nebo když chcete řešit věci na dálku.

Pokud jedete na vlastním sliceru (Orca, PrusaSlicer), připravte se, že alespoň jednou rukou budete pořád obsluhovat SD kartu.

---

## Fluidd & firmware: realita aktualizací

Jedna specialitka: **poslední update firmware maže obsah složky fluidd po každém restartu**. Můžete ho nahrát a tím Fluidd zase zprovoznit, ale po restartu je po radosti. Na streamu se tuto chybu podařilo potvrdit – řešení zatím není oficiální, ale zkušenější uživatelé si dříve či později poradí. Jakmile budu mít prostor a najdu řešení, určitě to tady napíšu.

---

## SSH – když to chcete po svém

Přímo ve streamu padlo několik konkrétních tipů pro pokročilé. **Připojení přes SSH stále funguje.** Umíte-li si najít cestu v konzoli, můžete editovat konfigurace, zálohovat nebo vracet změny po aktualizaci. Komu není Linux cizí, může jít hluboko pod pokličku. Ale pozor na navazující update firmware od výrobce – příští update může spoustu věcí změnit.

---

## Shrnutí pro běžné uživatele

- Sestavení rychlé, žádné zádrhele.
- Tisk ABS a dalších náročnějších materiálů není problém – **aktivně** vyhřívaná komora je reálná výhoda.
- Pokud chcete pohodlí přes síť, Artillery Studio je nutností.
- Chcete víc? Použijte Printerhive – přehled, pohodlí, dálková správa.
- Fluidd po restartu mizí, zatím bez stabilního workaroundu.
- SSH pro zkušené zůstává možností.

---

## FAQ

**Jaký slicer musím používat pro síťový tisk?**
Momentálně Artillery Studio. S jinými slicery půjde tisk zatím jen přes SD kartu.

**Připojím M1 Pro k Printerhive?**
Ano, tiskněte a ovládejte i vzdáleně. Praktické hlavně s víc stroji nebo pro monitoring na dálku.

**Co je s Fluidd?**
Po každém restartu složka zmizí. Pro hackery legrace, pro běžné uživatele zatím zbytečný zádrhel. Na druhou stranu, pokud neznáte Klipper, může vám to být úplně jedno.

**Co všechno jde přes SSH?**
V podstatě vše – úprava souborů, zálohy, konfigurace, obnova po update. Nutná aspoň základní znalost práce v Linuxu.

---

## Rychlé zhodnocení

Na konci streamu jsem se to snažil trochu zhodnotit. Zkusím to i tady.

Myslím že za ty peníze (mrkněte na cenu přímo na stránkách výrobce) to není špatná koupě. Má to svoje mouchy, ale ve věcech spíše mimo samotný tisk. Ten probíhal bez celkem bez problémů. Na nějaké větší hodnocení je ještě brzy. Uvidíme jak budu mít za sebou pár tisků.

---

> **Aktualizace 2026:** Artillery M1 Pro je hardwarově v pořádku, ale výrobce uzavřel ekosystém natolik, že bez jejich vlastního sliceru (Artillery Studio) prakticky nejde tisknout po síti. Poslední verze jejich sliceru mi navíc nefunguje, takže na tiskárně aktuálně netisknu. Hardware dobrý, software katastrofa.
