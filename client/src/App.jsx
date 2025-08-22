import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    axios.get("/api/stocks").then((res) => {
      setStocks(res.data);
    });

  }, []);

  return (
    <div>
      <h2>Investment Portfolio</h2>
      <table>
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Name</th>
            <th>Price (₹)</th>
          </tr>
        </thead>
        <tbody>
          {stocks.map((stock) => (
            <tr key={stock._id}>
              <td>{stock.symbol}</td>
              <td>{stock.name}</td>
              <td>{stock.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
