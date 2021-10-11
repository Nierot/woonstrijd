import { Link } from "react-router-dom";

const Footer: React.FC = () =>
<footer className="bg-header pl-6 text-lg min-h-20 text-white pt-6">
    {/* TODO dit nice in het midden zetten op grote schermen */}
    <div className="">
        <p className="uppercase">over ons</p>
        <p className="pt-1 pl-4"><Link to="/wie-zijn-wij">Wie zijn wij</Link></p>
        <p className="pt-1 pl-4"><Link to="/achtergrond">Achtergrond</Link></p>
        {/* <p className="pt-1 pl-4"><Link to="/nieuws">Nieuws</Link></p> */}
        {/* <p className="pt-1 pl-4"><Link to="/manifest">Manifest</Link></p> */}
        {/* <p className="pt-1 pl-4"><Link to="/doneer">Doneer</Link></p> */}
        {/* <p className="pt-1 pl-4"><Link to="/help-ons">Help ons!</Link></p> */}
        {/* <p className="pt-1 pl-4"><Link to="/materiaal">Materiaal</Link></p> */}
    </div>
    <div className="pt-4">
        {/* TODO socials toevoegen */}
        <p className="uppercase">Socials</p>
        
        <p className="pl-4 pt-1"><a href="//instagram.com/woonstrijd">Instagram</a></p>
        <p className="pl-4 pt-1"><a href="//twitter.com/woonstrijd">Twitter</a></p>
        <p className="pl-4 pt-1"><a href="//facebook.com/events/s/woonstrijd/616399699740490/">Facebook</a></p>
        <p className="pl-4 pt-1"><a href="mailto:woonstrijdgroningen@gmail.com">Email</a></p>
    </div>
    {/* Schaamteloze zelfpromotie */}
    <div className="pt-4 pb-8">
        Website gemaakt door&nbsp;
        <span className="underline">
            <a href="https://nierot.com/">Nierot</a>
        </span>
    </div>
</footer>


export default Footer;