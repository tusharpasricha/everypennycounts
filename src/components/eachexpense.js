import React from "react";
import "./eachexpense.css";
const Eachexpense = ({ id, name, money, date, handleminus }) => {
  return (
    <div className="eachexpense">
      <div className="date">{date}</div>

      <div className="name">{name}</div>

      <div className="money">{money}</div>
    </div>
  );
};

export default Eachexpense;
