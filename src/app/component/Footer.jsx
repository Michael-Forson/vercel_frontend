"use client";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="bg-black  shadow-[0_0_0_1px_rgba(255,255,255,0.14)] text-white py-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Products Section */}
          <div>
            <h3 className="text-white font-semibold mb-4">Products</h3>
            <ul className="space-y-2 text-gray-400">
              <li>AI</li>
              <li>Enterprise</li>
              <li>Fluid Compute</li>
              <li>Next.js</li>
              <li>Observability</li>
              <li>Previews</li>
              <li>Rendering</li>
              <li>Security</li>
              <li>Turbo</li>
              <li>v0</li>
            </ul>
          </div>

          {/* Resources Section */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Community</li>
              <li>Docs</li>
              <li>Guides</li>
              <li>Help</li>
              <li>Integrations</li>
              <li>Pricing</li>
              <li>Resources</li>
              <li>Solution Partners</li>
              <li>Templates</li>
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li>About</li>
              <li>Blog</li>
              <li>Careers</li>
              <li>Changelog</li>
              <li>Contact Us</li>
              <li>Customers</li>
              <li>Partners</li>
              <li>Privacy Policy</li>
              <li>Legal</li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-white font-semibold  mb-4">Social</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center space-x-2">
                <FaGithub className="text-2xl" />
                <span>GitHub</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaLinkedin className="text-2xl" />
                <span>LinkedIn</span>
              </li>
              <li className="flex items-center space-x-2">
                <BsTwitterX className="text-2xl" />
                <span> X</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaYoutube className="text-2xl" />
                <span>YouTube</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
