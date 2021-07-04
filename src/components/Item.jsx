import React, { useState } from "react";
import Axios from "axios";
import { Card, Button } from "react-bootstrap";

function Item({ itemID }) {
  const [auction, setAuction] = useState("Loading...");
  const [price, setPrice] = useState("0");
  const [lore, setLore] = useState("Loading...");
  const [tier, setTier] = useState("");
  const [category, setCategory] = useState("");

  const getAuctions = () => {
    Axios.get("https://api.hypixel.net/skyblock/auctions").then((response) => {
      console.log(response.data);
      setAuction(response.data.auctions[itemID].item_name);
      setPrice(response.data.auctions[itemID].starting_bid);
      setLore(response.data.auctions[itemID].item_lore);
      setTier(response.data.auctions[itemID].tier);
      setCategory(response.data.auctions[itemID].category);
    });
  };

  return (
    <div className="ItemCard">
      <Card
        bg="alert"
        text="Test Card"
        style={{
          width: "28rem",
          height: "20rem",
          margin: "0.5rem",
          float: "left",
        }}
        className="mb-2"
      >
        <Card.Header>{auction}</Card.Header>
        <Card.Body>
          <Card.Title style={{ color: "green" }}>
            Item Price: {price}
          </Card.Title>
          <Card.Title style={{ color: "purple" }}>Tier: {tier}</Card.Title>
          <Card.Title style={{ color: "blue" }}>
            Category: {category}
          </Card.Title>
          <Card.Text style={{ fontSize: "10px" }}>{lore}</Card.Text>
        </Card.Body>
        <Button onClick={getAuctions}>Load Item</Button>
      </Card>
    </div>
  );
}

export default Item;
