import { BiEnvelope, BiLogoFacebookCircle, BiLogoLinkedinSquare, BiLogoYoutube } from "react-icons/bi"
import { BsFillTelephoneFill } from "react-icons/bs"

export const Footer = () => {
    return (
        <div className="footer-banner relative">
            <div className="absolute top-1/6 left-1/11">
                <div className="flex flex-col gap-6">
                    <div className="flex justify-between mx-auto gap-10 max-w-screen-xl">
                        <div className="w-2/4"> 
                            <a href="#">LOGO SAGE CONSEIL FISCAL</a>
                            <p className="text-white mt-6">
                                Les Experts de <strong>Sage Conseil Fiscal</strong>. est un cabinet d’expertise comptable spécialisé dans la comptabilité générale, la tenue de livres comptables et dans la déclaration de revenus des entreprises et des particuliers dans la province de Québec depuis 2018.
                            </p>
                        </div>
                        <div className="w-1/4">
                            <h3 className="font-bold text-white text-2xl">Navigation</h3>
                            <ul className="flex flex-col gap-1 mt-4 text-white">
                                <li>
                                    <a href="/">Accueil</a>
                                </li>
                                <li>
                                    <a href="/services">Services</a>
                                </li>
                                <li>
                                    <a href="/apropos">A propos</a>
                                </li>
                                <li>
                                    <a href="/declaration-impots-en-ligne">Déclaration d'Impôts en ligne</a>
                                </li>
                            </ul>
                        </div>
                        <div className="w-1/4">
                            <h3 className="font-bold text-white text-2xl">Contacts</h3>
                            <div className="flex flex-col flex-wrap gap-4 mt-4">
                                <div className="flex"><BsFillTelephoneFill className="text-2xl text-white" /><span className="text-white">&nbsp;&nbsp;(418) 521-8425</span></div>
                                <div className="flex"><BiEnvelope className="text-2xl text-white" /><span className="text-white">&nbsp;&nbsp;reception@expertsdeden.ca</span></div>
                            </div>
                            <div className="mt-6">
                                <ul className="flex gap-4">
                                    <li className="bg-white rounded-full p-2"><a href="#"><BiLogoFacebookCircle className="text-black text-xl"/></a></li>
                                    <li className="bg-white rounded-full p-2"><a href="#"><BiLogoLinkedinSquare  className="text-black text-xl"/></a></li>
                                    <li className="bg-white rounded-full p-2"><a href="#" className="flex items-center"><BiLogoYoutube  className="text-black text-xl"/></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="w-1/4">
                            <h3 className="font-bold text-white text-2xl">Adresse</h3>
                            <p className="text-white mt-4">
                                5300, Boulevard des Galeries Bureau 210 Québec (Qc) G2K 2A2
                            </p>
                            <h3 className="font-bold text-white text-2xl">heure d'Ouverture</h3>
                            <p className="text-white">
                                Lundi à Vendredi: 8h30 à 20h30
                                Samedi: 10h00 à 17h00 Dimanche: Fermé</p>
                        </div>
                    </div>
                    <hr className="text-white"/>
                    <div className="copyright">
                        <p className="text-center text-white">© 2025 Les Experts de Sage Conseil Fiscal. | Tous droits réservés | Conception & Marketing Web par Gouse Tech</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
