import React from "react"
import { Linkedin } from "react-feather"
import { Twitter } from "react-feather"
import { Youtube } from "react-feather"
import Medium from "../images/bi_medium.svg"

export default function Footer() {
  return (
    <footer className="p-6 bg-inherit flex flex-col items-center gap-2">
      <div className="flex flex-col items-center gap-0">
        <p className="text-sm text-b-body">Andy Chan © 2021 - 2022 v1.0</p>
        <p className="text-sm text-b-body">v1.0 Made in Singapore 🇸🇬</p>
      </div>
      <div className="flex flex-row items-center justify-center gap-2">
        <Linkedin size={18} color="#3d3d3d" />
        <Twitter size={18} color="#3d3d3d" />
        <Youtube size={18} color="#3d3d3d" />
        <Medium />
      </div>
    </footer>
  )
}
