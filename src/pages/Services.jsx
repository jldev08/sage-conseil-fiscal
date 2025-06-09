import Banner from "../components/Banner.jsx";
import {LayoutComponent} from "../components/LayoutComponent.jsx";
import BannerContact from "../components/BannerContact.jsx";

export const  Services = () => {
    return (
        <LayoutComponent>
            <Banner backgroundClass="service-banner">
                <h2 className="font-bold text-white text-4xl pb-4">Services</h2>
                <a href="/contact" className="text-white">Accueil / Contact</a>
            </Banner>
            <section className="max-md:mx-4 md:max-w-screen-xl mx-auto mt-20 ">
                <h2 className="text-center text-3xl font-bold text-blue-800">Nos Services</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:mt-20 md:m-8">
                    {/* Item 1 */}
                    <div className="hover:cursor-pointer shadow bg-gray-50 border-0 border-black-100 rounded-lg p-10 hover:text-white hover:bg-blue-800 hover:-translate-y-4 duration-600 ease">
                        <h3 className="text-center font-bold pb-4 text-xl">Tenue de livres comptables</h3>
                        <p className="text-justify">Cela inclut la saisie des opérations financières, la conciliation
                            bancaire, la préparation des états financiers et des rapports périodiques. </p>
                    </div>
                    {/* Item 2 */}
                    <div className="hover:cursor-pointer shadow bg-gray-50 border-0 border-black-100 rounded-lg p-10 hover:text-white hover:bg-blue-800 hover:-translate-y-4 duration-600 ease">
                        <h3 className="text-center font-bold pb-4 text-xl">Déclarations fiscales</h3>
                        <p className="text-justify">Préparation et soumission des déclarations de revenus des
                            particuliers, des sociétés, des travailleurs autonomes, etc., ainsi que la planification
                            fiscale pour maximiser les économies d’impôt. </p>
                    </div>
                    {/* Item 3 */}
                    <div className="hover:cursor-pointer shadow bg-gray-50 border-0 border-black-100  rounded-lg p-10 hover:text-white hover:bg-blue-800 hover:-translate-y-4 duration-600 ease">
                        <h3 className="text-center font-bold pb-4 text-xl">Paie et avantages sociaux</h3>
                        <p className="text-justify">Calcul des salaires, retenues à la source, cotisations sociales,
                            émission des relevés d’emploi et gestion des avantages sociaux des employés. </p>
                    </div>
                    {/* Item 4 */}
                    <div className="hover:cursor-pointer shadow bg-gray-50 border-0 border-black-100  rounded-lg p-10 hover:text-white hover:bg-blue-800 hover:-translate-y-4 duration-600 ease">
                        <h3 className="text-center font-bold pb-4 text-xl">Conseils et planification financière</h3>
                        <p className="text-justify">Aide à la prise de décisions financières stratégiques, planification de la retraite, évaluation de la performance financière, analyse de rentabilité, etc.</p>
                    </div>
                    {/* Item 5 */}
                    <div className="hover:cursor-pointer shadow bg-gray-50 border-0 border-black-100 rounded-lg p-10 hover:text-white hover:bg-blue-800 hover:-translate-y-4 duration-600 ease">
                        <h3 className="text-center font-bold pb-4 text-xl">Services de conformité</h3>
                        <p className="text-justify">Préparation et soumission des déclarations de revenus des
                            particuliers, des sociétés, des travailleurs autonomes, etc., ainsi que la planification
                            fiscale pour maximiser les économies d’impôt. </p>
                    </div>
                    {/* Item 6 */}
                    <div className="hover:cursor-pointer shadow bg-gray-50 border-0 border-black-100 rounded-lg p-10 hover:text-white! hover:bg-blue-800 hover:-translate-y-4 duration-600 ease">
                        <h3 className="text-center active:text-blue-800 font-bold pb-4 text-xl">Consultation en gestion</h3>
                        <p className="text-justify">Calcul des salaires, retenues à la source, cotisations sociales,
                            émission des relevés d’emploi et gestion des avantages sociaux des employés. </p>
                    </div>
                </div>
            </section>
            <BannerContact/>
        </LayoutComponent>
    )
}
