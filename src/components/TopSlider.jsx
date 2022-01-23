import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function TopSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };

  return (
    <>
      <Slider {...settings}>
        <div className="wdt">
          <img
            className="img"
            alt="pic1"
            src={"assets/019b564f8c9549eca81ad89341f5cfb4_EOS-r3-1920.jpg"}
          />
        </div>
        <div className="wdt">
          <img className="img" alt="pic1" src={"assets/9RT-m.jpg"} />
        </div>
        <div className="wdt">
          <img className="img" alt="pic1" src={"assets/M.jpg"} />
        </div>
        <div className="wdt">
          <img
            className="img"
            alt="pic1"
            src={"assets/725ea62dbedd4fa29f2d619cce695db0_R5-Dual-Lens.jpg"}
          />
        </div>
        <div className="wdt">
          <img className="img" alt="pic1" src={"assets/Buds-Z2-m.jpg"} />
        </div>
      </Slider>
    </>
  );
}

export default TopSlider;
