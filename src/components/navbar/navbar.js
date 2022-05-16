import React from "react"
import { Menu } from "react-feather"
import { X } from "react-feather"
import { useState } from "react"
import NavbarItem from "./navbarItem"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <nav className="p-6 bg-bg-100 border-b border-bg-200">
        <div className="flex flex-row justify-between">
          <p className="font-semibold text-b-default">Andy Chan</p>
          {!menuOpen ? <Menu /> : <X />}
        </div>
      </nav>
      <div className="flex flex-col bg-white">
        <NavbarItem item="About" />
      </div>
    </>
  )
}
