"use client"

import * as React from "react"
import Link from "next/link"
import { BookOpen, Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const NavLinks = ({ mobile = false }) => (
    <>
      <Link
        href="/examples"
        className={`text-foreground hover:text-primary transition-colors ${mobile ? "block py-2 px-4 hover:bg-blue-100" : ""}`}
        onClick={mobile ? toggleMenu : undefined}
      >
        Examples
      </Link>
      <Link
        href="/guide"
        className={`text-foreground hover:text-primary transition-colors ${mobile ? "block py-2 px-4 hover:bg-blue-100" : ""}`}
        onClick={mobile ? toggleMenu : undefined}
      >
        Guide
      </Link>
      <Link
        href="/resources"
        className={`text-foreground hover:text-primary transition-colors ${mobile ? "block py-2 px-4 hover:bg-blue-100" : ""}`}
        onClick={mobile ? toggleMenu : undefined}
      >
        Resources
      </Link>
      <Link
        href="/faq"
        className={`text-foreground hover:text-primary transition-colors ${mobile ? "block py-2 px-4 hover:bg-blue-100" : ""}`}
        onClick={mobile ? toggleMenu : undefined}
      >
        FAQ
      </Link>
      <Link
        href="/blog"
        className={`text-foreground hover:text-primary transition-colors ${mobile ? "block py-2 px-4 hover:bg-blue-100" : ""}`}
        onClick={mobile ? toggleMenu : undefined}
      >
        Blog
      </Link>
    </>
  )

  return (
    <div className="bg-[#b3d9ff]">
      <div className="flex h-16 items-center px-4 container mx-auto">
        <Link href="/" className="flex items-center space-x-2 mr-6">
          <BookOpen className="h-6 w-6" />
          <span className="font-bold text-xl">RRL Example</span>
        </Link>
        <nav className="hidden md:flex space-x-8 ml-auto">
          <NavLinks />
        </nav>
        <div className="md:hidden ml-auto relative">
          <button onClick={toggleMenu} className="p-2">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
          {isOpen && (
            <div className="absolute right-0 mt-2 py-2 w-48 bg-[#e6f3ff] rounded-md shadow-xl z-20">
              <NavLinks mobile />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

