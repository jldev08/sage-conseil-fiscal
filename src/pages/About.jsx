import {LayoutComponent} from "../components/LayoutComponent.jsx";
import Banner from "../components/Banner.jsx";
import BannerContact from "../components/BannerContact.jsx";
import {aboutUs} from "../assets/index.js";
import {BiMoneyWithdraw, BiSolidTimeFive, BiSolidUser} from "react-icons/bi";
import { GoPeople } from "react-icons/go";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { BsTransparency } from "react-icons/bs";
import { GrCompliance } from "react-icons/gr";
export const About = () => {
    return (
        <LayoutComponent>
            <Banner backgroundClass="about-banner">
                <h2 className="font-bold text-white text-3xl pb-4">A Propos</h2>
                <a href="/contact" className="text-white">Accueil / Contact</a>
            </Banner>
            <section className="max-md:mx-4 md:max-w-screen-xl mx-auto mt-20 ">
                <h2 className="text-center text-xl font-bold text-blue-800">Sage Conseil Fiscal Inc.</h2>
                <p className="text-center mt-2">La sagesse au cœur de vos décisions</p>
            </section>
            <section className="max-md:mx-4 md:max-w-screen-xl mx-auto mt-20 ">
                <div className="grid lg:grid-cols-2 gap-10 md:m-4">
                    <div>
                        <img src={aboutUs} className="rounded" alt=""/>
                    </div>
                    <div>
                        <p className="text-justify">
                           Nous simplifions la fiscalité et la comptabilité pour les particuliers, travailleurs autonomes et entreprises. Notre approche allie rigueur, clarté et accompagnement humain pour transformer la complexité des chiffres en décisions simples, éclairées et avantageuses.
                        </p>
                        <h2 className="font-bold text-2xl mt-4 mb-4">Notre histoire</h2>
                        <p className="text-justify">Fondée en 2025, Sage Conseil Fiscal Inc. est née d’une volonté claire : rendre la fiscalité et la comptabilité accessibles, compréhensibles et humaines. Le nom Sage reflète notre conviction que la réussite repose sur des décisions éclairées, guidées par l’expérience, la transparence et l’accompagnement. Depuis notre création, nous aidons les particuliers et les entreprises à surmonter leurs craintes de se lancer et à bâtir leurs projets en toute confiance.</p>
                        <h2 className="font-bold text-2xl mt-4 mb-4">Notre mission</h2>
                        <p className="text-justify">Vous libérer du fardeau fiscal pour vous concentrer sur la croissance de vos projets. Nous rendons vos obligations conformes et vos décisions financières sereines, grâce à des conseils personnalisés et des solutions concrètes, adaptées à votre réalité.
                        Accompagnement humain : se lancer peut susciter des doutes. Nous vous encourageons et vous guidons à chaque étape pour que vos projets prennent vie en toute confiance.</p>
                        <h2 className="font-bold text-2xl mt-4 mb-4">Un accompagnement fiscal reconnu et sécurisé</h2>
                        <p className="text-justify">Nous sommes accrédités auprès de Revenu Québec et de l’Agence du revenu du Canada pour la production et la transmission électronique (TED) des déclarations. En tant que représentant professionnel reconnu, nous gérons vos démarches avec rigueur et efficacité afin d’assurer votre conformité et de simplifier vos obligations.</p>
                        <p>Résultat : un service sécuritaire, transparent et sans tracas — vous vous concentrez sur l’essentiel.</p>
                        <p>Ce que cela change pour vous</p>
                        <ol className="mt-2">
                            <li className="flex items-center"><span className="font-bold text-2xl">*&nbsp;</span> Déclarations transmises correctement et dans les délais.</li>
                            <li className="flex items-center"><span className="font-bold text-2xl">*&nbsp;</span> Démarches centralisées : nous parlons aux autorités pour vous.</li>
                            <li className="flex items-center"><span className="font-bold text-2xl">*&nbsp;</span> Réduction des risques d’erreurs et de pénalités.</li>
                            <li className="flex items-center"><span className="font-bold text-2xl">*&nbsp;</span> Tranquillité d’esprit et visibilité sur vos obligations.</li>
                        </ol>
                    </div>
                </div>
            </section>
            <section className="max-md:mx-4 md:max-w-screen-xl mx-auto mt-20 ">
                <h2 className="text-center text-xl font-bold text-blue-800 uppercase">Nos Valeurs</h2>
            </section>
            <section className="bg-blue-800 h-full p-4 mt-16">
                <div className="max-w-screen-xl mx-auto">
                    <div className="grid grid-cols-4">
                        <div className="flex items-center gap-10 w-full">
                            <div>
                                <GrCompliance className="text-white text-5xl"/>
                            </div>
                            <div>
                                <span className="text-white font-bold text-xl">Rigueur</span>
                                <p className="text-white pt-3">Des pratiques solides, conformes et documentées.</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-10 w-full">
                            <div>
                                <BsTransparency className="text-white text-5xl"/>
                            </div>
                            <div>
                                <span className="text-white font-bold text-xl">Transparence</span>
                                <p className="text-white pt-3">Une information claire, des honoraires sans surprise.</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-8 w-full">
                            <div>
                                <VscWorkspaceTrusted className="text-white text-5xl"/>
                            </div>
                            <div className="text-left">
                                <span className="text-white font-bold text-xl">Confiance</span>
                                <p className="text-white pt-3">Une relation durable, fondée sur le respect et l’éthique.</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-8 w-full">
                            <div>
                                <GoPeople className="text-white text-5xl"/>
                            </div>
                            <div className="text-left">
                                <span className="text-white font-bold text-xl">Accompagnement humain</span>
                                <p className="text-white pt-3">Présents à vos côtés, du démarrage à la croissance.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="max-md:mx-4 md:max-w-screen-xl mx-auto mt-20 mb-20 ">
                <h2 className="text-center text-xl font-bold text-blue-800 uppercase">Ce que disent nos clients</h2>
                <div className="grid lg:grid-cols-3 max-md:grid-cols-1 gap-10 mt-10">
                    <div className="bg-gray-200 p-4 rounded-2xl">
                        <p className="text-justify"><span className="text-3xl">“</span>Sage Conseil Fiscal m’a vraiment aidé à comprendre ma fiscalité et à démarrer mon entreprise sans stress. Je me sens enfin en confiance.<span className="text-3xl">”</span></p>
                        <p className="font-bold text-center pt-4">François L.</p>
                    </div>
                    <div className="bg-gray-200 p-4 rounded-2xl">
                        <p className="text-justify"><span className="text-3xl">“</span>Un service professionnel et humain. Ils prennent le temps d’expliquer et d’encourager, ce qui fait toute la différence.<span className="text-3xl">”</span></p>
                        <p className="font-bold text-center pt-4">Mélanie P.</p>
                    </div>
                    <div className="bg-gray-200 p-4 rounded-2xl">
                        <p className="text-justify"><span className="text-3xl">“</span>Je redoutais mes obligations fiscales, mais grâce à eux, tout est simple et transparent. Je recommande sans hésiter.<span className="text-3xl">”</span></p>
                        <p className="font-bold text-center pt-4">David A.</p>
                    </div>
                </div>
            </section>
            <BannerContact/>
        </LayoutComponent>
    )
}
