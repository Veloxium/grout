import Layout from "@/layout/layout";
import React, { useState } from "react";
import Image from "next/image";
import Jo from "@/assets/images/jo.webp";
import BannerKampanye from "@/components/bannerKampanye";
import CardArtikelDetail from "@/components/cardArtikelDetail";

function DetailArtikel() {
  const [allArtikel, setAllArtikel] = useState("semua");
  const [currentCardPage, setCurrentCardPage] = useState<number>(1);
  const handlepagination = (e: any) => {
    setCurrentCardPage(Number(e));
    // setCardNum((e - 1) * 12);
    const element = document.getElementById("artikelContainer");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleArtikel = (e: any) => {
    e.preventDefault();
    setAllArtikel(e.target.innerText.toLowerCase().replace(" ", "-"));
  };

  return (
    <Layout>
      <section>
        <div className="mt-28 px-24 flex justify-center">
          <div className="flex flex-col items-center">
            <p className="text-5xl font-bold italic text-secondary-900">
              ARTIKEL GROUT
            </p>
            <p className="font-semibold text-xl text-primary-900">
              Menyuarakan Kepedulian Kita Terhadap Lingkungan
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="flex justify-between items-center w-full py-4 px-24 border-y-2 my-8">
          <div id="donasiContainer">
            <div className="flex gap-4">
              <div onClick={handleArtikel} className="cursor-pointer">
                <p
                  className={`px-4 py-1 font-semibold border-2 border-primary-600
                 rounded-full hover:bg-primary-600 hover:text-white ease-in-out transition-all ${
                   allArtikel === "semua"
                     ? "bg-primary-600 text-white"
                     : "bg-white text-primary-600"
                 }`}
                >
                  Semua
                </p>
              </div>
              <div onClick={handleArtikel} className="cursor-pointer">
                <p
                  className={`px-4 py-1 font-semibold border-2 border-primary-600
                 rounded-full hover:bg-primary-600 hover:text-white ease-in-out transition-all ${
                   allArtikel === "berita"
                     ? "bg-primary-600 text-white"
                     : "bg-white text-primary-600"
                 }`}
                >
                  Berita
                </p>
              </div>
              <div onClick={handleArtikel} className="cursor-pointer">
                <p
                  className={`px-4 py-1 font-semibold border-2 border-primary-600
                 rounded-full hover:bg-primary-600 hover:text-white ease-in-out transition-all ${
                   allArtikel === "tips"
                     ? "bg-primary-600 text-white"
                     : "bg-white text-primary-600"
                 }`}
                >
                  Tips
                </p>
              </div>
            </div>
          </div>
          <div>
            <form action="submit">
              <input
                type="text"
                placeholder="Cari Artikel"
                className="border-2 px-4 py-2 rounded-l-lg bg-slate-200"
              />
              <button className="px-4 bg-primary-600 py-2 border-2 border-primary-600 rounded-r-lg text-white">
                Cari
              </button>
            </form>
          </div>
        </div>
        <div className="flex flex-col w-full items-center px-24 pb-10 gap-2">
          <div className="flex justify-between gap-2 px-24 items-start">
            <p className="text-5xl font-bold leading-snug text-start">
              Jo Effect pada MPL Season 12. Bagaimanakah Pengaruhnya dalam
              menonton MPL dengan Livestreaming?
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-20 h-20"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
              />
            </svg>
          </div>
          <div className="flex flex-col items-start w-full px-24 text-lg">
            <p>Oleh Nanda Pake Z.</p>
            <p>Rabu, 22 November 2023</p>
          </div>
          <div className="w-full flex flex-col items-end px-24 gap-2">
            <Image src={Jo} alt="jo" className="object-cover w-full" />
            <p>Jonathan Liandi/Propler Ml/</p>
          </div>
          <div className="flex flex-col gap-4 px-24 text-justify text-lg border-y-4 py-4">
            <p className="font-bold my-2">Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Perferendis, architecto perspiciatis. Voluptatem, reprehenderit
              ducimus commodi maiores quae at, nobis fuga nesciunt nisi nam ut
              repudiandae deserunt quidem, quam laboriosam. Ratione in aperiam
              voluptatem. Impedit nulla, dolore voluptatibus vitae culpa
              voluptate non, quis numquam, ad ab quibusdam? Ex fugit iusto
              laborum.
            </p>
            <p className="font-bold my-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate, dicta.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              autem consequuntur saepe iusto. Ex eum quam iste! Tempore sunt
              earum porro similique quo reiciendis perferendis laboriosam quae
              illum dignissimos. Nostrum reprehenderit debitis dolor ad culpa!
              Inventore, ab explicabo quod porro consequatur eaque officiis sit.
              Id nemo officiis quis ducimus repellendus fugiat exercitationem
              voluptatibus quam error, eum odio aliquam, accusantium sed animi
              consequuntur dolorem, molestias accusamus. Inventore blanditiis
              architecto nesciunt eius, expedita voluptatibus laudantium vero.
              Impedit numquam a, inventore suscipit quaerat tempora eveniet modi
              nesciunt ullam molestias vero! Ea odio tempore provident numquam
              a. Corporis ducimus velit illum vel natus accusamus?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              omnis deserunt dolores laboriosam doloribus voluptas minus
              nostrum? Vel, fuga hic exercitationem provident debitis ipsum modi
              facilis cum officiis. Consequatur velit quia officia maiores quam
              labore autem laboriosam sed dicta aut natus, odio soluta adipisci
              temporibus accusamus expedita dolor blanditiis sint, explicabo
              totam, quas commodi inventore! Sapiente voluptates deserunt dolore
              dicta fugit. Quasi cum provident cumque minus iure, consectetur
              pariatur qui.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              recusandae placeat quo ea amet at vitae veniam! Voluptatum, nam!
              Doloremque expedita veritatis adipisci id nam sapiente ipsum
              reprehenderit quasi unde sequi maiores possimus eius cumque ea
              dignissimos, animi neque quod?
            </p>
            <div className="my-10 h-[300px]">
              <BannerKampanye />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="px-24 flex flex-col items-center mb-10 gap-6">
          <p className="text-3xl font-semibold">Artikel Lainnya</p>
          <div className="w-full flex gap-6">
            <CardArtikelDetail />
            <CardArtikelDetail />
            <CardArtikelDetail />
            <CardArtikelDetail />
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default DetailArtikel;
