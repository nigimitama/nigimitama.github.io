"use client"

import Link from "next/link"
import { useState } from "react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header>
      <nav className="bg-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="text-xl font-bold">
              Masayoshi Mita
            </Link>

            <button
              className="md:hidden flex flex-col justify-center items-center w-6 h-6"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation"
            >
              <span className={`w-6 h-0.5 bg-white transition-all ${isOpen ? "rotate-45 translate-y-1.5" : ""}`}></span>
              <span className={`w-6 h-0.5 bg-white mt-1 transition-all ${isOpen ? "opacity-0" : ""}`}></span>
              <span
                className={`w-6 h-0.5 bg-white mt-1 transition-all ${isOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
              ></span>
            </button>

            <ul
              className={`${
                isOpen ? "block" : "hidden"
              } md:flex md:space-x-6 absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto bg-gray-800 md:bg-transparent p-4 md:p-0`}
            >
              <li>
                <Link href="/" className="block py-2 md:py-0 hover:text-gray-300 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="block py-2 md:py-0 hover:text-gray-300 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/work-history" className="block py-2 md:py-0 hover:text-gray-300 transition-colors">
                  Experience
                </Link>
              </li>
              <li>
                <Link href="/publications" className="block py-2 md:py-0 hover:text-gray-300 transition-colors">
                  Publications
                </Link>
              </li>
              <li>
                <Link href="/lectures" className="block py-2 md:py-0 hover:text-gray-300 transition-colors">
                  Lectures
                </Link>
              </li>
              <li>
                <Link href="/apps" className="block py-2 md:py-0 hover:text-gray-300 transition-colors">
                  Apps
                </Link>
              </li>
              <li>
                <Link href="/articles" className="block py-2 md:py-0 hover:text-gray-300 transition-colors">
                  Articles
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}
