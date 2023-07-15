import React from "react";
import style from "./style.module.scss";
import CardEmpty from "../../CardComponents/CardEmpty";
const Orders = () => {
  return (
    <div className={style.orders}>
      <h2>Sifarişlərim</h2>
      <CardEmpty />
    </div>
  );
};

export default Orders;
