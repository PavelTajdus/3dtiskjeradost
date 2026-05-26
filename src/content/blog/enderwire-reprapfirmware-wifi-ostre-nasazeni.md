---
title: "Enderwire na RepRapFirmware: Wi-Fi modul a ostré nasazení"
pubDate: "2026-05-26T14:10:35.000Z"
description: "Wi-Fi modul dorazil, takže jsem zkusil Enderwire opravdu přepnout na RepRapFirmware. Flash, config, homing i první pasti."
heroImage: "/content/images/youtube/W7RyScuLdKc.jpg"
tags: ["Youtube streamy", "Enderwire", "RepRapFirmware", "Klipper"]
draft: false
---

Minule mě u Enderwiru na RepRapFirmware zastavil chybějící Wi-Fi modul. Tentokrát už byl na stole, takže jsem šel do ostrého nasazení.

Cíl byl jednoduchý: zálohovat funkční stav, odpojit Raspberry Pi s Klipperem, flashnout desku Mellow Fly E3 Ultra, rozchodit RepRapFirmware a zjistit, jestli se s tím dá tiskárna aspoň bezpečně rozhýbat.

> Záznam streamu najdeš na YouTube: [Enderwire na RepRapFirmware: Wi-Fi modul a ostré nasazení](https://www.youtube.com/watch?v=W7RyScuLdKc)

---

## Nejdřív záloha, potom řezání do živého

Na začátku jsem měl jednu důležitou výhodu: tiskárna před přestavbou normálně tiskla. Dokonce jsem na ní tiskl věci a uklidil část kabeláže, takže to nebyl mrtvý projekt, ale funkční Enderwire na Klipperu.

První praktická věc proto byla záloha configu. Kdyby se RepRapFirmware ukázal jako slepá ulička, chtěl jsem mít možnost vrátit Raspberry Pi a Klipper zpátky do hry.

Tady se vyplatí nespěchat. Když měníš firmware na funkční tiskárně, záloha není formalita. Je to pojistka proti tomu, že večer skončíš s hezkou deskou, ale nepojízdnou mašinou.

## Wi-Fi modul, který umí i kabel

Dorazil modul s anténou a hlavně s Ethernetem. To mě potěšilo, protože jsem nechtěl záviset jen na Wi-Fi. V ideálním světě bych tiskárnu nechal připojenou po kabelu a Wi-Fi používal jen jako nouzovku.

V dokumentaci pro Mellow/Fly jsem našel instrukce pro Wi-Fi modul, firmware pro E3 Ultra a soubory kolem RepRapFirmware. Už tady začalo být jasné, že to nebude jeden klik a hotovo.

Stahoval jsem hlavní firmware pro desku, firmware pro ESP32 modul a Duet Web Control. U modulu jsem řešil, jestli mám správnou variantu ESP32 ETH, protože právě Ethernet byl důvod, proč jsem ho chtěl používat.

## SD karta a první flash

Firmware šel na SD kartu. Kartu jsem pro jistotu zformátoval přes oficiální SD Card Formatter, protože u firmware flashování nechci řešit zbytky starých oddílů nebo divné chování karty.

Na kartu bylo potřeba nachystat strukturu pro RepRapFirmware: firmware soubor, systémové soubory, webové rozhraní a vygenerovaný config. Duet Web Control se rozbaluje do `www`, takže nestačilo jen někam hodit jeden zip.

Byla to trochu otrava, protože souborů bylo víc, než jsem čekal. Ale jakmile je člověk dostane na správné místo, deska po zapnutí opravdu začne dělat to, co má.

## Config generátor a první nejistoty

Config jsem generoval pro Enderwire a Fly E3 Ultra. Kinematika měla být Core XZ, rozměry zhruba 230 mm na X a 200 mm na Y, homing radši pomalejší, microstepping 16.

Hned se ukázalo několik míst, kde člověk nesmí jen slepě odklikat formulář:

- Z endstop nebyl klasický endstop, ale probe.
- Pin pro probe jsem dohledával jako PC5.
- Extruder měl jiné kroky a převody než výchozí hodnota.
- TMC2209 drivery bylo potřeba nechat rozumně nastavené.
- Rychlosti a limity z generátoru neodpovídaly tomu, co jsem od Enderwiru čekal.

RepRapFirmware je v tomhle hodně jiný než Klipper. Nastavení není jeden známý `printer.cfg`, ale sada G-code příkazů, které se spouští při startu. Funguje to, jen musíš přepnout hlavu.

## Chyba s ESP32 souborem

První větší zásek byl u Wi-Fi firmwaru. Přes sériové připojení deska hlásila něco ve smyslu, že `wifi module 32` nebyl nalezený.

Nakonec se ukázalo, že problém byl v názvech a očekávaných souborech. Firmware hledal ESP32 soubor pod konkrétním jménem, zatímco já měl na kartě jinou variantu nebo jinak pojmenovaný soubor.

Po dalším kole přejmenování, kopírování a flashování se situace posunula. Objevilo se `Authentication failed`, což zní špatně, ale v tu chvíli to byla dobrá zpráva. Znamenalo to, že modul už žije a komunikuje.

Po zadání správných údajů jsem se dostal do webového rozhraní. Tiskárna byla online. Dokonce přes Wi-Fi, bez připojené antény.

## RepRapFirmware naběhl překvapivě rychle

Jakmile se to povedlo, start byl příjemně rychlý. Žádné čekání na Raspberry Pi, žádný další počítač. Všechno běželo z desky, včetně webového rozhraní.

To je za mě hlavní rozdíl proti Klipperu: RepRapFirmware má všechno na mainboardu. Nepotřebuješ Raspberry Pi, Mainsail, Moonraker a další vrstvu okolo. Připojíš se do webu přímo na tiskárnu.

Na druhou stranu jsem si hned všiml, že prostředí je pro mě nezvyk. Duet Web Control funguje, ale po Klipperu jsem musel chvíli hledat, kde jsou makra, systémové soubory, config a stav tiskárny.

## První homing: rychle na emergency stop

Jakmile web naběhl, samozřejmě jsem šel hned homovat. A samozřejmě to jelo blbě.

Při prvním pokusu se chování nezdálo jako správné Core XZ. Točil se jiný motor, než jsem čekal, osa jela špatným směrem a musel jsem to zastavit. Tohle je přesně chvíle, kdy máš mít ruku na vypínači.

Řešil jsem hlavně:

- směr motorů přes `M569`,
- mapování driverů přes `M584`,
- nastavení kinematiky přes `M669`,
- homovací makra pro X, Y a Z,
- jestli jsou endstopy na minimu nebo maximu,
- proč se při zvednutí Z točí jen jeden motor.

Nakonec se ukázalo, že config sice měl Core XZ nastavené, ale homovací makra a limity se musely upravit ručně. Generátor tady neudělal hotový Enderwire config, spíš použitelný základ.

## Homovací makra a parametr H

Velká část streamu byla čumění do G-code. U RepRapFirmware se totiž i homing řeší makry v G-code souborech.

Důležitý byl parametr `H` u `G1`:

- `G1 X10` je normální pohyb, který hlídá limity a typicky chce homovanou osu.
- `G1 H1 X...` je homovací pohyb, který jede k endstopu a zastaví se po jeho sepnutí.
- `G1 H2 ...` je pohyb bez kontroly endstopu a limitů, takže s tím opatrně.

Právě špatné použití v makrech dělalo bordel. Tiskárna se zvedla, pak se vracela dolů, druhý bump se neprovedl, případně to hlásilo chybu s nedostatečným maximem.

Postupně jsem upravil homing X, Y i Z tak, aby se osa zvedala správně, nejela šikmo a nevracela se nesmyslně zpátky.

## Rychlosti, limity a kroky nebyly hotové

Další past byly rychlosti. Některé hodnoty vypadaly jako pro původní šroubové Z z Enderu, ne pro Enderwire.

Řešil jsem hlavně `M201` a `M203`, tedy akcelerace a maximální rychlosti. Z osa byla nastavená příliš pomalu, takže homing působil líně a neodpovídal tomu, co mechanika Enderwiru zvládne.

Naopak jsem nechtěl hned přepálit proudy a rychlosti. U motorů jsem šel opatrně, třeba proud preventivně kolem 500 mA, protože v téhle fázi nechci trhat řemeny ani honit rychlostní rekordy. Nejdřív bezpečný pohyb, potom ladění.

## Teploty a pull-up rezistor

Když už se pohyb začal chovat rozumněji, přišly na řadu teploty. Tady se ukázalo, že hodnoty termistorů nejsou úplně správně.

U téhle desky jsem už dřív řešil pull-up rezistor 2200 ohmů. Bez toho teploty neodpovídaly realitě. Stejnou věc jsem musel promítnout i do RepRapFirmware configu.

Hledal jsem, kde se mapuje heater, termistor a výstup. V configu se to řeší přes příkazy typu `M950` a navazující nastavení senzorů. Bed se začal nahřívat, hotend taky reagoval, ale bez PID tuningu to zatím nebyl stav, kterému bych věřil pro tisk.

## Co se povedlo a co zůstalo na příště

Povedlo se to nejdůležitější: Enderwire naběhl na RepRapFirmware, připojil jsem se do Duet Web Control a tiskárna začala reagovat na pohyby i topení.

Povedlo se rozchodit Wi-Fi. Paradoxně ne Ethernet, kvůli kterému jsem se na modul těšil nejvíc. LAN tedy zůstává na další pokus.

Tiskárna na konci streamu ještě netiskla. Bylo potřeba doladit homing, limity, teploty, PID a celkově projít config. Ale už to nebyla mrtvá deska ani teorie z dokumentace. RepRapFirmware na Enderwiru běžel.

## Závěr

Tenhle stream nebyl efektní. Hodně času jsem strávil v souborech, přejmenováváním firmwaru, restartováním desky a laděním G-code maker.

Ale přesně takhle ostré nasazení firmwaru často vypadá. Nejdřív záloha, pak flash, potom první připojení, první špatný pohyb, ruka na vypínači a postupné rozmotávání configu.

RepRapFirmware mě pořád láká tím, že nepotřebuje Raspberry Pi a všechno běží přímo na desce. Zároveň je jasné, že přechod z Klipperu není jen výměna firmware souboru. Musíš pochopit, jak RRF přemýšlí, kde má makra a jak skládá konfiguraci z G-code příkazů.

Příště chci doladit LAN, dokončit ladění a dostat Enderwire z fáze "hýbe se" do fáze "tiskne".
