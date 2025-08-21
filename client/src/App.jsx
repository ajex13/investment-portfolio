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
      <ul>
        {stocks.map((s) => (
          <li key={s._id}>
            {s.symbol}: INR{s.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
