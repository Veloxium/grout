import React from "react";
import Navbar from "@/components/navbar";
import { Poppins } from "next/font/google";
import Footer from "@/components/footer";

type LayoutProps = {
  children: React.ReactNode;
};

const poppins = Poppins({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

function Layout(props: LayoutProps) {
  return (
    <div className={poppins.className} id="Home">
      <Navbar />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
