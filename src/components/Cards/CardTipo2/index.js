import React from "react";
import { Card } from "react-bootstrap";
import img from "../../../assets/no-image2.jpg";
import Icon from "@material-ui/core/Icon";
import "./styles.css";

const Card2 = ({ produto }) => {
  return (
    <Card id="card2">
      <Card.Img id="card2-img" variant="top" src={img} />
      <Card.Body id="card-body">
        <Card.Title id="card2-title">{produto.nome}</Card.Title>
        <Card.Text id="codigo">{produto.codigo}</Card.Text>
        <div id="div-ico-preco">
          <Card.Text id="preco">R$ {produto.valor}</Card.Text>
          <Icon id="cart_add">add_shopping_cart </Icon>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Card2;
