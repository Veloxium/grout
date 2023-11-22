import React from "react";
import Image from "next/image";
import Foto from "@/assets/images/galericard.jpeg";

type ModalGaleriProps = {
  setIsModal: any;
  dataGaleri: {
    id: number;
    judul: string;
    lokasi: string;
    jenis: string;
    harga: string;
    penyelenggara: string;
    jumlah: string;
    foto: string;
    tanggal: string;
    deskripsi: string;
  };
};

function ModalGaleri({ setIsModal, dataGaleri }: ModalGaleriProps) {
  const handleModal = () => {
    setIsModal(false);
  };
  console.log(dataGaleri.id);
  return (
    <div className="fixed w-full p-48 h-screen bg-gray-900 bg-opacity-50 z-50 flex justify-center items-center">
      <div className="relative p-10 bg-white w-full rounded-md flex">
        <div className="w-1/2 border-2 rounded-lg border-secondary-900">
          <Image src={Foto} alt="..." className="rounded-t-lg" />
          <p className="py-4 px-6 text-center rounded-b-lg text-2xl font-bold text-secondary-900">
            {
                dataGaleri.judul
            }
          </p>
        </div>
        <div className="w-1/2 px-10 flex flex-col gap-2">
          <div>
            <p className="font-bold">Lokasi Penanaman:</p>
            <p>Pantai Loang Baloq | Kota Mataram</p>
          </div>
          <div>
            <p className="font-bold">Jenis Bibit Pohon:</p>
            <p>Mangrove Rhizophora</p>
          </div>
          <div>
            <p className="font-bold">Harga Bibit Pohon:</p>
            <p>Rp35.000</p>
          </div>
          <div>
            <p className="font-bold">Penyelenggara:</p>
            <p>Ayak Keren Banget</p>
          </div>
          <div>
            <p className="font-bold">Jumlah Bibit Ditanam:</p>
            <p>1075</p>
          </div>
          <div>
            <p className="font-bold">Tanggal Penanaman:</p>
            <p>Jumat, 30 Juni 2024</p>
          </div>
          <div>
            <p className="font-bold">Deskripsi Wilayah Penanaman:</p>
            <p>
              Taman Loang Balok di NTB adalah kawasan konservasi mangrove,
              penting untuk melindungi ekosistem pesisir dan menjaga
              keanekaragaman hayati.
            </p>
          </div>
        </div>
        <div
          onClick={handleModal}
          className="absolute cursor-pointer top-5 right-8 bg-red-600 p-1 rounded-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default ModalGaleri;
