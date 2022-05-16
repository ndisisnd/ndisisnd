import React from "react"
import { Circle } from "react-feather"

function TimelineBox({ date, header, body }) {
  return (
    <div className="flex flex-row justify-between gap-4 pt-4">
      <div>
        <p className="text-b-body text-sm">{date}</p>
      </div>
      <div className="w-2/3">
        <p className="font-bold text-b-default text-sm">{header}</p>
        <p className="text-b-body text-sm">{body}</p>
      </div>
    </div>
  )
}

export default TimelineBox
