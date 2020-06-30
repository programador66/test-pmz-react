import { createStore } from "redux";

const INITIAL_STATE = {
  search: "",
  produtos: [
    { id: 1, nome: "Amortecedor", codigo: "ZHBR001", valor: 1200, unidade: 3 },
    {
      id: 2,
      nome: "Amortecedor nakata",
      codigo: "ZHBR8506",
      valor: 1500,
      unidade: 4,
    },
    {
      id: 3,
      nome: "Macacos Bovenau",
      codigo: "ZHBR501",
      valor: 800,
      unidade: 5,
    },
    { id: 4, nome: "Radiador ", codigo: "RDBR4010", valor: 600, unidade: 6 },
  ],
  filtros: [],
  urls: null,
};

function reducer(state = INITIAL_STATE, action) {
  if (action.type === "SEARCH") {
    const search = state.produtos.filter(
      (produto) => produto.nome === action.event
    );

    return {
      ...state,
      search: action.event,
      filtros: search,
    };
  } else if (action.type === "header-rots") {
    return {
      ...state,
      urls: action.event,
    };
  }

  return state;
}

const store = createStore(reducer);

export default store;
