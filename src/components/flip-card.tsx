import React from "react"
import './flip-card.scss'

function flipCard({children}: {children: React.ReactNode}) {
  return (
    <div className="igalore__flipcard">
      <div className="igalore__flipcard--inner">
        {children}
      </div>
    </div>
  )
}

export default flipCard