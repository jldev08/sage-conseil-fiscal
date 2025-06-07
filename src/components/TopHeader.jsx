import {BiEnvelope, BiLocationPlus, BiLogoFacebookCircle, BiLogoLinkedinSquare, BiLogoYoutube, BiMapPin} from "react-icons/bi";
import { FaPhoneAlt } from "react-icons/fa";

export const TopHeader = () => {
    return (
        <div className="bg-blue-800">
            <header className="w-full max-w-screen-xl mx-auto shadow-sm flex max-md:flex-col lg:justify-between max-md:gap-4 p-6">
                <div className="lg:w-1/5">
                    <p className="flex max-md:justify-center items-center text-white"><BiEnvelope className="text-2xl"/>&nbsp;<span>info@ebconseilfisc.com</span></p>
                </div>
                <div className="lg:w-1/5">
                    <p className="text-white flex max-md:justify-center"><FaPhoneAlt className="text-xl" />&nbsp;(418) 521-8425 / 5300</p>
                </div>
                <div className="lg:w-1/3">
                    <p className="flex max-md:justify-center items-center text-white"><BiMapPin className="text-2xl"/>&nbsp;<span>Boulevard des Galeries Bureau 210 Québec</span></p>
                </div>
                <div className="lg:w-1/4 flex lg:justify-end max-md:justify-center">
                    <ul className="flex lg:justify-end gap-2">
                        <li><a href="#"><BiLogoFacebookCircle className="text-white text-2xl"/></a></li>
                        <li><a href="#"><BiLogoLinkedinSquare  className="text-white text-2xl"/></a></li>
                        <li><a href="#" className="flex items-center"><BiLogoYoutube  className="text-white text-2xl"/></a></li>
                    </ul>
                </div>
            </header>
        </div>
    )
}
