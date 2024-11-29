import Link from "next/link";
import React from "react";
import { FaShopify } from "react-icons/fa";
import {
  FaInstagram,
  FaXTwitter,
  FaTiktok,
  FaFacebookF,
} from "react-icons/fa6";
import { IconType } from "react-icons/lib";

type SocialsType = {
  name: string;
  icon: IconType;
  link: string;
}[];
const socials: SocialsType = [
  {
    name: "Instagram",
    icon: FaInstagram,
    link: "https://www.instagram.com/",
  },
  {
    name: "Facebook",
    icon: FaFacebookF,
    link: "https://www.facebook.com/",
  },
  {
    name: "X",
    icon: FaXTwitter,
    link: "https://www.x.com/",
  },
  {
    name: "TikTok",
    icon: FaTiktok,
    link: "https://www.tiktiok.com/",
  },
];

type ItemsType = {
  name: string;
  items: {
    name: string;
    link: string;
  }[];
}[];
const items: ItemsType = [
  {
    name: "Services",
    items: [
      { name: "Contact Us", link: "#contact" },
      { name: "Shipping Information", link: "#shipping" },
      { name: "Returns & Exchanges", link: "#returns" },
      { name: "FAQs", link: "#faqs" },
    ],
  },
  {
    name: "About",
    items: [
      { name: "Our Story", link: "#about" },
      { name: "Sustainability", link: "#sustainability" },
      { name: "Careers", link: "#careers" },
      { name: "Blog", link: "#blog" },
    ],
  },
  {
    name: "Legal",
    items: [
      { name: "Privacy Policy", link: "#privacy" },
      { name: "Terms of Service", link: "#terms" },
      { name: "Cookie Policy", link: "#cookies" },
    ],
  },
];

const Footer = () => {
  return (
    <div className="bg-black">
      <footer className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="mb-16 grid grid-cols-2 gap-12 pt-10 md:grid-cols-4 lg:grid-cols-5 lg:gap-8 lg:pt-12">
          <div className="col-span-full lg:col-span-2">
            <div className="flex items-center gap-2 mb-2">
              <FaShopify color="white" size="2em" />
              <p className="text-white text-xl font-bold">Ecom</p>
            </div>
            <p className="mb-6 text-gray-400 sm:pr-8">
              Discover quality products and exceptional service at Ecom. Shop
              with confidence!
            </p>

            <div className="flex gap-4">
              {socials.map(social => (
                <Link
                  href="#"
                  target="_blank"
                  className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
                  key={social.link}
                >
                  <social.icon size={20} />
                </Link>
              ))}
            </div>
          </div>

          {items.map(item => (
            <div key={item.name}>
              <div className="mb-4 font-bold uppercase tracking-widest text-gray-100">
                {item.name}
              </div>

              <nav className="flex flex-col gap-4">
                {item.items.map(subItem => (
                  <div key={subItem.name} id={subItem.link.slice(1)}>
                    <Link
                      href={subItem.link}
                      className="text-gray-400 transition duration-100 hover:text-neutral-300 active:text-neutral-200"
                    >
                      {subItem.name}
                    </Link>
                  </div>
                ))}
              </nav>
            </div>
          ))}
        </div>
        <div className="border-t border-neutral-800 py-4 text-center text-sm text-gray-400">
          © 2024 - Alireza Rashidi. Some rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
