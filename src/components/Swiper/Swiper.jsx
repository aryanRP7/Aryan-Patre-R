
import swiperData from './SwiperData';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Swiper.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Swiperjs() {
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
        {swiperData.map((item,index)=>{
    return(

    <SwiperSlide key={index} ><img className='swiper-certificate-image' src={item.image} alt={item.title}></img></SwiperSlide>
    )
})}
      </Swiper>
    </>
  );
}
