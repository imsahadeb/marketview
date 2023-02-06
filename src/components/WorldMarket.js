import React from 'react'
import './WorldMarket.css'
import Card from './Card'
function WorldMarket() {
    return (
        <div id="worldmarket">
            <h3>Asian Market</h3>
            <div id="cards">
                <Card index={"SGX Nifty"} />
                <Card index={"Nikkei"} />
                <Card index={"Hang Seng"} />
                <Card index={"Shanghai Composite"} />
                <Card index={"KOSPI"} />
            </div>

            <h3>Us Market</h3>
            <div id="cards">
                <Card index={"Dow Jones"} />
                <Card index={"Nasdaq"} />
                <Card index={"S&P 500"} />
               
            </div>

            <h3>Eu Market</h3>
            <div id="cards">
                <Card index={"FTSE"} />
                <Card index={"CAC"} />
                <Card index={"DAX"} />
               
            </div>





        </div>
    )
}

export default WorldMarket