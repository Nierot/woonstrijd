import Paragraph from "../components/Paragraph"
import Base from "./Base"

const Home: React.FC = () => 
<Base>
    <img src="/main_img_2.jpg" alt="Woonstrijd"/>
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
        Dan maken we een vuist op de vismarkt.
    </Paragraph>
</Base>


export default Home