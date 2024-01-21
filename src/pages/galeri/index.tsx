import Layout from "@/layout/layout";
import React, { useState } from "react";
import Background3 from "@/assets/images/galeribanner.png";
import Image from "next/image";
import CardGaleri from "@/components/cardGaleri";
import ModalGaleri from "@/components/modalGaleri";
import dynamic from "next/dynamic";
const MapsContainer = dynamic(() => import("@/components/maps"), {
  ssr: false,
});

function Galeri() {
  const [currentCardPage, setCurrentCardPage] = useState<number>(1);
  const [isModal, setIsModal] = useState<boolean>(false);
  const [galeriId, setGaleriId] = useState<number>(0);

  const handlepagination = (e: any) => {
    setCurrentCardPage(Number(e));
    // setCardNum((e - 1) * 12);
    const element = document.getElementById("galeriContainer");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const nextCardPage = () => {
    setCurrentCardPage(currentCardPage + 1);
    const element = document.getElementById("galeriContainer");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const prevCardPage = () => {
    if (currentCardPage == 1) {
      return;
    }
    setCurrentCardPage(currentCardPage - 1);
    const element = document.getElementById("galeriContainer");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const DataGaleri = [
    {
      id: 1,
      judul: "EXO-TREES: Save Our World with EXO, WE ARE ONE!",
      lokasi: "Loang Baloq, Kota Mataram",
      jenis: "Mangrove Rhizophora",
      harga: "Rp35.000",
      penyelenggara: "Ayak Keren Banget",
      jumlah: "1075",
      foto: "blablabla",
      tanggal: "Jumat, 30 Juni 2024",
      deskripsi:
        "Taman Loang Balok di NTB adalah kawasan konservasi mangrove, penting untuk melindungi ekosistem pesisir dan menjaga keanekaragaman hayati.",
      link: "https://s3-alpha-sig.figma.com/img/75a1/6328/521ed8c2f5eb443fb634630fd067a1d4?Expires=1704672000&Signature=RCJozVVkx1idhtpDpqkxBXhVJO7BW9l9D8zfCWmfbtrSKVuTz7KAtKIKpii9KRPgByq~Ek0hE7VkDiiXlvecOMNK6MyJ23Bramj-gviCTmLfsAH43bAcA~SDVIICIsjP0sOsH6yHmk98SodcvQ7SUaDFuPssFI5bgR05Miz28any88kgcGf4ThTwVL47V7UGsYUr71SN8iVF3uVHvc7yWCW50TyUayHbqdNNH~VMxc4k07EIVsF~e0sl-jVlDR8o8GkqWDI1lr8Z3cmKGPyBi93w4I2T23xQJCu5dXmJbR3d8t~Jpy4GqBz2WhgEeVs2~3A5-royKnUL~5DJLLlczg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
    {
      id: 2,
      judul: "2EXO-TREES: Save Our World with EXO, WE ARE ONE!",
      lokasi: "Loang Baloq, Kota Mataram",
      jenis: "Mangrove Rhizophora",
      harga: "Rp35.000",
      penyelenggara: "Ayak Keren Banget",
      jumlah: "1075",
      foto: "blablabla",
      tanggal: "Jumat, 30 Juni 2024",
      deskripsi:
        "Taman Loang Balok di NTB adalah kawasan konservasi mangrove, penting untuk melindungi ekosistem pesisir dan menjaga keanekaragaman hayati.",
      link: "https://s3-alpha-sig.figma.com/img/a383/575a/0bdea7a0c863be1dfb812c964f8e0c44?Expires=1704672000&Signature=Mf6zKoQsl40feTbeddEgJQAA4yYGB17qUqaerGjp1YHXzWlKYCWa4KE6DegmC~QYw-68NSBIfHjfB2YItmUmBxXspycjeJBuCWyI6dFx25~vzbjcFLpCjrCU38g8Q4clgXkJEyuXizD8ucrW3GeLDPkDGrLMUIczoJXGoleE3EzhkfIbx6n1EX~A5RIKe6hLeQR53SnOkfWdO1NFITofP7ESFQYoNOxzZD4~qCbm57C6Z4pqApvW~xzIEe8gp4QKXsK5qpo0SoK0aUepl6kTbb8lGStGgCzwqWWwa5-THvAPUtOAs1UVftHFPubQ03ERaMfdiA~mwY6cTTmaB9e42Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
    {
      id: 3,
      judul: "EXO-TREES: Save Our World with EXO, WE ARE ONE!",
      lokasi: "Loang Baloq, Kota Mataram",
      jenis: "Mangrove Rhizophora",
      harga: "Rp35.000",
      penyelenggara: "Ayak Keren Banget",
      jumlah: "1075",
      foto: "blablabla",
      tanggal: "Jumat, 30 Juni 2024",
      deskripsi:
        "Taman Loang Balok di NTB adalah kawasan konservasi mangrove, penting untuk melindungi ekosistem pesisir dan menjaga keanekaragaman hayati.",
      link: "https://s3-alpha-sig.figma.com/img/2667/4f88/fdb7c1cbe7d1de91e89ed9eab64c25b9?Expires=1704672000&Signature=gsDDIVFKfTk21VkHfcZmzFaJI28Mp2E-iAvgKVIApJ3KiVKE1TkO-H6FPFfJSmbqvpKfJ0jUxAcGBesuVbEv-AEz97gbHAUbk2g7LSaakSDjNhW-6wxNSfax0R03FlnTaZBpnDIQt6iKLKsqdALt7n91IhgNqHNXFhJ4zyPVXNuwewMHCb-FFwMFEiF99qCc8Fi0FA7ZqfL6JtZnc9rXIy8~SCsavQkWi2X3WQf~XXiDonRJMWUM-q40yPN~ExHY0PFGhLHRf4ebj5bHTC26i8NHtQ5EYjipI8X3uEzbv6mlHjG6LoLYvgmucpICknD0V8RVLapmCtj2yNQvUbzh1Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
    {
      id: 4,
      judul: "EXO-TREES: Save Our World with EXO, WE ARE ONE!",
      lokasi: "Loang Baloq, Kota Mataram",
      jenis: "Mangrove Rhizophora",
      harga: "Rp35.000",
      penyelenggara: "Ayak Keren Banget",
      jumlah: "1075",
      foto: "blablabla",
      tanggal: "Jumat, 30 Juni 2024",
      deskripsi:
        "Taman Loang Balok di NTB adalah kawasan konservasi mangrove, penting untuk melindungi ekosistem pesisir dan menjaga keanekaragaman hayati.",
      link: "https://s3-alpha-sig.figma.com/img/6fb9/9680/441b43f58a056129f5fee440aab37309?Expires=1704672000&Signature=PvwD0b5toK8-bsN5MZxMu5XjjZE0pdT-DKdy59v8fI3OYrNDWVkp3rx-EtZds1ZvwnmEwILoM~lympLdfcdSRg6SrvoP89wEDnEvP7helpIrqC55ncfU9p5V9q4F8cXNX74uSJibo8J9BdxKh-fdcCBL-vbISzZn2lRrvWHD-H5u7~l8nLdOct3AwCE8HOke9t9FKV7179AuZe-rHoVcNaqDQLsBD-exi5dQgxiJBlBXtGWR7CaZ1ZUxdax1NJyLt5ue~yA11-L0USfFLlFPBJcBl7~EblRVRk4EmlhZyBLAH1Fgxwsv-sd76VUGUmLiJIrod3ckDRD5mxs6T4WPeQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
    {
      id: 5,
      judul: "EXO-TREES: Save Our World with EXO, WE ARE ONE!",
      lokasi: "Loang Baloq, Kota Mataram",
      jenis: "Mangrove Rhizophora",
      harga: "Rp35.000",
      penyelenggara: "Ayak Keren Banget",
      jumlah: "1075",
      foto: "blablabla",
      tanggal: "Jumat, 30 Juni 2024",
      deskripsi:
        "Taman Loang Balok di NTB adalah kawasan konservasi mangrove, penting untuk melindungi ekosistem pesisir dan menjaga keanekaragaman hayati.",
      link: "https://s3-alpha-sig.figma.com/img/9099/6d3d/d644f8c112a3e0d6f85ceac5f78141a1?Expires=1704672000&Signature=dOktW-x3VM9IxvIoXo-AAfRqVruxEJq6sV3FQYVfio3RWl6z8y4d519W6j0i8LOUaNp7nsf3FLqWoZBGCvVxfZthejJT-nmf2Y26gVaKKflU8kb2gKZhgcLhkL2ESQqWFUBydKd9vZcIOnIEjQ9tE7rdDB8c0UnNthBOTLSKgUNRkGDUyyd0sW65lU7HNkHqOpU766jBaAYSAPO6DGT1OsqLp-aZnRzYCfdU1-1tZG-8~e9Jj8bdW6zv1OHTvC7-j5Tso8PWLl0Nrn-9ceBKG11vvH27cper7Ha9jkF6px1mfSAPn9O-d322MZXDZ080EHZOyVYTDy3QFWLHQwQVcA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
    {
      id: 6,
      judul: "EXO-TREES: Save Our World with EXO, WE ARE ONE!",
      lokasi: "Loang Baloq, Kota Mataram",
      jenis: "Mangrove Rhizophora",
      harga: "Rp35.000",
      penyelenggara: "Ayak Keren Banget",
      jumlah: "1075",
      foto: "blablabla",
      tanggal: "Jumat, 30 Juni 2024",
      deskripsi:
        "Taman Loang Balok di NTB adalah kawasan konservasi mangrove, penting untuk melindungi ekosistem pesisir dan menjaga keanekaragaman hayati.",
      link: "https://s3-alpha-sig.figma.com/img/ca98/2cbe/a84a43b02a1f5d896ca1ee82b62b6bdd?Expires=1704672000&Signature=om34eDFW9TRbpC9wzARhHGWwCMzq32HqBeHDz32xdcMxUFCxBAMZUN-oowtd8ikbRMka3m6zAkZ4QltSG7GxY95eAMo6LHrLN0Q6VnFdUI-CjRbrwvXFLhO1yDg7WXjxo-juCNgQg9A7h5V-NQj1UCf4WtVEXHN77I2qat7OK1QDTGyXl1Qlj6mbLPSfMygHj4M0omSVwSxnHMpxYpSa9ciRShKXLGYu1IzIqBFgPATz8S66rGZr3ePHdDia8rQye6p7ZbmXhEx1RKOYglClEgP26Rt1RLhqNJBCAdzbIF9e-kvCySZi83Shahke4NyKwttaTp77DKYxJBeXuwV5dg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
    {
      id: 7,
      judul: "EXO-TREES: Save Our World with EXO, WE ARE ONE!",
      lokasi: "Loang Baloq, Kota Mataram",
      jenis: "Mangrove Rhizophora",
      harga: "Rp35.000",
      penyelenggara: "Ayak Keren Banget",
      jumlah: "1075",
      foto: "blablabla",
      tanggal: "Jumat, 30 Juni 2024",
      deskripsi:
        "Taman Loang Balok di NTB adalah kawasan konservasi mangrove, penting untuk melindungi ekosistem pesisir dan menjaga keanekaragaman hayati.",
      link: "https://s3-alpha-sig.figma.com/img/faca/3ff3/aacc05c4cce57e11230c23a5bb29237a?Expires=1704672000&Signature=h40pZZ7oJqadxz0qd2JTAJQrN-D8Yqnw1eNMDbFz6Hhpn~1cFjLx8xgQLx2A8uel3fl5yXq7i~wwyLUaAE8zOWknLBwDEvxAN4Y482llxarXLaJJvIcfRThxrzCn7XSp0bSiQn0mQNclgGPE6F5FKfddIgRIGgQMSP9-8kOU6JzEdDest2t4eo1ObwKg8GUNi50jUpiD7pTtpg-d1GcF5289hjfwfQ7uQ7t-O5tWGcBzDEMTzupass2L2UHkKkkCojATLB7NygefoG5TCC1DduAfAKi4BU-KIW5cAm9Aa8GH~Jk~ldJqQ9tNjol1HnmRKeEz9XzJQZx~kyyU1g6Ezw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
    {
      id: 8,
      judul: "EXO-TREES: Save Our World with EXO, WE ARE ONE!",
      lokasi: "Loang Baloq, Kota Mataram",
      jenis: "Mangrove Rhizophora",
      harga: "Rp35.000",
      penyelenggara: "Ayak Keren Banget",
      jumlah: "1075",
      foto: "blablabla",
      tanggal: "Jumat, 30 Juni 2024",
      deskripsi:
        "Taman Loang Balok di NTB adalah kawasan konservasi mangrove, penting untuk melindungi ekosistem pesisir dan menjaga keanekaragaman hayati.",
      link: "https://s3-alpha-sig.figma.com/img/5366/781e/195c2207680a298310d2608f8d1fdccb?Expires=1704672000&Signature=Z-snCZLgxL3B-Xc80cN4p7VL235fdVd2xGVyesL6nB4MySBhrt9RHVWR0xbt4iRfJhCwZDn6Jm6kns9taQcyPJjXd1NeBUSU3NEbVh-tCArCHIy1QMHiI~bgupwcDXa-L6tf3tOy0QLdG8yD3YErf5OWI78vAXbWB7kwL3dlT2Aa~Z1~Bj2Fa40cje2HdQQiVRNn4w0R1u6aZabjRj87Uuub64376FRoRAHDCVZH5Vx0H5lsS9xT6DaaJJ3Tfri7OOhBTfGxj7URSwCQu2cTL~2OKA1sg3K4C35crzRjZKAcwA~aDt7WuKYvmvwPg5GWUCILx~WsQHYw8cSgQa4nAw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
    {
      id: 9,
      judul: "EXO-TREES: Save Our World with EXO, WE ARE ONE!",
      lokasi: "Loang Baloq, Kota Mataram",
      jenis: "Mangrove Rhizophora",
      harga: "Rp35.000",
      penyelenggara: "Ayak Keren Banget",
      jumlah: "1075",
      foto: "blablabla",
      tanggal: "Jumat, 30 Juni 2024",
      deskripsi:
        "Taman Loang Balok di NTB adalah kawasan konservasi mangrove, penting untuk melindungi ekosistem pesisir dan menjaga keanekaragaman hayati.",
      link: "https://s3-alpha-sig.figma.com/img/e743/7072/0928f70f8192bd0954d49684ed6ec8b6?Expires=1704672000&Signature=m88-T9X9EZYhzcGv8TgbDs74vW1uZYmqPNCFcgCejd8SFtxYXOYv3HHoyRZ8xPQuQobgcbnT93wEir34Ghr26cW5I~9tsXVyb6BYCS4rzCe1j3mYxyO4P5EgojsU4Qvoe78qWF6vGEXS98fnCNMbIIjJLfsiFnWoVthP8jsf11g~12nK-3i-twpAlVdyH-dBVtVqiUl1gxjM~HKEgn~PPIggFZIAiHpfZmJ0fMV081LoZ6rqrk-BLXqj5vm~kvn-gJHQ-TIGtOJT96Y1herEF6JkhA-E89oJVGuvuj0sUlEojO-hUUdhCqpZeEPnyu78UOBREErBoZrf4FykeqP5DA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
    {
      id: 10,
      judul: "EXO-TREES: Save Our World with EXO, WE ARE ONE!",
      lokasi: "Loang Baloq, Kota Mataram",
      jenis: "Mangrove Rhizophora",
      harga: "Rp35.000",
      penyelenggara: "Ayak Keren Banget",
      jumlah: "1075",
      foto: "blablabla",
      tanggal: "Jumat, 30 Juni 2024",
      deskripsi:
        "Taman Loang Balok di NTB adalah kawasan konservasi mangrove, penting untuk melindungi ekosistem pesisir dan menjaga keanekaragaman hayati.",
      link: "https://s3-alpha-sig.figma.com/img/e9c0/f655/45959bf3fed443bc3a4b8f434ddd56f3?Expires=1704672000&Signature=VRCkqee4Lo7v-yL4~ff27lwOYXSHRzqTrHdKBhuosM7RWBEutRU8pauHfnAOlVFZ0TLAdmYyU21NsVHkx2vxMdG6sFHw7HHKgqz5LbHtV8cLcWPkxQkC41CYcDTllV7vYk1JruKrZJQxoQ6ibdcPD5lnSCvmDD5NWd-czAhOcDXoEDXiJGEJy-6wE6dyZmPcCsbxe5el7uRB7kL~E6FeT0xmBFJz3qPlBCMrXZ6vVL9iKzUX66tIf0-jdlyJZw-VYO87h~Wt2c-LAaAs3dfB1i9sbwBzeZjGh7jhsTahiB7FgsssvZMrQtHPyjXhvrSdLaVDYeFYHgP3Pvl3hpgYcQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
    {
      id: 11,
      judul: "EXO-TREES: Save Our World with EXO, WE ARE ONE!",
      lokasi: "Loang Baloq, Kota Mataram",
      jenis: "Mangrove Rhizophora",
      harga: "Rp35.000",
      penyelenggara: "Ayak Keren Banget",
      jumlah: "1075",
      foto: "blablabla",
      tanggal: "Jumat, 30 Juni 2024",
      deskripsi:
        "Taman Loang Balok di NTB adalah kawasan konservasi mangrove, penting untuk melindungi ekosistem pesisir dan menjaga keanekaragaman hayati.",
      link: "https://s3-alpha-sig.figma.com/img/5112/f962/fe84adad0eafc63b37e11d9102caf6a1?Expires=1704672000&Signature=C1727u~3x16Ve46--KaVHHfdDowja9a3IPgj3OvQAM9khTQFB6Jw9F9lfJjdsV4LGTUet-PfyuBzfv09yQCOkOwu~MI9p4LNbPbtyyDK82koBmq21t6em-H-d77pbK8TMEXmy0yE-NxBJNxOgUpykX1pSOexrdyr-~rcQkRCloGrOtxqUCCEwEnCl3MDT356LE-LTNv1TMw7ZQjxT5bzDp0rapltVcS16uByk3pcVCg6iy7lDoSy4NyMHXKqy0F9bO8MDp41WH645i7ikbH3ff88CqHc~WxR8HG6EhU-DAsQTTV~yiS~aMLldbkNX3NAfPgG9wB7FyrmUtfSTthB~w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
    {
      id: 12,
      judul: "EXO-TREES: Save Our World with EXO, WE ARE ONE!",
      lokasi: "Loang Baloq, Kota Mataram",
      jenis: "Mangrove Rhizophora",
      harga: "Rp35.000",
      penyelenggara: "Ayak Keren Banget",
      jumlah: "1075",
      foto: "blablabla",
      tanggal: "Jumat, 30 Juni 2024",
      deskripsi:
        "Taman Loang Balok di NTB adalah kawasan konservasi mangrove, penting untuk melindungi ekosistem pesisir dan menjaga keanekaragaman hayati.",
      link: "https://s3-alpha-sig.figma.com/img/8401/696d/a4b715e7648d798ca5fe1318cabc6de7?Expires=1704672000&Signature=p-wLaYjRQJnZIXWJFeBjd~XSeRGNkdIbwIOXCX0Yw5OCp1X3aQhYbUQx0P2ud7X~Tth~DDE6koJKewY8fxo3ksJQd0JuUtAXnhFrVyjuza5UpJSPndW0FGRWW8YzL8KT7m7KusXDAhUafLLELMGMoDTl6vGOvYaTZn9qKCmXpMUTB5Dyc-YPF2IRAcdEUnlF3O-lHsr4RocTwBRtj3G30CLhbPImv-hDOvrEVStfN4WA~7Kaf~eegaXgimb2OvYRZBHXW~INJA5ZlxPP4hSV-vc9orke9MiIHJoQuMBmEJiTTWgN0Hbah4n8LUOPHAW~WHpj7~7Xx3QilG6lkVpvfg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    },
  ];

  return (
    <Layout>
      {isModal && (
        <ModalGaleri
          setIsModal={setIsModal}
          dataGaleri={DataGaleri[galeriId - 1]}
        />
      )}
      <section className="relative h-full pb-10">
        <div className="absolute h-full -z-10">
          <Image
            src={Background3}
            alt="..."
            className="w-screen h-full object-cover"
          />
        </div>
        <div className="px-24 flex flex-col justify-center pt-20 h-screen">
          <div className="flex flex-col justify-center w-full">
            <p className="text-5xl font-bold drop-shadow-lg text-secondary-900">
              Eksplorasi Jejak Kegiatan Kami
            </p>
            <p className="text-2xl mb-10 mt-8 drop-shadow-lg max-w-3xl">
              Memamerkan berbagai momen ketika orang-orang bersatu untuk menanam
              pohon-pohon yang akan menyelamatkan lingkungan kita.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="flex justify-between px-24 py-6 text-center">
          <div className="flex flex-col p-6 justify-center hover:bg-white hover:bg-opacity-40">
            <p className="font-semibold text-xl drop-shadow-lg">1,290 Pohon</p>
            <p className="drop-shadow-lg">Jumlah Donasi pohon saat ini</p>
          </div>
          <div className="flex flex-col p-6 justify-center hover:bg-white hover:bg-opacity-40">
            <p className="font-semibold text-xl drop-shadow-lg">1,290 Pohon</p>
            <p className="drop-shadow-lg">Jumlah pohon yang sudah ditanam</p>
          </div>
          <div className="flex flex-col p-6 justify-center hover:bg-white hover:bg-opacity-40">
            <p className="font-semibold text-xl drop-shadow-lg">
              Rp 45,656,543
            </p>
            <p className="drop-shadow-lg">Jumlah donasi saat ini</p>
          </div>
          <div className="flex flex-col p-6 justify-center hover:bg-white hover:bg-opacity-40">
            <p className="font-semibold text-xl drop-shadow-lg">90 Kampanye</p>
            <p className="drop-shadow-lg">Jumlah kampanye saat ini</p>
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-col px-24 py-10 justify-center items-center bg-secondary-200">
          <p className="text-3xl font-bold">Jejak Teman GrOUT</p>
          <div className="w-[200px] h-1 bg-black rounded-lg mb-10 mt-4" />
          <MapsContainer center={[-8.583069, 116.320251]} zoom={10} />
        </div>
      </section>
      <section>
        <div
          id="galeriContainer"
          className="flex flex-col px-24 mt-20 justify-center items-center"
        >
          <p className="text-3xl font-bold">Galeri Teman GrOUT</p>
          <div className="w-[200px] h-1 bg-black rounded-lg mb-10 mt-4" />
        </div>
        <div className="flex justify-end w-full px-24">
          <div>
            <form action="submit">
              <input
                type="text"
                placeholder="Cari Lokasi"
                className="border-2 px-4 py-2 rounded-l-lg bg-slate-200"
              />
              <button className="px-4 bg-primary-600 py-2 border-2 border-primary-600 rounded-r-lg text-white">
                Cari
              </button>
            </form>
          </div>
        </div>
        <div className="grid grid-cols-4 px-24 gap-10 py-10">
          {DataGaleri.map((data) => (
            <CardGaleri
              key={data.id}
              modal={isModal}
              setIsModal={setIsModal}
              dataGaleri={data}
              setId={setGaleriId}
            />
          ))}
        </div>
        <div className="flex gap-6 justify-center">
          <div className="flex gap-6 justify-center my-10">
            <div
              onClick={prevCardPage}
              className="w-10 h-10 text-secondary-600 border-2 grid place-items-center rounded-lg hover:bg-secondary-600 hover:text-white ease-in-out transition-all cursor-pointer border-secondary-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
                />
              </svg>
            </div>
            <div className="flex gap-6">
              {[...Array(96 / 12 + 1)]
                .slice(
                  currentCardPage > 3 ? currentCardPage - 2 : 0,
                  currentCardPage > 3 ? currentCardPage + 3 : 5
                )
                .map((_, i) =>
                  currentCardPage > 3 ? (
                    <div
                      onClick={() => handlepagination(currentCardPage - 2 + i)}
                      key={i}
                      className={`w-10 h-10 text-secondary-600 border-2 grid place-items-center rounded-lg hover:bg-secondary-600 hover:text-white ease-in-out transition-all cursor-pointer border-secondary-600 ${
                        currentCardPage === currentCardPage - 2 + i &&
                        "bg-secondary-600 text-white"
                      }`}
                    >
                      <p>{currentCardPage - 2 + i}</p>
                    </div>
                  ) : (
                    <div
                      onClick={() => handlepagination(1 + i)}
                      key={i}
                      className={`w-10 h-10 text-secondary-600 border-2 grid place-items-center rounded-lg hover:bg-secondary-600 hover:text-white ease-in-out transition-all cursor-pointer border-secondary-600 ${
                        currentCardPage === 1 + i &&
                        "bg-secondary-600 text-white"
                      }`}
                    >
                      <p>{1 + i}</p>
                    </div>
                  )
                )}
            </div>
            <div
              onClick={nextCardPage}
              className="w-10 h-10 text-secondary-600 border-2 grid place-items-center rounded-lg hover:bg-secondary-600 hover:text-white ease-in-out transition-all cursor-pointer border-secondary-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Galeri;
