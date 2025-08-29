import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Problem from "./Problem";
import Help from "./Help";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Swiper.css";  // <-- add this
import Footer from "./Footer";

const Home = () => {
  const slides = [
    {
      img: "https://www.onegreenplanet.org/wp-content/uploads/2023/11/shutterstock-1734261593-e1701109023771.jpg",
      text: "Hunger kills more Animals each year ..",
    },
    {
      img: "https://give.do/blog/wp-content/uploads/2023/11/People-For-Animals-an-animal-NGO-in-India-for-abused-farm-animals.png",
      text: "Every 10 seconds, a Animals dies from hunger",
    },
    {
      img: "https://images.squarespace-cdn.com/content/v1/64129f477e53173c1e7eccc2/9b7435c4-55fb-411f-828f-b09ccd76c0b2/Community+Dog+Feeding.jpg",
      text: "Together, we can make a difference",
    },
  ];

  return (
    <section id="home" className="home">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="slide">
              <img src={slide.img} alt="slide" />
              <div className="overlay">
                <p>{slide.text}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Problem/>
      <Help/>
      <Footer/>
    </section>
  );
};

export default Home;
