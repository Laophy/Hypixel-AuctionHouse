import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Card, Button, Table, Form, Accordion } from "react-bootstrap";

export default function Bazzar() {
  const [bazzar, setBazzar] = useState([]);

  useEffect(() => {
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
      <Accordion defaultActiveKey="1">
        <Card bg="light">
          <Card.Header>
            <Accordion.Toggle
              as={Button}
              variant="outline-primary"
              eventKey="0"
            >
              Custom Profit Calculator (^v)
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <Form>
                <Form.Group>
                  <Card.Title>Total Amount to Invest:</Card.Title>
                  <Form.Control
                    type="number"
                    placeholder="$0.00"
                    controlId="search.Investment"
                  />
                  <br />
                  <Button variant="outline-primary" type="submit">
                    Search
                  </Button>
                </Form.Group>
              </Form>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
      <Table striped bordered hover variant="secondary" responsive="lg">
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
            <tr key={i}>
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
