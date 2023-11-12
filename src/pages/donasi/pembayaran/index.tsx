import Button from "@/components/button";
import Input from "@/components/input";
import Layout from "@/layout/layout";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Bsi from "@/assets/images/bsi.png";
import Bni from "@/assets/images/bni.png";
import Btn from "@/assets/images/btn.png";
import Bri from "@/assets/images/bri.png";
import Ntb from "@/assets/images/ntb.png";
import Mandiri from "@/assets/images/mandiri.png";

function Pembayaran() {
  const [show, setShow] = useState(false);

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
          <div className="flex gap-20">
            <div className="w-1/2">
              <form action="submit">
                <div className="flex flex-col gap-2">
                  <p className="font-bold">Nominal Donasi</p>
                  <div className="flex gap-10">
                    <div className="flex w-2/3">
                      <p className="px-4 py-2 bg-primary-600 text-white rounded-l-lg">
                        Rp.
                      </p>
                      <input
                        type="number"
                        className="px-4 py-2 w-full border-2 rounded-r-lg focus:outline-primary-600"
                      />
                    </div>
                    <div className="flex w-1/3 ">
                      <p className="px-4 py-2 w-full flex justify-center border-2 rounded-l-lg focus:outline-primary-600">
                        11
                      </p>
                      <p className="px-4 py-2 bg-primary-600 text-white rounded-r-lg">
                        Pohon
                      </p>
                    </div>
                  </div>
                  <p className="text-blue-400 mt-2">
                    * Donasimu akan dikalkulasikan dengan harga pohon
                  </p>
                </div>
                <div className="flex flex-col items-center py-6 my-4 border-y-2 border-slate-400">
                  <div className="flex justify-between w-full">
                    <p className="font-bold">Metode Pembayaran</p>
                    <div
                      onClick={() => {
                        setShow(!show);
                      }}
                      className="flex items-center gap-2 bg-primary-600 px-6 py-2 text-white rounded-lg cursor-pointer"
                    >
                      <p className="font-semibold">{show ? "Tutup" : "Pilih"}</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </div>
                  </div>
                  {show && (
                    <div className="w-full">
                      <div className="flex border rounded-lg flex-col w-full my-4 gap-4">
                        <div className="flex mt-4">
                          <div className="flex px-6 justify-start gap-2 items-center">
                            <div className="bg-primary-600 rounded-full p-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2.5}
                                stroke="white"
                                className="w-4 h-4"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
                                />
                              </svg>
                            </div>
                            <p className="font-bold text-sm">Transfer Bank</p>
                          </div>
                          {/* <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </div> */}
                        </div>
                        <div>
                          <div className="flex items-center pl-6 cursor-pointer  hover:bg-gray-100 gap-4 border-t-2 ">
                            <Image
                              src={Bsi}
                              alt="bank"
                              width={400}
                              height={400}
                              className="w-14 h-14 object-contain"
                            />
                            <p className="text-sm">Bank Syariah Indonesia</p>
                          </div>
                          <div className="flex items-center pl-6 cursor-pointer  hover:bg-gray-100 gap-4 border-t-2">
                            <Image
                              src={Bni}
                              alt="bank"
                              width={400}
                              height={400}
                              className="w-14 h-14 object-contain"
                            />
                            <p className="text-sm">Bank BNI</p>
                          </div>
                          <div className="flex items-center pl-6 cursor-pointer  hover:bg-gray-100 gap-4 border-t-2">
                            <Image
                              src={Btn}
                              alt="bank"
                              width={400}
                              height={400}
                              className="w-14 h-14 object-contain"
                            />
                            <p className="text-sm">Bank BTN</p>
                          </div>
                          <div className="flex items-center pl-6 cursor-pointer  hover:bg-gray-100 gap-4 border-t-2">
                            <Image
                              src={Bri}
                              alt="bank"
                              width={400}
                              height={400}
                              className="w-14 h-14 object-contain"
                            />
                            <p className="text-sm">Bank BRI</p>
                          </div>
                          <div className="flex items-center pl-6 cursor-pointer  hover:bg-gray-100 gap-4 border-t-2">
                            <Image
                              src={Ntb}
                              alt="bank"
                              width={400}
                              height={400}
                              className="w-14 h-14 object-contain"
                            />
                            <p className="text-sm">Bank NTB Syariah</p>
                          </div>
                          <div className="flex items-center pl-6 cursor-pointer  hover:bg-gray-100 gap-4 border-t-2">
                            <Image
                              src={Mandiri}
                              alt="bank"
                              width={400}
                              height={400}
                              className="w-14 h-14 object-contain"
                            />
                            <p className="text-sm">Bank Mandiri</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="flex flex-col gap-4">
                  <Input
                    label="Nama"
                    name="nama"
                    type="text"
                    placeholder="Nama"
                    custom="bg-gray-50"
                  />
                  <Input
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="@gmail.com"
                    custom="bg-gray-50"
                  />
                  <Input
                    label="Nomor Telepon"
                    name="telepon"
                    type="number"
                    placeholder="0812xxxx"
                    custom="bg-gray-50"
                  />
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      name="sembunyikan"
                      id="sembunyikan"
                      className="mx-2 cursor-pointer"
                    />
                    <label htmlFor="sembunyikan" className=" cursor-pointer">
                      *Sembunyikan nama saya sebagai Anonim
                    </label>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p>Harapan untuk donasi ini</p>
                    <textarea
                      name="pesan"
                      id="pesan"
                      className="w-full px-4 py-2 border border-black rounded-lg focus:outline-primary-600 bg-gray-50"
                      rows={10}
                      placeholder="Tulis pesanmu disini..."
                    />
                  </div>
                </div>
              </form>
            </div>
            <div className="w-1/2 flex h-min flex-col gap-4 p-6 border-2 rounded-lg shadow-lg">
              <p className="font-bold">Rincian Pembayaran</p>
              <div className="flex flex-col gap-4 my-4">
                <div className="flex justify-between">
                  <p>Donasi</p>
                  <p>Rp. 480.000.000</p>
                </div>
                <div className="flex justify-between">
                  <p>Biaya Admin</p>
                  <p>Rp. 140.000</p>
                </div>
                <div className="flex justify-between border-t-2 border-slate-400 pt-4">
                  <p className="font-bold">Total</p>
                  <p className="font-bold">Rp. 480.140.000</p>
                </div>
              </div>
              <div className="flex">
                <Button
                  href="/donasi/pembayaran"
                  text="Donasi"
                  type="primary"
                  size="large"
                  custom="w-full"
                  textCustom="font-bold "
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Pembayaran;
