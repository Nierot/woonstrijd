import Paragraph from "../components/Paragraph"
import Base from "./Base"

const Home: React.FC = () => 
<Base>
    <img src="/main_img_2.jpg" alt="Woonstrijd"/>
    <a href="/aanmelden" className="flex justify-center items-center py-3 text-xl">
        <button className="center"><span className="underline">Meld je nu aan!</span></button>
    </a>

    <Corona />

    <img src="/program.png" alt="Programma" />

    <Paragraph>
        Na de sprekers beginnen we aan de mars door de stad. Hierbij zullen we de volgende route volgen: 
        Vanaf de vismarkt naar het A-kerkhof. Via de Munnikenholm gaan we naar het gedempte zuiderdiep. Vervolgens zullen wij via de Oosterstraat langs de Grote Markt trekken. Tot slot lopen we via het Broerplein terug naar de Vismarkt waar we de demonstratie zullen afsluiten.
    </Paragraph>

    <img src="/route.png" alt="Route" />

    <br />

    <Paragraph className="text-2xl" >
        Er is een woningcrisis in heel Nederland. 
        Het aantal dakloze mensen is in tien jaar verdubbeld. 
        De woningnood blijft verder uit de hand lopen. 
        Huren is steeds duurder doordat de hoeveelheid sociale huurwoningen afneemt 
        en de prijzen in de vrije sector extreem hoog zijn.
        Een huis kopen is met een modaal inkomen bijna onmogelijk. 
    </Paragraph>
    <Paragraph>
        De prijzen van huizen stijgen in Noord-Nederland het snelst. 
        In de stad Groningen met 25,5% in het afgelopen jaar.
        (Internationale) studenten die in Groningen en Leeuwarden komen studeren,
        kunnen onmogelijk aan een kamer komen. 
        En in het aardbevingsgebied zijn de mensen in de steek gelaten door de overheid.
        Bijna 40 jaar na de eerste aardbevingen, 
        is er nog steeds geen goede compensatieregeling voor de slachtoffers 
        en worden hun woningen steeds onveiliger door de schade.
    </Paragraph>
    <Paragraph>
        Het beleid zorgt voor stress en drijft gemeenschappen uit elkaar. 
        Het bedreigt de toekomst van onze regio. 
        Het maakt de steden onbetaalbaar en het aardbevingsgebied onleefbaar. 
        Daar moeten we ons tegen verzetten. 
        We spreken ons uit tégen pandjesbazen die studenten uitmelken. 
        Tégen de landelijke overheid die mensen 
        uit het aardbevingsgebied in de kou laat staan. 
        We moeten solidair zijn met alle mensen die getroffen zijn door deze crisis. 
    </Paragraph>
    <Paragraph className="font-bold pb-16">
        Op 28 november 14:00 schudden we de politiek wakker. 
        Dan maken we een vuist op de Vismarkt.
    </Paragraph>
</Base>

const Corona = () =>
<div className="flex flex-col lg:flex-row pt-2">
    <Paragraph>
        <h3 className="font-bold text-xl pb-2">
            (English below)
        </h3>
    Aanstaande zondag is het zo ver - de #Woonstrijd breekt los.
    Omdat we nog steeds in een heftige pandemie zitten en we willen dat iedereen veilig en fijn kan demonstreren zijn er een paar simpele huisregels:
    <ul className="list-decimal pl-4">
        <li>
            Houd anderhalve meter afstand van elkaar. Op het plein zelf zullen vrijwilligers van ons in hesjes iedereen erop wijzen dat ze afstand moeten houden. Wij plaatsen stippen op het plein die staplekken op afstand weergeven.
        </li>
        <li>
            Draag een mondkapje. Als je die niet hebt wijzen wij je erop, en wij delen mondkapjes uit voor als je geen mondkapje bij je hebt. 
        </li>
        <li>
            Het wordt enorm gewaardeerd als mensen voor ze komen demonstreren een zelftest hebben gedaan. 
        </li>
        <li>
            Het allerbelangrijkst: Blijf thuis bij klachten.
        </li>
    </ul>
    </Paragraph>

    <Paragraph>
        <h3 className="font-bold text-xl pb-2">
            English
        </h3>
        This Sunday is the day - the #Woonstrijd is happening.
        Because we're still in the midst of a severe pandemic and we want everyone to be able to demonstrate safely and pleasantly, 
        there are a few simple house rules: 
        <ul className="list-decimal pl-4">
            <li>
                Keep one and a half meters distance from each other. On the square itself, our volunteers in vests will remind everyone to keep their distance. We will also provide marks on the ground.
            </li>
            <li>
                Wear a mouth mask. If you don't wear one we will point it out to you, and we will hand out mouth masks if you don't have one with you. 
            </li>
            <li>
                It is greatly appreciated if people do a self-test before coming to the demonstration.
            </li>
            <li>
                Most importantly: Stay home if you have any symptoms.
            </li>
        </ul>
    </Paragraph>
</div>


export default Home