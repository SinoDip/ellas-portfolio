"use client";
import { assets, navData } from "@/assets/assets";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full py-5 px-6 md:px-10 flex justify-between items-center shadow-md fixed z-50 transition-all ${
        isScrolled ? "bg-black/80 backdrop-blur-md" : "bg-black"
      }`}
    >
      {/* Logo */}
      <div>
        <Image className="w-28" src={assets.logo} alt="logo" />
      </div>

      {/* Desktop Nav */}
      <ul className="hidden md:flex items-center gap-7">
        {navData.map((item, index) => (
          <li
            key={index}
            className="cursor-pointer text-gray-300 hover:text-primary transition"
          >
            <Link href={item.url}>{item.title}</Link>
          </li>
        ))}
        <button className="border border-primary px-4 py-2 rounded-md hover:bg-primary hover:text-white transition">
          Contact
        </button>
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-gray-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-black/90 shadow-md flex flex-col px-7 py-5 md:hidden z-50">
          <ul className="flex flex-col gap-5 text-lg text-gray-300">
            {navData.map((item, index) => (
              <li
                key={index}
                className="cursor-pointer hover:text-primary transition"
              >
                <Link href={item.url} onClick={() => setIsOpen(false)}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          <button className="mt-4 border border-primary px-4 py-2 rounded-md text-primary hover:bg-primary hover:text-white transition">
            Contact
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
