import { Link } from "react-router-dom"
import HamburgerMenuIcon from 'react-hamburger-menu'
import { slide as HamburgerMenu } from 'react-burger-menu'
import { useState } from "react";
import './HamburgerMenu.css'


const Menu: React.FC = () => {
    const [open, setOpen] = useState(false)

    return <div className="pt-2 pr-2">
        <HamburgerMenu right isOpen={open} customBurgerIcon={false}>
            <MenuButton to="over-ons" text="Over ons" />
            <MenuButton to="manifest" text="Manifest" />
            <MenuButton to="nieuws" text="Nieuws" />
            <MenuButton to="materiaal" text="Materiaal" />

            {/* TODO doneer knop onderaan zetten en anders maken  */}
            <MenuButton to="doneer" text="Doneer"/>
        </HamburgerMenu>
        <HamburgerMenuIcon
            isOpen={open}
            menuClicked={() => setOpen(!open)}
            color="#FFF"
        />
    </div>

}

type MenuButtonProps = {
    to: string
    text: string
}

const MenuButton = (props: MenuButtonProps) => 
<div className="text-white">
    <Link to={props.to}>
        {props.text}
    </Link>
</div>

export default Menu