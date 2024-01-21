import React from "react";
import Image from "next/image";
import Jo from "@/assets/images/jo.webp";
import Link from "next/link";

function CardArtikel() {
  return (
    <Link
      href={"/artikel/detail"}
      className="w-full flex gap-6 border-t-4 hover:bg-slate-50"
    >
      <div className="w-1/2 flex flex-col gap-2 py-4 px-2 justify-center">
        <p className="font-bold text-2xl line-clamp-3">
          Seaweed is nutritious, not slimy. Eating it could save the world.
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
        <Image
          src={
            "https://s3-alpha-sig.figma.com/img/649a/7c31/57e387d433221829a98d46adbd4bafd0?Expires=1704672000&Signature=nWPJ-FGQhaG662zdIIlgR5cayfk~ku1cz6amNIiNgTZ18sUvI-CErOh5Kry9yUUxD25TR1qRqk7Le3WuyovmjgM0xVN3rOL6PiMtGipCbooF3p6Z~4rZU5KE6HMX5O6Vp8zCgvZ6lyZsaSAiVjUdiydxX9FF4fVQys8Z~zbUAsnedYFrsBfUDcKOoZ9lSCUC5GuOXJL4uP4LmjrzLXNUQQF-Yvj9jAGnMQdBMKX6zaVg7hy3Dr-egNkKSxfxRrkYFgoZ0Q~eUaBvJ3lVt2IPB46ayveFpZm6dKCa~HpE4IZuR2fxEZX~tmGtkjZRiCxzSeuN9YTzKJkpXr-oOPOd~w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          }
          width={900}
          height={900}
          alt="jo"
          className="w-full object-cover h-[250px]"
        />
      </div>
    </Link>
  );
}

export default CardArtikel;
