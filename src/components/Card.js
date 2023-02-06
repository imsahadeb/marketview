import React from 'react'
import './Card.css'
function Card({index,icon}) {
  return (
    <div className="card">
    <div className="index-title">{index}</div>
    <div className="index-value">17900</div>
    <div className="index-change">
        <div className="index-change-current-day">
        100 | (0.67%)
        </div>
        <div className="index-change-past-day">
            <div className="indicator">
            <div className="prev-day-indicator"></div>
            <div className="prev-day-indicator negative"></div>
            <div className="prev-day-indicator"></div>
            <div className="prev-day-indicator negative"></div>
            <div className="prev-day-indicator"></div>

            </div>
            <p className="text">Last 5 Days</p>
        </div>
    </div>

</div>
  )
}

export default Card