import mongoose from "mongoose";
import Stock from "./models/stock.js";

mongoose.connect("mongodb://127.0.0.1:27017/investment_portfolio");


const stocks = [
  { name: "Reliance Industries Limited", symbol: "RIL", price: 1500, boughtAtPrice: 1500 },
  { name: "ITC Limited", symbol: "ITC", price: 400, boughtAtPrice: 400 },
  { name: "Hindustan Unilever Limited", symbol: "HUL", price: 2800, boughtAtPrice: 2800 },
  { name: "HDFC Bank Limited", symbol: "HDFCBANK", price: 1300, boughtAtPrice: 1300 },
  { name: "Tata Consultancy Services Limited", symbol: "TCS", price: 3000, boughtAtPrice: 3000 },
];

async function seed() {
  try {
    console.log("seeding...");
    await Stock.deleteMany(); 
    await Stock.insertMany(stocks);
    console.log("seed successful");
  } catch (err) {
    console.error(err);
  } finally {
    mongoose.connection.close();
  }
}

seed();