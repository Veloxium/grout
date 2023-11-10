import Layout from "@/layout/layout";
import Image from "next/image";
import React from "react";
import Bg from "@/assets/images/detailkampanye.png";
import Logo from "@/assets/images/logo.png";
import Input from "@/components/input";
import InputFile from "@/components/inputFile";
import ButtonSubmit from "@/components/buttonSubmit";

function Laporkan() {
  return (
    <Layout>
      <section className="mt-20 px-24">
        <div className="w-full flex flex-col py-20">
          <div className="flex gap-6">
            <div className="w-1/2 max-h-[300px]">
              <Image
                src={Bg}
                alt="donasi"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="w-1/2 flex flex-col justify-center">
              <p className="text-red-600">Laporkan Kampanye Mencurigakan</p>
              <p className="font-bold text-xl">
                EXO-TREES: "Save Our World with EXO, WE ARE ONE!"
              </p>
              <div className="w-full border-2 border-slate-400 rounded-full my-2" />
              <div className="flex items-center gap-1">
                <Image src={Logo} alt="logo" className="w-24" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#068fff"
                  className="bi bi-patch-check-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 py-14">
            <div className="w-full flex gap-6">
              <Input
                label="Email"
                name="email"
                type="email"
                placeholder="email@gmail.com"
                custom="bg-gray-50"
              />
              <Input
                label="Nomor Telepon"
                name="telepon"
                type="number"
                placeholder="0812xxxx"
                custom="bg-gray-50"
              />
            </div>
            <Input
              label="Prihal Laporan"
              name="laporan"
              type="text"
              placeholder="Penipuan"
              custom="bg-gray-50"
            />
            <div className="flex flex-col gap-1">
              <label htmlFor="deskripsiLaporan">Deskripsi Laporan</label>
              <textarea
                name="deskripsiLaporan"
                id="deskripsiLaporan"
                className="w-full px-4 py-2 border border-black rounded-lg focus:outline-primary-600 bg-gray-50"
                rows={10}
                placeholder="Ini adalah Penipuan..."
              />
            </div>
            <InputFile />
            <div className="flex items-center">
              <input
                type="checkbox"
                name="konfirmasi"
                id="konfirmasi"
                className="mx-2 cursor-pointer"
              />
              <label htmlFor="konfirmasi" className="my-4 cursor-pointer">
                Saya dengan ini menyatakan bahwa segala informasi yang
                dilaporkan memang benar
              </label>
            </div>
            <ButtonSubmit
              text="Kirim"
              type="border"
              size="large"
              custom="font-bold text-primary-600 hover:text-white hover:bg-primary-600 transition duration-300 ease-in-out"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Laporkan;
