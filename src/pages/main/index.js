import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./styles.css";
import { connect } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import Card1 from "../../components/Cards/CardTipo1";
import Card2 from "../../components/Cards/CardTipo2";
import Card3 from "../../components/Cards/CardTipo3";

function Main({ event, produtos, search, rotasHeader }) {
  const history = useHistory();

  useEffect(() => {
    if (rotasHeader === "/cart") {
      history.push("/cart");
    }
  }, [rotasHeader]);

  const array = [1, 2, 3, 4];
  return (
    <Container fluid>
      <Row>
        <Col md="auto">
          <div id="pesquisa">{event && <h4>Pesquisa: {event}</h4>} </div>
        </Col>
      </Row>
      {event && (
        <Row>
          {search.map((produto) => (
            <Col md="auto" key={produto.id}>
              <Card1 nome={produto.nome} />
            </Col>
          ))}
        </Row>
      )}

      {!event && (
        <div>
          <Row>
            {produtos.map((produto) => (
              <Col md="auto" key={produto.id}>
                <Card1
                  nome={produto.nome}
                  codigo={produto.codigo}
                  valor={produto.valor}
                />
              </Col>
            ))}
          </Row>

          <Row>
            <Col md="2">
              <label className="titles">Mais Vendidos</label>
            </Col>
          </Row>
          <Row>
            {produtos.map((produto) => (
              <Col md="auto" key={produto.id}>
                <Card2 produto={produto} />
              </Col>
            ))}
          </Row>

          <Row>
            <Col md="2">
              <label className="titles">Promoções</label>
            </Col>
          </Row>

          <Row>
            {array.map((element) => (
              <Col md="auto" key={element}>
                <Card3 />
              </Col>
            ))}
          </Row>
        </div>
      )}
    </Container>
  );
}

export default connect((state) => ({
  event: state.search,
  produtos: state.produtos,
  search: state.filtros,
  rotasHeader: state.urls,
}))(Main);
