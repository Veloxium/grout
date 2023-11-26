import Layout from "@/layout/layout";
import Image from "next/image";
import React from "react";
import Vector from "@/assets/images/tentangKami.jpeg";
import IconTentang from "@/assets/images/iconTentang.png";
import Nan from "@/assets/images/nan.jpg";
import Alwy from "@/assets/images/alwy.jpg";
import Ayak from "@/assets/images/ayak.jpg";
import Daden from "@/assets/images/daden.jpg";
import BannerKampanye from "@/components/bannerKampanye";
import Button from "@/components/button";

function Tentang() {
  return (
    <Layout>
      <div>
        <div className="pt-20 px-48">
          <Image
            src={Vector}
            alt="vector"
            width={1920}
            height={1080}
            className="object-contain w-full"
          />
        </div>
        <div className="py-24 px-32 bg-primary-600 text-white text-center flex flex-col justify-center items-center gap-6">
          <p className="text-3xl font-bold">Cerita GrOUT</p>
          <p className="text-xl">
            GrOUT adalah platform yang bertekad untuk menjadikan dunia ini
            tempat yang lebih hijau, berkelanjutan, dan indah untuk generasi
            mendatang. Kami percaya bahwa dengan upaya bersama, kita dapat
            membuat perbedaan yang signifikan dalam pelestarian lingkungan dan
            keberlanjutan rumah kita. Dengan mengumpulkan sumber daya dan
            dukungan untuk proyek penanaman pohon, pemulihan hutan, dan
            upaya-upaya lain yang bertujuan untuk melestarikan alam. Kami
            bekerja sama dengan komunittext-xlas lokal, organisasi lingkungan,
            dan individu seperti Anda untuk mencapai tujuan kami.
          </p>
          <div className="w-[550px] h-[550px] rounded-full overflow-hidden my-10">
            <Image
              src={IconTentang}
              alt="icon"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="my-10">
            <p className="text-3xl font-bold">Salam Kenal!</p>
            <p className="text-2xl font-bold">dari Tim Kami</p>
            <div className="grid grid-cols-4 gap-6 mt-10">
              <div className="rounded-lg overflow-hidden max-w-[300px]">
                <Image
                  src={Nan}
                  alt="nan"
                  width={900}
                  height={900}
                  className="w-full object-cover max-h-[300px] p-4 bg-white"
                />
                <div className="w-full bg-slate-100 text-black py-2 flex flex-col items-start px-4">
                  <p className="font-bold text-xl">Nan</p>
                  <p>Tech</p>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden max-w-[300px]">
                <Image
                  src={Ayak}
                  alt="ayak"
                  width={900}
                  height={900}
                  className="w-full object-cover max-h-[300px] p-4 bg-white"
                />
                <div className="w-full bg-slate-100 text-black py-2 flex flex-col items-start px-4">
                  <p className="font-bold text-xl">Ayak</p>
                  <p>Design</p>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden max-w-[300px]">
                <Image
                  src={Alwy}
                  alt="alwy"
                  width={900}
                  height={900}
                  className="w-full object-cover max-h-[300px] p-4 bg-white"
                />
                <div className="w-full bg-slate-100 text-black py-2 flex flex-col items-start px-4">
                  <p className="font-bold text-xl">Alwy</p>
                  <p>Design</p>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden max-w-[300px]">
                <Image
                  src={Daden}
                  alt="daden"
                  width={900}
                  height={900}
                  className="w-full object-cover max-h-[300px] p-4 bg-white"
                />
                <div className="w-full bg-slate-100 text-black py-2 flex flex-col items-start px-4">
                  <p className="font-bold text-xl">Daden</p>
                  <p>Tech</p>
                </div>
              </div>
            </div>
          </div>
          <div className="my-10 w-full">
            <p className="text-3xl font-bold">Saatnya Berkolaborasi</p>
            <BannerKampanye customeClass="w-full py-10 z-10 mt-10" />
            {/* <div className="w-full flex mt-10 rounded-lg">
              <div className="w-1/2 flex flex-col items-center py-10 bg-secondary-500">
                <p className="text-2xl font-bold max-w-[460px]">
                  Bergabunglah, Tanamkan Harapan untuk Alam Kita
                </p>
                <div className="flex gap-20 mt-10">
                  <Button
                    text="Buat Kampanye"
                    size="large"
                    type="border"
                    custom="bg-primary-200"
                    textCustom="text-primary-600 font-bold"
                    shadow
                  />
                  <Button
                    text="Buat Kampanye"
                    size="large"
                    type="primary"
                    textCustom="font-bold"
                    shadow
                  />
                </div>
              </div>
              <div></div>
            </div> */}
          </div>
        </div>
        <div className="flex justify-center font-bold py-10 ">
          <p className="text-3xl text-center max-w-[1000px]">
            Terima kasih atas dukungan Kamu dalam menjadikan dunia ini lebih
            hijau dan berkelanjutan. Kamu keren banget!
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default Tentang;
