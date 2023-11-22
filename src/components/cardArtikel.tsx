import React from "react";
import Image from "next/image";
import Jo from "@/assets/images/jo.webp";
import Link from "next/link";

function CardArtikel() {
  return (
    <Link href={"/artikel/detail"} className="w-full flex gap-6 border-t-4 hover:bg-slate-50" >
      <div className="w-1/2 flex flex-col gap-2 py-4 px-2 justify-center">
        <p className="font-bold text-2xl line-clamp-3">
          Jo Effect pada MPL Season 12. Bagaimanakah Pengaruhnya dalam menonton
          MPL dengan Livestreaming?
        </p>
        <p className="line-clamp-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque a,
          magnam maiores, ducimus necessitatibus, reiciendis harum nesciunt
          laborum eaque pariatur aliquam facere ab maxime nisi nihil illo eius?
          Cupiditate, modi vitae? Ipsum facilis quo, debitis cumque inventore
          praesentium? Cumque, qui!.
        </p>
        <p className="font-bold">THE CONVERSATION | 23 JAM</p>
      </div>
      <div className="w-1/2 py-4 flex items-center">
        <Image src={Jo} alt="jo" className="w-full object-cover h-[250px]" />
      </div>
    </Link>
  );
}

export default CardArtikel;
