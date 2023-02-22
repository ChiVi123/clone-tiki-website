import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/scrollbar";
import "swiper/css/hash-navigation";
import { Navigation, Pagination, Scrollbar, A11y, Thumbs } from "swiper";

export const events = [
  {
    id: 1,
    url: "https://salt.tikicdn.com/cache/w1080/ts/banner/06/a3/54/ae0c1b37fe1ee916b09c872668dd0293.png.webp",
  },
  {
    id: 2,
    url: "https://salt.tikicdn.com/cache/w1080/ts/banner/4e/ec/28/1cde5f169c2db8b3a3a0008dabfa5361.png.webp",
  },
  {
    id: 3,
    url: "https://salt.tikicdn.com/cache/w1080/ts/banner/20/86/58/f1f0169d7f98adcaaf4f8b89096cfc2f.png.webp",
  },
  {
    id: 4,
    url: "https://salt.tikicdn.com/cache/w1080/ts/banner/42/41/79/c3050548c16753a875876313f626fe65.png.webp",
  },
  {
    id: 5,
    url: "https://salt.tikicdn.com/cache/w1080/ts/banner/06/03/99/56b10a93ae0e8b81afd74dc7173cadc8.png.webp",
  },
  {
    id: 6,
    url: "https://salt.tikicdn.com/cache/w1080/ts/banner/d0/9b/ff/a60a02df0ad4d225985846daba7828ed.png.webp",
  },
  {
    id: 7,
    url: "https://salt.tikicdn.com/cache/w1080/ts/banner/54/dc/2d/2750dd8ccd213e0ef501b5afa6bd9733.png.webp",
  },
  {
    id: 8,
    url: "https://salt.tikicdn.com/cache/w1080/ts/banner/07/be/16/0fb27e57062f6d32f4644f26a7f2edd6.jpg.webp",
  },
];

const Banner = () => {
  return (
    <div className="flex w-full bg-bgHome">
      <div className="flex w-full mx-0 my-4 overflow-hidden gap-x-3 xl:mx-44">
        <section className="max-w-[824px] h-64 rounded-lg select-none ">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Thumbs]}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            className="event-slider"
          >
            {events.length > 0 &&
              events.map((item) => (
                <SwiperSlide key={item.id}>
                  <img src={item.url} alt={item.id} />
                </SwiperSlide>
              ))}
          </Swiper>
        </section>
        <img
          src="https://salt.tikicdn.com/cache/w400/ts/banner/7c/16/ef/2910f0dac7a5c913424029d1413dbbb4.png.webp"
          alt="sach"
          className="hidden object-contain rounded-lg xl:inline-block"
        />
      </div>
    </div>
  );
};

export default Banner;
