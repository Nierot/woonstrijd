import Paragraph from "../components/Paragraph";
import Title from "../components/Title";
import Base from "./Base";

const Manifest: React.FC = () =>
<Base>
    <Title className="py-8 pb-8 md:text-5xl lg:text-7xl underline">Groninger Woonmanifest</Title>
    {/* Eisen in het kort */}
    <Paragraph className="pt-4 font-bold pl-12 pr-6 border-black border-2">
        <h1 className="pb-4 text-center text-2xl pr-6">
            Eisen in het kort
        </h1>
        <ul className="list-decimal">
            <li>Maak een einde aan de ellende in het aardbevingsgebied</li>
            <li>Zet als doel minstens 40% sociale huurwoningen in Groningen</li>
            <li>Bevries de huren voor vijf jaar</li>
            <li>
                Huisvesting naar behoefte (niet voor winst), in stad én ommeland
                <ul className="list-disc font-normal pl-12">
                    <li>Houdt huren betaalbaar na sloop(-nieuwbouw) of renovatie</li>
                    <li>Garandeer voldoende en betaalbare studentenhuisvesting</li>
                    <li>Maak geen studio’s van alle studentenkamers</li>
                    <li>Maak woningen toegankelijk voor mensen met een beperking</li>
                    <li>Menswaardige opvang en huisvesting voor vluchtelingen</li>
                </ul>
            </li>
            <li>Bescherm erfgoed tegen sloop en vernieling</li>
            <li>Verklaar Groningen tot een krakersvriendelijk gebied</li>

        </ul>            Meer bouwen in dorpen en kleine steden

    </Paragraph>


    <Paragraph className="pt-4 font-bold">
        De Woonstrijd Groningen Coalitie ondersteunt 
        de eisen uit het landelijke Woonmanifest. 
        Hier voegen wij zeven lokale eisen aan toe, 
        die door de lokale overheden moeten worden 
        overgenomen om de wooncrisis die wij 
        in deze regio ervaren aan te pakken.
    </Paragraph>
    <Paragraph>
        Hoewel de problemen die wij ervaren specifiek zijn 
        voor het noorden, is de huisvestingscrisis in heel 
        Nederland (en zelfs Europa) terug te leiden tot dezelfde 
        oorzaak. De handel in woningen maakt de behoeften 
        van mensen ondergeschikt aan de behoeften van de 
        markt. Deze marktwerking is echter geen natuurweten 
        het is mogelijk om voor iedereen geschikte huisvesting 
        te realiseren.
    </Paragraph>
    <Paragraph>
        Want waarom is er zo veel leegstand, wordt de aard-
        bevingsschade niet gecompenseerd en blijven de prijzen 
        maar stijgen? Waarom zijn de huizen waar wij in wonen 
        in de eerste plaats niet bestemd voor onze huisvesting, 
        maar om verhandeld te worden op de huizenmarkt?
    </Paragraph>
    <Paragraph>
        Dit komt door de oneindige zucht naar winst van het 
        kapitalisme en de afbraak van de volkshuisvesting. 
    </Paragraph>
    <Paragraph>
        Huisvesting ligt in de hele wereld onder vuur omdat 
        een kleine groep vastgoedinvesteerders een enorme 
        hoeveelheid huizen in hun bezit hebben, met enkel 
        het doel om winst te maken. Zolang investeerders 
        en huisjesmelkers winst kunnen maken met huis-
        vesting, zal de volkshuisvesting vanzelf afbreken. 
        Beleid van voorgaande kabinetten hebben moedwillig 
        de huur-markt gedereguleerd ten gunste van deze 
        investeerders en huisjesmelkers.
    </Paragraph>
    <Paragraph>
        Kapitalisme bedreigt daarom de beschikbaarheid, 
        betaalbaarheid, toegankelijkheid en zekerheid van wonen. 
    </Paragraph>
    <Paragraph className="font-bold">
        Op 28 november zullen wij met zo veel mogelijk 
        mensen door Groningen-stad lopen om te laten 
        zien dat het zo niet langer kan. Wij willen dat 
        huisvesting voor het volk wordt en om dit te 
        bereiken in Groningen moeten de volgende 
        eisen worden ingewilligd:
    </Paragraph>
    
    <SubTitle>Eisen met duiding</SubTitle>

    <Eis 
        title="Maak een einde aan de ellende in het aardbevingsgebied"
        number={1}>
        <Paragraph>
            Een protest voor huisvesting in Groningen kan niet met fatsoen plaatshebben zonder de woonstrijd te benoemen die al een decennium gevoerd wordt tegen gaswinning en voor veilig wonen en compensatie.  Keer op keer is door de kabinetten Rutte duidelijkheid en beterschap beloofd aan de Groningers, maar nog steeds zijn schrijnende verhalen aan de orde van de dag. Of het nu gaat om trage en onduidelijke procedures, willekeur bij compensatie en versterking en slechte communicatie, het moet beter. De overheid schendt het grondrecht op een veilige woning voor de inwoners van het aardbevingsgebied.
        </Paragraph>
        <Paragraph>
            Wij roepen daarom de rijksoverheid op om nu eens echt de regie te pakken in deze crisis en burgers niet langer eenzaam over te leveren aan een doolhof van procedures met externe bureaus en loketten. Slachtoffers die nog steeds wachten op compensatie of duidelijkheid over de versterking van hun huis moeten dit onmiddellijk krijgen. Groningers verdienen een overheid die volgens hun belangen handelt. Na jaren van ellende en strijd is generositeit en transparantie door de overheid het enige juiste antwoord. 
        </Paragraph>
    </Eis>

    <Eis
        title="Zet als doel minstens 40% sociale huurwoningen in Groningen"
        number={2}>
        <Paragraph>
            Sociale huurwoningen moeten wonen betaalbaar houden. In Nederland is goed en betaalbaar wonen een grondrecht. Na jaren waarin volkshuisvesting vakkundig is afgebroken ten gunste van een kapitalistisch winstmodel hebben stad en ommeland niet genoeg sociale huurwoningen om mensen met een kleine portemonnee te kunnen huisvesten. Sommige huishoudens moeten meer dan tien jaar op een wachtlijst staan voor een geschikte woning. Dit is een schande. Goed wonen is van enorm belang voor de geestelijke en lichamelijke gezondheid. Des te meer in Groninger gemeenten door de structurele problemen die wij hier hebben met armoede.
        </Paragraph>
        <Paragraph className="pl-12">
            <ul className="list-disc">
                <li>
                    Meer sociale huurwoningen moeten de markt uit de Groninger woningvoorraad halen door huren in de vrije sector voor lagere inkomens onnodig te maken.
                </li>
            </ul>
        </Paragraph>
        <Paragraph>
        Wij breken op deze manier de macht van huisjesmelkers en voorkomen dat zij over onze ruggen extreme winsten blijven behalen. Gemeenten moeten plannen ontwikkelen om op termijn over ruim voldoende sociale huurwoningen te beschikken, zodat niemand in deze basisbehoefte wordt gehinderd. Te beginnen met minstens veertig procent sociale huurwoningen bij geplande grootschalige nieuwbouwprojecten zoals Stadshavens en Suikerzijde. De huidige voorraad moet bij wijkvernieuwing behouden blijven of door tenminste evenveel sociale huurwoningen worden vervangen. Daarbij gaat het om echte sociale huurwoningen met een vast contract, geen tijdelijke contracten met een dakloosheidsgarantie binnen vijf jaar. 
        </Paragraph>
    </Eis>

    <Eis
        title="Bevries de huren voor vijf jaar"
        number={3}>
        <Paragraph>
            De inkomens en vermogens van Groningers behoren tot de laagste van Nederland maar toch stijgen de huurprijzen hier in vergelijking erg hard. Een vijfjarige bevriezing van de huurprijzen op alle huurwoningen zorgt voor rust en beschermt burgers tegen stijgende lasten zolang er gewerkt wordt aan het realiseren van échte volkshuisvesting.  
        </Paragraph>
    </Eis>

    <Eis
        title="Huisvesting naar behoefte (niet voor winst), in stad én ommeland"
        number={4}>
        <Paragraph>
            De Groninger samenleving wordt steeds diverser en woonbehoeftes veranderen daardoor. Met name voor dorpen en steden buiten Groningen-stad blijft dit vraagstuk onderbelicht. 
        </Paragraph>
        <Paragraph>
            Om aan de prangende woonbehoefte van grote groepen te voldoen, is gericht overheidsbeleid nodig op de volgende gebieden:
        </Paragraph>
        <Paragraph><ul className="list-disc pl-10">
            <HuisvestingEis title="Meer bouwen in dorpen en kleine steden">
                Het noorden stond  landelijk te boek als een krimpgebied. Hierdoor zijn er de vorige decennia nauwelijks woningen bijgebouwd. 
                De afgelopen periode is het platteland juist weer in trek geraakt, met hard stijgende huizenprijzen tot gevolg. Daarnaast zijn er te weinig woningen beschikbaar voor de grote groep jongeren en gezinnen die juist wel in de ommelanden willen blijven.
            </HuisvestingEis>
            
            <HuisvestingEis title="Houdt huren betaalbaar na sloop(-nieuwbouw) of renovatie">
                In veel dorpen en steden in het oosten en noordoosten van de provincie Groningen zijn de afgelopen jaren verouderde huurwoningen gesloopt. Wooncorporaties gaan over tot sloop-nieuwbouw of renovatie om verouderde sociale huurwoningen te laten voldoen aan moderne duurzaamheid- en kwaliteitsstandaarden. De verhuurder mag in deze gevallen de huur verhogen. Op deze manier worden kosten afgewenteld die behoren tot de maatschappelijke taak van overheid en corporaties om te zorgen voor goede en betaalbare woningen. Wij eisen dat huurders kunnen terugkeren naar woningen met gelijkblijvende kosten, ook na renovatie of sloop. 
            </HuisvestingEis>
            
            <HuisvestingEis title="Garandeer voldoende en betaalbare studentenhuisvesting">
                De afgelopen jaren hebben we keer op keer gezien hoe studenten die naar Groningen komen in de noodopvang of bij iemand op de bank moeten slapen. Deze studenten zijn de dupe van het gefaalde woonbeleid. Onbetaalbare huren dwingen de student om extra studieschulden te maken. Internationale studenten worden in het bijzonder getroffen door hoge huren omdat zij vaak geen andere optie hebben dan de eerste de beste kamer aannemen ook al is de huur buiten iedere proportie.
                Er wordt nu te weinig verantwoordelijkheid genomen voor studenten. De gemeente en onderwijsinstellingen moeten voldoende huisvesting garanderen zodat alle studenten en uitdrukkelijk dus ook internationale studenten verzekerd zijn van een eigen dak boven hun hoofd. 
            </HuisvestingEis>

            <HuisvestingEis title="Maak geen studio’s van alle studentenkamers">
                De huurtoeslaggrens geeft een perverse prikkel om vooral studio’s te bouwen voor jongeren dan wel studentenhuizen te verbouwen tot studiocomplexen. Door zelfstandige studio’s te realiseren met voorzieningen zoals een eenvoudig keukenblok en een eigen deurbel kan een verhuurder tot net onder de huurtoeslaggrens verhuren en daardoor meer huur vragen dan bij een gewone kamer.
                De opkomst van studio’s is niet alleen onwenselijk doordat het dient als melkkoe voor verhuurders maar studio’s nemen ook meer ruimte in beslag dan een gewone kamer waardoor er minder mensen kunnen wonen in een pand en er dus broodnodige huisvesting voor jongeren verloren gaat. Daarnaast gaat er met het langzame verdwijnen van het traditionele studentenhuis een stuk cultuurgoed verloren dat onlosmakelijk verbonden is met het Groninger studentenleven.
            </HuisvestingEis>

            <HuisvestingEis title="Maak woningen toegankelijk voor mensen met een beperking">
                Aan woningen hebben de inwoners niets als ze er niet goed of volledig gebruik van kunnen maken. Voor inwoners met een beperking is dit wel een veelvoorkomend probleem, omdat (sociale) huurwoningen nog steeds niet breed toegankelijk zijn. Onderzoek van Ieder(in) en de Woonbond laat zien dat er een groot tekort is aan toegankelijke woningen voor mensen met een beperking. Wij eisen dat huidige en nieuwe woningen toegankelijk worden gemaakt voor mensen met een beperking. 
            </HuisvestingEis>
        </ul></Paragraph>
    </Eis>

    <Eis
        title="Menswaardige opvang en huisvesting voor vluchtelingen"
        number={5}>
        <Paragraph>
            Asielzoekerscentra kampen met grote capaciteitsproblemen. Deze werkelijkheid wordt extra hard gevoeld in het noorden vanwege de aanwezigheid van het landelijke aanmeldcentrum in Ter Apel. Door de woningcrisis kunnen statushouders geen woning krijgen en verblijven zij noodgedwongen in azc’s. Het woningtekort ontneemt hen niet alleen goede huisvesting maar ook een kans om volwaardig deel te nemen aan de maatschappij. 
        </Paragraph>
        <Paragraph>
            Daar komt bij dat het COA niet genoeg opvanglocaties beschikbaar heeft om geschikte opvang te bieden in het geval van een plotselinge toename van asielzoekers. In de haastig opgezette noodlocaties ontbreekt het aan voldoende privacy om een menswaardige opvang te bieden. Wij roepen daarom COA, gemeenten en het Rijk op om voormalige azc’s te heropenen en voortaan geen locaties meer te sluiten bij minder asielaanvragen maar mensen meer te gaan spreiden. 
        </Paragraph>
    </Eis>

    <Eis
        title="Bescherm erfgoed tegen sloop en vernieling"
        number={6}>
        <Paragraph>
            Groningers zijn trots op hun dorps- en stadsgezichten maar toch dreigt er onheil. Door de aardbevingen gaan veel woningen tegen de vlakte. Versterking of herbouw van karakteristieke panden moet altijd worden verkozen boven sloop. Erfgoed is van betekenis voor vele generaties en belichaamt het karakter van een gemeenschap. Dat verdient bescherming.
        </Paragraph>
        <Paragraph>
            In de stad voltrekt zich dit drama veelal achter de voordeur. Vooroorlogse buurten, zoals de Schildersbuurt, zijn sterk in trek en daarom kopen huisjesmelkers hier gretig panden op. Veel huizen in deze buurten bevatten waardevolle historische elementen die door verhuurders in onderhoud worden verwaarloosd of zelfs gesloopt. De gemeente Groningen moet een halt toeroepen aan deze ontwikkeling door geen vergunningen meer te verlenen voor verbouw tot appartementen of studio’s en strenger toe te zien op het onderhoud van karakteristieke panden.
        </Paragraph>
    </Eis>

    <Eis
        title="Verklaar Groningen tot een krakersvriendelijk gebied"
        number={7}>
        <Paragraph>
            Wonen is een grondrecht en kraken is een middel om dat grondrecht af te dwingen indien de overheid tekortschiet. Kraken onderdrukken vormt zodoende een grondrechtenschending waartegen ongehoorzaamheid is geoorloofd. De huidige kraakwetgeving is een zaak van de nationale wetgever maar lokale autoriteiten hebben evengoed een verplichting om het belang van grondrechten mee te wegen bij het optreden tegen krakers. Zeker indien dit optreden gebeurt uit naam van een regering die dit grondrecht niet respecteert. Om deze redenen eisen wij van burgemeesters dat zij hun gemeente uitroepen tot een krakersvriendelijk gebied zich bij de driehoek burgemeester-politie-openbaar ministerie inzetten voor een gedoogbeleid omtrent kraken.
        </Paragraph>
    </Eis>

    <div className="pb-8"/>
</Base>

type HuisvestingEis = {
    children: React.ReactNode
    title: string
}

const HuisvestingEis = (props: HuisvestingEis) =>
<li className="py-2">
    <h4 className="font-bold">{props.title}</h4>
    <p>{props.children}</p>
</li>

type SubTitleProps = {
    className?: string
    children: React.ReactNode
    noCenter?: boolean
}

const SubTitle = (props: SubTitleProps) =>
<h2 className={`text-2xl font-bold pb-4 ${props.noCenter ? '' : 'text-center'} ${props.className}`}>
    {props.children}
</h2>

type EisProps = {
    className?: string
    children: React.ReactNode
    number: number
    title: string
}

const Eis = (props: EisProps) =>
<div>
    <h3 className={`text-xl font-bold pb4 ${props.className}`}>
        {props.number})&nbsp;&nbsp;{props.title}
    </h3>
    <div className="pl-6 pt-4">
        {props.children}
    </div>
</div>

export default Manifest
