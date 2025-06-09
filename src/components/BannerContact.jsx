import React from 'react'

export default function BannerContact() {
    return (
        <section className="mt-20 bg-cover bg-no-repeat home-contactus-banner h-full">
            <div className="flex justify-center items-center h-full w-full flex-col p-4">
                <h4 className="text-4xl text-white text-center">Merci de votre intérêt pour Les Experts de Sage Conseil
                    Fiscal</h4>
                <p className="text-white pt-4 text-center">N’hésitez pas à nous contacter pour en savoir plus sur nos
                    services et sur la manière dont nous pouvons vous aider à réussir sur le plan financier. <br/>Nous
                    serions ravis de travailler avec vous pour bâtir un avenir financier solide et prospère.</p>
                <a href="/contact"
                   className="bg-black text-white p-4 mt-8 rounded-2xl hover:bg-blue-950">Contactez-nous</a>
            </div>
        </section>
    )
}
