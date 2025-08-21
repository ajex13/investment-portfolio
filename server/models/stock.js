import mongoose from "mongoose";

const StockSchema = new mongoose.Schema({
  name: String,
  symbol: String,
  price: Number,
});

const Stock = mongoose.model("Stock", StockSchema);

export default Stock;