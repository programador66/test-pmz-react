import React from "react";

import "./styles.css";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";

const Header = () => {
  return (
    <>
      <header id="main-header">
        <div id="logo">PMZ</div>
        <input id="buscar" type="text" placeholder="Encontre o produto"></input>

        <IconButton id="cart">
          <Icon>settings_voice </Icon>
        </IconButton>
        <IconButton id="cart">
          <Icon>shopping_cart </Icon>
        </IconButton>
      </header>
    </>
  );
};

export default Header;
