import Banner from "../components/Banner.jsx";
import {LayoutComponent} from "../components/LayoutComponent.jsx";

export const Contact = () => {
    return (
        <LayoutComponent>
            <Banner backgroundClass="contact-banner">
                <h2 className="font-bold text-white text-3xl pb-4">Contact</h2>
                <a href="/apropos-de-nous" className="text-white">Accueil / A propos</a>
            </Banner>
            <section className="max-md:mx-4 md:max-w-screen-xl mx-auto mt-20 ">
                <div className="grid md:grid-cols-2 gap-4 md-max:m-4">
                    <div className="w-full">
                        <h1 className="font-bold text-blue-800 text-2xl mb-8">NOS BUREAUX</h1>
                        <div className="mt-2">
                            <h3 className="font-bold text-blue-800">Adresse Geographique</h3>
                            <p>
                                5300, Boulevard des Galeries
                                Bureau 210
                                Québec (Qc) G2K 2A2
                            </p>
                        </div>
                        <img src="/src/assets/images/service-client.jpg" className="w-full" alt=""/>
                        <div className="flex flex-row gap-4 mt-4">
                            <div className="w-full">
                                <h3 className="font-bold text-blue-800">Téléphone</h3>
                                <p>(418) 521-8425</p>
                            </div>
                            <div>
                                <h3 className="font-bold text-blue-800">Adresse email</h3>
                                <p>example@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full">
                        <h1 className="font-bold text-blue-800 text-2xl mb-10">FORMULAIRE DE CONTACT</h1>
                        <p className="text-justify">N’hésitez pas à nous contacter pour en savoir plus sur nos services
                            et sur la manière dont
                            nous pouvons vous aider à réussir sur le plan financier. Nous serions ravis de travailler
                            avec vous pour bâtir un avenir financier solide et prospère. </p>
                        <form action="#" className="mt-4">
                            <div className="flex flex-col gap-4">
                                <div className="flex flex-col">
                                    <label htmlFor="nom_complet" className="font-bold">Nom & Prénoms</label>
                                    <input type="text" name="nom_complet"
                                           className="border border-gray-300 rounded w-full p-3"/>
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="email" className="font-bold">Email</label>
                                    <input type="email" id="email" name="email"
                                           className="border border-gray-300 rounded w-full p-3"/>
                                </div>
                                <div className="flex flex-row gap-2">
                                    <div className="flex flex-col w-full">
                                        <label htmlFor="telephone" className="font-bold">Téléphone</label>
                                        <input type="tel" id="telephone" name="telephone"
                                               className="border border-gray-300 rounded w-full p-3"/>
                                    </div>
                                    <div className="flex flex-col w-full">
                                        <label htmlFor="telephone" className="font-bold">Téléphone</label>
                                        <input type="tel" id="telephone" name="telephone"
                                               className="border border-gray-300 rounded w-full p-3"/>
                                    </div>
                                </div>

                                <div className="flex flex-col">
                                    <label htmlFor="message" className="font-bold">Message</label>
                                    <textarea name="message" className="border border-gray-300 rounded w-full"
                                              id="message" cols="30" rows="10"></textarea>
                                </div>
                                <button className="bg-blue-800 text-white font-bold rounded p-3 hover:bg-black">ENVOYER</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <section className="mt-4">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d719147.9144551811!2d-77.04868160848052!3d45.24432384256912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce05b25f5113af%3A0x8a6a51e131dd15ed!2sOttawa%2C%20ON%2C%20Canada!5e0!3m2!1sfr!2sci!4v1749384310810!5m2!1sfr!2sci"
                    className="w-full h-[400px]" allowFullScreen="" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
            </section>
        </LayoutComponent>
)
}
