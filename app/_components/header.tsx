"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Menu, X } from "lucide-react";
import { navs } from "@/lib/constants/constants";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent py-6 ">
      <div className="flex items-center justify-between px-6 md:px-10 py-5">
        {/* Logo */}
        <div className="text-3xl font-semibold tracking-tight text-gray-900">
          logo
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex">
          <ul className="flex gap-8">
            {navs.map((n) => (
              <li
                key={n}
                className="font-medium text-gray-800 text-xl hover:text-gray-600 transition-colors cursor-pointer"
              >
                {n}
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-4">
          <Select>
            <SelectTrigger className="w-20 border border-black">
              <SelectValue placeholder="USD" />
            </SelectTrigger>
            <SelectContent className="z-10">
              <SelectGroup>
                <SelectItem value="usd">USD</SelectItem>
                <SelectItem value="rwf">RWF</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Button>Log in</Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-md hover:bg-gray-100"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-6 py-4 space-y-4">
          <ul className="flex flex-col gap-4">
            {navs.map((n) => (
              <li
                key={n}
                className="font-medium text-gray-800 text-lg hover:text-gray-600 transition-colors cursor-pointer"
              >
                {n}
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-3 pt-4">
            <Select>
              <SelectTrigger className="w-24 border border-gray-300 bg-white">
                <SelectValue placeholder="USD" />
              </SelectTrigger>
              <SelectContent className="z-10">
                <SelectGroup>
                  <SelectItem value="usd">USD</SelectItem>
                  <SelectItem value="rwf">RWF</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Button className="w-full">Log in</Button>
          </div>
        </div>
      )}
    </header>
  );
}
