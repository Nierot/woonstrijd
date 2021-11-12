import { useState } from "react";
import { Menu, MenuButton } from "./Menu";


const Header: React.FC = () => {
    const [open, setOpen] = useState(false)

    return <header className="">
    <div className="grid grid-cols-6 bg-header h-16">
        <div className="col-span-5 text-white h-16">
            <div className="w-64 p-px">
                <a href="/"><img src="/header.jpg" alt="Woonstrijd Groningen" /></a>        
            </div>
        </div>

        <div className="flex justify-end pt-4 pr-4">
        {/* https://css-tricks.com/hamburger-menu-with-a-side-of-react-hooks-and-styled-components/ */}
            <MenuButton open={open}  setOpen={setOpen}/>
        </div>
    </div>

    <Menu open={open}/>
</header>
}


export default Header;