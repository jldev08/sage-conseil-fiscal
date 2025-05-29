import {FaPhoneAlt} from "react-icons/fa";

export const Navbar = () => {
    return (
        <div className="shadow-sm ">
            <div className="flex justify-between items-center max-w-screen-xl mx-auto p-4">
                <a href="#"> LOGO</a>
                <nav>
                    <ul className="flex justify-between gap-10 items-center">
                        <li><a href="/">ACCUEIL</a></li>
                        <li><a href="/services">SERVICES</a></li>
                        <li><a href="/declaration-impots-en-ligne">DÉCLARATION D'IMPÔTS EN LIGNE</a></li>
                        <li><a href="/apropos-de-nous">A PROPOS</a></li>
                        <li><a href="/contact">CONTACT</a></li>
                    </ul>
                </nav>
                <div className="flex  items-center gap-4">
                    <div>
                        <FaPhoneAlt className="text-2xl" />
                    </div>
                    <div>
                        <p>Téléphone</p>
                        <p>(418) 521-8425</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
