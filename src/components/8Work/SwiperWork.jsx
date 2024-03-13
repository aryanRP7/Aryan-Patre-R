import swiperData from "./WorkData.jsx";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./SwiperWork.module.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function SwiperWork() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {swiperData.map((item, index) => {
          return (
            <SwiperSlide className="work-swiper" key={index}>
              <img
                className="swiper-Work-image"
                src={item.image}
                alt={item.title}
              ></img>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
