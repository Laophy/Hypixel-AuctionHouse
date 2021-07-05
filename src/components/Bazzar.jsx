import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Card, Button, Table, Jumbotron } from "react-bootstrap";

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
      <Jumbotron>
        <Card bg="light">
          <Card.Header>
            <h1>Hello, world!</h1>
          </Card.Header>
          <Card.Body>
            <Card.Title>
              Welcome to the Bazzar tracker. Here you will find all of the items
              being sold by the Bazzar. Locate their margin/profit and find
              deals to trade.
            </Card.Title>
          </Card.Body>
        </Card>
      </Jumbotron>
      <Table striped bordered hover variant="secondary">
        <thead>
          <tr>
            <th>#</th>
            <th>Item Name</th>
            <th>Buy Price</th>
            <th>Sell Price</th>
            <th>Volume</th>
            <th>Margin/Profit</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(bazzar).map((item, i) => (
            <tr>
              <td>{i}</td>
              <td>{bazzar[item].product_id}</td>
              <td>{bazzar[item].quick_status.buyPrice}</td>
              <td>{bazzar[item].quick_status.sellPrice}</td>
              <td>{bazzar[item].quick_status.buyVolume}</td>
              <td>
                {findMargin(
                  bazzar[item].quick_status.sellPrice,
                  bazzar[item].quick_status.buyPrice
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
