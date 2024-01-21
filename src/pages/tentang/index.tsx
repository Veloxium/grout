import Layout from "@/layout/layout";
import Image from "next/image";
import React from "react";
import Vector from "@/assets/images/tentangKami.png";
import Nan from "@/assets/images/nan.jpg";
import Alwy from "@/assets/images/alwy.jpg";
import Ayak from "@/assets/images/ayak.jpg";
import Daden from "@/assets/images/daden.jpg";
import Icon from "../../../public/icon.png";
import Avatar from "@/assets/images/avatar.jpg";
import BgKolaborasi from "@/assets/images/bgkolaborasi.png";
import Button from "@/components/button";

function Tentang() {
  return (
    <Layout>
      <div>
        <div className="pt-16">
          <div className="relative">
            <Image
              src={Vector}
              alt="vector"
              width={1920}
              height={1080}
              className="object-cover h-[726px] w-full"
            />
            <p className="text-5xl text-primary-600 font-bold z-10 absolute inset-0 flex items-center justify-center">
              Halo Teman <span className="text-secondary-800 ml-3">GrOUT!</span>
            </p>
          </div>
        </div>
        <div className="py-24 px-32 bg-secondary-50 text-center flex flex-col justify-center gap-6">
          <p className="text-3xl font-bold text-secondary-800">
            Cerita <span className="text-primary-600">GrOUT</span>
          </p>
          <div className="flex justify-start">
            <p className="text-2xl text-left max-w-[1050px]">
              <span className="text-3xl font-bold text-primary-600">GROUT</span>{" "}
              adalah platform yang bertekad untuk menjadikan dunia ini tempat
              yang lebih hijau, berkelanjutan, dan indah untuk generasi
              mendatang. Kami percaya bahwa dengan upaya bersama, kita dapat
              membuat perbedaan yang signifikan dalam pelestarian lingkungan dan
              keberlanjutan rumah kita.
            </p>
          </div>
          <div className="flex justify-end mt-2">
            <p className="text-2xl text-right max-w-[1050px]">
              Dengan mengumpulkan sumber daya dan dukungan untuk proyek
              penanaman pohon, pemulihan hutan, dan upaya-upaya lain yang
              bertujuan untuk melestarikan alam.{" "}
              <span className="text-3xl font-bold text-primary-600">GROUT</span>{" "}
              bekerja sama dengan komunitas lokal, organisasi lingkungan, dan
              individu seperti Anda untuk mencapai tujuan kami.
            </p>
          </div>
          <div className="mt-20 mb-10">
            <p className="text-3xl font-bold text-secondary-800">Salam Kenal!</p>
            <p className="text-2xl font-bold text-primary-600">dari Tim Kami</p>
            <div className="flex gap-6 mt-10 justify-evenly">
              <div className="rounded-lg overflow-hidden max-w-[300px]">
                <Image
                  src={Avatar}
                  alt="nan"
                  width={900}
                  height={900}
                  className="w-full object-cover max-h-[300px] p-4 bg-white"
                />
                <div className="w-full bg-slate-100 text-black py-2 flex items-center justify-between px-4">
                  <p className="font-bold text-xl">Nan</p>
                  <p>Tech</p>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden max-w-[400px] mt-16">
                <Image
                  src={Icon}
                  alt="Icon"
                  width={900}
                  height={900}
                  className="w-full object-cover max-h-[400px] p-4"
                />
              </div>
              <div className="rounded-lg overflow-hidden max-w-[300px]">
                <Image
                  src={Avatar}
                  alt="ayak"
                  width={900}
                  height={900}
                  className="w-full object-cover max-h-[300px] p-4 bg-white"
                />
                <div className="w-full bg-slate-100 text-black py-2 flex items-center justify-between px-4">
                  <p className="font-bold text-xl">Ayak</p>
                  <p>Designer</p>
                </div>
              </div>
            </div>
            <div className="flex gap-6 mt-10 justify-evenly">
              <div className="rounded-lg overflow-hidden max-w-[300px]">
                <Image
                  src={Avatar}
                  alt="daden"
                  width={900}
                  height={900}
                  className="w-full object-cover max-h-[300px] p-4 bg-white"
                />
                <div className="w-full bg-slate-100 text-black py-2 flex items-center justify-between px-4">
                  <p className="font-bold text-xl">Daden</p>
                  <p>Tech</p>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden w-[300px]">
                <Image
                  src={Avatar}
                  alt="alwy"
                  width={900}
                  height={900}
                  className="w-full object-cover max-h-[300px] p-4 bg-white"
                />
                <div className="w-full bg-slate-100 text-black py-2 flex items-center justify-between px-4">
                  <p className="font-bold text-xl">Alwy</p>
                  <p>Designer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-secondary-50 relative">
          <div>
            <Image
              src={BgKolaborasi}
              alt="bgkolaborasi"
              width={1440}
              height={720}
              className="w-full object-cover"
            />
          </div>
          <div className="absolute top-6 flex flex-col px-24">
            <p className="text-4xl font-bold text-secondary-800">
              Saatnya Berkolaborasi <br />{" "}
              <span className="text-primary-600">
                dan menjadi bagian dari Kami
              </span>
            </p>
            <div className="my-8 flex gap-6">
              <Button
                text="Buat Kampanye"
                type="border"
                custom="bg-primary-50"
                textCustom="text-primary-600"
                href="/buatkampanye"
                shadow
              />
              <Button text="Mulai Donasi" type="primary" size="large" href="/donasi" shadow />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Tentang;
