import React from "react"
import "../styles/button.css"
import { Link } from "gatsby"

function Card({ title, subtitle, CTA, route }) {
  return (
    <div className="flex flex-col gap-4 items-center p-12 rounded-xl card">
      <div className="text-center flex flex-col gap-2">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-b-body text-sm">{subtitle}</p>
      </div>
      <a href={route}>
        <button className="btn-cta-card p-4 rounded-md text-white font-bold ">
          {CTA}
        </button>
      </a>
    </div>
  )
}

export default Card
