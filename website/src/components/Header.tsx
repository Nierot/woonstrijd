
const openMenu = () => {

}

const Header: React.FC = () =>
<header className="grid grid-cols-6 bg-header h-16">
    <p className="col-span-5">
        haha leuke header
    </p>

    <div className="flex justify-end py-2 px-2">
        {/* https://css-tricks.com/hamburger-menu-with-a-side-of-react-hooks-and-styled-components/ */}
        {/* https://www.npmjs.com/package/react-hamburger-menu */}
        <button onClick={openMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
        </button>
    </div>
</header>

export default Header;