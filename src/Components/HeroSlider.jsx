import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const HeroSlider = () => {
  const slides = [
    {
      id: 1,
      title: "Find Your Study Partner",
      content: "Connect with peers globally.",
      image: "https://i.postimg.cc/nVRL2SBk/hero1.jpg",
    },
    {
      id: 2,
      title: "Collaborate Seamlessly",
      content: "Use our integrated tools.",
      image: "https://i.postimg.cc/N0ksHdQR/hero2.jpg",
    },
    {
      id: 3,
      title: "Achieve Your Goals",
      content: "Study smarter, not harder.",
      image: "https://i.postimg.cc/1X2sQTKD/hero3.jpg",
    },
  ];

  return (
    <div className="relative w-full overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        className="rounded-none shadow-xl mySwiper w-full h-[500px]"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className={`w-full h-full flex items-center justify-center relative text-white shadow-xl`}
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            >

              <div className="absolute inset-0 bg-black/50"></div>
              
              <div className="relative z-10 max-w-2xl p-8 mx-auto text-center">

                <h2 className="mb-4 text-[40px] font-bold leading-tight md:text-5xl">
                  {slide.title}
                </h2>
                <p className="mb-8 text-lg font-medium md:text-xl opacity-90">
                  {slide.content}
                </p>
                
                <button className="font-semibold text-white bg-transparent btn btn-lg hover:bg-yellow-400">
                  Get Started
                </button>
                </div>
              </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
