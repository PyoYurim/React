import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Banner.css';
import { Link } from "react-router-dom";

function Banner() {
    const settings = {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
      };
    return(
        <div>
        <Slider {...settings}>
        <Link to="/summer">
        <img src="/images/banner.png" alt="event1" className="event1"/></Link>
        <Link to="/summer">
        <img src="/images/banner2.png" alt="event2" className="event2"/></Link>
        </Slider>
        <img src="/images/banner3.png" alt="event3" className="event3"></img>
        </div>

    );
}

export default Banner;