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
  const [hamburger, setHamburger] = React.useState(false);
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
      <nav className="fixed w-full top-0 bg-white px-10 lg:px-24 py-8 lg:py-1 flex items-center justify-between shadow-md z-50">
        <div className="logo">
          <div
            className="cursor-pointer w-72 lg:w-36"
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
              className="object-contain"
            />
          </div>
        </div>
        <div className={`hidden lg:flex ${poppins.className}`}>
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
        <div className="btn hidden lg:flex gap-6">
          <Button
            text="Masuk"
            textCustom="font-bold"
            size="medium"
            type="primary"
            href="/masuk"
            shadow
          />
          <Button
            text="Daftar"
            textCustom="font-bold text-primary-600"
            size="medium"
            type="accent"
            href="/daftar"
            shadow
          />
        </div>
        <div className="lg:hidden flex" onClick={()=>{
          setHamburger(!hamburger)
        }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-20 h-20 text-primary-600 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      </nav>
      {hamburger && (
        <div className="fixed top-32 z-40 bg-white h-full w-full">
          <div className="flex flex-col gap-10 items-center justify-center py-24">
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
                    ? " text-5xl cursor-pointer text-primary-600 px-6 py-4 hover:text-primary-400 ease-out duration-300 rounded-md font-semibold"
                    : " text-5xl cursor-pointer text-primary-600 px-6 py-4 hover:text-primary-400 ease-out duration-300 rounded-md"
                }
              >
                {link.text}
              </div>
            ))}
            <div className="btn flex flex-col gap-10">
              <Button
                text="Masuk"
                textCustom="font-bold text-5xl"
                size="xlarge"
                type="primary"
                href="/masuk"
                shadow
              />
              <Button
                text="Daftar"
                textCustom="font-bold text-primary-600 text-5xl"
                size="xlarge"
                type="accent"
                href="/daftar"
                shadow
              />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
