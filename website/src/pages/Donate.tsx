import Paragraph from "../components/Paragraph";
import Title from "../components/Title";
import Base from "./Base";

const Donate: React.FC = () => 
<Base>

    <Title className="py-4">
        Doneer
    </Title>

    <Paragraph>
        Op zondag 28 november om 14:00 gaan we in Groningen de straat op tegen het huidige woonbeleid!
    </Paragraph>
    
    <Paragraph>
        Om dit te kunnen organiseren, hebben we jullie steun erg hard nodig!
    </Paragraph>

    <Paragraph>
        Elke donatie is welkom en zal in de organisatie en de toeganklijkheid van Woonstrijd worden
        gestoken. Geld dat eventueel overblijft, wordt in vervolg protesten gestopt.
    </Paragraph>

    <Paragraph>
        Alvast heel erg bedankt en tot zondag de 28e!
    </Paragraph>

    <Paragraph>
        Klik op de knop hieronder om te doneren.
    </Paragraph>

    <div className="flex justify-center items-center">
        <iframe 
            className=""
            src="https://www.gofundme.com/f/woonstrijd-groningen-28112021/widget/small"
            frameBorder="0" 
            width="200" 
            height="50" 
            title="Donation" />
    </div>

</Base>


export default Donate