import Paragraph from "../components/Paragraph"
import Title from "../components/Title"
import Base from "./Base"

const Home: React.FC = () => 
<Base>
    <Title className="pt-4">
        ACTIEBIJEENKOMST<br/>
        19 januari 2022 19:00<br/>
        Online
    </Title>

    <Paragraph className="text-center w-full">
        <a href="https://forms.gle/JbpDnNJN1gu7P2dB9" className="underline">
            Meld je aan!
        </a>
    </Paragraph>

    <Paragraph>
        Voor iedereen die moeite heeft een goede woning te vinden of te behouden. Woningzoekenden, (onder)huurders, kopers. Samen staan we sterk!
    </Paragraph>

    <Paragraph>
        We gaan het hebben over actievoeren. Hoe kunnen we samenwerken tegen stijgende prijzen, huisuitzettingen, asociale huisbazen? De bedoeling is om na de discussie zo snel mogelijk over te gaan op een concrete actie. 
    </Paragraph>

    <Paragraph>
        Ervaren activisten zullen aanwezig zijn om advies te geven en de discussie in goede banen te leiden.
    </Paragraph>
</Base>

export default Home
