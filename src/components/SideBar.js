import React from 'react'
import  './SideBar.css';
export default function SideBar() {
  return (
    <div id="sidebar">
      <div className="logo">Market View</div>
      {/* <hr /> */}
      <div className="sidebar-nav">
        <div className="item active">Global Market View</div>
        <div className="item">Indian ADR</div>
        <div className="item">Indian Post Market Data</div>
        <div className="item">Nifty OI</div>
        <div className="item">Bank Nifty OI</div>
        <div className="item">Heat Map</div>
        <div className="item">Top Sector</div>
        <div className="item">Latest Finance News</div>


      </div>
    </div>
  )
}
