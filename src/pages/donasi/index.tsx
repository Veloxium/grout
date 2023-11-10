import Button from "@/components/button";
import Layout from "@/layout/layout";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Background2 from "@/assets/images/background2.png";
import Buat from "@/assets/images/buat.png";
import CardDonasi from "@/components/cardDonasi";
import DonasiImg from "@/assets/images/donasi.jpeg";
import donasiData from "@/json/donasi.json";

function Donasi() {
  const [kampanye, setKampanye] = useState("semua");

  const [currentCardPage, setCurrentCardPage] = useState<number>(1);

  const [cardNum, setCardNum] = useState<number>(0);

  const donasi = donasiData.donasiData;

  const handleKampanye = (e: any) => {
    e.preventDefault();
    setKampanye(e.target.innerText.toLowerCase().replace(" ", "-"));
  };

  const handlepagination = (e: any) => {
    setCurrentCardPage(Number(e));
    setCardNum((e - 1) * 12);
    // setPaginationNum(e - 1);
    document
      .getElementById("donasiContainer")
      ?.scrollIntoView({ behavior: "smooth" });
  };
  // console.log(currentCardPage);

  const nextCardPage = () => {
    if (currentCardPage === (donasi.length / 12 )) {
      return;
    }
    setCurrentCardPage(currentCardPage + 1);
    setCardNum(cardNum + 12);
    document
      .getElementById("donasiContainer")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const prevCardPage = () => {
    if (currentCardPage !== 1) {
      setCurrentCardPage(currentCardPage - 1);
      setCardNum(cardNum - 12);
      document
        .getElementById("donasiContainer")
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Layout>
      <section className="relative">
        <div className="absolute -z-10 h-[130vh]">
          <Image
            src={Background2}
            alt="..."
            className="w-screen h-full object-cover"
          />
        </div>
        <div className="px-24 flex flex-col justify-center pb-20 h-screen">
          <div className="flex flex-col justify-center w-full mt-28">
            <p className="text-5xl font-bold drop-shadow-lg">
              Tumbuhkan Kehidupan
            </p>
            <p className="text-5xl font-bold mt-4 drop-shadow-lg">
              Bersama GrOUT
            </p>
            <p className="text-xl mb-10 mt-8 drop-shadow-lg max-w-[320px]">
              Yuk, Donasikan Pohon untuk Masa Depan Hijau
            </p>
            <Button
              href="/donasi"
              text="Mulai Donasi"
              size="xlarge"
              type="primary"
              custom="w-[14rem]"
            />
          </div>
        </div>
      </section>
      <section>
        <div className="px-24 py-10 h-[400px]">
          <div className="relative flex flex-col justify-center px-10 h-full rounded-xl overflow-hidden shadow-lg">
            <div className="absolute flex items-center top-0 left-0 w-full h-full -z-10">
              <Image
                src={Buat}
                alt="buat kampanye"
                className="w-full object-cover"
              />
            </div>
            <div>
              <p className="text-4xl font-bold max-w-[400px] text-secondary-600 mb-4">
                Buat Kampanye Pohon Kamu Sekarang!
              </p>
              <Button text="Buat Kampanye" type="primary" />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="flex justify-between w-full pt-10 px-24">
          <div id="donasiContainer">
            <div className="flex gap-4">
              <div onClick={handleKampanye} className="cursor-pointer">
                <p
                  className={`px-4 py-1 font-semibold border-2 border-primary-600
                 rounded-full hover:bg-primary-600 hover:text-white ease-in-out transition-all ${
                   kampanye === "semua"
                     ? "bg-primary-600 text-white"
                     : "bg-white text-primary-600"
                 }`}
                >
                  Semua
                </p>
              </div>
              <div onClick={handleKampanye} className="cursor-pointer">
                <p
                  className={`px-4 py-1 font-semibold border-2 border-primary-600
                 rounded-full hover:bg-primary-600 hover:text-white ease-in-out transition-all ${
                   kampanye === "sedang-berlangsung"
                     ? "bg-primary-600 text-white"
                     : "bg-white text-primary-600"
                 }`}
                >
                  Sedang Berlangsung
                </p>
              </div>
              <div onClick={handleKampanye} className="cursor-pointer">
                <p
                  className={`px-4 py-1 font-semibold border-2 border-primary-600
                 rounded-full hover:bg-primary-600 hover:text-white ease-in-out transition-all ${
                   kampanye === "telah-selesai"
                     ? "bg-primary-600 text-white"
                     : "bg-white text-primary-600"
                 }`}
                >
                  Telah Selesai
                </p>
              </div>
            </div>
          </div>
          <div>
            <form action="submit">
              <input
                type="text"
                placeholder="Cari Kampanye"
                className="border-2 px-4 py-2 rounded-l-lg bg-slate-200"
              />
              <button className="px-4 bg-primary-600 py-2 border-2 border-primary-600 rounded-r-lg text-white">
                Cari
              </button>
            </form>
          </div>
        </div>
        <div className="flex flex-col gap-10 py-14 px-24">
          <div className="grid grid-cols-4 place-items-center gap-10">
            {donasi
              .slice(cardNum, cardNum + 12)
              .map((item, index) => (
                <CardDonasi
                  id={item.id.toString()}
                  key={index}
                  img={DonasiImg}
                  jumlahPohon={item.jumlahPohon}
                  nama={item.nama}
                  sisaHari={item.sisaHari}
                  
                />
              ))}
          </div>
          <div className="flex gap-6 justify-center my-10">
            <div
              onClick={prevCardPage}
              className="w-10 h-10 text-primary-600 border-2 grid place-items-center rounded-lg hover:bg-primary-600 hover:text-white ease-in-out transition-all cursor-pointer border-primary-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
                />
              </svg>
            </div>
            <div className="flex gap-6">
              {[...Array(donasi.length / 12 + 1)]
                .slice(
                  currentCardPage > 3 ? currentCardPage - 2 : 0,
                  currentCardPage > 3 ? currentCardPage + 3 : 5
                )
                .map((_, i) =>
                  currentCardPage > 3 ? (
                    <div
                      onClick={() => handlepagination(currentCardPage - 2 + i)}
                      key={i}
                      className={`w-10 h-10 text-primary-600 border-2 grid place-items-center rounded-lg hover:bg-primary-600 hover:text-white ease-in-out transition-all cursor-pointer border-primary-600 ${
                        currentCardPage === currentCardPage - 2 + i &&
                        "bg-primary-600 text-white"
                      }`}
                    >
                      <p>{currentCardPage - 2 + i}</p>
                    </div>
                  ) : (
                    <div
                      onClick={() => handlepagination(1 + i)}
                      key={i}
                      className={`w-10 h-10 text-primary-600 border-2 grid place-items-center rounded-lg hover:bg-primary-600 hover:text-white ease-in-out transition-all cursor-pointer border-primary-600 ${
                        currentCardPage === 1 + i && "bg-primary-600 text-white"
                      }`}
                    >
                      <p>{1 + i}</p>
                    </div>
                  )
                )}
            </div>
            <div
              onClick={nextCardPage}
              className="w-10 h-10 text-primary-600 border-2 grid place-items-center rounded-lg hover:bg-primary-600 hover:text-white ease-in-out transition-all cursor-pointer border-primary-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Donasi;
