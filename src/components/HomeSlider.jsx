import Slider from "react-slick";
import { carouselOne, carouselTwo } from "../assets";


export const HomeSlider = () => {
        var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };
    return (
        <Slider {...settings}>
            <div>
                <img src={carouselOne} className="w-full" alt="" />
            </div>
            <div>
                <img src={carouselTwo} className="w-full" alt="" />
            </div>
        </Slider>
    );
}
