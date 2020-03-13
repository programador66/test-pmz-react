import React from "react";
import { Card } from "react-bootstrap";
import img from "../../../assets/no-image2.jpg";
import Icon from "@material-ui/core/Icon";
import "./styles.css";

const Carrosel = () => {
  return (
    <Card id="card2">
      <Card.Img id="card2-img" variant="top" src={img} />
      <Card.Body id="card-body">
        <Card.Title id="card2-title">Produto</Card.Title>
        <Card.Text id="codigo">Cód x</Card.Text>
        <div id="div-ico-preco">
          <Card.Text id="preco">R$ 999.999,00</Card.Text>
          <Icon id="cart_add">add_shopping_cart </Icon>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Carrosel;
