import React, { useEffect, useState } from "react";
import Image from "next/image";
import Banner1 from "@/assets/images/banner1.png";
import Banner2 from "@/assets/images/banner2.png";
import Banner3 from "@/assets/images/banner3.png";
import Banner4 from "@/assets/images/banner4.png";

function SliderArtikel() {
  const contents = [
    {
      url: Banner1,
      title: "Ini Hutan Saya",
      desc: "Pokoknya ini punya saya jangan diambil ya, kalo diambil digigit nyamuk",
    },
    {
      url: Banner2,
      title: "Ini Hutan Kamu",
      desc: "Pokoknya ini punya kamu harus diambil ya, kalo gak diambil digigit nyamuk",
    },
    {
      url: Banner3,
      title: "Ini Hutan Saya",
      desc: "Pokoknya ini punya saya jangan diambil ya, kalo diambil digigit nyamuk",
    },
    {
      url: Banner4,
      title: "Ini Hutan Kamu",
      desc: "Pokoknya ini punya kamu harus diambil ya, kalo gak diambil digigit nyamuk",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const newIndex = (currentIndex + 1) % contents.length;
      setCurrentIndex(newIndex);
    }, 6000);

    return () => clearInterval(interval); // Clean up the interval when the component is unmounted
  }, [currentIndex]);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? contents.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === contents.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="w-full h-full flex-col">
      <div className="object-cover bg-cover flex justify-center items-center relative">
        <Image
          src={contents[currentIndex].url}
          alt=""
          width={0}
          height={0}
          decoding="sync"
          className="duration-500 w-full z-10 aspect-[2/1] brightness-75 object-cover"
          loading="eager"
        />
        <button
          onClick={prevSlide}
          className="text-4xl p-6 absolute text-white z-20 left-0 hover:bg-slate-200 hover:bg-opacity-30 h-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="white"
            className="w-10 h-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="text-4xl p-6 absolute text-white z-20 right-0 hover:bg-slate-200 hover:bg-opacity-30 h-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="white"
            className="w-10 h-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
        <div className="absolute z-10 w-full px-24 bottom-8">
          <p className="text-xl text-white font-bold">
            {contents[currentIndex].title}
          </p>
          <p className="text-2xl text-white font-semibold">
            {contents[currentIndex].desc}
          </p>
        </div>
      </div>
    </div>
  );
}

export default SliderArtikel;
