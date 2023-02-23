
import {Link} from 'react-scroll/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import SwiperCore, {
  EffectCoverflow,
  Autoplay
} from "swiper";

SwiperCore.use(EffectCoverflow);

export default function Slider() {

  return (
      <>
      <div className='flex flex-col w-full h-auto items-center font-Gotham'>
        <h1 className='text-white text-[20px] text-center mx-10'>Skelee is a community of late gamers</h1>

        {/* slider */}
        <div className='w-auto flex flex-row item-center justify-evenly mt-6'>
        <Swiper
        effect={"coverflow"}
        centeredSlides={true}
        slidesPerView={5}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        }}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay,EffectCoverflow]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/1.jpg" />
        </SwiperSlide>
      </Swiper>
      </div>
      </div>
      </>
    
  );
}













