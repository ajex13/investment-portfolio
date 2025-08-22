import React, { useEffect, useState } from "react";
import axios from "axios";
import './App.css';
import io from "socket.io-client";

const socket = io("http://localhost:8880");

function App() {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    axios.get("/api/stocks").then((res) => {
      setStocks(res.data);
    });

    socket.on("stock_price_update", (update) => {
      setStocks((prev) =>
        prev.map((stock) => {
          if (stock.symbol === update.symbol) {
           return { ...stock, price: update.price}
          } 
          
          return stock;
        })
      );
    });

    return () => {
      socket.off("stock_price_update");
    };

  }, []);

  return (
    <div className="container">
      <h2>Investment Portfolio</h2>
      <table className="portfolio-table">
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Name</th>
            <th>Bought At Price (₹)</th>
            <th>Current Price (₹)</th>
          </tr>
        </thead>
        <tbody>
          {stocks.map((stock) => (
            <tr key={stock._id}>
              <td>{stock.symbol}</td>
              <td>{stock.name}</td>
              <td>{stock.boughtAtPrice}</td>
              <td
                style={{
                  color:
                    stock.price >= stock.boughtAtPrice
                      ? "green"
                      : "red"
                }}
              >
                {stock.price}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
