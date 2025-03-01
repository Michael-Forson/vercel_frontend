// components/resourcesDropdown.js
"use client";
import { Fragment } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { IoCubeOutline } from "react-icons/io5";
import { IoExtensionPuzzleOutline } from "react-icons/io5";
import { GrTemplate } from "react-icons/gr";
import { IoBookOutline } from "react-icons/io5";
import { CiCompass1 } from "react-icons/ci";
import { BsEmojiSmile } from "react-icons/bs";
import { FiPenTool } from "react-icons/fi";
import { LuNotebook } from "react-icons/lu";
import { TfiBag } from "react-icons/tfi";

const resourceCategories = [

  {
    title: "Tools",
    members: [
      {
        title: "Resource Center",
        description: "Today's best practices",
        image: <IoCubeOutline className='text-4xl shadow-[0_image: "/images/managed-infra.png",0_0_1px_rgba(255,255,255,0.14)] p-1 rounded-md group-hover:bg-white group-hover:text-black' />
        ,
        href: "#"
      },
      ,
      {
        title: "Marketplace",
        description: "Extend and automate workflows",
        image: <IoExtensionPuzzleOutline className='text-4xl shadow-[0_image: "/images/managed-infra.png",0_0_1px_rgba(255,255,255,0.14)] p-1 rounded-md group-hover:bg-white group-hover:text-black' />
        ,
        href: "#"
      },
      {
        title: "Templates",
        description: "Jumpstart app development",
        image: <GrTemplate className='text-4xl shadow-[0_image: "/images/managed-infra.png",0_0_1px_rgba(255,255,255,0.14)] p-1 rounded-md group-hover:bg-white group-hover:text-black' />        ,
        href: "#"
      },
      {
        title: "Guides",
        description: "Find help quickly",
        image: <IoBookOutline className='text-4xl shadow-[0_image: "/images/managed-infra.png",0_0_1px_rgba(255,255,255,0.14)] p-1 rounded-md group-hover:bg-white group-hover:text-black' />
        ,
        href: "#"
      },
      {
        title: "Partner Finder",
        description: "Get help from resource partners",
        image: <CiCompass1 className='text-4xl shadow-[0_image: "/images/managed-infra.png",0_0_1px_rgba(255,255,255,0.14)] p-1 rounded-md group-hover:bg-white group-hover:text-black' />        ,
        href: "#"
      }
    ]
  },
  {
    title: "Company",
    members: [
      {
        title: "Customers",
        description: "Trusted by the best teams",
        image: <BsEmojiSmile className='text-4xl shadow-[0_image: "/images/managed-infra.png",0_0_1px_rgba(255,255,255,0.14)] p-1 rounded-md group-hover:bg-white group-hover:text-black' />
        ,
        href: "#"
      },
      {
        title: "Blog",
        description: "The latest posts and changes",
        image: <FiPenTool className='text-4xl shadow-[0_image: "/images/managed-infra.png",0_0_1px_rgba(255,255,255,0.14)] p-1 rounded-md group-hover:bg-white group-hover:text-black' />
        ,
        href: "#"
      }
      ,
      {
        title: "Changelog",
        description: "See what shipped",
        image: <LuNotebook className='text-4xl shadow-[0_image: "/images/managed-infra.png",0_0_1px_rgba(255,255,255,0.14)] p-1 rounded-md group-hover:bg-white group-hover:text-black' />
        ,
        href: "#"
      },
      {
        title: "Press",
        description: "Read the latest news",
        image: <TfiBag className='text-4xl shadow-[0_image: "/images/managed-infra.png",0_0_1px_rgba(255,255,255,0.14)] p-1 rounded-md group-hover:bg-white group-hover:text-black' />
        ,
        href: "#"
      }
    ]
  }
];

export default function ResourceDropdown({ isOpen, onOpen, onClose }) {
  return (
    <div className="relative ">
      {/* Dropdown Trigger */}
      <button
        className="flex items-center text-gray-300 hover:text-white  py-2 px-3 hover:bg-[#1b1b1b] rounded-2xl transition-all"
        onMouseEnter={onOpen} // Ensure dropdown stays open when hovering
      >
        Resources
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
            {resourceCategories.map((category, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-gray-300 text-sm uppercase tracking-wide">
                  {category.title}
                </h3>
                <div className="space-y-1">
                  {category.members.map((resource, resourceIndex) => (
                    <Link
                      key={resourceIndex}
                      href={resource.href}
                      className="group flex items-start space-x-3 p-2 rounded-lg transition-colors"
                    >
                      <div className="relative w-12 h-12 flex-shrink-0">
                       {resource.image}
                      </div>
                      <div>
                        <h4 className="text-white font-medium text-sm">
                          {resource.title}
                        </h4>
                        <p className="text-gray-400 text-xs group-hover:text-sm mt-1 group-hover:text-gray-200">
                          {resource.description}
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