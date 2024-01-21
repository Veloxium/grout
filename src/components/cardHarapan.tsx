import React from "react";
import Image from "next/image";
import Profile from "@/assets/images/profile.jpg";

function CardHarapan() {
  return (
    <div className="card flex flex-col w-full p-4 rounded-lg border shadow-lg">
      <div className="flex justify-start lg:justify-center items-center gap-4">
        <Image
          src={Profile}
          alt=".."
          className="aspect-square rounded-full object-cover w-[56px] h-[56px] border-primary-400 border-2"
        />
        <div className="flex flex-col">
          <p className="font-semibold text-2xl lg:text-base">Mark</p>
          <p className="font-bold text-xl lg:text-xs">
            EXO_TREES: "Save Our World with EXO, WE ARE ONE!"
          </p>
        </div>
      </div>
      <p className="mt-6 my-4 text-justify text-xl lg:text-base">
        Semoga setiap pohon yang kita tanam menjadi akar kebaikan, memberikan
        hawa segar bagi bumi kita😍
      </p>
    </div>
  );
}

export default CardHarapan;
