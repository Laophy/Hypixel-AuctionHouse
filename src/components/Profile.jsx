import React, { useState, useEffect } from "react";
import Axios from "axios";
import "dotenv";
import { Form, Button, Card, Table } from "react-bootstrap";

export default function Profile() {
  const [player, setPlayer] = useState("NULL ID");
  const [auctions, setAuctions] = useState([]);

  useEffect(() => {
    findUUID("ChadMaster");
    findAuctions();
  }, []);

  const API_KEY = process.env.REACT_APP_API_KEY;
  const skyblockUUID = "https://api.hypixel.net/player";
  const playersAuctions = "https://api.hypixel.net/skyblock/auction";

  const findUUID = (username) => {
    Axios.get(`${skyblockUUID}?key=${API_KEY}&name=${username}`).then((res) => {
      setPlayer(res.data.player);
      console.log(res);
    });
  };

  const findAuctions = () => {
    Axios.get(`${playersAuctions}?key=${API_KEY}&player=${player.uuid}`).then(
      (res) => {
        console.log(res.data.auctions);
        setAuctions(res.data.auctions);
      }
    );
  };

  return (
    <div>
      <Card
        bg="light"
        text="Test Card"
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <Card.Header>
          <Card.Title>Profile</Card.Title>
        </Card.Header>
        <Card.Body>
          <Card.Text>Username: {player.playername}</Card.Text>
          <Card.Text>Account ID: {player.uuid}</Card.Text>
          <Card.Text>Karma: {player.karma}</Card.Text>
        </Card.Body>
      </Card>
      <Card
        bg="light"
        text="Test Card"
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <Card.Header>
          <Card.Title as={Button} onClick={findAuctions}>
            Skyblock Auctions (Click to Generate)
          </Card.Title>
        </Card.Header>
        <Card.Body>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Starting Price</th>
                <th>Highest Bid</th>
                <th>Info</th>
              </tr>
            </thead>
            <tbody>
              {auctions.map((auction, index) => (
                <tr key={index}>
                  <td>{index}</td>
                  <td>{auction.item_name}</td>
                  <td>{auction.starting_bid}</td>
                  <td>{auction.highest_bid_amount}</td>
                  <td>{auction.extra}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </div>
  );
}
