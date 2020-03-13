import React from "react";

import "./styles.css";
import { Container, Row, Col } from "react-bootstrap";
import Card1 from "../../components/Cards/CardTipo1";
import Card2 from "../../components/Cards/CardTipo2";
import Card3 from "../../components/Cards/CardTipo3";

const Main = () => {
  return (
    <Container fluid>
      <Row>
        <Col md="auto">
          <Card1 />
        </Col>
        <Col md="auto">
          <Card1 />
        </Col>
        <Col md="auto">
          <Card1 />
        </Col>
        <Col md="auto">
          <Card1 />
        </Col>
      </Row>
      <Row>
        <Col md="2">
          <label className="titles">Mais Vendidos</label>
        </Col>
      </Row>
      <Row>
        <Col md="auto">
          <Card2 />
        </Col>
        <Col md="auto">
          <Card2 />
        </Col>
        <Col md="auto">
          <Card2 />
        </Col>
        <Col md="auto">
          <Card2 />
        </Col>
      </Row>

      <Row>
        <Col md="2">
          <label className="titles">Promoções</label>
        </Col>
      </Row>

      <Row>
        <Col md="auto">
          <Card3 />
        </Col>
        <Col md="auto">
          <Card3 />
        </Col>
        <Col md="auto">
          <Card3 />
        </Col>
        <Col md="auto">
          <Card3 />
        </Col>
      </Row>
    </Container>
  );
};

export default Main;
