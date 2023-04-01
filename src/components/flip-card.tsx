import React from "react"
import './flip-card.scss'

/**
 *
 * @param {React.ReactNode} {children} - The children components to add
 * @returns {React.ReactNode} A pure CSS flipping (on hover) card with two sides
 */
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
