import { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";

export const Navbar = () => {
    const [show, setShow]=useState(false);
    const showMenu = ()=>{
        setShow(!show);
    }
    return (
        <div className="shadow-sm ">
            <div className="max-w-screen-xl mx-auto p-4">
                <nav className="md:flex md:items-center md:justify-between">
                    <div className="flex justify-between">
                        <a href="#" className="">LOGO</a>
                        <BiMenu className={`cursor-pointer text-4xl md:hidden ${show ? "hidden": "block"}`} onClick={()=>showMenu()}/>
                        <BiX className={`cursor-pointer text-4xl md:hidden ${show ? "block": "hidden"}`} onClick={()=>showMenu()}/>
                    </div>
                    <ul className={`md:flex md:gap-10 md:p-4 md:items-center ${show ? "block": "hidden"}`}>
                        <li><a href="/">ACCUEIL</a></li>
                        <li><a href="/services">SERVICES</a></li>
                        <li><a href="/declaration-impots-en-ligne">DÉCLARATION D'IMPÔTS EN LIGNE</a></li>
                        <li><a href="/apropos-de-nous">A PROPOS</a></li>
                        <li><a href="/contact">CONTACT</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}
