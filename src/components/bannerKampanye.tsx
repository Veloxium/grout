import React from "react";
import Image from "next/image";
import Buat from "@/assets/images/buat.png";
import Button from "./button";


function BannerKampanye() {
  return (
      <div className="relative flex flex-col justify-center px-10 h-full rounded-xl overflow-hidden shadow-lg">
        <div className="absolute flex items-center top-0 left-0 w-full h-full -z-10">
          <Image
            src={Buat}
            alt="buat kampanye"
            className="w-full object-cover"
          />
        </div>
        <div>
          <p className="text-4xl font-bold max-w-[400px] text-secondary-600 mb-4 text-start">
            Buat Kampanye Pohon Kamu Sekarang!
          </p>
          <Button text="Buat Kampanye" type="primary" />
        </div>
      </div>
  );
}

export default BannerKampanye;
