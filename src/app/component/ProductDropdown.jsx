// components/ProductsDropdown.js
"use client";
import { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { BsStars } from "react-icons/bs";
import { BsWindowSidebar } from "react-icons/bs";
import { BsCpu } from "react-icons/bs";
import { CiGlobe } from "react-icons/ci";
import { FiBarChart2 } from "react-icons/fi";
import { MdOutlineShield } from "react-icons/md";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTurborepo } from "react-icons/si";
import { IoCubeOutline } from "react-icons/io5";

const productCategories = [
  {
    title: "DX Platform",
    members: [
      {
        title: "Preview",
        description: "The AI Toolkit for TypeScript",
        image: (
          <BsWindowSidebar className="text-4xl shadow-[0_0_0_1px_rgba(255,255,255,0.14)] p-1 rounded-md group-hover:bg-white group-hover:text-black" />
        ),
        href: "#",
      },
      {
        title: "AI",
        description: "Powering break throughs",
        image: (
          <BsStars className="text-4xl shadow-[0_0_0_1px_rgba(255,255,255,0.14)] p-1 rounded-md group-hover:bg-white group-hover:text-black" />
        ),
        href: "#",
      },
    ],
  },
  {
    title: "Managed Infrastructure",
    members: [
      {
        title: "Fluid compute",
        description: "Server, in serverless form",
        image: (
          <BsCpu className="text-4xl shadow-[0_0_0_1px_rgba(255,255,255,0.14)] p-1 rounded-md group-hover:bg-white group-hover:text-black" />
        ),
        href: "#",
      },
      ,
      {
        title: "Rendering",
        description: "Speed with Enterprise scale",
        image: (
          <CiGlobe className="text-4xl shadow-[0_0_0_1px_rgba(255,255,255,0.14)] p-1 rounded-md group-hover:bg-white group-hover:text-black" />
        ),
        href: "#",
      },
      {
        title: "Observability",
        description: "Previous",
        image: (
          <FiBarChart2 className="text-4xl shadow-[0_0_0_1px_rgba(255,255,255,0.14)] p-1 rounded-md group-hover:bg-white group-hover:text-black" />
        ),
        href: "#",
      },
      {
        title: "Security",
        description: "Scale without comprimising",
        image: (
          <MdOutlineShield className="text-4xl shadow-[0_0_0_1px_rgba(255,255,255,0.14)] p-1 rounded-md group-hover:bg-white group-hover:text-black" />
        ),
        href: "#",
      },
    ],
  },
  {
    title: "Open Source",
    members: [
      {
        title: "Open Source",
        description: "Fast, scalable, and reliable",
        image: (
          <TbBrandNextjs className="text-4xl shadow-[0_0_0_1px_rgba(255,255,255,0.14)] p-1 rounded-md group-hover:bg-white group-hover:text-black" />
        ),
        href: "#",
      },
      {
        title: "Turborepo",
        description: "Speed with Enterprise Scale",
        image: (
          <SiTurborepo className="text-4xl shadow-[0_0_0_1px_rgba(255,255,255,0.14)] p-1 rounded-md group-hover:bg-white group-hover:text-black" />
        ),
        href: "#",
      },
      {
        title: "AI SDK",
        description: "The AI Toolkit for TypeScript",
        image: (
          <IoCubeOutline className="text-4xl shadow-[0_0_0_1px_rgba(255,255,255,0.14)] p-1 rounded-md group-hover:bg-white group-hover:text-black" />
        ),
        href: "#",
      },
    ],
  },
];

export default function ProductsDropdown({ isOpen, onOpen, onClose }) {
  return (
    <div className="relative">
      {/* Dropdown Trigger */}
      <button
        className="flex items-center text-gray-300 hover:text-white  py-2 px-3 hover:bg-[#1b1b1b] rounded-2xl  transition-all"
        onMouseEnter={onOpen} // Ensure dropdown stays open when hovering
      >
        Products
        <ChevronDownIcon className="h-4 w-4 ml-1" />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className="absolute left-0 mt-2 w-[800px] bg-black shadow-[0_0_0_1px_rgba(255,255,255,0.14)] border-slate-800 rounded-lg p-6
            before:absolute before:-top-2 before:left-[20px] before:w-4 before:h-4 before:bg-black 
            before:border-t before:border-l before:border-gray-800 before:transform before:rotate-45"
          onMouseEnter={onOpen} // Keeps dropdown open when hovering over it
          onMouseLeave={onClose} // Closes when mouse leaves
        >
          <div className="grid grid-cols-3 gap-6">
            {productCategories.map((category, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-gray-300 text-sm uppercase tracking-wide">
                  {category.title}
                </h3>
                <div className="space-y-1 ">
                  {category.members.map((product, productIndex) => (
                    <Link
                      key={productIndex}
                      href={product.href}
                      className="flex items-start space-x-3 p-2 group  rounded-lg transition-colors"
                    >
                      <div className="relative w-12 h-12 flex-shrink-0">
                        {product.image}
                      </div>
                      <div>
                        <h4 className="text-white font-medium text-sm">
                          {product.title}
                        </h4>
                        <p className="text-gray-400 text-xs group-hover:text-sm mt-1 group-hover:text-gray-200">
                          {product.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
