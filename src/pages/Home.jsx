import {LayoutComponent} from "../components/LayoutComponent.jsx";
import {HomeSlider} from "../components/HomeSlider.jsx";
import { homePagePictureOne, homeSolutionPictureOne } from "../assets/index.js";

export const Home = () => {
    return (
        <LayoutComponent>
            <HomeSlider/>
            <section className="max-md:mx-4 md:max-w-screen-xl mx-auto mt-20 ">
                <div className="lg:flex justify-between items-center lg:gap-4 md:m-4">
                    <div className="md:w-full">
                        <img src={homePagePictureOne} className="object-fit rounded-3xl" alt="" />
                    </div>
                    <div className="md:w-full md:mt-4">
                        <h2 className="md:text-4xl max-md:text-2xl font-bold pb-4">Une gamme complète de services</h2>
                        <p className="text-justify">Les Experts de <strong>Sage Conseil Fiscal</strong>. est un cabinet d’expertise comptable spécialisé dans la comptabilité générale, la tenue de livres comptables et dans la déclaration de revenus des entreprises et des particuliers dans la province de Québec depuis 2018.</p>
                        <p className="text-justify"> Notre cabinet comptable offre une gamme complète de services comptables, financiers et fiscaux pour les entreprises, les entrepreneurs, les travailleurs autonomes et les particuliers.</p>
                        <p className="text-justify">Avec notre équipe d’experts comptables qualifiés et expérimentés, nous sommes là pour vous aider à gérer efficacement vos finances et à atteindre vos objectifs financiers.</p>
                    </div>
                </div>
            </section>
            <section className="mt-20 bg-cover bg-no-repeat home-services-banner h-[350px]">
                <div className="flex justify-center items-center h-full w-full flex-col">
                    <h4 className="md:text-4xl max-md:text-2xl text-white text-center">Avec notre équipe d'experts comptables qualifiés et expérimentés, nous sommes là pour vous aider à gérer efficacement vos finances et à atteindre vos objectifs financiers.</h4>
                    <a href="/services" className="bg-black text-white p-4 mt-6 rounded-2xl hover:bg-blue-950">Consulter nos services</a>
                </div>
            </section>
            <section className="mt-20 max-w-screen-xl max-md:mx-4 mx-auto">
                <div className="lg:grid lg:grid-cols-2 lg:gap-4 md:m-4">
                    <div className="md:w-full md:flex md:flex-col md:gap-4">
                        <div>
                            <h5 className="font-bold">Les Experts de Sage Conseil Fiscal</h5>
                            <h3 className="text-4xl font-bold mt-4">Des solutions personnalisées</h3>
                        </div>
                        <div className="mt-5">
                            <p className="text-justify">Nos services incluent la tenue de livres comptables, la préparation des déclarations fiscales (entreprises et particuliers), la gestion de la paie, la planification fiscale, la consultation financière et bien plus encore.</p>
                            <p className="text-justify mt-2 mb-2">Nous travaillons en étroite collaboration avec nos clients pour comprendre leurs besoins spécifiques et leur fournir des solutions personnalisées pour répondre à leurs attentes.</p>
                            <p className="text-justify">Chez <strong>Sage Conseil Fiscal</strong>., nous mettons l’accent sur la qualité, l’exactitude, la diligence et le professionnalisme dans tout ce que nous faisons. Notre engagement envers nos clients se traduit par un service de haute qualité, des conseils judicieux et une approche attentionnée pour  chaque situation financière.</p>
                        </div>
                        <div className="md:mt-10 md:mb-10">
                            <a href="/services" className="bg-black text-white p-4 mt-8 rounded-2xl hover:bg-blue-950">Consultez nos services</a>
                        </div>
                    </div>
                    <div className="md:w-full">
                        <img src={homeSolutionPictureOne} className="object-cover max-md:my-8 rounded-3xl" alt="" />
                    </div>
                </div>
            </section>
            <section className="mt-20 bg-cover bg-no-repeat home-contactus-banner h-[450px]">
                <div className="flex justify-center items-center h-full w-full flex-col p-4">
                    <h4 className="text-4xl text-white text-center">Merci de votre intérêt pour Les Experts de Sage Conseil Fiscal</h4>
                    <p className="text-white pt-4 text-center">N’hésitez pas à nous contacter pour en savoir plus sur nos services et sur la manière dont nous pouvons vous aider à réussir sur le plan financier. <br/>Nous serions ravis de travailler avec vous pour bâtir un avenir financier solide et prospère.</p>
                    <a href="/contact" className="bg-black text-white p-4 mt-8 rounded-2xl hover:bg-blue-950">Contactez-nous</a>
                </div>
            </section>
        </LayoutComponent>
    )
}
