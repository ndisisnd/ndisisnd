import React from "react"
import { ChevronDown } from "react-feather"
import { ChevronUp } from "react-feather"
import { useState } from "react"

export default function NavbarItemSub({ item }) {
  const [itemOpen, setItemOpen] = useState(false)

  return (
    <div className="flex flex-row justify-between p-6">
      <p className="text-b-body">{item}</p>
      {!itemOpen ? <ChevronDown /> : <ChevronUp />}
    </div>
  )
}
