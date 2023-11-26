import Link from "next/link";
import React from "react";
import Image from "next/image";
import Logo from "@/assets/images/logo.png";
import SdKImg from "@/assets/images/sdk.png";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

function SdK() {
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
        <div className="flex justify-center gap-24 my-[100px]">
          <div className="relative w-[450px]">
            <div className="w-[450px] fixed">
              <Image
                src={SdKImg}
                alt="image"
                className="w-full h-full object-contain"
                priority
              />
            </div>
          </div>
          <div className="flex flex-col justify-start items-center w-[750px] py-10 px-10">
            <div className="flex w-full justify-end">
              <Link href={"/daftar"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8 stroke-primary-600 hover:stroke-secondary-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9.75L14.25 12m0 0l2.25 2.25M14.25 12l2.25-2.25M14.25 12L12 14.25m-2.58 4.92l-6.375-6.375a1.125 1.125 0 010-1.59L9.42 4.83c.211-.211.498-.33.796-.33H19.5a2.25 2.25 0 012.25 2.25v10.5a2.25 2.25 0 01-2.25 2.25h-9.284c-.298 0-.585-.119-.796-.33z"
                  />
                </svg>
              </Link>
            </div>
            <p className="text-2xl font-bold">Syarat dan Ketentuan GrOUT</p>
            <div className="flex flex-col gap-4 mt-4">
              <p className="text-sm">
                Selamat datang di GrOUT, platform donasi pohon yang bertujuan
                untuk menciptakan perubahan positif bagi lingkungan. Sebelum
                Anda menggunakan layanan kami, harap membaca dengan seksama
                syarat dan ketentuan di bawah ini
              </p>
              <div className="flex flex-col gap-4">
                <p className="font-bold my-2">1. Donasi</p>
                <p>
                  a. Donasi yang diberikan sepenuhnya bersifat sukarela dan
                  non-refundable.
                </p>
                <p>
                  b. GrOUT berhak menggunakan dana donasi untuk kegiatan
                  penanaman pohon, pemeliharaan, dan kegiatan terkait lainnya.
                </p>
                <p>
                  c. GrOUT akan menyediakan laporan transparan tentang
                  penggunaan dana donasi secara berkala.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="font-bold my-2">2. Privasi</p>
                <p>
                  a. Informasi pribadi yang Anda berikan saat mendaftar atau
                  berdonasi akan dijaga kerahasiaannya sesuai dengan kebijakan
                  privasi kami.
                </p>
                <p>
                  b. GrOUT berhak menggunakan informasi anonim untuk keperluan
                  statistik dan peningkatan layanan.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="font-bold my-2">3. Tanggung Jawab</p>
                <p>
                  a. GrOUT tidak bertanggung jawab atas kerusakan atau
                  kehilangan yang disebabkan oleh penggunaan informasi atau
                  layanan dari website ini.
                </p>
                <p>
                  b. Pengguna bertanggung jawab penuh atas keakuratan informasi
                  yang diberikan saat mendaftar atau berdonasi.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="font-bold my-2">4. Penggunaan Materi</p>
                <p>
                  a. Semua materi, termasuk tetapi tidak terbatas pada teks,
                  gambar, dan logo, adalah hak cipta GrOUT.
                </p>
                <p>
                  b. Pengguna tidak diperkenankan menggandakan,
                  mendistribusikan, atau menggunakan materi dari GrOUT tanpa
                  izin tertulis.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="font-bold my-2">
                  5. Perubahan Syarat dan Ketentuan
                </p>
                <p>
                  GrOUT berhak mengubah syarat dan ketentuan ini sesuai dengan
                  kebijakannya. Perubahan akan diinformasikan kepada pengguna
                  melalui website atau kontak yang terdaftar.
                </p>
                <p>
                  Dengan menggunakan layanan GrOUT, Anda dianggap telah membaca,
                  memahami, dan menyetujui syarat dan ketentuan ini. Jika Anda
                  tidak setuju dengan syarat dan ketentuan ini, harap
                  menghentikan penggunaan layanan GrOUT.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default SdK;
