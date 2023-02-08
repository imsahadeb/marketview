import React, { useEffect, useState } from 'react'
import './Card.css'
import axios from 'axios'
let today = new Date();
let prevDay = 0;


function Card({ symbol, symbolName, iconUrl }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${symbol}&apikey=3K0ZOMQFNQHC1ILI`
      const request = await axios.get(url);
      setData(request.data);

    }
    fetchData();
  }, []);

  console.log(data);

  function getPrevClosing(dayNumber) {
    if (!data || !data['Time Series (Daily)']) return "loding..";
  
    let date = getDate(dayNumber);
    let prevDate = getDate(dayNumber + 1);
    let closing = data['Time Series (Daily)'][date]?.['4. close'] || 0;
    let prevClosing = data['Time Series (Daily)'][prevDate]?.['4. close'] || 0;
    
    return prevClosing - closing;
  }
  function  getClosingPrice(dayNumber) {
    if (!data || !data['Time Series (Daily)']) return "loding..";
  
    let date = getDate(dayNumber);
    let prevDate = getDate(dayNumber + 1);
    let closing = data['Time Series (Daily)'][date]?.['4. close'] || 0;
    return closing;
  }

  function getDate(dayNumber) {
    if (!data || !data['Time Series (Daily)']) return "loding..";
    let date = new Date();
    date.setDate(today.getDate() - dayNumber);
    let dateString = date.toISOString().substring(0, 10);
    return dateString

  }

   console.log("Closing : ", getPrevClosing(2));

  return (
  
    <div className="card">
      <div className="index-title">{symbolName}</div>
      <div className="index-value">{getClosingPrice(1)}</div>
      <div className="index-change">
        <div className="index-change-current-day">
          {getPrevClosing(1)} |{getPrevClosing(2)}
      
        </div>
        <div className="index-change-past-day">
          <div className="indicator">
          <div className={getPrevClosing(1)<0? "prev-day-indicator negative" : " prev-day-indicator"}></div>
          <div className={getPrevClosing(2)<0? "prev-day-indicator negative" : " prev-day-indicator"}></div>
          <div className={getPrevClosing(3)<0? "prev-day-indicator negative" : " prev-day-indicator"}></div>
          <div className={getPrevClosing(4)<0? "prev-day-indicator negative" : " prev-day-indicator"}></div>
          <div className={getPrevClosing(5)<0? "prev-day-indicator negative" : " prev-day-indicator"}></div>

          </div>
          <p className="text">Last 5 Days</p>
        </div>
      </div>

    </div>
  )
}

export default Card