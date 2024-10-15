import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "./Slider.css";

const Slider = ({ handleImageClick, tendings, animatedMovieId }) => {
  return (
    <div className='sldddd'>
      <h1>Trending Now</h1>
      <Swiper
        modules={[Navigation]}
        spaceBetween={25}
        slidesPerView={8}
        pagination={{
          clickable: true
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }}
      >
        {tendings.map((item) => (
          <SwiperSlide key={item.Id}>
            <div
              className={`tending-film-item ${
                animatedMovieId === item.Id ? "animate" : ""
              }`}
              onClick={() => handleImageClick(item)}
              style={{ cursor: "pointer" }}
            >
              <img
                src={`src/assets/${item.CoverImage}`}
                alt={`Trending ${item.Title}`}
              />
            </div>
          </SwiperSlide>
        ))}
        <div className='swiper-button-prev'></div>
        <div className='swiper-button-next'></div>
      </Swiper>
    </div>
  );
};

export default Slider;
