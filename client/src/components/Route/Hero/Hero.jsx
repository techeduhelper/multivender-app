import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import banner1 from "../../../assets/animations/GirlsWears.png";
import banner2 from "../../../assets/animations/Wears.png";

const Hero = () => {
  return (
    <div
      className={`relative min-h-full 800px:min-h-full w-full ${styles.noramlFlex}`}
    >
      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20"></div>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showStatus={false}
        showIndicators={false}
        interval={4000}
        labels={false}
        emulateTouch={true}
        showThumbs={false}
        showArrows={false}
        stopOnHover={true}
        className="h-full"
      >
        <Link>
          <img src={banner1} alt="" className="w-full h-full" />
        </Link>
        <Link>
          <img src={banner2} alt="" className="w-full h-full" />
        </Link>
      </Carousel>
    </div>
  );
};

export default Hero;
