import Layout from "@/layout/layout";
import Link from "next/link";
import React, { FormEvent } from "react";
import Image from "next/image";
import Logo from "@/assets/images/logo.png";
import Login from "@/assets/images/login.png";
import Button from "@/components/button";
import { Poppins } from "next/font/google";
import Input from "@/components/input";
import ButtonSubmit from "@/components/buttonSubmit";

const poppins = Poppins({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

type inputType = {
  email: string;
  password: string;
  ingat: boolean;
};

function Masuk() {
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const formDataObject = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
      ingat: formData.get("ingat") === "true", // Set ingat to true if the form value is "true", otherwise, it will be false
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
        <div className="flex justify-center gap-24 mt-[130px]">
          <div className="flex flex-col justify-start items-center w-[450px] py-10 px-10 bg-secondary-50 rounded-xl border-2 border-secondary-200 shadow-lg">
            <p className="text-2xl font-bold">Masuk</p>
            <p className="text-center max-w-[320px]">
              Hai, Masukan data Anda untuk Mengakses akun Anda
            </p>
            <form
              action="submit"
              onSubmit={handleSubmit}
              className="w-full flex flex-col gap-4 mt-6 mb-3"
            >
              <Input name="email" label="Email" placeholder="Email" type="email" />
              <Input name="password" label="Kata Sandi" placeholder="Kata Sandi" type="password" />
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="ingat"
                  id="ingat"
                  className="mr-2 cursor-pointer"
                  value="true"
                />
                <label htmlFor="ingat" className="text-xs">
                  Ingat Saya
                </label>
              </div>
              <ButtonSubmit text="Masuk" type="primary" custom="w-full" />
            </form>
            <Link href={""} className="text-sm text-blue-600">Lupa Kata Sandi</Link>
            <p className="text-sm mt-4 mb-2">
              - Belum memiliki akun? <span className="font-bold">Daftar sekarang!</span> -
            </p>
            <Button href="/daftar" text="Daftar Sekarang" type="border" custom="w-full bg-primary-50" textCustom="text-primary-600"/>
          </div>
          <div className="w-[450px]">
            <Image
              src={Login}
              alt="image"
              className="w-full h-full object-contain"
              priority
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Masuk;
