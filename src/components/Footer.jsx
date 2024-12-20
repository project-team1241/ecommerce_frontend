import React from "react";
import { footerData } from "../Utils/Constants";
import FooterItems from "./FooterItems";

const Footer = () => {
  return (
    <div className="bg-[#1e1e24] h-auto flex justify-betweenn whitespace-nowrap flex-wrap">
      {footerData.map((fitem, index) => (
        <FooterItems key={index} {...fitem} />
      ))}
      <div className="bg-[#2a2a30] w-screen p-2 flex justify-center text-white mt-4">
        <p className="text-sm text-slate-200">©2024 www.ecommerce.com</p>
      </div>
    </div>
  );
};

export default Footer;
