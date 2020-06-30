import React from "react";
import "./styles.css";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";
import { connect } from "react-redux";

const Header = ({ dispatch }) => {
  const redirectToCart = (event) => {
    dispatch({
      type: "header-rots",
      event: event,
    });
  };

  const search = (event) => {
    if (event.key === "Enter") {
      dispatch({
        type: "SEARCH",
        event: event.target.value,
      });
    }
  };

  return (
    <>
      <header id="main-header">
        <div id="logo" onClick={() => redirectToCart("/")}>
          PMZ
        </div>
        <input
          id="buscar"
          type="text"
          placeholder="Encontre o produto"
          onKeyPress={search}
        ></input>

        <IconButton id="cart">
          <Icon>settings_voice </Icon>
        </IconButton>
        <IconButton id="cart" onClick={() => redirectToCart("/cart")}>
          <Icon>shopping_cart </Icon>
        </IconButton>
      </header>
    </>
  );
};

export default connect()(Header);
