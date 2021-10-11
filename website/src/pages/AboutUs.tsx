import Paragraph from "../components/Paragraph";
import Title from "../components/Title";
import Base from "./Base";

const AboutUs: React.FC = () =>
<Base className="pt-6">
    <Title>
        Wie zijn wij
    </Title>
    <Paragraph>
    Woonstrijd wordt georganiseerd door een groep die te maken heeft met de woningcrisis en hiertegen in opstand komt. 
    Woonstrijd is een samenwerking uit de volgende organisaties:
    </Paragraph>

    <ul className="list-disc list-inside text-lg">
        <li>ROOD Groningen</li>
        <li>Groningen BIJ1</li>
        <li>Jonge Socialisten Groningen</li>
        <li>Internationale Socialisten Groningen</li>
        <li>Bond Precaire Woonvormen Groningen</li>
        <li>Democratische Academie Groningen</li>
        <li>Shelter Our Students</li>
        <li>Groningen Feminist Network</li>
        <li>CJB Groningen</li>
    </ul>

    <Paragraph className="pt-4">
    Woonstrijd komt binnenkort met een lokaal manifest en 
    ondersteunt&nbsp;
    <span className="underline"><a href="//woonmanifest.nl/">het woonmanifest</a></span>
    .&nbsp;Woonstrijd werkt samen met de organisaties van het
    Woonprotest (12 september, Amsterdam),
    de Woonopstand (17 oktober, Rotterdam) 
    en het Woonverzet (13 november, Den Haag).
    </Paragraph>

</Base>

export default AboutUs