import React from "react"
import { Menu } from "react-feather"
import { X } from "react-feather"
import { useState } from "react"
import NavbarItem from "./navbarItem"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const arrayItemSubWork = [
    {
      item: "Work",
    },
    {
      item: "Talk",
    },
  ]

  return (
    <>
      <nav className="p-6 bg-bg-100 border-b border-bg-200 ">
        <div className="flex flex-row justify-between">
          <p className="font-semibold text-b-default">Andy Chan</p>
          {!menuOpen ? (
            <Menu
              onClick={() => setMenuOpen(true)}
              className="cursor-pointer"
            />
          ) : (
            <X onClick={() => setMenuOpen(false)} className="cursor-pointer" />
          )}
        </div>
      </nav>
      <div className={`${menuOpen ? `flex flex-col bg-white ` : `hidden`}`}>
        <NavbarItem item="About" containsItemSub={false} arrayItemSub={false} />
        <NavbarItem
          item="Work"
          containsItemSub={true}
          arrayItemSub={arrayItemSubWork}
        />
        <NavbarItem
          item="Resources"
          containsItemSub={false}
          arrayItemSub={false}
        />
      </div>
    </>
  )
}
