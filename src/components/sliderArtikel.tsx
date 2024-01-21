import React, { useEffect, useState } from "react";
import Image from "next/image";
import Banner1 from "@/assets/images/banner1.png";
import Banner2 from "@/assets/images/banner2.png";
import Banner3 from "@/assets/images/banner3.png";
import Banner4 from "@/assets/images/banner4.png";

function SliderArtikel() {
  const contents = [
    {
      url: "https://s3-alpha-sig.figma.com/img/16de/b736/10553a56423ae5e767efb34115f74501?Expires=1704672000&Signature=VIVE0j3nWqZ1X~YUGcxvw27daAk-nBLPwooY2CCMUC00SdhaEloYGoJZpAbdtJNpVJH1jf7YgWn7jK7Iaz-5Ga3Mgeol70Y0zzJSHdFjvwbAc32jv5a7ibteYhaaOohVf0T1DTMb-E06Sqo2Qj9xNUCv9MOljk9dSDhJmYp0AmetAAXa5sZ0Fuf-~UMP3~kpPYynaAVYq-ck6kYXmlcrMHJwibcSeJYp-dwB9~BWYaZ6jhRyW~o-GX8XzVyxqudEVv6j1uo~lgir1YwVkF3UsPpxMN82SuoX7vtuHe632P3xs1CcNv0nCMXcqwHWs3xq9uep50hUS9mE8iAYBKgJcQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      title: "Kompas.com",
      desc: "Sinopsis Petualangan Sherina 2, Kisah Jurnalis Pemberani Selidiki Krisis Lingkungan Kalimantan",
    },
    {
      url: "https://s3-alpha-sig.figma.com/img/0468/5586/0519770f90445c63e111180dc7449467?Expires=1704672000&Signature=e~w5PY-JcIYOA5bySpwdNO8Pdq0yk0BzObFSjKsEksnEuuQvyV15sZLyVYxSSmEjybtut1Q7jS562lBcTXNqYVVhISc~QD-ZVxDKXYWDyCsI3CgFzhx904ejl7fnTewVkioVRBpVZS~pNQUpMqzHNygCCh3aO84cmqvOoZzDxNfpiSa9~on-VW75N0RRWs4fSsOCaNzH1983hC1043J~az3Pa5UIhTxt2ugtbmjE7i6gv4C6OPJz9igiWZ8~-XmycnqMbUsSArDs2bnrkatIZYXDECllElXouSCyeOBYh-j3RQzmHVFVBesMtzmMIu6knNdAyxcxQKf6h79VnZnEdg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      title: "Kipas.com | 23 JAM",
      desc: "Efek Pandawara Group: bagaimana konten positif bisa mengubah lingkungan?",
    },
    
    {
      url: "https://s3-alpha-sig.figma.com/img/16de/b736/10553a56423ae5e767efb34115f74501?Expires=1704672000&Signature=VIVE0j3nWqZ1X~YUGcxvw27daAk-nBLPwooY2CCMUC00SdhaEloYGoJZpAbdtJNpVJH1jf7YgWn7jK7Iaz-5Ga3Mgeol70Y0zzJSHdFjvwbAc32jv5a7ibteYhaaOohVf0T1DTMb-E06Sqo2Qj9xNUCv9MOljk9dSDhJmYp0AmetAAXa5sZ0Fuf-~UMP3~kpPYynaAVYq-ck6kYXmlcrMHJwibcSeJYp-dwB9~BWYaZ6jhRyW~o-GX8XzVyxqudEVv6j1uo~lgir1YwVkF3UsPpxMN82SuoX7vtuHe632P3xs1CcNv0nCMXcqwHWs3xq9uep50hUS9mE8iAYBKgJcQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      title: "Kompas.com",
      desc: "Sinopsis Petualangan Sherina 2, Kisah Jurnalis Pemberani Selidiki Krisis Lingkungan Kalimantan",
    },
    {
      url: "https://s3-alpha-sig.figma.com/img/0468/5586/0519770f90445c63e111180dc7449467?Expires=1704672000&Signature=e~w5PY-JcIYOA5bySpwdNO8Pdq0yk0BzObFSjKsEksnEuuQvyV15sZLyVYxSSmEjybtut1Q7jS562lBcTXNqYVVhISc~QD-ZVxDKXYWDyCsI3CgFzhx904ejl7fnTewVkioVRBpVZS~pNQUpMqzHNygCCh3aO84cmqvOoZzDxNfpiSa9~on-VW75N0RRWs4fSsOCaNzH1983hC1043J~az3Pa5UIhTxt2ugtbmjE7i6gv4C6OPJz9igiWZ8~-XmycnqMbUsSArDs2bnrkatIZYXDECllElXouSCyeOBYh-j3RQzmHVFVBesMtzmMIu6knNdAyxcxQKf6h79VnZnEdg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      title: "Kipas.com | 23 JAM",
      desc: "Efek Pandawara Group: bagaimana konten positif bisa mengubah lingkungan?",
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
          width={700}
          height={700}
          decoding="sync"
          className="duration-500 w-full z-10 aspect-[2/1] brightness-75 object-cover"
          loading="eager"
        />
        <div className="bg-gradient-to-t from-slate-900 via-transparent to-transparent h-full w-full z-10 absolute bottom-0"></div>
        <button
          onClick={prevSlide}
          className="text-4xl p-6 absolute text-white z-20 left-0 hover:bg-slate-200 hover:bg-opacity-20 h-full"
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
          className="text-4xl p-6 absolute text-white z-20 right-0 hover:bg-slate-200 hover:bg-opacity-20 h-full"
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
        <div className="absolute z-10 w-full px-10 bottom-8 ">
          <p className="text-xl text-white font-bold  drop-shadow-lg">
            {contents[currentIndex].title}
          </p>
          <p className="text-4xl text-white font-bold  drop-shadow-lg">
            {contents[currentIndex].desc}
          </p>
        </div>
      </div>
    </div>
  );
}

export default SliderArtikel;
