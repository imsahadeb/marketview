import React from 'react'
import './WorldMarket.css'
import Card from './Card'
function WorldMarket() {
    return (
        <div id="worldmarket">
            <h3>Asian Market</h3>
            <div id="cards">
            <Card symbol={"IBM"} symbolName={"IBM"} />
            <Card symbol={"RELIANCE.BSE"} symbolName={"RELIANCE"} />
            <Card symbol={"META"} symbolName={"FACEBOOK"} />
                {/* <Card symbol={"Nikkei"} />
                <Card symbol={"Hang Seng"} />
                <Card symbol={"Shanghai Composite"} />
                <Card symbol={"KOSPI"} /> */}
            </div>

            <h3>Us Market</h3>
            <div id="cards">
                {/* <Card symbol={"Dow Jones"} />
                <Card symbol={"Nasdaq"} />
                <Card symbol={"S&P 500"} /> */}
               
            </div>

            <h3>Eu Market</h3>
            <div id="cards">
                {/* <Card symbol={"FTSE"} />
                <Card symbol={"CAC"} />
                <Card symbol={"DAX"} /> */}
               
            </div>





        </div>
    )
}

export default WorldMarket