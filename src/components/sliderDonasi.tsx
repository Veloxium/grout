import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination } from "swiper/modules";
import CardDonasi from "@/components/cardDonasi";
import Donasi from "@/assets/images/donasi.jpeg";
import { Poppins } from 'next/font/google';

type sliderDonasi = {
    status?: string
}



function SliderDonasi(props: sliderDonasi) {
    const [status, setStatus] = React.useState(props.status);
  return (
    <div className="w-full relative flex justify-center px-24 mt-10">
      <div className="prev z-10 left-0 h-full absolute flex items-center pl-4 px-6 justify-center hover:bg-primary-200 hover:bg-opacity-30 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="black"
          className="w-10 h-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </div>

      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={40}
        slidesPerView={4}
        navigation={{
          nextEl: ".next",
          prevEl: ".prev",
        }}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
        }}
        className="w-full overflow-hidden"
      >
        <SwiperSlide>
          <CardDonasi
            nama="Nan"
            jumlahPohon="730"
            img={Donasi}
            sisaHari="2"
            slider
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardDonasi
            nama="Ayak"
            jumlahPohon="810"
            img={Donasi}
            sisaHari="2"
            slider
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardDonasi
            nama="Alwy"
            jumlahPohon="410"
            img={Donasi}
            sisaHari="2"
            slider
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardDonasi
            nama="Daden"
            jumlahPohon="640"
            img={Donasi}
            sisaHari="2"
            slider
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardDonasi
            nama="Aluh"
            jumlahPohon="240"
            img={Donasi}
            sisaHari="2"
            slider
          />
        </SwiperSlide>
      </Swiper>
      <div className="next z-10 right-0 h-full absolute px-6 flex items-center pr-4 justify-center hover:bg-primary-200 hover:bg-opacity-30">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="black"
          className="w-10 h-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </div>
    </div>
  );
}

export default SliderDonasi