import Layout from "@/layout/layout";
import React from "react";
import Image from "next/image";
import Bsi from "@/assets/images/bsi.png";
import Bni from "@/assets/images/bni.png";
import Btn from "@/assets/images/btn.png";
import Bri from "@/assets/images/bri.png";
import Ntb from "@/assets/images/ntb.png";
import Mandiri from "@/assets/images/mandiri.png";

function Va() {
  return (
    <Layout>
      <section>
        <div className="mt-32 flex justify-center items-center flex-col">
          <p className="text-2xl font-bold">Instruksi Pembayaran</p>
          <p>Transfer sesuai dengan nominal dibawah ini</p>
          <div className="mt-4 mb-6 text-xl bg-primary-600 text-white px-4 py-1 rounded-lg font-semibold">
            <p>Rp. 206.500</p>
          </div>
          <div className="w-2/5 border-2 rounded-lg border-slate-400 p-8">
            <div className="flex justify-between border-b-2 py-2">
              <p>Jumlah Donasi</p>
              <p>Rp. 200.000</p>
            </div>
            <div className="flex flex-col py-2">
              <p>Biaya Admin Bank</p>
              <div className="flex justify-between">
                <p>Bank Mandiri</p>
                <p>Rp. 6.500</p>
              </div>
            </div>
          </div>
          <div className="mt-8 mb-4 text-xl font-semibold">
            <p>No. Virtual Account</p>
          </div>
          <div className="w-2/5 border-2 rounded-lg border-slate-400 p-8 flex justify-center items-center">
            <p className="text-2xl">237740298438094</p>
          </div>
          <p className="w-2/5 text-sm mt-2">
            *Transfer sebelum 25 september 2023 19:00 WIB.
          </p>
          <div className="w-3/5 flex flex-col items-center justify-center mt-10 border-t-2 border-slate-400 py-10">
            <p className="font-bold text-xl">Panduan Pembayaran</p>
            <div className="grid grid-cols-3 gap-10 gap-y-20 w-full my-16">
              <div className="flex flex-col gap-2 items-center justify-center">
                <Image
                  src={Bsi}
                  width={1000}
                  height={1000}
                  alt="mandiri"
                  className="h-10 object-contain"
                />
                <div className="flex gap-2">
                  <p className="font-semibold">Bank Syariah Indonesia</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 cursor-pointer"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col gap-2 items-center justify-center">
                <Image
                  src={Btn}
                  width={1000}
                  height={1000}
                  alt="mandiri"
                  className="h-10 object-contain"
                />
                <div className="flex gap-2">
                  <p className="font-semibold">Bank BTN</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 cursor-pointer"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col gap-2 items-center justify-center">
                <Image
                  src={Ntb}
                  width={1000}
                  height={1000}
                  alt="mandiri"
                  className="h-10 object-contain"
                />
                <div className="flex gap-2">
                  <p className="font-semibold">Bank NTB Syariah</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 cursor-pointer"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col gap-2 items-center justify-center">
                <Image
                  src={Bni}
                  width={1000}
                  height={1000}
                  alt="mandiri"
                  className="h-10 object-contain"
                />
                <div className="flex gap-2">
                  <p className="font-semibold">Bank BNI</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 cursor-pointer"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col gap-2 items-center justify-center">
                <Image
                  src={Bri}
                  width={1000}
                  height={1000}
                  alt="mandiri"
                  className="h-10 object-contain"
                />
                <div className="flex gap-2">
                  <p className="font-semibold">Bank BRI</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 cursor-pointer"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col gap-2 items-center justify-center">
                <Image
                  src={Mandiri}
                  width={1000}
                  height={1000}
                  alt="mandiri"
                  className="h-10 object-contain"
                />
                <div className="flex gap-2">
                  <p className="font-semibold">Bank Mandiri</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 cursor-pointer"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Va;
