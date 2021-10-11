import Paragraph from "../components/Paragraph";
import Title from "../components/Title";
import Base from "./Base";

const Background: React.FC = () =>
<Base className="pt-6">
    <Title>Achtergrond</Title>
    
    <Paragraph>
    Voor vrijwel alle inkomensgroepen is het steeds lastiger geworden 
    om een koopwoning te bemachtigen.  
    Schaarste is ook zichtbaar op de sociale huurmarkt, 
    waar de inschrijfduur en zoektijd sinds 2017 jaarlijks zijn
    toegenomen. Gemiddeld staan woningzoekenden 7,1 jaar 
    ingeschreven en zijn ze 3,9 jaar actief op zoek naar een 
    sociale huurwoning. 
    Eengezinswoningen zijn het schaarst met een zoektijd van ruim 5 jaar.
    </Paragraph>

    <Paragraph className="pb-8">
    Wie niet in aanmerking komt voor een sociale huurwoning en geen woning
    wil of kan kopen, is aangewezen op een particuliere huurwoning. 
    In sommige gevallen is dat een vrije keuze (bijvoorbeeld: niet vast 
    willen zitten aan een eigen woning), maar soms ook niet (zoals: geen 
    passende koopwoning kunnen vinden). In dat laatste geval ben je in 
    Groningen relatief veel duurder uit, zo blijkt uit een vergelijking van 
    relatieve maandlasten bij sociale huur-, particuliere huur- en koopwoningen. 
    Bij koopwoningen betaal je gemiddeld € 7,84 per m² per maand, bij sociale 
    huurwoningen € 11,13 en bij particuliere huur € 14,92. Veel mensen zouden 
    liever een woning kopen maar kunnen door schaarste geen woning vinden, 
    waardoor ze nu een (te) groot deel van hun inkomen kwijt zijn aan woonlasten. 
    Schaarste moet in alle segmenten dus afnemen, 
    zodat alle doelgroepen in de stad terechtkunnen in een voor 
    hen geschikte en betaalbare woning. 
    </Paragraph>
</Base>

export default Background