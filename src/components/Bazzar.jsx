import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Card, Button } from "react-bootstrap";

export default function Bazzar() {
  const [bazzar, setBazzar] = useState([]);

  const itemsArr = useEffect(() => {
    loadBazzar();
  }, []);

  const loadBazzar = () => {
    Axios.get("https://api.hypixel.net/skyblock/bazaar").then((response) => {
      setBazzar(response.data.products);
    });
  };

  const findMargin = (sellPrice, buyPrice) => {
    return buyPrice - sellPrice;
  };

  return (
    <>
      {Object.keys(bazzar).map((item, i) => (
        <div key={i}>
          <p>Item Name:{bazzar[item].product_id}</p>
          <p>Buy Price: {bazzar[item].quick_status.buyPrice}</p>
          <p>Sell Price: {bazzar[item].quick_status.sellPrice}</p>
          <p>
            Margin:{" "}
            {findMargin(
              bazzar[item].quick_status.sellPrice,
              bazzar[item].quick_status.buyPrice
            )}
          </p>
          <hr />
        </div>
      ))}
    </>
  );
}
