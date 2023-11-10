import Layout from "@/layout/layout";
import Link from "next/link";
import React, { ChangeEvent, FormEvent, useState } from "react";
import Image from "next/image";
import Logo from "@/assets/images/logo.png";
import DaftarImg from "@/assets/images/daftar.png";
import Button from "@/components/button";
import { Poppins } from "next/font/google";
import Input from "@/components/input";
import ButtonSubmit from "@/components/buttonSubmit";
import { Router, useRouter } from "next/router";

const poppins = Poppins({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

type inputType = {
  nama: string;
  username: string;
  email: string;
  telepon: string;
  jenisKelamin: string;
  password: string;
  konfirmasi: string;
  sdk: boolean;
};

function Daftar() {
  const router = useRouter();

  const [selectedValue, setSelectedValue] = useState("");

  const handleDropdownChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
  };

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const formDataObject = {
      nama: formData.get("nama") as string,
      username: formData.get("username") as string,
      email: formData.get("email") as string,
      telepon: formData.get("telepon") as string,
      jenisKelamin: formData.get("jenisKelamin") as string,
      password: formData.get("password") as string,
      konfirmasi: formData.get("konfirmasi") as string,
      //sdk: formData.get("ingat") === "true", // Set ingat to true if the form value is "true", otherwise, it will be false
    } as inputType;
    console.log(formDataObject);
  }

  return (
    <div className={poppins.className}>
      <header className="fixed px-24 py-3 top-0 w-full">
        <div className="logo">
          <Link href={"/"}>
            <Image
              src={Logo}
              alt="logo"
              width={400}
              height={400}
              className="object-contain w-44"
              priority
            />
          </Link>
        </div>
      </header>
      <main>
        <div className="flex justify-center gap-24 my-[130px]">
          <div className="relative w-[450px]">
            <div className="w-[450px] fixed px-10">
              <Image
                src={DaftarImg}
                alt="image"
                className="w-full h-full object-contain"
                priority
              />
            </div>
          </div>
          <div className="flex flex-col justify-start items-center w-[450px] py-10 px-10 bg-secondary-50 rounded-xl border-2 border-secondary-200 shadow-lg">
            <p className="text-2xl font-bold">Daftar</p>
            <p className="text-center max-w-[320px]">
              Hai, Masukan data Anda untuk Membuat akun Anda
            </p>
            <form
              action="submit"
              onSubmit={handleSubmit}
              className="w-full flex flex-col gap-4 mt-6 mb-3"
            >
              <Input
                name="nama"
                label="Nama"
                placeholder="Nama Lengkap"
                type="text"
              />
              <Input
                name="username"
                label="Username"
                placeholder="Username"
                type="text"
              />
              <Input
                name="email"
                label="Email"
                placeholder="email@gmail.com"
                type="email"
              />
              <Input
                name="telepon"
                label="Nomor Telepon"
                placeholder="08xxxxxx"
                type="text"
              />
              <div className="w-full flex flex-col gap-1">
                <label htmlFor="dropdown">Jenis Kelamin</label>
                <select
                  id="jenisKelamin"
                  name="jenisKelamin"
                  style={{ padding: "0.5rem 0.7rem" }}
                  value={selectedValue}
                  onChange={handleDropdownChange}
                  className="w-full px-4 py-2 bg-secondary-50 border border-black rounded-lg focus:outline-primary-600"
                >
                  <option value="laki-laki">Laki Laki</option>
                  <option value="perempuan">Perempuan</option>
                </select>
              </div>
              <Input
                name="password"
                label="Kata Sandi"
                placeholder="Masukan Kata Sandi"
                type="password"
              />
              <Input
                name="konfirmasi"
                label="Konfirmasi Kata Sandi"
                placeholder="Konfirmasi Kata Sandi"
                type="password"
              />
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="sdk"
                  id="ingat"
                  className="mr-2 cursor-pointer"
                  value="true"
                />
                <label htmlFor="sdk" className="text-xs">
                  Dengan membuat akun, Anda setuju dengan{" "}
                  <span
                    className="text-blue-600 cursor-pointer hover:underline"
                    onClick={() => {
                      router.push("/sdk");
                    }}
                  >
                    Syarat dan Ketentuan
                  </span>
                </label>
              </div>
              <ButtonSubmit text="Daftar" type="primary" custom="w-full" />
            </form>
            <p className="text-sm mt-4 mb-2">
              - Sudah memiliki akun?{" "}
              <span className="font-bold">Masuk sekarang!</span> -
            </p>
            <Button
              href="/masuk"
              text="Masuk"
              type="border"
              custom="w-full bg-primary-50"
              textCustom="text-primary-600"
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Daftar;
