module.exports.run = async (bot, message, args) => {
const Discord = require("discord.js");
var bot = new Discord.Client();

const PREFIX = "f!";

var args = message.content.substring(PREFIX.length).split(" ");
let uicon = message.author.avatarURL;
let text = args.slice(1).join(" ");
var facts = [
    "Průměrně ztratíte každý den 200 vlasů.",
    "Řidiči ročně zabíjí více jelenů než lovci.",
    "Friggo je jenom jeden!",
    "Jen 2 % žen se považuje za krásné.",
    "Peladofobie je strach z plešatých lidí.",
    "Při úplňku vážíte méně.",
    "Při sexu se zvyšuje hladina imunoglobulinu, která nám pohá při boji proti infekcím. Sex má pozitivní vliv na vaši imunitu.",
    "Paraskevidekatriafobie je strach z pátku 13.",
    "V USA žije více krav než lidí.",
    "Na světe je více slepic než lidí.",
    "Při každém olíznutí známky spálíte 0,1 kalorie.",
    "Mona Lisa nemá obočí.",
    "Banán má 80x méně tuku než hamburger.",
    "Lidské oko dokáže rozlišit 10,000.000 barev.",
    "Průměrný člověk za život nabrečí 52 litrů slz.",
    "23 % poruch kopírek jsou způsobeny tím, že si lidé kopírují svůj zadek.",
    "97 % lidí zkoušelo zavřít pomalu lednici, dokud neviděli, že světlo zhasne",
    "Kýchnutí má rychlost 160km/hod.",
    "Robot, kterého NASA poslala na Mars má baterie na 14 let. NASA by měla vyrábět smartphony.",
    "Lidé a banány mají z 50 % shodnou DNA.",
    "Studie ukazují, že kniha a film jsou lepší napodruhé.",
    "Během natáčení filmu Borat volali lidé 91krát policii.",
    "Hawaii se přibližuje Japonsku rychlostí 4 palce ročně.",
    "Vosa při zabití vypustí feromon, kterým přiláká zbytek své kolonie.",
    "97 % lidí neví, že Usáma bin Ládin byl v roce 1980 agent CIA.",
    "Červená je každý rok nejčastější barvou vozidel při dopravních nehodách.",
    "Nejvyšší budova na světě je Burdž Dubaj vysoká 828 metrů.",
    "V plné nádrži Boeingu 747 je dost benzínu na objetí autem celé Země, a to dokonce 4krát.",
    "Instagram je modrý, Facebook je modrý, Twitter je modrý, Tumblr je modrý. Modrá barva zmírňuje stres.",
    "Společně trávíme každý měsíc na Internetu 35 miliard hodin.",
    "Na Facebooku je dnes více uživatelů, než bylo před 200 lety obyvatel na celé Zemi.",
    "Ve státu Iowa je legální propustit zaměstnankyni, protože je příliš sexy.",
    "Pokud se dítě narodí na palubě letadla, může získat občanství země, ve které je zapsáno sídlo letecké společnosti.",
    "Lidský mozek se z 80 % skládá z vody.",
    "Mazlení odstraňuje deprese, zmírňuje úzkost a posiluje imunitní systém.",
    "V pivních reklamách se kvůli pěně dává do piva prací prášek.",
    "V Singapuru je nezákonné prodávat žvýkačky.",
    "Steve Jobs byl adoptovaný.",
    "Herci Tom Hanks a George Clooney jsou příbuzní amerického prezidenta Abrahama Lincolna.",
    "Jeden japonský voják zůstal skrytý 29 let po konci 2. světové války, protože nevěděl, že skončila. (Zajímavé co? :D)",
    "Za Druhé světové války se sošky Oscara vyráběly ze dřeva, kvůli šetření kovem.",
    "Během Druhé světové války Rusové trénovali psi, kteří běhali s bombou pod tank nepřítele.",
    "Nejdražším materiálem na planetě je antihmota v hodnotě 62,5 bilionu $ za gram.",
    "Ženy spalují tuk pomaleji, než muži.",
    "V 60. letech podávali vědci delfínům LSD. Chtěli je naučit anglicky.",
    "Krávy bučí různými akcenty, podle regionů v kterých žijí.",
    "Každou sekundu se na světě prodá 57 knih.",
    "Víte, že tento fakt, který měl být zde byl falešný?",
    "Zařízení připojených k internetu je více, než je na zemi lidí.",
    "12 včelám zabere celý život, než udělají lžíci medu.",
    "84 % žen má rádo muže v růžovém tričku. Paradoxně 87 % mužů v růžovém tričku nemá rádo ženy.",
    "Obecně jsou tři důvody, proč vás někdo nenávidí: 1) Chtěl by být jako vy. 2) Nenávidí sám sebe. 3) Bere vás jako hrozbu.",
    "Nejlepší věc na světě je najít člověka, který zná všechny vaše chyby, a pořád si myslí, že jste úžasní.",
    "Pokud se vám nedaří usnout, znamená to, že jste vzhůru ve snu někoho jiného.",
    "Lidé jsou večer o 1 cm nižší než ráno.",
    "Samolepky Made in China se vyrábí v Korei.",
    "Hudba mění nějen naši náladu, ale také mění způsob našeho uvažování a způsob našeho vnímání světa.",
    "Matematické kouzlo: 259 x váš věk x 39 = ?. Zajímavý výsledek, vyzkoušejte.",
    "Psychologové tvrdí, že pokud dva bývalí partneři mohou po rozchodu zůstat přátelé, tak jsou stále do sebe zamilovaní, nebo nikdy nebyli.",
    "Ženy spalují tuk pomaleji, než muži.",
    "V Rusku se vyráběla vakcína proti homosexualitě.",
    "Krávy bučí různými akcenty, podle regionů v kterých žijí",
    "111111111 x 111111111 = 12345678987654321",
    "Při kýchnutí se zastaví všechny tělesné funkce včetně srdce.",
    "Ernest Vincent Wright napsal román Gadsby, který obsahuje přes 50.000 slov, ale ani jedno písmeno e.",
    "Dnešek je o 0.00000002 vteřiny delší než včerejšek, protože země zpomaluje.",
    "Hraní počítačových her před spaním zvyšuje vaši schopnost ovládat sny. Hráči mají větší šanci zažít lucidní snění",
    "90 % lidí, již nejsou přátelé s někým, komu kdysi říkali nejlepší přítel.",
    "72 % lidí předstírá smích, protože je to snažší než vysvětlit co je trápí.",
    "V 60. letech podávali vědci delfínům LSD. Chtěli je naučit anglicky.",
    "Čínský znak pro potíže/nesnáze je zobrazován, jako dvě ženy pod jednou střechou.",
    "Každodenní orgasmus prospívá zdraví. Může vám prodloužit život až o osm let.",
    "Nejkratší válka v historii se odehrála v roce 1896 mezi Zanzibarem a Anglií. Zanzibar se vzdal po 38 minutách.",
    "S humorem je spojena upřímnost a inteligence. Proto ženy přitahují muži se smyslem pro humor.",
    "Sami sebe nepolechtáte. Mozeček, část mozku, varuje zbytek mozku, že se o to snažíte.",
    "Když napíšete do Googlu číslo 241543903 vyhledá vám spoustu lidí s hlavou v lednici.",
    "Každých 43 sekund se někdo pokusí o sebevraždu.",
    "91 % mužů zaměňuje přátelské chování ženy za flirt.",
    "Všechny postavičky z medvídka Pú představují mentální nebo tělesné postižení.",
    "Běžně používaná látka při výrobě pečiva L-cystein se vyrábí z lidských vlasů.",
    "Během následující minuty uhodí do Země zhruba 6000 blesků.",
    "Padající kokosové ořechy zabijí ročně na celém světe více lidí, než žraloci. Je 15x větší šance, že budete zabiti kokosem, než žralokem.",
    "Čím více máte přátel na Facebooku, tím je větší šance, že trpíte stresem a úzkostí.",
    "Často říkáme , že jsme unavení a přitom jsme jen v depresi, nebo rozrušení.",
    "Ženké tělo je lépe připraveno přežít špatné podmínky, jako je zima či hlad, než mužské.",
    "Vylekat spícího člověka může způsobit jeho trvalou duševní poruchu.",
    "Výrazy Eleven plus Two a Twelve plus One mají výsledek 13, také mají 13 písmen. Ve skutečnosti mají oba výrazy dokonce stejných 13 písmen.",
    "Průměrná žena má tendenci plakat 40-66 krát do roka, muž 5-8 krát.",
    "Pokud chcete, aby vás někdo poslouchal, začněte konverzaci slovy Neměl bych ti to říkat.",
    "Těchto faků je tu 114",
    "Pokud zadržujete kýchnutí, můžete si přivodit prasknuti cévky v mozku a zemřít.",
    "Lidé každý týden stráví průměrně 13 minut tím, že nadávají na pondělí.",
    "Synovec Adolfa Hitlera utekl z Německa do Ameriky, narukoval do amerického námořnictva a bojoval proti Německu.",
    "Ženy promluví okolo 20.000 slov denně, zatímco muži jen 7.000 slov.",
    "Pokud pořádně zamícháte balíček karet, jeho výsledná podoba bude s největší pravděpodobností taková, jakou ještě nikdo před vámi neměl.",
    "V experimentu byly myši vystavené metalové muzice. Namísto průchodu bludištěm začaly být agresivní a zabily se navzájem.",
    "Svůj nos stále vidíte, ale mozek ho automaticky ignoruje.",
    "Vaše mysl stráví asi 70 % doby přehráváním vzpomínek a představováním perfektních okamžiků.",
    "Pokud chcete, aby vás někdo poslouchal, začněte konverzaci slovy Neměl bych ti to říkat.",
    "Tento fakt je jako 100 v seznamu!",
    "Hipopotomonstroseskvipedaliofobie je fobie z dlouhých slov",
    "Provedl jsi příkaz f!fact",
    "První reklama se objevila v anglii v roce 1477 a byla to reklama na modlitební knihu...",
    "1 litr vody v česku stojí 8,8 haléře. - Nový fakt",
    "Život vážky trvá jen 24 hodin - Tak buďme rádi za náš čas, který máme na život.",
    "Více než polovina jídla na světě co lidé za rok sní, je pak zbytečně vyhozena.",
    "Jeden rok má 31 557 600 sekund",
    "Potravině trvá asi 7 sekund než se dostane z úst do žaludku.",
    "Ročně spadne asi 100 000 mobilních telefonů do záchoda - Tak bacha!",
    "Na Googlu se každou minutu hledá 4 miliony věcí.",
    "Každou minutu je odesláno 204 miliónů e-mailů.",
    "Uživatelé Facebooku sdílí 2,46 milionů věcí za minutut.",
    "Tento fakt, který tu má být je o tom že Friggo je jen jeden.",
    "Neprovdel jsi příkaz f!kill @Friggo#0470",
];

var randomfact = new Discord.RichEmbed()
    .setTitle("Fact")
    .setDescription(facts[Math.floor(Math.random() * facts.length)])
    .setColor(0x2196f3)
    .setFooter("Fryon | Developed by Friggo ", "https://cdn.discordapp.com/attachments/552140040722055178/552140130979414016/logo.png")
message.channel.send(randomfact);
console.log("Fryon | "+ message.author.username + " provedl příkaz " + message.content + " na serveru: " + message.guild.name)


}
module.exports.config = {
  command: "fact",
};
w
