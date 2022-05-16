import React from "react"
import { ChevronDown } from "react-feather"
import { ChevronUp } from "react-feather"
import { useState } from "react"
import NavbarItemSub from "./navbarItemSub"

export default function NavbarItem({ item, containsItemSub }) {
  const [itemOpen, setItemOpen] = useState(false)

  return (
    <div className="flex flex-row justify-between p-6">
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
  )
}
