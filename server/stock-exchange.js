import Stock from "./models/stock.js";

async function stockEchange() {
  const stocks = await Stock.find();
  for (let stock of stocks) {
    const price = stock.price;

    const percentChange = (Math.random() - 0.5) * 2; 

    const change = price * (percentChange / 100);   

    const newPrice = +(price + change).toFixed(2);

    stock.price = newPrice;

    await stock.save();
  }
}

export default stockEchange;