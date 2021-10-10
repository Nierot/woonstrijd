import { Link } from "react-router-dom"

const Menu: React.FC = () => 
<div>
    <MenuButton to="over-ons" text="Over ons" />
    <MenuButton to="manifest" text="Manifest" />
    <MenuButton to="nieuws" text="Nieuws" />
    <MenuButton to="materiaal" text="Materiaal" />

    {/* TODO doneer knop onderaan zetten en anders maken */}
    <MenuButton to="doneer" text="Doneer"/>

</div>

type MenuButtonProps = {
    to: string
    text: string
}

const MenuButton = (props: MenuButtonProps) => 
<div>
    <Link to={props.to}>
        {props.text}
    </Link>
</div>

export default Menu