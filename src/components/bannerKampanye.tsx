import React from "react";
import Image from "next/image";
import Buat from "@/assets/images/banner.png";
import Button from "./button";

function BannerKampanye({ customeClass }: { customeClass?: string }) {
  return (
    <div
      className={`relative flex flex-col justify-center px-10 h-full rounded-xl overflow-hidden shadow-lg ${customeClass}`}
    >
      <div className="absolute flex items-center top-0 left-0 w-full h-full -z-10">
        <Image src={Buat} alt="buat kampanye" className="w-full object-cover" />
      </div>
      <div className="w-full flex flex-col items-start">
        <p className="text-4xl font-bold max-w-[500px] text-primary-800 mb-4 text-start">
          Bergabunglah, Tanamkan Harapan untuk Alam Kita
        </p>
        <div className="flex gap-8">
          <Button text="Buat Kampanye" type="border" custom="bg-slate-50" textCustom="text-primary-600 font-bold" href="/buatkampanye"/>
          <Button text="Donasi Sekarang" type="primary" />
        </div>
      </div>
    </div>
  );
}

export default BannerKampanye;
