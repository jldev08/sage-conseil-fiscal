import {BiEnvelope, BiLogoFacebookCircle, BiLogoLinkedinSquare, BiLogoYoutube, BiMapPin} from "react-icons/bi";
import { FaPhoneAlt } from "react-icons/fa";

export const TopHeader = () => {
    return (
        <div className="bg-blue-custom">
            <header className="flex w-full max-w-screen-xl p-6 mx-auto shadow-sm max-md:flex-col lg:justify-between max-md:gap-4">
                <div className="lg:w-1/5">
                    <p className="flex items-center text-white max-md:justify-center"><BiEnvelope className="text-2xl"/>&nbsp;<span>info@sageconseilfiscal.com</span></p>
                </div>
                <div className="lg:w-1/5">
                    <p className="flex text-white max-md:justify-center"><FaPhoneAlt className="text-xl" />&nbsp;418 575-4236</p>
                </div>
                <div className="lg:w-1/3">
                    <p className="flex items-center text-white max-md:justify-center"><BiMapPin className="text-2xl"/>&nbsp;<span>Québec, Canada</span></p>
                </div>
                <div className="flex lg:w-1/4 lg:justify-end max-md:justify-center">
                    <ul className="flex gap-2 lg:justify-end">
                        <li><a href="#"><BiLogoFacebookCircle className="text-2xl text-white"/></a></li>
                        <li><a href="#"><BiLogoLinkedinSquare  className="text-2xl text-white"/></a></li>
                        <li><a href="#" className="flex items-center"><BiLogoYoutube  className="text-2xl text-white"/></a></li>
                    </ul>
                </div>
            </header>
        </div>
    )
}
