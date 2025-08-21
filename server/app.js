import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import StockRoutes from "./routes/stocks-route.js";
import stockEchange from "./stock-exchange.js";

const port = 8880;

const app = express();

app.use(cors());

app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/investment_portfolio");

app.use("/api/stocks", StockRoutes);

setInterval(stockEchange, 5000);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
