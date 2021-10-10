import Menu from "./Menu";

const openMenu = () => {

}

const Header: React.FC = () =>
<header className="grid grid-cols-6 bg-header h-16">
    <p className="col-span-5">
        {/* haha leuke header */}
    </p>

    <div className="flex justify-end py-2 px-2">
        {/* https://css-tricks.com/hamburger-menu-with-a-side-of-react-hooks-and-styled-components/ */}
        <Menu />
    </div>
</header>

export default Header;