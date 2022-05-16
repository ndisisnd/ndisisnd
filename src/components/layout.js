import React from "react"
import Navbar from "./navbar/navbar"
import Footer from "./footer"

export default function Layout({ children }) {
  return (
    <div className="flex flex-col justify-between bg-bg-100">
      <Navbar />
      <div className="p-6 h-screen">{children}</div>
      <Footer className="self-stretch" />
    </div>
  )
}
