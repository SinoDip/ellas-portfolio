"use client";
import { assets, navData } from "@/assets/assets";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Get current pathname

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname(); // Get the current pathname
  const [activeLink, setActiveLink] = useState(pathname); // Track active link

  useEffect(() => {
    const handleScroll = () => {
      // Check if page is scrolled beyond 50px
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Check which section is in view based on the scroll position
      const sections = document.querySelectorAll("section"); // Assuming sections have 'section' class
      let current = "";
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (
          rect.top <= window.innerHeight / 2 &&
          rect.bottom >= window.innerHeight / 2
        ) {
          current = `#${section.id}`; // Get the section ID
        }
      });

      // Update active link based on the current section
      if (current) setActiveLink(current);
    };

    // Listen for scroll and hash changes
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("hashchange", () =>
      setActiveLink(window.location.hash)
    );

    // Set active link on page load
    setActiveLink(window.location.hash || pathname);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", () =>
        setActiveLink(window.location.hash)
      );
    };
  }, [pathname]);

  // Check if the link is active based on pathname or hash
  const isLinkActive = (url) => {
    return pathname === url || `#${url}` === activeLink;
  };

  return (
    <div className="flex justify-center pb-10">
      <nav
        className={`py-4 px-6 md:px-10 flex justify-between items-center shadow-md fixed z-50 transition-all ${
          isScrolled
            ? "bg-black/80 backdrop-blur-md w-full border border-black/80"
            : "bg-black w-[90vw] md:w-[80vw] rounded-full mt-6 border border-gray/35"
        }`}
      >
        {/* Logo */}
        <div>
          <Link href="/">
            <Image className="w-28" src={assets.logo} alt="logo" />
          </Link>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-7">
          {navData.map((item, index) => (
            <li
              key={index}
              className={`cursor-pointer text-gray-300 hover:text-primary transition ${
                isLinkActive(item.url) ? "text-primary font-semibold" : ""
              }`}
            >
              <Link href={item.url}>{item.title}</Link>
            </li>
          ))}
          <button className="border border-primary px-4 py-2 rounded-md hover:bg-primary hover:text-white transition">
            <Link href="/contact">Contact</Link>
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
          <div className="absolute top-[3.8rem] left-0 w-full bg-black/90 shadow-md flex flex-col px-7 py-5 md:hidden z-50">
            <ul className="flex flex-col gap-5 text-lg text-gray-300">
              {navData.map((item, index) => (
                <li
                  key={index}
                  className={`cursor-pointer hover:text-primary transition ${
                    isLinkActive(item.url) ? "text-primary font-semibold" : ""
                  }`}
                >
                  <Link href={item.url} onClick={() => setIsOpen(false)}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
            <button className="mt-4 border border-primary px-4 py-2 rounded-md text-primary hover:bg-primary hover:text-white transition">
              <Link href="/contact">Contact</Link>
            </button>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
