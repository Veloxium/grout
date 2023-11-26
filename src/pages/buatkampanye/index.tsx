import Button from "@/components/button";
import Input from "@/components/input";
import Layout from "@/layout/layout";
import Image from "next/image";
import React, { ChangeEvent, useState } from "react";

function BuatKampanye() {
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



  return (
    <Layout>
      <section>
        <div className="flex flex-col items-center justify-center py-24">
          <p className="text-4xl font-bold">Bersama GrOUT</p>
          <p className="text-4xl font-bold">
            Bersatu untuk Kehidupan Berkelanjutan
          </p>
          <div className="relative mt-10 flex items-center justify-center gap-[140px]">
            <div className="absolute -z-10 h-1 bg-slate-200 mb-6 w-[1100px] " />
            <div className="flex flex-col justify-center items-center gap-2">
              <div className="w-14 h-14 flex justify-center items-center bg-white border-2 border-primary-600 rounded-full">
                <div className="w-4 h-4 bg-primary-600 rounded-full"></div>
              </div>
              <p>Data Penggerak</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
              <div className="w-14 h-14 flex justify-center items-center bg-white border-2 rounded-full"></div>
              <p>Data Bibit Pohon</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
              <div className="w-14 h-14 flex justify-center items-center bg-white border-2 rounded-full"></div>
              <p>Data Bibit Pohon</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
              <div className="w-14 h-14 flex justify-center items-center bg-white border-2 rounded-full"></div>
              <p>Data Bibit Pohon</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
              <div className="w-14 h-14 flex justify-center items-center bg-white border-2 rounded-full"></div>
              <p>Data Bibit Pohon</p>
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
                <Button
                  text="Kembali"
                  type="border"
                  textCustom="text-primary-600"
                  size="xlarge"
                  custom="w-[270px]"
                  shadow
                  disabled
                />
                <Button
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
      </section>
    </Layout>
  );
}

export default BuatKampanye;
