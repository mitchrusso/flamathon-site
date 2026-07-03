"use client";

import Link from "next/link";
import { Flame, Menu, ShoppingBag, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { href: "/#reviews", label: "Heat Picks" },
  { href: "/#categories", label: "Categories" },
  { href: "/#compare", label: "Compare" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#26342f] bg-[#111817]/95 text-white backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3">
        <Link href="/" className="flex items-center gap-3" aria-label="Flamathon home" onClick={() => setMenuOpen(false)}>
          <span className="grid h-10 w-10 place-items-center rounded-md bg-[#e4461c] text-white">
            <Flame className="h-5 w-5" aria-hidden />
          </span>
          <span className="text-lg font-black tracking-tight">Flamathon</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-bold text-[#cbd5d1] lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-[#ffb199]">
              {item.label}
            </Link>
          ))}
        </nav>
        <Link href="/#reviews" className="hidden min-h-11 items-center gap-2 rounded-md bg-[#e4461c] px-4 py-2 text-sm font-black text-white hover:bg-[#b93213] sm:inline-flex">
          <ShoppingBag className="h-4 w-4" aria-hidden />
          Shop Heat Picks
        </Link>
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-[#34443f] bg-[#1b2421] text-white lg:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
        </button>
      </div>
      {menuOpen && (
        <div className="border-t border-[#26342f] bg-[#111817] px-5 py-4 lg:hidden">
          <nav className="grid gap-2 text-base font-black" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className="rounded-md border border-[#34443f] bg-[#1b2421] px-4 py-3 text-white">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
