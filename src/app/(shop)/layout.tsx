import Header from "@/components/Header";
import { Inter } from "next/font/google";
import React from "react";

type layoutProps = {
  children: React.ReactNode;
};

const inter = Inter({
  subsets: ["latin"],
});

const layout = ({ children }: layoutProps) => {
  return (
    <div className={inter.className}>
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />{" "}
      <Header />
      {children}
    </div>
  );
};

export default layout;
