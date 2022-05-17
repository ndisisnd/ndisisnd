import React from "react"
import { Menu } from "react-feather"
import { X } from "react-feather"
import { useState } from "react"
import NavbarItem from "./navbarItem"
import { Link } from "gatsby"

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
      <nav className="p-6 bg-bg-100 border-b border-bg-200 lg:px-40">
        <div className="flex flex-row justify-between">
          <Link to="/">
            <p className="font-semibold text-b-default hover:text-o-900 hover:ease-in ease-in">
              Andy Chan
            </p>
          </Link>
          {!menuOpen ? (
            <Menu
              onClick={() => setMenuOpen(true)}
              className="cursor-pointer lg:hidden"
            />
          ) : (
            <X onClick={() => setMenuOpen(false)} className="cursor-pointer" />
          )}
          <div className="hidden lg:flex lg:flex-row lg:gap-4 font-semibold text-sm text-b-body">
            <Link
              to="/about"
              className="hover:text-o-900 hover:ease-in ease-in"
            >
              <p>About</p>
            </Link>
            <Link
              to="/coming-soon"
              className="hover:text-o-900 hover:ease-in ease-in"
            >
              <p>Work</p>
            </Link>
            <Link
              to="/coming-soon"
              className="hover:text-o-900 hover:ease-in ease-in"
            >
              <p>Resources</p>
            </Link>
          </div>
        </div>
      </nav>

      <div
        className={`${
          menuOpen ? `flex flex-col bg-white ` : `hidden`
        } lg:hidden`}
      >
        <NavbarItem
          item="About"
          containsItemSub={false}
          arrayItemSub={false}
          route={"/about"}
        />
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
