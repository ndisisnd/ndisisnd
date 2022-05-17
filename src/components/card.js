import React from "react"
import "../styles/button.css"

function Card({ header, subtitle, CTA, route }) {
  return (
    <div className="flex flex-col gap-4 items-center p-12 rounded-xl card">
      <div className="text-center flex flex-col gap-2">
        <h3 className="text-xl font-semibold">{header}</h3>
        <p className="text-b-body text-sm">{subtitle}</p>
      </div>
      {route ? (
        <a href={route}>
          <button className="btn-cta-card p-4 rounded-md text-white font-bold ">
            {CTA}
          </button>
        </a>
      ) : (
        <div></div>
      )}
    </div>
  )
}

export default Card
