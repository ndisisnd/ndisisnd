import React from "react"

export default function IndexSection({ header, body }) {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-2xl font-bold">{header}</h3>
      <p className="text-b-body">{body}</p>
    </div>
  )
}
