import Header from "@/components/Header";
import { Inter } from "next/font/google";
import React, { Suspense } from "react";
import Footer from "./components/footer";
import Loading from "./loading";

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
      <Suspense fallback={<Loading />}>{children}</Suspense>
      <Footer />
    </div>
  );
};

export default layout;
