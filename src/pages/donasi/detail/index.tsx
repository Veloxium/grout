import React, { useEffect, useState } from "react";
import BgDonasi from "@/assets/images/detailkampanye.png";
import Layout from "@/layout/layout";
import Image from "next/image";
import Profile from "@/assets/images/profile.jpg";
import Button from "@/components/button";
import detailDonasi from "@/json/detailDonasi.json";
import BgDetail from "@/assets/images/tentangKampnaye.jpeg";
import Link from "next/link";

function DetailDonasi() {
  const [desc, setDesc] = useState<boolean>(true);
  const [donatur, setDonatur] = useState<boolean>(true);
  const id = 0;
  const details = detailDonasi.detailDonasi[id];

  const Donatur = [
    {
      id: 1,
      nama: "Alwi",
      jumlah: 100,
    },
    {
      id: 2,
      nama: "Budi",
      jumlah: 50,
    },
    {
      id: 3,
      nama: "Caca",
      jumlah: 40,
    },
    {
      id: 4,
      nama: "Fafa",
      jumlah: 10,
    },
    {
      id: 5,
      nama: "Andi",
      jumlah: 80,
    },
    {
      id: 6,
      nama: "Dedi",
      jumlah: 30,
    },
    {
      id: 7,
      nama: "Eka",
      jumlah: 20,
    },
  ];

  return (
    <Layout>
      <section>
        <div className="mt-32 flex flex-col justify-center items-center">
          <p className="text-2xl font-bold">Donansi Bersama</p>
          <p className="text-3xl">
            EXO-TREES: “Save Our World with EXO, WE ARE ONE!”
          </p>
          <p className="bg-primary-600 text-white rounded-full px-2 mt-2">
            Mangrove Rhizophora
          </p>
        </div>
        <div className="flex flex-col w-full px-24 py-14">
          <div className="flex gap-6">
            <div className="w-2/3 border-2 rounded-lg shadow-lg">
              <Image
                src={BgDonasi}
                alt="Bg"
                className="rounded-lg object-cover h-[400px]"
              />
            </div>
            <div className="w-1/3 flex justify-between flex-col my-4">
              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <Image
                    src={Profile}
                    alt=".."
                    className="aspect-square rounded-full object-cover w-[64px] h-[64px] border-primary-400 border-2"
                  />
                  <div className="flex flex-col">
                    <p className="font-bold">Happy Virus</p>
                    <p>Pantai Loang Baloq, Kota Mataram</p>
                  </div>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.0}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-xl text-primary-600 font-semibold">
                  50 Pohon
                </p>
                <div className="flex justify-between">
                  <p>Terkumpul dari 100 pohon</p>
                  <p>
                    <span className="font-bold">48</span> Donatur
                  </p>
                </div>
                <div className="h-4 w-full rounded-lg bg-slate-200 my-2">
                  <div className="h-full rounded-lg w-1/2 bg-primary-600"></div>
                </div>
                <div className="flex justify-between">
                  <p>Batas Donasi: 15 April 2024</p>
                  <p>
                    <span className="font-bold">100</span> Hari Lagi
                  </p>
                </div>
                <div className="flex justify-between">
                  <p>Penanaman: Jumat, 30 Juni 2024</p>
                  <p>
                    <span className="font-bold">100</span> Hari Lagi
                  </p>
                </div>
              </div>
              <div className="flex justify-between gap-16">
                <Button
                  href="/donasi/pembayaran?id=1"
                  text="Gabung Aksi"
                  textCustom="font-bold text-primary-600"
                  custom="w-full"
                  size="large"
                  type="accent"
                  shadow
                />
                <Button
                  href="/donasi/pembayaran"
                  text="Donasi Sekarang"
                  type="primary"
                  size="large"
                  custom="w-full"
                  textCustom="font-bold "
                />
              </div>
            </div>
          </div>
          <Link
            href={"/donasi/laporkan"}
            className="flex gap-1 mt-4 hover:underline"
          >
            <p className="text-sm">
              Kampanye ini mencurigakan?{" "}
              <span className="font-semibold text-red-600">Laporkan</span>
            </p>
          </Link>
        </div>
      </section>
      <section>
        <div className="flex w-full px-24 mb-14 gap-6">
          <div className="w-2/3 border-2 rounded-lg shadow-lg">
            <div className="flex justify-center text-center ease-in-out duration-200">
              <div
                onClick={() => setDesc(true)}
                className={
                  desc
                    ? "cursor-pointer py-3 text-lg w-full text-primary-600 border-b-4 rounded- border-primary-600 font-semibold"
                    : "cursor-pointer py-3 text-lg w-full border-b-2 border-primary-200"
                }
              >
                <p>Detail</p>
              </div>
              <div
                onClick={() => setDesc(false)}
                className={
                  !desc
                    ? "cursor-pointer py-3 text-lg w-full text-primary-600 border-b-4 rounded- border-primary-600 font-semibold"
                    : "cursor-pointer py-3 text-lg w-full border-b-2 border-primary-200"
                }
              >
                <p>Tentang Wilayah</p>
              </div>
            </div>
            <div className="flex flex-col">
              {desc ? (
                <div className="flex flex-col gap-2 px-6 py-8 text-justify">
                  {details.detail.split("\n\n").map((e, i) => (
                    <p key={i} className={i == 0 ? "font-semibold" : ""}>
                      {e}
                    </p>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col gap-2 px-6 py-8 text-justify">
                  <div className="flex gap-1">
                    <p className="font-semibold">Lokasi Penanaman</p>
                    <p>: {details.tentang.lokasi}</p>
                  </div>
                  <div className="flex gap-1">
                    <p className="font-semibold">Jenis Bibit Pohon</p>
                    <p>: {details.tentang.jenisBibit}</p>
                  </div>
                  <div className="flex gap-1">
                    <p className="font-semibold">Harga Bibit Pohon</p>
                    <p>: {details.tentang.harga}</p>
                  </div>
                  <div className="flex gap-1">
                    <p className="font-semibold">Tanggal Penanaman</p>
                    <p>: {details.tentang.tanggalPenanaman}</p>
                  </div>
                  <div className="flex flex-col">
                    <p className="font-semibold">
                      Deskripsi Wilayayh Penanaman
                    </p>
                    <p>{details.tentang.deskripsi}</p>
                  </div>
                  <div className="h-[400px] mt-4">
                    <Image
                      src={BgDetail}
                      alt="background"
                      className="w-full h-full rounded-xl object-cover"
                    />
                  </div>
                  <p className="text-sm text-slate-500 my-1">
                    Gambar : {details.tentang.lokasi}
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className="w-1/3 h-min border-2 rounded-lg shadow-lg">
            <div className="flex justify-center text-center ease-in-out duration-200">
              <div
                onClick={() => setDonatur(true)}
                className={
                  donatur
                    ? "cursor-pointer py-3 text-lg w-full text-primary-600 border-b-4 rounded- border-primary-600 font-semibold"
                    : "cursor-pointer py-3 text-lg w-full border-b-2 border-primary-200"
                }
              >
                <p>Donatur</p>
              </div>
              <div
                onClick={() => setDonatur(false)}
                className={
                  !donatur
                    ? "cursor-pointer py-3 text-lg w-full text-primary-600 border-b-4 rounded- border-primary-600 font-semibold"
                    : "cursor-pointer py-3 text-lg w-full border-b-2 border-primary-200"
                }
              >
                <p>Donatur Teratas</p>
              </div>
            </div>
            <div className="flex flex-col py-6 px-4 gap-2">
              {!donatur
                ? Donatur.sort((a, b) => b.jumlah - a.jumlah).map((e) => (
                    <div
                      key={e.id}
                      className="flex gap-4 p-2 bg-primary-50 rounded-lg"
                    >
                      <Image
                        src={Profile}
                        alt=".."
                        className="aspect-square rounded-full object-cover w-[50px] h-[50px] border-primary-400 border-2"
                      />
                      <div>
                        <p>{e.nama}</p>
                        <p className="font-semibold">{e.jumlah} Pohon</p>
                      </div>
                    </div>
                  ))
                : Donatur.map((e) => (
                    <div
                      key={e.id}
                      className="flex gap-4 p-2 bg-primary-50 rounded-lg"
                    >
                      <Image
                        src={Profile}
                        alt=".."
                        className="aspect-square rounded-full object-cover w-[50px] h-[50px] border-primary-400 border-2"
                      />
                      <div>
                        <p>{e.nama}</p>
                        <p className="font-semibold">{e.jumlah} Pohon</p>
                      </div>
                    </div>
                  ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default DetailDonasi;
