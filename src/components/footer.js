import React from "react"
import { Linkedin } from "react-feather"
import { Twitter } from "react-feather"
import Medium from "../images/bi_medium.svg"

export default function Footer() {
  return (
    <footer className="p-6 flex flex-col items-center gap-2 lg:flex-row lg:justify-between lg:px-40">
      <div className="flex flex-col items-center gap-0 lg:items-start">
        <p className="text-sm text-b-body">Andy Chan © 2021 - 2022 v1.0</p>
        <p className="text-sm text-b-body">Made in Singapore 🇸🇬</p>
      </div>
      <div className="flex flex-row items-center justify-center gap-2">
        <a href="https://twitter.com/andthisisandy" target="_blank">
          <Twitter size={18} color="#3d3d3d" />
        </a>

        <a href="https://www.linkedin.com/in/ndisisnd/" target="_blank">
          <Linkedin size={18} color="#3d3d3d" />
        </a>
        <a href="https://ndisisnd.medium.com" target="_blank">
          <Medium />
        </a>
      </div>
    </footer>
  )
}
