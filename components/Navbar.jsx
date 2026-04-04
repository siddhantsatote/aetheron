"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/register", label: "Events" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0e1a]/95 backdrop-blur-md border-b border-cyan-500/10"
          : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo — left */}
          <Link href="/" className="flex items-center gap-3 group">
            <img
              src="/logo.png"
              alt="AETHERON"
              className="h-10 w-10 object-contain"
            />
            <span className="font-orbitron text-xl font-bold text-neon-cyan tracking-wider">
              AETHERON
            </span>
          </Link>

          {/* Desktop nav links — right */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`font-medium text-base tracking-wide transition-all duration-300 hover:text-neon-cyan ${
                  pathname === item.href ? "text-neon-cyan" : "text-slate-400"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/admin/login"
              className="font-medium text-base tracking-wide transition-all duration-300 hover:text-neon-magenta text-slate-400"
            >
              Admin
            </Link>
            <Link
              href="/register"
              className="glow-btn-cyan px-5 py-2.5 rounded-lg font-orbitron text-sm text-neon-cyan tracking-wider"
            >
              REGISTER
            </Link>
          </div>

          {/* Mobile hamburger — right */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-slate-300 hover:text-neon-cyan transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div className="md:hidden pb-4 space-y-1 bg-[#0a0e1a] border border-cyan-500/15 rounded-xl mt-2 p-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`block px-3 py-2.5 rounded-lg text-sm transition-all ${
                  pathname === item.href
                    ? "text-neon-cyan bg-neon-cyan/10"
                    : "text-slate-400 hover:text-neon-cyan hover:bg-neon-cyan/5"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/admin/login"
              onClick={() => setMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-sm transition-all text-slate-400 hover:text-neon-magenta hover:bg-neon-magenta/5"
            >
              Admin
            </Link>
            <Link
              href="/register"
              onClick={() => setMenuOpen(false)}
              className="block text-center glow-btn-cyan px-4 py-2 rounded-lg font-orbitron text-xs text-neon-cyan tracking-wider mt-2"
            >
              REGISTER
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
