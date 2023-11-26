import { Poppins } from "next/font/google";
import Button from "@/components/button";
import Image from "next/image";
import Layout from "@/layout/layout";
import Background from "@/assets/images/background.png";
import { useEffect, useRef, useState } from "react";
import SliderDonasi from "@/components/sliderDonasi";
import SliderBanner from "@/components/sliderBanner";
import Profile from "@/assets/images/profile.jpg";
import CardHarapan from "@/components/cardHarapan";
import G1 from "@/assets/images/1.png";
import G2 from "@/assets/images/2.png";
import G3 from "@/assets/images/4.png";
import G4 from "@/assets/images/6.png";
import G5 from "@/assets/images/7.png";
import G6 from "@/assets/images/8.png";
import G7 from "@/assets/images/10.png";
import G8 from "@/assets/images/12.png";
import G9 from "@/assets/images/13.png";
import G10 from "@/assets/images/15.png";
import Gabung from "@/assets/images/gabung.png";

export default function Home() {
  const [kampanye, setKampanye] = useState("semua");

  const handleKampanye = (e: any) => {
    e.preventDefault();
    setKampanye(e.target.innerText.toLowerCase().replace(" ", "-"));
  };

  return (
    <Layout>
      <section className="relative">
        <div className="absolute -z-10">
          <Image
            src={Background}
            alt="..."
            className="w-screen h-screen object-cover "
          />
        </div>
        <div className="px-24 flex flex-col justify-end pb-20 h-screen">
          <div className="flex flex-col justify-center w-2/3">
            <p className="text-5xl font-bold drop-shadow-lg">
              Pohon Untuk Masa Depan,
            </p>
            <p className="text-5xl font-bold mt-4 drop-shadow-lg">
              Donasikan Untuk Lingkungan!
            </p>
            <p className="text-xl mb-10 mt-8 drop-shadow-lg">
              Ayo bantu lingkungan menjadi lebih baik dan berikan dampak yang
              baik untuk masyarakat
            </p>
            <Button
              href="/donasi"
              text="Mulai Donasi"
              size="xlarge"
              type="primary"
              custom="w-[14rem]"
            />
          </div>
          <div className="flex justify-start gap-10 pt-10">
            <div className="flex flex-col items-start">
              <p className="text-xl font-bold">1,290 Pohon</p>
              <p>Jumlah Donasi Pohon saat ini</p>
            </div>
            <div className="flex flex-col items-start">
              <p className="text-xl font-bold">28 Kampanye</p>
              <p>Jumlah Kampanye saat ini </p>
            </div>
            <div className="flex flex-col items-start">
              <p className="text-xl font-bold">Rp45,410,290 </p>
              <p>Jumlah donasi saat ini</p>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col justify-center items-center py-20">
        <p className="font-semibold text-3xl">Kampanye Sedang Berlangsung</p>
        <div className="w-1/5 h-1 bg-black mt-6 rounded-md"></div>
        <div className="px-24 w-full flex justify-start mt-6">
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
        <SliderDonasi />
        <Button
          text="Lihat Semua"
          type="border"
          size="xlarge"
          textCustom="text-black font-semibold"
          shadow
        />
      </section>
      <section className="flex flex-col items-center pb-20">
        <p className="font-semibold text-3xl text-slate-700">
          Gallery Teman GrOUT
        </p>
        <div className="w-[230px] h-1 bg-slate-700 mt-6 rounded-md"></div>
        <SliderBanner />
      </section>
      <section className="flex flex-col items-center py-20">
        <p className="font-semibold text-3xl text-slate-700">
          Harapan Teman GrOUT
        </p>
        <div className="w-[200px] h-1 bg-slate-700 mt-6 rounded-md"></div>
        <div className="container flex justify-between my-20 gap-10">
          <CardHarapan />
          <CardHarapan />
          <CardHarapan />
          <CardHarapan />
        </div>
      </section>
      <section className="flex flex-col items-center py-20 bg-primary-100">
        <p className="font-semibold text-3xl text-slate-700">Tekad GrOUT</p>
        <div className="w-[150px] h-1 bg-slate-700 mt-6 rounded-md"></div>
        <div className=" flex justify-between my-16 px-24">
          <div className="w-1/2">
            <p className="text-4xl font-bold text-secondary-600">
              Setiap tindakan yang GrOUT lakukan bersama individu, komunitas,
              dan mitra lingkungan, secara positif mendukung pencapaian{" "}
              <span className="text-secondary-800">
                Tujuan Pembangunan Berkelanjutan (SDGs)
              </span>
            </p>
          </div>
          <div className="grid grid-cols-5 gap-2 ml-4">
            <Image
              src={G1}
              alt="..."
              width={500}
              height={500}
              className="w-[140px] h-[140px] object-cover"
            />
            <Image
              src={G2}
              alt="..."
              width={500}
              height={500}
              className="w-[140px] h-[140px] object-cover"
            />
            <Image
              src={G3}
              alt="..."
              width={500}
              height={500}
              className="w-[140px] h-[140px] object-cover"
            />
            <Image
              src={G4}
              alt="..."
              width={500}
              height={500}
              className="w-[140px] h-[140px] object-cover"
            />
            <Image
              src={G5}
              alt="..."
              width={500}
              height={500}
              className="w-[140px] h-[140px] object-cover"
            />
            <Image
              src={G6}
              alt="..."
              width={500}
              height={500}
              className="w-[140px] h-[140px] object-cover"
            />
            <Image
              src={G7}
              alt="..."
              width={500}
              height={500}
              className="w-[140px] h-[140px] object-cover"
            />
            <Image
              src={G8}
              alt="..."
              width={500}
              height={500}
              className="w-[140px] h-[140px] object-cover"
            />
            <Image
              src={G9}
              alt="..."
              width={500}
              height={500}
              className="w-[140px] h-[140px] object-cover"
            />
            <Image
              src={G10}
              alt="..."
              width={500}
              height={500}
              className="w-[140px] h-[140px] object-cover"
            />
          </div>
        </div>
      </section>
      <section className="flex justify-between py-20 px-24 gap-28">
        <Image src={Gabung} alt="gabung" className="w-[475px]" />
        <div className="flex flex-col my-6 justify-center gap-16">
          <p className="text-6xl font-bold text-secondary-600">
            Sudah saatnya menanamkan harapan untuk alam Kita
          </p>
          <p className="text-6xl font-bold text-secondary-800">
            Jadilah <br />
            #TemanGrOUT
          </p>
          <div className="flex gap-20">
            <Button
              href="/buatkampanye"
              text="Buat Kampanye"
              size="xlarge"
              type="primary"
              custom="w-[270px]"
            />
            <Button
              text="Mulai Donasi"
              size="xlarge"
              type="border"
              custom="w-[270px]"
              textCustom="text-primary-600"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}
