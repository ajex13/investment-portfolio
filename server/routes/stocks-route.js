import express from "express";
import Stock from "../models/stock.js";

const StockRoutes = express.Router();

StockRoutes.get("/", async (req, res) => {
  const stocks = await Stock.find();
  res.json(stocks);
});

StockRoutes.post("/", async (req, res) => {
  const stock = new Stock(req.body);
  await stock.save();
  res.json(stock);
});

export default StockRoutes;