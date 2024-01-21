import Layout from "@/layout/layout";
import React, { useState } from "react";
import Background3 from "@/assets/images/galeribanner.png";
import Image from "next/image";
import CardGaleri from "@/components/cardGaleri";
import ModalGaleri from "@/components/modalGaleri";
import dynamic from "next/dynamic";
import galeri1 from "@/assets/images/galeri/1.png";
import galeri2 from "@/assets/images/galeri/2.png";
import galeri3 from "@/assets/images/galeri/3.png";
import galeri4 from "@/assets/images/galeri/4.png";
import galeri5 from "@/assets/images/galeri/5.png";
import galeri6 from "@/assets/images/galeri/6.png";
import galeri7 from "@/assets/images/galeri/7.png";
import galeri8 from "@/assets/images/galeri/8.png";
import galeri9 from "@/assets/images/galeri/9.png";
import galeri10 from "@/assets/images/galeri/10.png";
import galeri11 from "@/assets/images/galeri/11.png";
import galeri12 from "@/assets/images/galeri/12.png";


const MapsContainer = dynamic(() => import("@/components/maps"), {
  ssr: false,
});

function Galeri() {
  const [currentCardPage, setCurrentCardPage] = useState<number>(1);
  const [isModal, setIsModal] = useState<boolean>(false);
  const [galeriId, setGaleriId] = useState<number>(0);

  const handlepagination = (e: any) => {
    setCurrentCardPage(Number(e));
    // setCardNum((e - 1) * 12);
    const element = document.getElementById("galeriContainer");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const nextCardPage = () => {
    setCurrentCardPage(currentCardPage + 1);
    const element = document.getElementById("galeriContainer");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const prevCardPage = () => {
    if (currentCardPage == 1) {
      return;
    }
    setCurrentCardPage(currentCardPage - 1);
    const element = document.getElementById("galeriContainer");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const DataGaleri = [
    {
      id: 1,
      judul: "EXO-TREES: Save Our World with EXO, WE ARE ONE!",
      lokasi: "Loang Baloq, Kota Mataram",
      jenis: "Mangrove Rhizophora",
      harga: "Rp35.000",
      penyelenggara: "Ayak Keren Banget",
      jumlah: "1075",
      foto: "blablabla",
      tanggal: "Jumat, 30 Juni 2024",
      deskripsi:
        "Taman Loang Balok di NTB adalah kawasan konservasi mangrove, penting untuk melindungi ekosistem pesisir dan menjaga keanekaragaman hayati.",
      link: galeri1,
    },
    {
      id: 2,
      judul: "2EXO-TREES: Save Our World with EXO, WE ARE ONE!",
      lokasi: "Loang Baloq, Kota Mataram",
      jenis: "Mangrove Rhizophora",
      harga: "Rp35.000",
      penyelenggara: "Ayak Keren Banget",
      jumlah: "1075",
      foto: "blablabla",
      tanggal: "Jumat, 30 Juni 2024",
      deskripsi:
        "Taman Loang Balok di NTB adalah kawasan konservasi mangrove, penting untuk melindungi ekosistem pesisir dan menjaga keanekaragaman hayati.",
      link: galeri2,
    },
    {
      id: 3,
      judul: "EXO-TREES: Save Our World with EXO, WE ARE ONE!",
      lokasi: "Loang Baloq, Kota Mataram",
      jenis: "Mangrove Rhizophora",
      harga: "Rp35.000",
      penyelenggara: "Ayak Keren Banget",
      jumlah: "1075",
      foto: "blablabla",
      tanggal: "Jumat, 30 Juni 2024",
      deskripsi:
        "Taman Loang Balok di NTB adalah kawasan konservasi mangrove, penting untuk melindungi ekosistem pesisir dan menjaga keanekaragaman hayati.",
      link: galeri3,
    },
    {
      id: 4,
      judul: "EXO-TREES: Save Our World with EXO, WE ARE ONE!",
      lokasi: "Loang Baloq, Kota Mataram",
      jenis: "Mangrove Rhizophora",
      harga: "Rp35.000",
      penyelenggara: "Ayak Keren Banget",
      jumlah: "1075",
      foto: "blablabla",
      tanggal: "Jumat, 30 Juni 2024",
      deskripsi:
        "Taman Loang Balok di NTB adalah kawasan konservasi mangrove, penting untuk melindungi ekosistem pesisir dan menjaga keanekaragaman hayati.",
      link: galeri4,
    },
    {
      id: 5,
      judul: "EXO-TREES: Save Our World with EXO, WE ARE ONE!",
      lokasi: "Loang Baloq, Kota Mataram",
      jenis: "Mangrove Rhizophora",
      harga: "Rp35.000",
      penyelenggara: "Ayak Keren Banget",
      jumlah: "1075",
      foto: "blablabla",
      tanggal: "Jumat, 30 Juni 2024",
      deskripsi:
        "Taman Loang Balok di NTB adalah kawasan konservasi mangrove, penting untuk melindungi ekosistem pesisir dan menjaga keanekaragaman hayati.",
      link: galeri5,
    },
    {
      id: 6,
      judul: "EXO-TREES: Save Our World with EXO, WE ARE ONE!",
      lokasi: "Loang Baloq, Kota Mataram",
      jenis: "Mangrove Rhizophora",
      harga: "Rp35.000",
      penyelenggara: "Ayak Keren Banget",
      jumlah: "1075",
      foto: "blablabla",
      tanggal: "Jumat, 30 Juni 2024",
      deskripsi:
        "Taman Loang Balok di NTB adalah kawasan konservasi mangrove, penting untuk melindungi ekosistem pesisir dan menjaga keanekaragaman hayati.",
      link: galeri6,
    },
    {
      id: 7,
      judul: "EXO-TREES: Save Our World with EXO, WE ARE ONE!",
      lokasi: "Loang Baloq, Kota Mataram",
      jenis: "Mangrove Rhizophora",
      harga: "Rp35.000",
      penyelenggara: "Ayak Keren Banget",
      jumlah: "1075",
      foto: "blablabla",
      tanggal: "Jumat, 30 Juni 2024",
      deskripsi:
        "Taman Loang Balok di NTB adalah kawasan konservasi mangrove, penting untuk melindungi ekosistem pesisir dan menjaga keanekaragaman hayati.",
      link: galeri7,
    },
    {
      id: 8,
      judul: "EXO-TREES: Save Our World with EXO, WE ARE ONE!",
      lokasi: "Loang Baloq, Kota Mataram",
      jenis: "Mangrove Rhizophora",
      harga: "Rp35.000",
      penyelenggara: "Ayak Keren Banget",
      jumlah: "1075",
      foto: "blablabla",
      tanggal: "Jumat, 30 Juni 2024",
      deskripsi:
        "Taman Loang Balok di NTB adalah kawasan konservasi mangrove, penting untuk melindungi ekosistem pesisir dan menjaga keanekaragaman hayati.",
      link: galeri8,
    },
    {
      id: 9,
      judul: "EXO-TREES: Save Our World with EXO, WE ARE ONE!",
      lokasi: "Loang Baloq, Kota Mataram",
      jenis: "Mangrove Rhizophora",
      harga: "Rp35.000",
      penyelenggara: "Ayak Keren Banget",
      jumlah: "1075",
      foto: "blablabla",
      tanggal: "Jumat, 30 Juni 2024",
      deskripsi:
        "Taman Loang Balok di NTB adalah kawasan konservasi mangrove, penting untuk melindungi ekosistem pesisir dan menjaga keanekaragaman hayati.",
      link: galeri9,
    },
    {
      id: 10,
      judul: "EXO-TREES: Save Our World with EXO, WE ARE ONE!",
      lokasi: "Loang Baloq, Kota Mataram",
      jenis: "Mangrove Rhizophora",
      harga: "Rp35.000",
      penyelenggara: "Ayak Keren Banget",
      jumlah: "1075",
      foto: "blablabla",
      tanggal: "Jumat, 30 Juni 2024",
      deskripsi:
        "Taman Loang Balok di NTB adalah kawasan konservasi mangrove, penting untuk melindungi ekosistem pesisir dan menjaga keanekaragaman hayati.",
      link: galeri10,
    },
    {
      id: 11,
      judul: "EXO-TREES: Save Our World with EXO, WE ARE ONE!",
      lokasi: "Loang Baloq, Kota Mataram",
      jenis: "Mangrove Rhizophora",
      harga: "Rp35.000",
      penyelenggara: "Ayak Keren Banget",
      jumlah: "1075",
      foto: "blablabla",
      tanggal: "Jumat, 30 Juni 2024",
      deskripsi:
        "Taman Loang Balok di NTB adalah kawasan konservasi mangrove, penting untuk melindungi ekosistem pesisir dan menjaga keanekaragaman hayati.",
      link: galeri11,
    },
    {
      id: 12,
      judul: "EXO-TREES: Save Our World with EXO, WE ARE ONE!",
      lokasi: "Loang Baloq, Kota Mataram",
      jenis: "Mangrove Rhizophora",
      harga: "Rp35.000",
      penyelenggara: "Ayak Keren Banget",
      jumlah: "1075",
      foto: "blablabla",
      tanggal: "Jumat, 30 Juni 2024",
      deskripsi:
        "Taman Loang Balok di NTB adalah kawasan konservasi mangrove, penting untuk melindungi ekosistem pesisir dan menjaga keanekaragaman hayati.",
      link: galeri12,
    },
  ];

  return (
    <Layout>
      {isModal && (
        <ModalGaleri
          setIsModal={setIsModal}
          dataGaleri={DataGaleri[galeriId - 1]}
        />
      )}
      <section className="relative h-full pb-10">
        <div className="absolute h-full -z-10">
          <Image
            src={Background3}
            alt="..."
            className="w-screen h-full object-cover"
          />
        </div>
        <div className="px-24 flex flex-col justify-center pt-20 h-screen">
          <div className="flex flex-col justify-center w-full">
            <p className="text-5xl font-bold drop-shadow-lg text-secondary-900">
              Eksplorasi Jejak Kegiatan Kami
            </p>
            <p className="text-2xl mb-10 mt-8 drop-shadow-lg max-w-3xl">
              Memamerkan berbagai momen ketika orang-orang bersatu untuk menanam
              pohon-pohon yang akan menyelamatkan lingkungan kita.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="flex justify-between px-24 py-6 text-center">
          <div className="flex flex-col p-6 justify-center hover:bg-white hover:bg-opacity-40">
            <p className="font-semibold text-xl drop-shadow-lg">1,290 Pohon</p>
            <p className="drop-shadow-lg">Jumlah Donasi pohon saat ini</p>
          </div>
          <div className="flex flex-col p-6 justify-center hover:bg-white hover:bg-opacity-40">
            <p className="font-semibold text-xl drop-shadow-lg">1,290 Pohon</p>
            <p className="drop-shadow-lg">Jumlah pohon yang sudah ditanam</p>
          </div>
          <div className="flex flex-col p-6 justify-center hover:bg-white hover:bg-opacity-40">
            <p className="font-semibold text-xl drop-shadow-lg">
              Rp 45,656,543
            </p>
            <p className="drop-shadow-lg">Jumlah donasi saat ini</p>
          </div>
          <div className="flex flex-col p-6 justify-center hover:bg-white hover:bg-opacity-40">
            <p className="font-semibold text-xl drop-shadow-lg">90 Kampanye</p>
            <p className="drop-shadow-lg">Jumlah kampanye saat ini</p>
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-col px-24 py-10 justify-center items-center bg-secondary-200">
          <p className="text-3xl font-bold">Jejak Teman GrOUT</p>
          <div className="w-[200px] h-1 bg-black rounded-lg mb-10 mt-4" />
          <MapsContainer center={[-8.583069, 116.320251]} zoom={10} />
        </div>
      </section>
      <section>
        <div
          id="galeriContainer"
          className="flex flex-col px-24 mt-20 justify-center items-center"
        >
          <p className="text-3xl font-bold">Galeri Teman GrOUT</p>
          <div className="w-[200px] h-1 bg-black rounded-lg mb-10 mt-4" />
        </div>
        <div className="flex justify-end w-full px-24">
          <div>
            <form action="submit">
              <input
                type="text"
                placeholder="Cari Lokasi"
                className="border-2 px-4 py-2 rounded-l-lg bg-slate-200"
              />
              <button className="px-4 bg-primary-600 py-2 border-2 border-primary-600 rounded-r-lg text-white">
                Cari
              </button>
            </form>
          </div>
        </div>
        <div className="grid grid-cols-4 px-24 gap-10 py-10">
          {DataGaleri.map((data) => (
            <CardGaleri
              key={data.id}
              modal={isModal}
              setIsModal={setIsModal}
              dataGaleri={data}
              setId={setGaleriId}
            />
          ))}
        </div>
        <div className="flex gap-6 justify-center">
          <div className="flex gap-6 justify-center my-10">
            <div
              onClick={prevCardPage}
              className="w-10 h-10 text-secondary-600 border-2 grid place-items-center rounded-lg hover:bg-secondary-600 hover:text-white ease-in-out transition-all cursor-pointer border-secondary-600"
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
              {[...Array(96 / 12 + 1)]
                .slice(
                  currentCardPage > 3 ? currentCardPage - 2 : 0,
                  currentCardPage > 3 ? currentCardPage + 3 : 5
                )
                .map((_, i) =>
                  currentCardPage > 3 ? (
                    <div
                      onClick={() => handlepagination(currentCardPage - 2 + i)}
                      key={i}
                      className={`w-10 h-10 text-secondary-600 border-2 grid place-items-center rounded-lg hover:bg-secondary-600 hover:text-white ease-in-out transition-all cursor-pointer border-secondary-600 ${
                        currentCardPage === currentCardPage - 2 + i &&
                        "bg-secondary-600 text-white"
                      }`}
                    >
                      <p>{currentCardPage - 2 + i}</p>
                    </div>
                  ) : (
                    <div
                      onClick={() => handlepagination(1 + i)}
                      key={i}
                      className={`w-10 h-10 text-secondary-600 border-2 grid place-items-center rounded-lg hover:bg-secondary-600 hover:text-white ease-in-out transition-all cursor-pointer border-secondary-600 ${
                        currentCardPage === 1 + i &&
                        "bg-secondary-600 text-white"
                      }`}
                    >
                      <p>{1 + i}</p>
                    </div>
                  )
                )}
            </div>
            <div
              onClick={nextCardPage}
              className="w-10 h-10 text-secondary-600 border-2 grid place-items-center rounded-lg hover:bg-secondary-600 hover:text-white ease-in-out transition-all cursor-pointer border-secondary-600"
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

export default Galeri;
