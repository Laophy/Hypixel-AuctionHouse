import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Card } from "react-bootstrap";

export default function AuctionAll() {
  const [auctions, setAuctions] = useState([]);

  useEffect(() => {
    pingAuctions();
  }, []);

  const pingAuctions = () => {
    Axios.get("https://api.hypixel.net/skyblock/auctions").then((response) => {
      setAuctions(response.data.auctions);
      console.log(response.data.auctions);
    });
  };

  return (
    <>
      {auctions.map((item) => (
        <div className="item-card">
          <Card
            bg="light"
            text="Test Card"
            style={{
              width: "25rem",
              height: "25rem",
              margin: "0.5rem",
              marginLeft: "3%",
              display: "flex",
              float: "left",
            }}
            className="mb-3"
          >
            <Card.Header>{item.item_name}</Card.Header>
            <Card.Body>
              <Card.Title style={{ color: "green" }}>
                Item Price: {item.starting_bid}
              </Card.Title>
              <Card.Title style={{ color: "purple" }}>
                Tier: {item.tier}
              </Card.Title>
              <Card.Title style={{ color: "blue" }}>
                Category: {String(item.category)}
              </Card.Title>
              <Card.Text style={{ fontSize: "10px" }} className="text-wrap">
                {item.item_lore}
              </Card.Text>
              <hr />
              <Card.Title style={{ color: "black", fontSize: "10px" }}>
                Seller ID: {item.uuid}
              </Card.Title>
            </Card.Body>
          </Card>
        </div>
      ))}
    </>
  );
}
