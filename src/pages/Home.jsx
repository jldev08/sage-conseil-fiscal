import {LayoutComponent} from "../components/LayoutComponent.jsx";
import {HomeSlider} from "../components/HomeSlider.jsx";
import { homePagePictureOne, homeSolutionPictureOne } from "../assets/index.js";

export const Home = () => {
    return (
        <LayoutComponent>
            <HomeSlider/>
            <section className="flex justify-between max-w-screen-xl mx-auto mt-20 gap-8">
                <div className="w-1/2">
                    <img src={homePagePictureOne} className="rounded-3xl" alt="" />
                </div>
                <div className="w-1/2">
                    <h2 className="text-4xl font-bold">Une gamme complète de services</h2>
                    <p className="text-justify mt-8">Les Experts de <strong>Sage Conseil Fiscal</strong>. est un cabinet d’expertise comptable spécialisé dans la comptabilité générale, la tenue de livres comptables et dans la déclaration de revenus des entreprises et des particuliers dans la province de Québec depuis 2018.</p>
                    <p className="text-justify mt-4"> Notre cabinet comptable offre une gamme complète de services comptables, financiers et fiscaux pour les entreprises, les entrepreneurs, les travailleurs autonomes et les particuliers.</p>
                    <p className="text-justify mt-4">Avec notre équipe d’experts comptables qualifiés et expérimentés, nous sommes là pour vous aider à gérer efficacement vos finances et à atteindre vos objectifs financiers.</p>
                </div>
            </section>
            <section className="mt-20">
                <div className="home-services-banner relative">
                    <div className="flex flex-col items-center absolute top-1/4 left-1.5">
                        <h4 className="text-4xl text-white text-center">Avec notre équipe d'experts comptables qualifiés et expérimentés, nous sommes là pour vous aider à gérer efficacement vos finances et à atteindre vos objectifs financiers.</h4>
                        <a href="/services" className="bg-black text-white p-4 mt-6 rounded-2xl hover:bg-blue-950">Consulter nos services</a>
                    </div>
                </div>
            </section>
            <section className="mt-20 max-w-screen-xl mx-auto">
                <div className="flex justify-between gap-8">
                    <div className="w-1/2">
                        <h5 className="font-bold">Les Experts de Sage Conseil Fiscal</h5>
                        <h3 className="text-4xl font-bold mt-4">Des solutions personnalisées</h3>
                        <div className="mt-5">
                            <p className="text-justify">Nos services incluent la tenue de livres comptables, la préparation des déclarations fiscales (entreprises et particuliers), la gestion de la paie, la planification fiscale, la consultation financière et bien plus encore.</p>
                            <p className="text-justify mt-2 mb-2">Nous travaillons en étroite collaboration avec nos clients pour comprendre leurs besoins spécifiques et leur fournir des solutions personnalisées pour répondre à leurs attentes.</p>
                            <p className="text-justify">Chez <strong>Sage Conseil Fiscal</strong>., nous mettons l’accent sur la qualité, l’exactitude, la diligence et le professionnalisme dans tout ce que nous faisons. Notre engagement envers nos clients se traduit par un service de haute qualité, des conseils judicieux et une approche attentionnée pour  chaque situation financière.</p>
                        </div>
                        <div className="mt-10">
                            <a href="/services" className="bg-black text-white p-4 mt-8 rounded-2xl hover:bg-blue-950">Consultez nos services</a>
                        </div>
                    </div>
                    <div className="w-1/2">
                        <img src={homeSolutionPictureOne} className="rounded-3xl" alt="" />
                    </div>
                </div>
            </section>
            <section className="mt-20">
                <div className="home-contact-banner relative">
                    <div className="flex flex-col items-center absolute top-1/5 left-1/6">
                        <h4 className="text-4xl text-white">Merci de votre intérêt pour Les Experts de Sage Conseil Fiscal</h4>
                        <p className="text-white pt-4 text-center">N’hésitez pas à nous contacter pour en savoir plus sur nos services et sur la manière dont nous pouvons vous aider à réussir sur le plan financier. <br/>Nous serions ravis de travailler avec vous pour bâtir un avenir financier solide et prospère.</p>
                        <a href="/contact" className="bg-black text-white p-4 mt-8 rounded-2xl hover:bg-blue-950">Contactez-nous</a>
                    </div>
                </div>
            </section>
        </LayoutComponent>
    )
}
