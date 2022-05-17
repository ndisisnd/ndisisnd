import React from "react"
import Navbar from "./navbar/navbar"
import Footer from "./footer"

export default function Layout({ children }) {
  return (
    <div className="flex flex-col bg-bg-100">
      <Navbar />
      <div className="p-6 lg:px-40 lg:py-24 grow min-h-screen">{children}</div>
      <Footer />
    </div>
  )
}
