// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { Menu, X } from "lucide-react"; // Icons for menu

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="bg-gray-900 text-white">
//       <div className="container mx-auto flex items-center justify-between p-4">
//         {/* Logo */}
//         <Link href="/" className="text-xl font-bold">
//           MyWebsite
//         </Link>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex space-x-6">
//           <Link href="/" className="hover:text-gray-400">
//             Home
//           </Link>
//           <Link href="/Login" className="hover:text-gray-400">
//             Login
//           </Link>
//           <Link href="/products" className="hover:text-gray-400">
//             Products
//           </Link>
//           <Link href="/contact" className="hover:text-gray-400">
//             Contact
//           </Link>
//         </div>

//         {/* Mobile Menu Button */}
//         <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
//           {isOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>
//       </div>

//       {/* Mobile Menu Dropdown */}
//       {isOpen && (
//         <div className="md:hidden flex flex-col items-center space-y-4 p-4 bg-gray-800">
//           <Link
//             href="/"
//             className="hover:text-gray-400"
//             onClick={() => setIsOpen(false)}
//           >
//             Home
//           </Link>
//           <Link
//             href="/about"
//             className="hover:text-gray-400"
//             onClick={() => setIsOpen(false)}
//           >
//             About
//           </Link>
//           <Link
//             href="/services"
//             className="hover:text-gray-400"
//             onClick={() => setIsOpen(false)}
//           >
//             Services
//           </Link>
//           <Link
//             href="/contact"
//             className="hover:text-gray-400"
//             onClick={() => setIsOpen(false)}
//           >
//             Contact
//           </Link>
//         </div>
//       )}
//     </nav>
//   );
// }
"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Icons for menu

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white shadow-lg fixed w-full z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo with hover effect */}
        <Link
          href="/"
          className="text-xl font-bold hover:text-gray-400 transition duration-300 hover:scale-105"
        >
          MyWebsite
        </Link>

        {/* Desktop Menu with hover and focus effects */}
        <div className="hidden md:flex space-x-6">
          <Link
            href="/"
            className="hover:text-gray-400 transition duration-300 hover:scale-105"
          >
            Home
          </Link>
          <Link
            href="/Login"
            className="hover:text-gray-400 transition duration-300 hover:scale-105"
          >
            Login
          </Link>
          <Link
            href="/products"
            className="hover:text-gray-400 transition duration-300 hover:scale-105"
          >
            Products
          </Link>
          <Link
            href="/contact"
            className="hover:text-gray-400 transition duration-300 hover:scale-105"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button with animation */}
        <button
          className="md:hidden focus:outline-none transition duration-300 hover:scale-110"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X
              size={24}
              className="transform transition duration-300 rotate-180"
            />
          ) : (
            <Menu size={24} className="transform transition duration-300" />
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown with slide-down animation */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 p-4 bg-gray-800 animate-slideDown">
          <Link
            href="/"
            className="hover:text-gray-400 transition duration-300 hover:scale-105"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="hover:text-gray-400 transition duration-300 hover:scale-105"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="/services"
            className="hover:text-gray-400 transition duration-300 hover:scale-105"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="hover:text-gray-400 transition duration-300 hover:scale-105"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
