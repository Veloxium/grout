import React from "react";
import Image from "next/image";
import Jo from "@/assets/images/jo.webp";

function CardArtikelDetail() {
  return (
    <div className="w-full border-2 rounded-lg overflow-hidden shadow-lg hover:border-primary-300 transition-all ease-in-out duration-300">
      <div className="w-full h-[200px]">
        <Image src={Jo} alt="jo" className="object-cover w-full h-full" />
      </div>
      <div className="px-4 py-2">
        <p className="font-bold text-lg line-clamp-3 my-2">
          Jo Effect pada MPL Season 12. Bagaimanakah Pengaruhnya dalam menonton
          MPL dengan Livestreaming?
        </p>
        <p className="text-sm">THE CONVERSATION | 23 JAM</p>
      </div>
    </div>
  );
}

export default CardArtikelDetail;
