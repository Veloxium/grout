import React from "react";
import Image from "next/image";
import Profile from "@/assets/images/profile.jpg";

function CardHarapan() {
  return (
    <div className="card flex flex-col w-[250px] p-4 rounded-lg border shadow-lg">
      <div className="flex justify-center items-center gap-4">
        <Image
          src={Profile}
          alt=".."
          className="aspect-square rounded-full object-cover w-[56px] h-[56px] border-primary-400 border-4"
        />
        <div className="flex flex-col">
          <p className="font-semibold">Mark</p>
          <p className="text-xs font-bold">
            EXO_TREES: "Save Our World with EXO, WE ARE ONE!"
          </p>
        </div>
      </div>
      <p className="mt-6 text-justify">
        Semoga setiap pohon yang kita tanam menjadi akar kebaikan, dan
        memberikan hawa segar bagi bumi kita 😍
      </p>
    </div>
  );
}

export default CardHarapan;
