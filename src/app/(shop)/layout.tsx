import Header from "@/components/Header";
import { Inter } from "next/font/google";
import React from "react";
import Footer from "./components/footer";

type layoutProps = {
  children: React.ReactNode;
};

const inter = Inter({
  subsets: ["latin"],
});

const layout = ({ children }: layoutProps) => {
  return (
    <div className={`${inter.className} pt-14 lg:pt-28`}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default layout;
