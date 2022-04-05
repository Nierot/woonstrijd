import Paragraph from "../components/Paragraph"
import Title from "../components/Title"
import Base from "./Base"

const Home: React.FC = () => 
<Base>
    <Title className="pt-4">
        ROOD Groningen in actie voor Wij Weigeren De Huurverhoging<br/>
    </Title>

    <Paragraph>
        Op zaterdag 9 April gaat de actiegroep Wij Weigeren de Huurverhoging (WWDH) in Groningen huis-aan-huis flyeren voor
        huurbevriezing per 1 juli. Deze landelijke actiegroep eist huurbevriezing voor de komende vijf jaar. 
        Informatie over de landelijke actie van WWDH is te vinden op&nbsp;
        <a className="underline" href="https://wijweigerendehuurverhoging.nl/">
            https://wijweigerendehuurverhoging.nl/
        </a> 
    </Paragraph>

    <Paragraph>
    Huurders komen door huurstijgingen steeds meer financieel in de knel.Weigeren is wettelijke toegestaan. 
    Met een voorstel hoef je niet akkoord te gaan. Verhuurders verzwijgen dat wanneer zij een huurverhoging voorstellen. 
    Woordvoerder Ken Hesselink: “De huren stijgen jaarlijks en er schijnt maar geen eind aan te komen. 
    Woningzoekenden staan jarenlang op de wachtlijst. Als er al wat vrij komt is dat vaak te duur. 
    Steeds meer huurders vragen zich af, is de huur nog wel op te brengen. 
    Veel huurders moeten nu al kiezen: eerst het eten, dan de huur! Stijgende energiekosten vergroten nog eens de problemen.”
    </Paragraph>

    <Paragraph>
    ROOD Groningen voert deze actie uit samen met&nbsp;
    <a className="underline" href="https://roodjongeren.nl/socialisten-noord-is-van-start/">
        Socialisten Noord&nbsp;
    </a>.
    Wil je ook mee helpen met Wij Weigeren De Huurverhoging? 
    Komende zaterdag 9 april verzamelen we om 14.00 bij de albert heijn in de oost indische 
    buurt (Floresplein 13) flyeren en deur aan deur om mensen te helpen de huur te weigeren! 
    Heb je dit nooit eerder gedaan of ken je de actie niet? Geen probleem daar helpen we je mee. 
    🙂 Je kunt ook contact opnemen via groningen@roodjongeren.nl of 0626460338
    </Paragraph>

</Base>

export default Home
