import { carouselOne, carouselTwo } from "../assets";
import { Carousel } from "react-responsive-carousel";

import 'react-responsive-carousel/lib/styles/carousel.min.css';
export const HomeSlider = () => {
    return (
        <Carousel
            showArrows={true}
            autoPlay={true}
            infiniteLoop={3}
        >
            <div>
                <img src={carouselOne} />
            </div>
            <div>
                <img src={carouselTwo} />
            </div>
        </Carousel>
    );
}
