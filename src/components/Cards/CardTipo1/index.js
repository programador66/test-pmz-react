import React from "react";
import "./styles.css";
import { Card } from "react-bootstrap";
import img from "../../../assets/no_image.png";

export default function Card1() {
  return (
    <Card id="card1">
      <Card.Img id="card-img" variant="top" src={img} />
      <Card.Body>
        <Card.Title id="card-title">Suspensão</Card.Title>
      </Card.Body>
    </Card>
  );
}
