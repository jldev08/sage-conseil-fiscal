import {BiEnvelope, BiLocationPlus, BiLogoFacebookCircle, BiLogoLinkedinSquare, BiLogoYoutube} from "react-icons/bi";

export const TopHeader = () => {
    return (
        <div className="bg-blue-800">
            <header className="w-full max-w-screen-xl mx-auto shadow-sm flex justify-between p-6">
                <div className="w-1/2">
                    <p className="flex items-center text-white"><BiEnvelope className="text-2xl"/>&nbsp;<span>info@ebconseilfisc.com</span></p>
                </div>
                <div className="w-1/2">
                    <ul className="flex justify-end gap-2">
                        <li className="bg-white rounded-full p-2"><a href="#"><BiLogoFacebookCircle className="text-black text-xl"/></a></li>
                        <li className="bg-white rounded-full p-2"><a href="#"><BiLogoLinkedinSquare  className="text-black text-xl"/></a></li>
                        <li className="bg-white rounded-full p-2"><a href="#" className="flex items-center"><BiLogoYoutube  className="text-black text-xl"/></a></li>
                    </ul>
                </div>
            </header>
        </div>
    )
}
