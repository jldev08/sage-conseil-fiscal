import {Navbar} from "./Navbar.jsx";
import {Footer} from "./Footer.jsx";
import {TopHeader} from "./TopHeader.jsx";

export const LayoutComponent = ({children}) => {
    return (
        <>
            <TopHeader/>
            <Navbar/>
            <main>
                {children}
            </main>
            <Footer/>
        </>
    )
}
