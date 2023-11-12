import React, { useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { Poppins } from "next/font/google";
import Link from "next/link";

type CardProps = {
  id: string;
  nama: string;
  jumlahPohon: string;
  img: string;
  sisaHari: string;
  title: string;
  slider?: boolean;
};

const poppins = Poppins({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

export default function CardDonasi(props: CardProps) {
  // Generate a unique ID for the card
  // const uniqueId = `${props.nama}-${props.keyCard}`;
  const modifiedNama = props.nama.replace(/\s+/g, "-");
  const uniqueClassName = modifiedNama;

  useEffect(() => {
    const pohon = parseInt(props.jumlahPohon);
    const persentasi = ((pohon / 1000) * 100).toFixed(0).toString();
    const progressBar = document.querySelector(
      `.${uniqueClassName}`
    ) as HTMLElement | null;
    if (progressBar) {
      progressBar.style.width = `${persentasi}%`;
    }
  }, []);

  return (
    <Link
      // href={`/donasi/detail/${props.id}`}
      href={`/donasi/detail`}
      className={`flex flex-col justify-center bg-white w-[300px] rounded-lg overflow-hidden border-2 shadow-md hover:border-primary-400 ease-in-out duration-300 ${poppins.className}`}
    >
      <div className="overflow-hidden h-[200px] flex items-center relative">
        <Image src={props.img} alt="img" width={1000} height={1000} />
        <div className="absolute top-3 left-3 rounded-full px-3 py-1 bg-slate-200">
          <p className="text-xs text-primary-800">{props.sisaHari} Hari Lagi</p>
        </div>
      </div>
      <div className="p-4 gap-2 flex flex-col">
        <p className="text-lg font-semibold">
          {props.title}
        </p>
        <p className="text-md text-slate-700">
          Oleh : <span>{props.nama}</span>
        </p>
        <div className="w-full bg-slate-200 rounded-md">
          <div
            className={`bg-[#458E22] rounded-md h-2 ${uniqueClassName}`}
          ></div>
        </div>
        <p className="font-semibold text-sm">
          {props.jumlahPohon} Pohon Terkumpul
        </p>
      </div>
    </Link>
  );
}
