// components/solutionsDropdown.js
"use client";
import { Fragment } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { BsStars } from "react-icons/bs";
import { HiOutlineBuildingStorefront } from "react-icons/hi2";
import { BsGraphUp } from "react-icons/bs";
import { MdOutlineKeyboardCommandKey } from "react-icons/md";
import { HiOutlineCommandLine } from "react-icons/hi2";
import { Wrench } from 'lucide-react';
import { TbPrismLight } from "react-icons/tb";

const solutionCategories = [

  {
    title: "Use Cases",
    members: [
      {
        title: "AI Apps",
        description: "Deploy at speed of AI",
        image: <BsStars className='text-4xl shadow-[0_image: "/images/managed-infra.png",0_0_1px_rgba(255,255,255,0.14)] p-1 rounded-md group-hover:bg-white group-hover:text-black' />,
        href: "#"
      },
      ,
      {
        title: "Composable Commerce",
        description: "Power storefronts that convert",
        image: <HiOutlineBuildingStorefront className='text-4xl shadow-[0_image: "/images/managed-infra.png",0_0_1px_rgba(255,255,255,0.14)] p-1 rounded-md group-hover:bg-white group-hover:text-black' />
        ,
        href: "#"
      },
      {
        title: "Marketing Sites",
        description: "Launch campaigns fast",
        image: <BsGraphUp className='text-4xl shadow-[0_image: "/images/managed-infra.png",0_0_1px_rgba(255,255,255,0.14)] p-1 rounded-md group-hover:bg-white group-hover:text-black' />
        ,
        href: "#"
      },
      {
        title: "Multi-tenant Platforms",
        description: "Scale apps with one codebase",
        image:<MdOutlineKeyboardCommandKey className='text-4xl shadow-[0_image: "/images/managed-infra.png",0_0_1px_rgba(255,255,255,0.14)] p-1 rounded-md group-hover:bg-white group-hover:text-black' />
        ,
        href: "#"
      },
      {
        title: "Web Apps",
        description: "Ship features, not infrastructure",
        image: <HiOutlineCommandLine className='text-4xl shadow-[0_image: "/images/managed-infra.png",0_0_1px_rgba(255,255,255,0.14)] p-1 rounded-md group-hover:bg-white group-hover:text-black' />
        ,
        href: "#"
      }
    ]
  },
  {
    title: "Users",
    members: [
      {
        title: "Platform Engineers",
        description: "Automate away repetition",
        image: <Wrench className='text-4xl shadow-[0_image: "/images/managed-infra.png",0_0_1px_rgba(255,255,255,0.14)] p-1 rounded-md group-hover:bg-white group-hover:text-black' />,
        href: "#"
      },
      {
        title: "Design Engieners",
        description: "Deploy for every idea",
        image: <TbPrismLight className='text-4xl shadow-[0_image: "/images/managed-infra.png",0_0_1px_rgba(255,255,255,0.14)] p-1 rounded-md group-hover:bg-white group-hover:text-black' />        ,
        href: "#"
      }
    ]
  }
];

export default function SolutionDropdown({ isOpen, onOpen, onClose }) {
  return (
    <div className="relative">
      {/* Dropdown Trigger */}
      <button
        className="flex items-center text-gray-300 hover:text-white  py-2 px-3 hover:bg-[#1b1b1b] rounded-2xl transition-all"
        onMouseEnter={onOpen} // Ensure dropdown stays open when hovering
      >
        Solutions
        <ChevronDownIcon className="h-4 w-4 ml-1" />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className="absolute left-0 mt-2 w-[500px] bg-black shadow-[0_0_0_1px_rgba(255,255,255,0.14)] border-slate-800 rounded-lg p-6
            before:absolute before:-top-2 before:left-[20px] before:w-4 before:h-4 before:bg-black 
            before:border-t before:border-l before:border-gray-800 before:transform before:rotate-45"
          onMouseEnter={onOpen} // Keeps dropdown open when hovering over it
          onMouseLeave={onClose} // Closes when mouse leaves
        >
          <div className="grid grid-cols-2 gap-6">
            {solutionCategories.map((category, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-gray-300 text-sm uppercase tracking-wide">
                  {category.title}
                </h3>
                <div className="space-y-1">
                  {category.members.map((solution, solutionIndex) => (
                    <Link
                      key={solutionIndex}
                      href={solution.href}
                      className="group flex items-start space-x-3 p-2 rounded-lg transition-colors"
                    >
                      <div className="relative w-12 h-12 flex-shrink-0">
                      {solution.image}
                      </div>
                      <div>
                        <h4 className="text-white font-medium text-sm">
                          {solution.title}
                        </h4>
                        <p className="text-gray-400 text-xs group-hover:text-sm mt-1  group-hover:text-gray-200">
                          {solution.description}
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