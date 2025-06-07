import { BiEnvelope, BiLogoFacebookCircle, BiLogoLinkedinSquare, BiLogoYoutube } from "react-icons/bi"
import { BsFillTelephoneFill } from "react-icons/bs"

export const Footer = () => {
    return (
        <footer className="footer-banner bg-cover bg-no-repeat h-full p-10 relative">
            <div className="lg:grid lg:grid-cols-4 mb-4 gap-8 max-w-screen-2xl content-center">
                <div className="w-full md:mb-2"> 
                    <a href="#">LOGO SAGE CONSEIL FISCAL</a>
                    <p className="text-white mt-6">
                        Les Experts de <strong>Sage Conseil Fiscal</strong>. est un cabinet d’expertise comptable spécialisé dans la comptabilité générale, la tenue de livres comptables et dans la déclaration de revenus des entreprises et des particuliers dans la province de Québec depuis 2018.
                    </p>
                </div>
                <div className="w-full md:mb-10">
                    <h3 className="font-bold text-white text-2xl max-md:pt-10">Navigation</h3>
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
                <div className="w-full mb-8">
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
                <div className="w-full mb-8">
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
            <div className="flex border-t-white border items-center justify-center flex-col w-full absolute left-0 bottom-0">
                <p className="text-white text-center p-2"> 2025 Les Experts de Sage Conseil Fiscal. | Tous droits réservés | Conception & Marketing Web par Gouse Tech</p>
            </div>
        </footer>
    )
}





