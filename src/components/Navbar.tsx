"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [, setTheme] = useState("");
  const [activeRoute, setActiveRoute] = useState("");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
    setActiveRoute(window.location.pathname);
  }, []);

  const navLinks = [
    { href: "/", label: "About Me" },
    { href: "/projects", label: "Experiences" },
    { href: "/blogs", label: "Blogs" },
    { href: "/contact", label: "Contact" }
  ];

  return (
    <nav className="w-full p-4 bg-background/80 backdrop-blur-sm sticky top-0 z-50 border-b border-foreground/10">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo - visible on all screens */}
        <Image
            src="/images/lucylogo.jpeg"
            alt="Lucy Tran"
            width={60}
            height={60}
            className="rounded-full w-8 h-8 sm:w-[60px] sm:h-[60px]"
        />

        {/* Desktop Menu - Hidden on mobile */}
        <div className="hidden sm:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`hover:text-primary transition-colors ${
                activeRoute === link.href ? "text-primary" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}