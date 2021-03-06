import React, { useState, useEffect } from "react";
import Axios from "axios";
import "dotenv";
import { Form, Button, Card, Table } from "react-bootstrap";

export default function Profile() {
  const [player, setPlayer] = useState("NULL ID");
  const [auctions, setAuctions] = useState([]);

  const [isLoading, setLoading] = useState(true);
  const [loaded, setLoaded] = useState(false);

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState(false);
  const [username, setUsername] = useState("ChadMaster");

  useEffect(() => {
    findUUID(username);
  }, []);

  const API_KEY = process.env.REACT_APP_API_KEY;
  const skyblockUUID = "https://api.hypixel.net/player";
  const playersAuctions = "https://api.hypixel.net/skyblock/auction";
  const playerStatus = "https://api.hypixel.net/status";

  const findUUID = () => {
    Axios.get(`${skyblockUUID}?key=${API_KEY}&name=${username}`).then((res) => {
      setPlayer(res.data.player);
      setLoading(false);
    });
  };

  const findAuctions = () => {
    Axios.get(`${playersAuctions}?key=${API_KEY}&player=${player.uuid}`).then(
      (res) => {
        setAuctions(res.data.auctions);
      }
    );
  };

  const getStatus = () => {
    Axios.get(`${playerStatus}?key=${API_KEY}&uuid=${player.uuid}`).then(
      (res) => {
        if (res.session.online == true) {
          setStatus(true);
        } else if (res.session.online == false) {
          setStatus(false);
        }
      }
    );
  };

  if (isLoading) {
    return (
      <div>
        <p>Loading Data... Might have hit API fetch limit...</p>
      </div>
    );
  }

  if (!isLoading && !loaded) {
    findAuctions();
    getStatus();
    setLoaded(true);
  }

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
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Minecraft Username:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Username"
                style={{ width: "28rem" }}
                value={username}
              />
              <Form.Text className="text-muted">
                Used to track your profile stats.
                <br />
              </Form.Text>
              <Button variant="outline-primary" className="my-2">
                Submit
              </Button>
              <hr />
            </Form.Group>
          </Form>
          <Card.Text>Username: {player.displayname}</Card.Text>
          <Card.Text>Hypixel Rank: {player.newPackageRank}</Card.Text>
          <Card.Text>Currently Online: {status.toString()}</Card.Text>
          <Card.Text>Account UID: {player.uuid}</Card.Text>
          <Card.Text>Karma: {player.karma}</Card.Text>
          <Card.Text>Achievement Points: {player.achievementPoints}</Card.Text>
          <Card.Text>Recent Lobby: {player.mostRecentGameType}</Card.Text>
          <hr />
          <Card.Title>Skyblock Levels</Card.Title>
          <Card.Text>Combat: {player.achievements.skyblock_combat}</Card.Text>
          <Card.Text>
            Dungeoneering: {player.achievements.skyblock_dungeoneer}
          </Card.Text>
          <Card.Text>
            Mining: {player.achievements.skyblock_excavator}
          </Card.Text>
          <Card.Text>
            Pet Taming: {player.achievements.skyblock_domesticator}
          </Card.Text>
          <Card.Text>Fishing: {player.achievements.skyblock_angler}</Card.Text>
          <Card.Text>
            Farming: {player.achievements.skyblock_harvester}
          </Card.Text>
          <Card.Text>
            Tree Cutting: {player.achievements.skyblock_gatherer}
          </Card.Text>
          <Card.Text>
            Enchanting: {player.achievements.skyblock_augmentation}
          </Card.Text>
          <Card.Text>
            Alchemy: {player.achievements.skyblock_concoctor}
          </Card.Text>
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
          <Card.Title
            as={Button}
            onClick={findAuctions}
            variant="outline-primary"
          >
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
        <Card.Footer>
          API Help: https://hypixel-skyblock.fandom.com/wiki/SkyBlock_API
        </Card.Footer>
      </Card>
    </div>
  );
}
