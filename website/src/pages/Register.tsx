
import Paragraph from "../components/Paragraph";
import Title from "../components/Title";
import Base from "./Base";

const Register: React.FC = () => 
<Base>
    <Title className="py-4">
        Aanmelden
    </Title>

    <Paragraph>
        Wegens de vernieuwde corona maatregelen, is het handig voor ons om een schatting te hebben van de hoeveelheid mensen die komen. Daarom verzoeken wij jullie om het onderstaande formulier in te vullen, als je zou willen komen op 28 november!
    </Paragraph>

    <a href="https://docs.google.com/forms/d/e/1FAIpQLSeKjccCCLYlQ3e5cLU5chEw2_YADMzCXQl9Ph9Lu-ebFmbrGA/viewform?usp=sf_link">
        <Paragraph className="underline">
            Klik hier om het formulier in te vullen.
        </Paragraph>
    </a>
</Base>

export default Register