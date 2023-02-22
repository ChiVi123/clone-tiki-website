import React from "react";
import { Navigation, Pagination, Scrollbar, A11y, Thumbs } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/scrollbar";
import "swiper/css/hash-navigation";
import { Swiper, SwiperSlide } from "swiper/react";

const brands = [
  {
    id: 1,
    url: "https://salt.tikicdn.com/cache/w750/ts/banner/1f/7a/55/306b9b2284017d32d87d6b361abb4fec.jpg.webp",
  },
  {
    id: 2,
    url: "https://salt.tikicdn.com/cache/w750/ts/banner/d8/de/e0/f646bd84796723da19f2848672d237f8.png.webp",
  },
  {
    id: 3,
    url: "https://salt.tikicdn.com/cache/w750/ts/banner/12/63/8a/54b9d180509673f8b10c6ccec3f6f010.jpg.webp",
  },
  {
    id: 4,
    url: "https://salt.tikicdn.com/cache/w750/ts/banner/b9/ff/d5/a53a00f6f2a59c78537dea93b18b8a22.png.webp",
  },
  {
    id: 5,
    url: "https://salt.tikicdn.com/cache/w1080/ts/banner/06/03/99/56b10a93ae0e8b81afd74dc7173cadc8.png.webp",
  },
  {
    id: 6,
    url: "https://salt.tikicdn.com/cache/w750/ts/banner/6a/0c/75/ed01d01138b0a0de1a05bd7b3b8c03dc.png.webp",
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

const HomeBrandOffical = () => {
  return (
    <div className="flex w-full bg-bgHome">
      <div className="flex flex-col w-full overflow-hidden bg-white rounded-lg select-none gap-x-3 mx-44">
        <div className="flex items-center w-full h-16 px-4 text-text1">
          <div className="flex text-xl">
            <img
              srcSet="https://salt.tikicdn.com/ts/upload/33/0f/67/de89fab36546a63a8f3a8b7d038bff81.png 2x"
              alt=""
              className="object-cover"
            />
            <span className="flex my-auto ml-2">Thương hiệu chính hãng</span>
          </div>
        </div>
        <div className="flex w-full">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Thumbs]}
            slidesPerView={2}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            className="event-slider"
            spaceBetween={20}
            loopFillGroupWithBlank={false}
          >
            {brands.length > 0 &&
              brands.map((item) => (
                <SwiperSlide key={item.id}>
                  <a href="/#">
                    <img
                      src={item.url}
                      alt={item.id}
                      className="object-cover h-[200px] w-full rounded-lg cursor-pointer"
                    />
                  </a>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default HomeBrandOffical;
