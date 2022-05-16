import React from "react"
import { ChevronDown } from "react-feather"
import { ChevronUp } from "react-feather"

export default function NavbarItemSub({ item, route }) {
  return (
    <div className="flex flex-row justify-between p-6">
      <p className="text-b-body">{item}</p>
    </div>
  )
}
