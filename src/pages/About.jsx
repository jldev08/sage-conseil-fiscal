import {LayoutComponent} from "../components/LayoutComponent.jsx";
import Banner from "../components/Banner.jsx";
import BannerContact from "../components/BannerContact.jsx";
import {aboutTeam, aboutUs} from "../assets/index.js";
import {BiMoneyWithdraw, BiSolidTimeFive, BiSolidUser} from "react-icons/bi";

export const About = () => {
    return (
        <LayoutComponent>
            <Banner backgroundClass="about-banner">
                <h2 className="font-bold text-white text-3xl pb-4">A Propos</h2>
                <a href="/contact" className="text-white">Accueil / Contact</a>
            </Banner>
            <section className="max-md:mx-4 md:max-w-screen-xl mx-auto mt-20 ">
                <h2 className="text-center text-xl font-bold text-blue-800">SAGE CONSEIL FISCAL</h2>
                <p className="text-center mt-2">Votre cabinet comptable de référence à Montréal</p>
            </section>
            <section className="max-md:mx-4 md:max-w-screen-xl mx-auto mt-20 ">
                <div className="grid lg:grid-cols-2 items-center gap-10 md:m-4">
                    <div>
                        <img src={aboutUs} className="rounded" alt=""/>
                    </div>
                    <div>
                        <h2 className="text-4xl text-blue-800 font-bold">Une gamme complète de services comptables</h2>
                        <p className="text-justify mt-8">
                            Les Experts de <span className="font-bold">SAGE CONSEIL FISCAL</span> est un cabinet
                            comptable de renom au Québec, offrant une gamme complète de services comptables, fiscaux et
                            financiers pour les entreprises et les particuliers depuis 2018.
                            Nous sommes fiers d’être un partenaire de confiance pour nos clients, en leur offrant des
                            solutions personnalisées et un service de haute qualité.
                            Notre équipe d’experts comptables qualifiés cumule des années d’expérience dans le domaine
                            de la comptabilité, de la fiscalité et de la gestion financière.
                            Nous combinons notre expertise technique avec une approche attentionnée et proactive pour
                            aider nos clients à atteindre leurs objectifs financiers.
                        </p>
                    </div>
                </div>
            </section>
            <section className="bg-blue-800 h-full p-16 mt-16 mb-16">
                <div className="max-w-screen-xl mx-auto">
                    <div className="grid grid-cols-3">
                        <div className="flex items-center gap-10 w-full">
                            <div>
                                <BiSolidUser className="text-white text-7xl"/>
                            </div>
                            <div>
                                <span className="text-white font-bold text-5xl">3000</span>
                                <p className="text-white pt-3">CLIENTS SATISFAITS</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-10 w-full">
                            <div>
                                <BiSolidTimeFive className="text-white text-7xl"/>
                            </div>
                            <div>
                                <span className="text-white font-bold text-5xl">45000</span>
                                <p className="text-white pt-3">HEURES D'EXPÉRIENCE</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-8 w-full">
                            <div>
                                <BiMoneyWithdraw className="text-white text-7xl"/>
                            </div>
                            <div className="text-center">
                                <span className="text-white font-bold text-5xl">10000000</span>
                                <p className="text-white pt-3">EN ÉCONOMIE D'IMPÔT</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="max-md:mx-4 md:max-w-screen-xl mx-auto mt-20 ">
                <div className="grid lg:grid-cols-2  items-center gap-10 md:m-4">
                    <div>
                        <h2 className="text-4xl text-blue-800 font-bold">Une équipe de comptables professionnels agréés</h2>
                        <p className="text-justify mt-8">Notre cabinet comptable à Montréal est composé d’une variété d’experts pour vous accompagner : comptables, avocats, notaires, planificateurs et représentants en services financiers, courtiers en assurance et banquiers. Ensemble, nous vous accompagnons dans tous vos projets de vie ainsi que ceux de votre entreprise.</p>
                    </div>
                    <div>
                        <img src={aboutTeam} className="rounded" alt=""/>
                    </div>
                </div>
            </section>
            <BannerContact/>
        </LayoutComponent>
    )
}
