import mongoose from "mongoose";

const HoldingSchema = new mongoose.Schema({
  name: String,
  symbol: String,
  boughtAtPrice: Number,
  volume: Number,
});

const Holding = mongoose.model("Holding", HoldingSchema);

export default Holding;