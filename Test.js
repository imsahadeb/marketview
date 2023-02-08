const axios = require('axios');
const url = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=demo'
let today = new Date();
let lastFiveDays = [];
for (let i = 0; i < 5; i++) {
    let date = new Date();
    date.setDate(today.getDate() - i);
    let dateString = date.toISOString().substring(0, 10);
    lastFiveDays.push(dateString);
}

function day(val) {
    let date = new Date();
    date.setDate(today.getDate() - val);
    let dateString = date.toISOString().substring(0, 10);
    return dateString

}
console.log(lastFiveDays);

async function fetchData(url) {
    const data = await axios.get(url);
    //  console.log(data.data['Meta Data']);
    //  const last_update=data.data['Meta data'];
    const last_update = data.data['Meta Data']['3. Last Refreshed']
    console.log(last_update);
    if(last_update===day(1)){
        console.log("day 1",day(1));
    }else{
        console.log("day2",day(2));
    }
    console.log(data.data['Time Series (Daily)'][lastFiveDays[1]]);
 

}

fetchData(url);