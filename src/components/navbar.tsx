import Link from "next/link";
import React from "react";
import Image from "next/image";
import Logo from "@/assets/images/logo.png";
import { useRouter } from "next/router";
import { Poppins } from "next/font/google";
import Button from "./button";

const poppins = Poppins({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

function Navbar() {
  const router = useRouter();
  const navLinks = [
    { text: "Beranda", path: "/" },
    { text: "Donasi", path: "/donasi" },
    { text: "Artikel", path: "/artikel" },
    { text: "Galeri", path: "/galeri" },
    { text: "Tentang Kami", path: "/tentang" },
  ];

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Enable smooth scrolling
    });
  };

  return (
    <header>
      <nav className="fixed w-full top-0 bg-white px-24 py-2 flex items-center justify-between shadow-md z-50">
        <div className="logo">
          <div
            className="cursor-pointer"
            onClick={
              router.pathname == "/"
                ? scrollUp
                : () => {
                    router.push("/");
                  }
            }
          >
            <Image
              src={Logo}
              alt="Logo"
              width={400}
              height={400}
              className="object-contain w-44"
            />
          </div>
        </div>
        <div className={`menu flex ${poppins.className}`}>
          {navLinks.map((link, index) => (
            <div
              key={index}
              onClick={
                router.pathname == link.path
                  ? scrollUp
                  : () => {
                      router.push(link.path);
                    }
              }
              className={
                router.pathname == link.path
                  ? " text-xl cursor-pointer px-6 py-4 text-primary-600 hover:text-primary-400 ease-out duration-300 rounded-md font-semibold"
                  : " text-xl cursor-pointer px-6 py-4 hover:text-primary-400 ease-out duration-300 rounded-md"
              }
            >
              {link.text}
            </div>
          ))}
        </div>
        <div className="btn flex gap-6">
          <Button
            text="Masuk"
            textCustom="font-bold"
            size="large"
            type="primary"
            href="/masuk"
            shadow
          />
          <Button
            text="Daftar"
            textCustom="font-bold text-primary-600"
            size="large"
            type="accent"
            href="/daftar"
            shadow
          />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
