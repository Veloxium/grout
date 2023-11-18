import SliderArtikel from "@/components/sliderArtikel";
import SliderBanner from "@/components/sliderBanner";
import Layout from "@/layout/layout";
import React, { useState } from "react";
import Image from "next/image";
import StandBanner from "@/assets/images/standbanner.png";
import CardArtikel from "@/components/cardArtikel";

function Artikel() {
  const [allArtikel, setAllArtikel] = useState("semua");

  const handleArtikel = (e: any) => {
    e.preventDefault();
    setAllArtikel(e.target.innerText.toLowerCase().replace(" ", "-"));
  };

  return (
    <Layout>
      <section>
        <div className="mt-28 px-24 flex justify-center">
          <div className="flex flex-col items-center">
            <p className="text-5xl font-bold italic text-secondary-900">
              ARTIKEL GROUT
            </p>
            <p className="font-semibold text-xl text-primary-900">
              Menyuarakan Kepedulian Kita Terhadap Lingkungan
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="flex justify-between items-center w-full py-4 px-24 border-y-2 my-8">
          <div id="donasiContainer">
            <div className="flex gap-4">
              <div onClick={handleArtikel} className="cursor-pointer">
                <p
                  className={`px-4 py-1 font-semibold border-2 border-primary-600
                 rounded-full hover:bg-primary-600 hover:text-white ease-in-out transition-all ${
                   allArtikel === "semua"
                     ? "bg-primary-600 text-white"
                     : "bg-white text-primary-600"
                 }`}
                >
                  Semua
                </p>
              </div>
              <div onClick={handleArtikel} className="cursor-pointer">
                <p
                  className={`px-4 py-1 font-semibold border-2 border-primary-600
                 rounded-full hover:bg-primary-600 hover:text-white ease-in-out transition-all ${
                   allArtikel === "berita"
                     ? "bg-primary-600 text-white"
                     : "bg-white text-primary-600"
                 }`}
                >
                  Berita
                </p>
              </div>
              <div onClick={handleArtikel} className="cursor-pointer">
                <p
                  className={`px-4 py-1 font-semibold border-2 border-primary-600
                 rounded-full hover:bg-primary-600 hover:text-white ease-in-out transition-all ${
                   allArtikel === "tips"
                     ? "bg-primary-600 text-white"
                     : "bg-white text-primary-600"
                 }`}
                >
                  Tips
                </p>
              </div>
            </div>
          </div>
          <div>
            <form action="submit">
              <input
                type="text"
                placeholder="Cari Artikel"
                className="border-2 px-4 py-2 rounded-l-lg bg-slate-200"
              />
              <button className="px-4 bg-primary-600 py-2 border-2 border-primary-600 rounded-r-lg text-white">
                Cari
              </button>
            </form>
          </div>
        </div>
        <div className="flex w-full px-24 pb-10 gap-6">
          <div className="w-3/4 flex flex-col">
            <SliderArtikel />
            <div className="mt-10">
              <CardArtikel />
              <CardArtikel />
              <CardArtikel />
              <CardArtikel />
              <CardArtikel />
            </div>
          </div>
          <div className="w-1/4">
            <div className="relative h-full flex flex-col overflow-hidden">
              <Image
                src={StandBanner}
                alt="banner"
                className="absolute -z-10 w-full h-full object-cover"
              />
              <div className="flex flex-col p-6 justify-center hover:bg-white hover:bg-opacity-40">
                <p className="font-semibold text-xl">1,290 Pohon</p>
                <p>Jumlah Donasi pohon saat ini</p>
              </div>
              <div className="flex flex-col p-6 justify-center hover:bg-white hover:bg-opacity-40">
                <p className="font-semibold text-xl">1,290 Pohon</p>
                <p>Jumlah Donasi pohon saat ini</p>
              </div>
              <div className="flex flex-col p-6 justify-center hover:bg-white hover:bg-opacity-40">
                <p className="font-semibold text-xl">1,290 Pohon</p>
                <p>Jumlah Donasi pohon saat ini</p>
              </div>
              <div className="flex flex-col p-6 justify-center hover:bg-white hover:bg-opacity-40">
                <p className="font-semibold text-xl">1,290 Pohon</p>
                <p>Jumlah Donasi pohon saat ini</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Artikel;
