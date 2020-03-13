import React from "react";

import "./styles.css";
import img from "../../../assets/no-image2.jpg";
import Icon from "@material-ui/core/Icon";

const Card3 = () => {
  return (
    <>
      <div id="container">
        <div id="container-ft-icon">
          <section>
            <img src={img} width="100" alt="20" />
          </section>
          <div id="promo">-50%</div>
        </div>

        <div id="container-desc">
          <div>produto</div>
          <div>Cód X</div>
          <div id="preco-card3">R$ 99.999,00</div>
        </div>
        <Icon id="cart_add-card3">add_shopping_cart </Icon>
      </div>
    </>
  );
};

export default Card3;
