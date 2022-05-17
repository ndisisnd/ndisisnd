import React from "react"
import { ChevronDown } from "react-feather"
import { ChevronUp } from "react-feather"
import { useState } from "react"
import NavbarItemSub from "./navbarItemSub"
import { Link } from "gatsby"

export default function NavbarItem({
  item,
  containsItemSub,
  arrayItemSub,
  route,
}) {
  const [itemOpen, setItemOpen] = useState(false)
  const subitems = arrayItemSub

  {
    if (route) {
      return (
        <>
          <Link to={route}>
            <div
              className={`flex flex-row justify-between p-6 cursor-pointer ${
                !itemOpen ? `bg-inherit` : `bg-o-100`
              } ${itemOpen ? `font-bold` : `font-normal`}`}
              onClick={() => {
                itemOpen ? setItemOpen(false) : setItemOpen(true)
              }}
            >
              <p className="text-b-body">{item}</p>
              {/* Checks if the menu item contains sub-items, and then checks for the item open state */}
              {containsItemSub ? (
                !itemOpen ? (
                  <ChevronDown />
                ) : (
                  <ChevronUp />
                )
              ) : (
                <div></div>
              )}
            </div>
          </Link>
        </>
      )
    } else {
      return (
        <>
            <div
              className={`flex flex-row justify-between p-6 cursor-pointer ${
                !itemOpen ? `bg-inherit` : `bg-o-100`
              } ${itemOpen ? `font-bold` : `font-normal`}`}
              onClick={() => {
                itemOpen ? setItemOpen(false) : setItemOpen(true)
              }}
            >
              <p className="text-b-body">{item}</p>
              {/* Checks if the menu item contains sub-items, and then checks for the item open state */}
              {containsItemSub ? (
                !itemOpen ? (
                  <ChevronDown />
                ) : (
                  <ChevronUp />
                )
              ) : (
                <div></div>
              )}
            </div>
        </>
      )
    }
  }
}
