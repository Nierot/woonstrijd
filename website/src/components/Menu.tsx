import { Link } from "react-router-dom"
import HamburgerMenuIcon from 'react-hamburger-menu'
import { slide as HamburgerMenu } from 'react-burger-menu'
import './HamburgerMenu.css'

type MenuProps = {
    open: boolean
}


export const Menu = (props: MenuProps) => {

    return <div>
        <HamburgerMenu 
            right 
            isOpen={props.open} 
            customBurgerIcon={false}>
            <MenuItem visible to="wie-zijn-wij" text="Wie zijn wij" />
            <MenuItem visible to="manifest" text="Manifest" />
            <MenuItem visible to="achtergrond" text="Achtergrond" />
            <MenuItem visible to="aanmelden" text="Aanmelden" />
            <MenuItem to="nieuws" text="Nieuws" />
            <MenuItem to="help-ons" text="Help ons" />
            <MenuItem to="materiaal" text="Materiaal" />

            {/* TODO doneer knop onderaan zetten en anders maken  */}
            <DonateButton visible to="doneer" text="Doneer"/>
        </HamburgerMenu>

    </div>

}

type MenuButtonProps = {
    open: boolean
    setOpen: (open: boolean) => void
}

export const MenuButton = (props: MenuButtonProps) =>
<HamburgerMenuIcon
    isOpen={props.open}
    menuClicked={() => props.setOpen(!props.open)}
    color="#FFF"
/>

type MenuItemProps = {
    to: string
    text: string
    visible?: boolean
}

const DonateButton = (props: MenuItemProps) => {
    return <div className="text-white py-4 text-2xl text-center bg-header mx-8 my-4">
        <Link to={props.to}>{props.text}</Link>
    </div>
}

const MenuItem = (props: MenuItemProps) => {
    if (props.visible) {
        return <div className="text-white py-4 text-2xl text-center">
            <Link to={props.to}>
                {props.text}
            </Link>
        </div>
    } else {
        return <></>
    }
}