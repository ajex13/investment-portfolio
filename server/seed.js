import mongoose from "mongoose";
import Stock from "./models/stock.js";

mongoose.connect("mongodb://127.0.0.1:27017/investment_portfolio");


const seedData = [
  {name: "Reliance", symbol: "RIL", price: 1500 },
  {name: "ITC", symbol: "ITC", price: 400 },
  {name: "HUL", symbol: "HUL", price: 2800 },
  {name: "HDFC Bank", symbol: "HDFCBANK", price: 1300 },
  {name: "TCS", symbol: "TCS", price: 3000 },
];

async function seed() {
  try {
    console.log("seeding...");
    await Stock.deleteMany(); 
    await Stock.insertMany(seedData);
    console.log("seed successful");
  } catch (err) {
    console.error(err);
  } finally {
    mongoose.connection.close();
  }
}

seed();