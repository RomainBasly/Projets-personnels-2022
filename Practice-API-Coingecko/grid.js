const URLGST = 'https://api.coingecko.com/api/v3/coins/green-satoshi-token/tickers';
const URLGMT = 'https://api.coingecko.com/api/v3/coins/stepn';
const URLSOL = 'https://api.coingecko.com/api/v3/coins/solana';

const getSOLPrice = async() => {
    const response = await fetch(URLSOL);
    const data = response.json();
    const dataReturned = await data;
    console.log(dataReturned)
    console.log(dataReturned["market_data"]["current_price"]["usd"]);
    return dataReturned["market_data"]["current_price"]["usd"];
}

// getSOLPrice();

const getGSTPrice = async() => {
    const responseGST = await fetch(URLGST);
    const responseSOL = await getSOLPrice();
    console.log(responseSOL);
    const dataGST = responseGST.json();
    const dataGSTReturned = await dataGST;
    console.log(dataGSTReturned["tickers"][1].last.toFixed(2));
    return dataGSTReturned["tickers"][1].last.toFixed(2);
}

// getGSTPrice();

const getGMTPrice = async() => {
    const responseGMT = await fetch(URLGMT);
    const responseSOL = await getSOLPrice();
    console.log(responseSOL);
    const dataGMT = responseGMT.json();
    const dataGMTReturned = await dataGMT;
    console.log(dataGMTReturned)
    return dataGMTReturned["market_data"]["current_price"]["usd"];
}

const injectResults = async () => {
    const select_GMT_USD = document.querySelector('#GMT-price-usd');
    select_GMT_USD.innerHTML = `${await getGMTPrice()}$`;
    
    const select_SOL_USD = document.querySelector('#SOL-price-usd');
    select_SOL_USD.innerHTML = `${await getSOLPrice()}$`;

    const select_GST_USD = document.querySelector('#GST-price-usd');
    select_GST_USD.innerHTML = `${await getGSTPrice()}$ on Huobi`;

    const select_GST_SOL = document.querySelector('#GST-price-SOL');
    GST_SOL = await getGSTPrice() / await getSOLPrice();
    select_GST_SOL.innerHTML = `${GST_SOL.toFixed(2)}SOL`;

    const select_GMT_SOL = document.querySelector('#GMT-price-SOL');
    GMT_SOL = await getGMTPrice() / await getSOLPrice();
    select_GMT_SOL.innerHTML = `${GMT_SOL.toFixed(2)}SOL`;

    const select_Cost_Mint_USD = document.querySelector('#Cost-Mint-USD');
    const mintCostUSD = await getGSTPrice() * 200;
    console.log(mintCostUSD)
    select_Cost_Mint_USD.innerHTML = `${mintCostUSD.toFixed(2)}$`;

    const select_Cost_Mint_SOL = document.querySelector('#Cost-Mint-SOL');
    const mintCostSOL = (await getGSTPrice() * 200) / await getSOLPrice();
    console.log(mintCostSOL)
    select_Cost_Mint_SOL.innerHTML = `${mintCostSOL.toFixed(2)}SOL`;

}
// getGMTPrice();
injectResults();
// fetch(URLGMT).then((response) => {
//         // console.log(response)
//         return response.json();
//     }).then(data => {
//         const SOLPrice = await getSOLPrice()
//         const GMT_price = document.querySelector('#GMT-price-usd');
//         GMT_price.innerHTML = `${data["market_data"]["current_price"]["usd"]}$`
//         const GMT_price_SOL = document.querySelector('#GMT-price-SOL');
//         GMT_price_SOL.innerHTML = `${data["market_data"]["current_price"]["usd"]/SOL_price}`
//     })
//     .catch((err) => {
//         console.log(err)
//     });


// fetch(URLGST).then((response) => {
//         // console.log(response)
//         return response.json();
//     }).then(data => {
//         const GST_price = document.querySelector("#GST-price-usd");
//         GST_price.innerHTML = `${data["tickers"][1].last.toFixed(2)}$`;
//     })
//     .catch((err) => {
//         console.log(err)
//     });


