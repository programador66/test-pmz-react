import React from "react";
import { useHistory } from "react-router-dom";
import "./styles.css";
import { Card } from "react-bootstrap";
import img from "../../../assets/no_image.png";

export default function Card1(produtos) {
  const history = useHistory();
  function redirect() {
    history.push("/cart");
  }
  return (
    <Card id="card1" onClick={redirect}>
      <Card.Img id="card-img" variant="top" src={img} />
      <Card.Body>
        <Card.Title id="card-title">{produtos.nome}</Card.Title>
      </Card.Body>
    </Card>
  );
}
