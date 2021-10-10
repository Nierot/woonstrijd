import { Link } from "react-router-dom";

const Footer: React.FC = () =>
<footer className="bg-header min-h-20 uppercase text-white">
    {/* TODO dit nice in het midden zetten op grote schermen */}
    <div>
        over ons
        <Link to="/nieuws">Nieuws</Link>
        <Link to="/manifest">Manifest</Link>
        <Link to="/doneer">Doneer</Link>
        <Link to="/help-ons">Help ons!</Link>
        <Link to="/materiaal">Materiaal</Link>
    </div>
    <div>
        {/* TODO socials toevoegen */}
        Socials
        <a href="">Instagram</a>
        <a href="">Twitter</a>
        <a href="">Facebook</a>
        <a href="mailto etc..">Email</a>
    </div>
    {/* Schaamteloze zelfpromotie */}
    <div>
        Website gemaakt door&nbsp;
        <span className="underline">
            <a href="https://nierot.com/">Nierot</a>
        </span>
    </div>
</footer>


export default Footer;