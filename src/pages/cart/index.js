import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

function Cart({ rotasHeader }) {
  const history = useHistory();

  useEffect(() => {
    if (rotasHeader === "/") {
      history.push("/");
    }
  }, [rotasHeader]);

  return <div>carrinho</div>;
}

export default connect((state) => ({
  rotasHeader: state.urls,
}))(Cart);
