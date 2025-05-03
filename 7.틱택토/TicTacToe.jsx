import React, { useState, useReducer } from "react";
import Table from "./Table";

const initialState = {
  winner: "",
  turn: "O",
  tableData: [["", "", ""][("", "", "")][("", "", "")]],
  recentCell: [-1, -1],
};

const reducer = (state, action) => {};

const TicTacToe = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <Table />
    </>
  );
};

export default TicTacToe;
