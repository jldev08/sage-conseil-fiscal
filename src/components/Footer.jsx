import { BiEnvelope, BiLogoFacebookCircle, BiLogoLinkedinSquare, BiLogoYoutube } from "react-icons/bi"
import { BsFillTelephoneFill } from "react-icons/bs"
import { logoSCF } from "../assets"

export const Footer = () => {
    return (
        <footer className="relative h-full p-10 bg-no-repeat bg-cover footer-banner">
            <div className="content-center max-w-screen-xl gap-8 mx-auto mb-4 lg:grid lg:grid-cols-4">
                <div className="w-full md:mb-2"> 
                    <a href="#">
                        <img src={logoSCF} className="h-auto w-30" alt="Sage Conseil Fiscal Inc. Logo" />
                    </a>
                    <p className="text-xs text-justify text-white">
                       La sagesse au cœur de vos décisions.
                    </p>
                </div>
                <div className="w-full md:mb-10">
                    <h3 className="text-2xl font-bold text-white max-md:pt-10">Navigation</h3>
                    <ul className="flex flex-col gap-1 mt-4 text-white">
                        <li>
                            <a href="/">Accueil</a>
                        </li>
                        <li>
                            <a href="/services">Services</a>
                        </li>
                        <li>
                            <a href="/apropos-de-nous">A propos</a>
                        </li>
                        <li>
                            <a href="/declaration-impots-en-ligne">Déclaration d'Impôts en ligne</a>
                        </li>
                    </ul>
                </div>
                <div className="w-full mb-8">
                    <h3 className="text-2xl font-bold text-white">Contacts</h3>
                    <div className="flex flex-col flex-wrap gap-4 mt-4">
                        <div className="flex"><BsFillTelephoneFill className="text-2xl text-white" /><span className="text-white">&nbsp;&nbsp;418 575 4236</span></div>
                        <div className="flex"><BiEnvelope className="text-2xl text-white" /><span className="text-white">&nbsp;&nbsp;Info@sageconseilfiscal.com</span></div>
                    </div>
                    <div className="mt-6">
                        <ul className="flex gap-4">
                            <li className="p-2 bg-white rounded-full"><a href="#"><BiLogoFacebookCircle className="text-xl text-black"/></a></li>
                            <li className="p-2 bg-white rounded-full"><a href="#"><BiLogoLinkedinSquare  className="text-xl text-black"/></a></li>
                            <li className="p-2 bg-white rounded-full"><a href="#" className="flex items-center"><BiLogoYoutube  className="text-xl text-black"/></a></li>
                        </ul>
                    </div>
                </div>
                <div className="w-full mb-8">
                    <h3 className="text-2xl font-bold text-white">Adresse</h3>
                    <p className="mt-4 text-white">
                        Québec, Canada
                    </p>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 flex flex-col items-center justify-center w-full border border-t-white">
                <p className="p-2 text-center text-white">Copyright &copy; 2025 - Sage Conseil Fiscal Inc. - Tous droits réservés by <span className="font-bold"><a href="#https://jldev08.github.io/portfolio/" target="_blank">DevMinSet</a></span></p>
            </div>
        </footer>
    )
}





