import http from "node:http"
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import StockRoutes from "./routes/stocks-route.js";
import stockEchange from "./stock-exchange.js";
import {Server} from "socket.io";

const port = 8880;

const app = express();

const server = http.createServer(app);

const io = new Server(server, { cors: {     
  origin: "http://localhost:3330", 
  methods: ["GET", "POST"] 
} });

app.use(cors());

app.use(express.json());

io.on("connection", (socket) => {
  console.log("Client connected");

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

mongoose.connect("mongodb://127.0.0.1:27017/investment_portfolio");

app.use("/api/stocks", StockRoutes);

setInterval(() => {
  stockEchange(io);
}, 1000);

server.listen(port, () => {
  console.log(`listening on port ${port}`);
});
