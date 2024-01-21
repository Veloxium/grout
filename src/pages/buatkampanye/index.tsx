import Button from "@/components/button";
import ButtonSubmit from "@/components/buttonSubmit";
import Input from "@/components/input";
import Layout from "@/layout/layout";
import Image from "next/image";
import React, { ChangeEvent, useState } from "react";

function BuatKampanye() {
  const [step, setStep] = useState<number>(0);
  const [image, setImage] = useState<string | null>();

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const nextStep = (e: any) => {
    e.preventDefault();
    setStep(step + 1);
  };

  function StepSatu() {
    return (
      <div className="flex flex-col items-center justify-center py-24">
        <p className="text-4xl font-bold">Bersama GrOUT</p>
        <p className="text-4xl font-bold">
          Bersatu untuk Kehidupan Berkelanjutan
        </p>
        <div className="relative mt-10 flex items-center justify-center gap-[140px]">
          <div className="absolute -z-10 flex items-center justify-center">
            <div className="h-1 bg-slate-200 mb-6 w-[275px]" />
            <div className="h-1 bg-slate-200 mb-6 w-[275px]" />
            <div className="h-1 bg-slate-200 mb-6 w-[275px]" />
            <div className="h-1 bg-slate-200 mb-6 w-[275px]" />
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <div className="w-14 h-14 flex justify-center items-center bg-white border-2 border-primary-600 rounded-full">
              <div className="w-4 h-4 bg-primary-600 rounded-full" />
            </div>
            <p>Data Penggerak</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <div className="w-14 h-14 flex justify-center items-center bg-white border-2 rounded-full"></div>
            <p>Data Bibit Pohon</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <div className="w-14 h-14 flex justify-center items-center bg-white border-2 rounded-full"></div>
            <p>Data Wilayah</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <div className="w-14 h-14 flex justify-center items-center bg-white border-2 rounded-full"></div>
            <p>Berkas Wilayah</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <div className="w-14 h-14 flex justify-center items-center bg-white border-2 rounded-full"></div>
            <p>Detail Kampanye</p>
          </div>
        </div>
        <form action="submit" className="w-full">
          <div className="w-full flex flex-col my-20">
            <div className="w-full grid grid-cols-2 gap-x-20 gap-y-10 px-24">
              <Input
                name="nama"
                label="Nama"
                placeholder="Nama Lengkap"
                type="text"
                custom="bg-slate-50"
              />
              <Input
                name="telepon"
                label="Nomor Telepon"
                placeholder="0812345"
                type="text"
                custom="bg-slate-50"
              />
              <Input
                name="email"
                label="Email"
                placeholder="email@gmail.com"
                type="email"
                custom="bg-slate-50"
              />
              <Input
                name="alamat"
                label="Alamat"
                placeholder="Alamat Lengkap pada KTP"
                type="text"
                custom="bg-slate-50"
              />
              <Input
                name="kota"
                label="Kota/Kabupaten"
                placeholder="Kota/Kabupaten pada KTP"
                type="text"
                custom="bg-slate-50"
              />
              <Input
                name="provinsi"
                label="Provinsi"
                placeholder="Provinsi pada KTP"
                type="text"
                custom="bg-slate-50"
              />
              <Input
                name="bank"
                label="Nama Bank"
                placeholder="Nama Bank yang digunakan"
                type="text"
                custom="bg-slate-50"
              />
              <Input
                name="rekening"
                label="Nomor Rekening"
                placeholder="Nomor Rekening yang digunakan"
                type="text"
                custom="bg-slate-50"
              />
            </div>
            <div className="flex flex-col gap-2 px-24 mt-10">
              <label htmlFor="biografi">Biografi</label>
              <textarea
                name="biografi"
                id="biografi"
                className="w-full px-4 py-2 border border-black rounded-lg focus:outline-primary-600 bg-gray-50"
                rows={10}
                placeholder="Biografi singkat anda..."
              />
            </div>
            <div className="flex flex-col gap-2 px-24 mt-10">
              <label>Unggah Foto KTP</label>
              <input
                type="file"
                name="foto"
                id="foto"
                className="hidden"
                accept=".png, .jpeg, .jpg"
                onChange={handleImageChange}
              />
              <label htmlFor="foto">
                <div className="w-full h-[235px] cursor-pointer flex flex-col justify-center items-center px-4 py-2 border-2 border-dashed border-black rounded-lg focus:outline-primary-600 bg-gray-50">
                  {image ? (
                    <div className="w-full h-full overflow-hidden flex items-center justify-center">
                      <Image
                        src={image}
                        alt="Selected"
                        width={900}
                        height={900}
                        className="w-full object-cover rounded-lg"
                      />
                    </div>
                  ) : (
                    <div className="flex flex-col justify-center items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-20 h-20 text-slate-400"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                        />
                      </svg>
                      <p>Unggah Foto KTP</p>
                      <p>Ukuran Maksimal = 1MB</p>
                      <p>Format Berkas JPG/JPEG/PNG</p>
                    </div>
                  )}
                </div>
              </label>
            </div>
            <div className="flex justify-evenly items-center mt-16">
              <ButtonSubmit
                text="Kembali"
                type="border"
                textCustom="text-primary-600"
                size="xlarge"
                custom="w-[270px]"
                onClick={(e) => {
                  e.preventDefault();
                  setStep(step - 1);
                  window.scrollTo(0, 0);
                }}
                shadow
              />
              <ButtonSubmit
                onClick={(e) => {
                  e.preventDefault();
                  setStep(step + 1);
                  window.scrollTo(0, 0);
                }}
                text="Selanjutnya"
                type="primary"
                size="xlarge"
                custom="w-[270px]"
                shadow
              />
            </div>
          </div>
        </form>
      </div>
    );
  }

  function StepDua() {
    return (
      <div className="flex flex-col items-center justify-center py-24">
        <p className="text-4xl font-bold">Bersama GrOUT</p>
        <p className="text-4xl font-bold">
          Bersatu untuk Kehidupan Berkelanjutan
        </p>
        <div className="relative mt-10 flex items-center justify-center gap-[140px]">
          <div className="absolute -z-10 flex items-center justify-center">
            <div className="h-1 bg-primary-600 mb-6 w-[275px]" />
            <div className="h-1 bg-slate-200 mb-6 w-[275px]" />
            <div className="h-1 bg-slate-200 mb-6 w-[275px]" />
            <div className="h-1 bg-slate-200 mb-6 w-[275px]" />
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <div className="w-14 h-14 flex justify-center items-center bg-primary-600 border-2 border-primary-600 rounded-full">
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
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            </div>
            <p>Data Penggerak</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <div className="w-14 h-14 flex justify-center items-center bg-white border-2 border-primary-600 rounded-full">
              <div className="w-4 h-4 bg-primary-600 rounded-full" />
            </div>
            <p>Data Bibit Pohon</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <div className="w-14 h-14 flex justify-center items-center bg-white border-2 rounded-full"></div>
            <p>Data Wilayah</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <div className="w-14 h-14 flex justify-center items-center bg-white border-2 rounded-full"></div>
            <p>Berkas Wilayah</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <div className="w-14 h-14 flex justify-center items-center bg-white border-2 rounded-full"></div>
            <p>Detail Kampanye</p>
          </div>
        </div>
        <form action="submit" className="w-full">
          <div className="w-full flex flex-col my-20">
            <div className="w-full flex flex-col gap-x-20 gap-y-10 px-24">
              <Input
                name="jenisBibit"
                label="Jenis bibit yang akan ditanam"
                placeholder="cth : Mangrove Rhizophora"
                type="text"
                custom="bg-slate-50"
              />
              <div className="flex w-full gap-10">
                <div className="flex flex-col gap-2 w-full">
                  <p>Harga Bibit</p>
                  <div className="flex">
                    <p className="px-4 py-2 bg-slate-200 rounded-l-lg">Rp.</p>
                    <input
                      type="number"
                      className="bg-slate-50 px-4 py-2 w-full border-2 rounded-r-lg focus:outline-primary-600"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <p>Target Penanaman</p>

                  <div className="flex flex-row-reverse">
                    <p className="px-4 py-2 bg-slate-200 rounded-r-lg">Pohon</p>
                    <input
                      type="number"
                      className="bg-slate-50 px-4 py-2 w-full border-2 rounded-l-lg focus:outline-primary-600"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-evenly items-center mt-16">
              <ButtonSubmit
                text="Kembali"
                type="border"
                textCustom="text-primary-600"
                size="xlarge"
                custom="w-[270px]"
                onClick={(e) => {
                  e.preventDefault();
                  setStep(step - 1);
                  window.scrollTo(0, 0);
                }}
                shadow
              />
              <ButtonSubmit
                onClick={(e: any) => {
                  e.preventDefault();
                  setStep(step + 1);
                  window.scrollTo(0, 0);
                }}
                text="Selanjutnya"
                type="primary"
                size="xlarge"
                custom="w-[270px]"
                shadow
              />
            </div>
          </div>
        </form>
      </div>
    );
  }

  function StepTiga() {
    return (
      <div className="flex flex-col items-center justify-center py-24">
        <p className="text-4xl font-bold">Bersama GrOUT</p>
        <p className="text-4xl font-bold">
          Bersatu untuk Kehidupan Berkelanjutan
        </p>
        <div className="relative mt-10 flex items-center justify-center gap-[140px]">
          <div className="absolute -z-10 flex items-center justify-center">
            <div className="h-1 bg-primary-600 mb-6 w-[275px]" />
            <div className="h-1 bg-primary-600 mb-6 w-[275px]" />
            <div className="h-1 bg-slate-200 mb-6 w-[275px]" />
            <div className="h-1 bg-slate-200 mb-6 w-[275px]" />
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <div className="w-14 h-14 flex justify-center items-center bg-primary-600 border-2 border-primary-600 rounded-full">
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
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            </div>
            <p>Data Penggerak</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <div className="w-14 h-14 flex justify-center items-center bg-primary-600 border-2 border-primary-600 rounded-full">
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
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            </div>

            <p>Data Bibit Pohon</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <div className="w-14 h-14 flex justify-center items-center bg-white border-2 border-primary-600 rounded-full">
              <div className="w-4 h-4 bg-primary-600 rounded-full" />
            </div>
            <p>Data Wilayah</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <div className="w-14 h-14 flex justify-center items-center bg-white border-2 rounded-full"></div>
            <p>Berkas Wilayah</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <div className="w-14 h-14 flex justify-center items-center bg-white border-2 rounded-full"></div>
            <p>Detail Kampanye</p>
          </div>
        </div>
        <form action="submit" className="w-full">
          <div className="w-full flex flex-col my-20">
            <div className="w-full grid grid-cols-2 gap-x-20 gap-y-10 px-24">
              <Input
                name="wilayah"
                label="Wilayah Penanaman"
                placeholder="Nama wilayah penanaman"
                type="text"
                custom="bg-slate-50"
              />
              <Input
                name="tanggal"
                label="Tanggal Penanaman"
                placeholder="DD/MM/YYYY"
                type="text"
                custom="bg-slate-50"
              />
              <Input
                name="alamat"
                label="Alamat Wilayah Penanaman"
                placeholder="Alamat lengkap wilayah penanaman"
                type="text"
                custom="bg-slate-50"
              />
              <Input
                name="kota"
                label="Kota Penanaman"
                placeholder="Kota/Kabupaten Penanaman"
                type="text"
                custom="bg-slate-50"
              />
            </div>
            <div className="flex flex-col gap-2 px-24 mt-10">
              <label htmlFor="biografi">Deskripsi Wilayah Penanaman</label>
              <textarea
                name="wilayahdesc"
                id="wilayahdesc"
                className="w-full px-4 py-2 border border-black rounded-lg focus:outline-primary-600 bg-gray-50"
                rows={8}
                placeholder="Deskripsi singkat wilayah penanaman..."
              />
            </div>
            <div className="flex flex-col gap-2 px-24 mt-10">
              <label>Unggah Foto Wilayah</label>
              <input
                type="file"
                name="foto"
                id="foto"
                className="hidden"
                accept=".png, .jpeg, .jpg"
                onChange={handleImageChange}
              />
              <label htmlFor="foto">
                <div className="w-full h-[235px] cursor-pointer flex flex-col justify-center items-center px-4 py-2 border-2 border-dashed border-black rounded-lg focus:outline-primary-600 bg-gray-50">
                  {image ? (
                    <div className="w-full h-full overflow-hidden flex items-center justify-center">
                      <Image
                        src={image}
                        alt="Selected"
                        width={900}
                        height={900}
                        className="w-full object-cover rounded-lg"
                      />
                    </div>
                  ) : (
                    <div className="flex flex-col justify-center items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-20 h-20 text-slate-400"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                        />
                      </svg>
                      <p>Unggah Foto KTP</p>
                      <p>Ukuran Maksimal = 1MB</p>
                      <p>Format Berkas JPG/JPEG/PNG</p>
                    </div>
                  )}
                </div>
              </label>
            </div>
            <div className="flex justify-evenly items-center mt-16">
              <ButtonSubmit
                text="Kembali"
                type="border"
                textCustom="text-primary-600"
                size="xlarge"
                custom="w-[270px]"
                onClick={(e) => {
                  e.preventDefault();
                  setStep(step - 1);
                  window.scrollTo(0, 0);
                }}
                shadow
              />
              <ButtonSubmit
                onClick={(e: any) => {
                  e.preventDefault();
                  setStep(step + 1);
                  window.scrollTo(0, 0);
                }}
                text="Selanjutnya"
                type="primary"
                size="xlarge"
                custom="w-[270px]"
                shadow
              />
            </div>
          </div>
        </form>
      </div>
    );
  }

  function StepEmpat() {
    return (
      <div className="flex flex-col items-center justify-center py-24">
        <p className="text-4xl font-bold">Bersama GrOUT</p>
        <p className="text-4xl font-bold">
          Bersatu untuk Kehidupan Berkelanjutan
        </p>
        <div className="relative mt-10 flex items-center justify-center gap-[140px]">
          <div className="absolute -z-10 flex items-center justify-center">
            <div className="h-1 bg-primary-600 mb-6 w-[275px]" />
            <div className="h-1 bg-primary-600 mb-6 w-[275px]" />
            <div className="h-1 bg-primary-600 mb-6 w-[275px]" />
            <div className="h-1 bg-slate-200 mb-6 w-[275px]" />
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <div className="w-14 h-14 flex justify-center items-center bg-primary-600 border-2 border-primary-600 rounded-full">
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
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            </div>
            <p>Data Penggerak</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <div className="w-14 h-14 flex justify-center items-center bg-primary-600 border-2 border-primary-600 rounded-full">
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
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            </div>

            <p>Data Bibit Pohon</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <div className="w-14 h-14 flex justify-center items-center bg-primary-600 border-2 border-primary-600 rounded-full">
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
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            </div>
            <p>Data Wilayah</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <div className="w-14 h-14 flex justify-center items-center bg-white border-2 border-primary-600 rounded-full">
              <div className="w-4 h-4 bg-primary-600 rounded-full" />
            </div>
            <p>Berkas Wilayah</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <div className="w-14 h-14 flex justify-center items-center bg-white border-2 rounded-full"></div>
            <p>Detail Kampanye</p>
          </div>
        </div>
        <form action="submit" className="w-full">
          <div className="w-full flex flex-col my-20">
            <div className="flex flex-col gap-2 px-24 mt-10">
              <div className="flex justify-between items-end">
                <label>Unggah Dokumen MOU</label>
                <div className="text-blue-600 flex gap-1">
                  <p>Unduh Template</p>
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
                      d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                    />
                  </svg>
                </div>
              </div>
              <input
                type="file"
                name="foto"
                id="foto"
                className="hidden"
                accept=".png, .jpeg, .jpg"
                onChange={handleImageChange}
              />
              <label htmlFor="file">
                <div className="w-full cursor-pointer flex border-2 border-black rounded-lg focus:outline-primary-600 bg-gray-50">
                  {image ? (
                    <div className="w-full h-full overflow-hidden flex items-center justify-center px-4 py-4 ">
                      <p>{image}</p>
                    </div>
                  ) : (
                    <div className="flex  w-full justify-start items-center">
                      <div className="bg-primary-600 px-6 py-4">
                        <p className="text-white">Browse</p>
                      </div>
                      <div className="px-4 py-4 ">
                        <p>No file Selected</p>
                      </div>
                    </div>
                  )}
                </div>
              </label>
            </div>
            <div className="flex flex-col gap-2 px-24 mt-10">
              <div className="flex justify-between items-end">
                <label>Unggah Berkas Izin Wilayah Penanaman</label>
                <div className="text-blue-600 flex gap-1">
                  <p>Unduh Template</p>
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
                      d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                    />
                  </svg>
                </div>
              </div>
              <input
                type="file"
                name="foto"
                id="foto"
                className="hidden"
                accept=".png, .jpeg, .jpg"
                onChange={handleImageChange}
              />
              <label htmlFor="file">
                <div className="w-full cursor-pointer flex border-2 border-black rounded-lg focus:outline-primary-600 bg-gray-50">
                  {image ? (
                    <div className="w-full h-full overflow-hidden flex items-center justify-center px-4 py-4 ">
                      <p>{image}</p>
                    </div>
                  ) : (
                    <div className="flex  w-full justify-start items-center">
                      <div className="bg-primary-600 px-6 py-4">
                        <p className="text-white">Browse</p>
                      </div>
                      <div className="px-4 py-4 ">
                        <p>No file Selected</p>
                      </div>
                    </div>
                  )}
                </div>
              </label>
            </div>
            <div className="flex justify-evenly items-center mt-16">
              <ButtonSubmit
                text="Kembali"
                type="border"
                textCustom="text-primary-600"
                size="xlarge"
                custom="w-[270px]"
                onClick={(e) => {
                  e.preventDefault();
                  setStep(step - 1);
                  window.scrollTo(0, 0);
                }}
                shadow
              />
              <ButtonSubmit
                onClick={(e: any) => {
                  e.preventDefault();
                  setStep(step + 1);
                  window.scrollTo(0, 0);
                }}
                text="Selanjutnya"
                type="primary"
                size="xlarge"
                custom="w-[270px]"
                shadow
              />
            </div>
          </div>
        </form>
      </div>
    );
  }

  function StepLima() {
    return (
      <div className="flex flex-col items-center justify-center py-24">
        <p className="text-4xl font-bold">Bersama GrOUT</p>
        <p className="text-4xl font-bold">
          Bersatu untuk Kehidupan Berkelanjutan
        </p>
        <div className="relative mt-10 flex items-center justify-center gap-[140px]">
          <div className="absolute -z-10 flex items-center justify-center">
            <div className="h-1 bg-primary-600 mb-6 w-[275px]" />
            <div className="h-1 bg-primary-600 mb-6 w-[275px]" />
            <div className="h-1 bg-primary-600 mb-6 w-[275px]" />
            <div className="h-1 bg-primary-600 mb-6 w-[275px]" />
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <div className="w-14 h-14 flex justify-center items-center bg-primary-600 border-2 border-primary-600 rounded-full">
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
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            </div>
            <p>Data Penggerak</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <div className="w-14 h-14 flex justify-center items-center bg-primary-600 border-2 border-primary-600 rounded-full">
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
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            </div>

            <p>Data Bibit Pohon</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <div className="w-14 h-14 flex justify-center items-center bg-primary-600 border-2 border-primary-600 rounded-full">
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
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            </div>
            <p>Data Wilayah</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <div className="w-14 h-14 flex justify-center items-center bg-primary-600 border-2 border-primary-600 rounded-full">
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
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            </div>
            <p>Berkas Wilayah</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <div className="w-14 h-14 flex justify-center items-center bg-white border-2 border-primary-600 rounded-full">
              <div className="w-4 h-4 bg-primary-600 rounded-full" />
            </div>
            <p>Detail Kampanye</p>
          </div>
        </div>
        <form action="submit" className="w-full">
          <div className="w-full flex flex-col my-20">
            <div className="w-full gap-x-20 gap-y-10 px-24 mb-10">
              <Input
                name="judul"
                label="Judul Kampanye"
                placeholder="cth : 1001 Pohon untuk Aksi Hijau Bersama BRIDA"
                type="text"
                custom="bg-slate-50"
              />
            </div>
            <div className="w-full grid grid-cols-2 gap-x-20 gap-y-10 px-24">
              <Input
                name="batas"
                label="Batas Waktu Penggalangan Dana"
                placeholder="DD/MM/YYYY"
                type="text"
                custom="bg-slate-50"
              />
              <Input
                name="volunter"
                label="Link Pendaftaran Volunter(opsional)"
                placeholder="Link Pendaftaran"
                type="text"
                custom="bg-slate-50"
              />
            </div>
            <div className="flex flex-col gap-2 px-24 mt-10">
              <label htmlFor="biografi">Ceritakan Tentang Kampanye Anda</label>
              <textarea
                name="kampanyedesc"
                id="kampanyedesc"
                className="w-full px-4 py-2 border border-black rounded-lg focus:outline-primary-600 bg-gray-50"
                rows={8}
                placeholder="Ceritakan tentang Kampanye Anda serta Alasan, Manfaat, dan kalimat ajakan untuk mendukung kampanye alam anda..."
              />
            </div>
            <div className="flex flex-col gap-2 px-24 mt-10">
              <label>Unggah Banner Kampanye</label>
              <input
                type="file"
                name="foto"
                id="foto"
                className="hidden"
                accept=".png, .jpeg, .jpg"
                onChange={handleImageChange}
              />
              <label htmlFor="foto">
                <div className="w-full h-[235px] cursor-pointer flex flex-col justify-center items-center px-4 py-2 border-2 border-dashed border-black rounded-lg focus:outline-primary-600 bg-gray-50">
                  {image ? (
                    <div className="w-full h-full overflow-hidden flex items-center justify-center">
                      <Image
                        src={image}
                        alt="Selected"
                        width={900}
                        height={900}
                        className="w-full object-cover rounded-lg"
                      />
                    </div>
                  ) : (
                    <div className="flex flex-col justify-center items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-20 h-20 text-slate-400"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                        />
                      </svg>
                      <p>Unggah Foto KTP</p>
                      <p>Ukuran Maksimal = 1MB</p>
                      <p>Format Berkas JPG/JPEG/PNG</p>
                    </div>
                  )}
                </div>
              </label>
            </div>
            <div className="flex justify-evenly items-center mt-16">
              <ButtonSubmit
                text="Kembali"
                type="border"
                textCustom="text-primary-600"
                size="xlarge"
                custom="w-[270px]"
                onClick={(e) => {
                  e.preventDefault();
                  setStep(step - 1);
                  window.scrollTo(0, 0);
                }}
                shadow
              />
              <Button
                href="/"
                text="Selanjutnya"
                type="primary"
                size="xlarge"
                custom="w-[270px]"
                shadow
              />
            </div>
          </div>
        </form>
      </div>
    );
  }

  const page = [
    <StepSatu />,
    <StepDua />,
    <StepTiga />,
    <StepEmpat />,
    <StepLima />,
  ];

  return (
    <Layout>
      <section>{page[step]}</section>
    </Layout>
  );
}

export default BuatKampanye;
