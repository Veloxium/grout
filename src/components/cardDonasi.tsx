import React, { useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { Poppins } from "next/font/google";

type card = {
  nama: string;
  jumlahPohon: string;
  img: StaticImageData;
  sisaHari: string;
  slider?: boolean;
};

const poppins = Poppins({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

export default function CardDonasi(props: card) {
useEffect(() => {
    const pohon = parseInt(props.jumlahPohon);
    const persentasi = ((pohon / 1000) * 100).toFixed(0).toString();
    const progressBar = document.getElementsByClassName(`progressBar${props.nama}`)[0] as HTMLElement;
    if (progressBar) {
        progressBar.style.width = `${persentasi}%`;
    }
}, [props.jumlahPohon]);

  return (
    <div
      className={`flex flex-col justify-center bg-white w-[300px] rounded-lg  overflow-hidden border-2 border-primary-400 shadow-md ${poppins.className}
      }`}
    >
      <div className="overflow-hidden h-[200px] flex items-center relative">
        <Image src={props.img} alt="img" width={600} height={600} />
        <div className="absolute top-3 left-3 rounded-full px-3 py-1 bg-slate-200">
          <p className="text-xs text-primary-800">{props.sisaHari} Hari Lagi</p>
        </div>
      </div>
      <div className="p-4 gap-2 flex flex-col">
        <p className="text-lg font-semibold text-justify">
          Donasi Untuk Masa Depan Mwhehehe
        </p>
        <p className="text-md text-slate-700">
          Oleh : <span>{props.nama}</span>
        </p>
        <div className="w-full bg-slate-200 rounded-md">
          <div
            className={`bg-[#458E22] rounded-md h-2 progressBar${props.nama}`}
          ></div>
        </div>
        <p className="font-semibold text-sm">{props.jumlahPohon} Pohon Terkumpul</p>
      </div>
    </div>
  );
}
