import React from "react";
import CardEmpty from "../CardEmpty";
import CardDetails from "../CardDetails";
import { useSelector } from "react-redux";
import style from "./style.module.scss";

const CardInfo = () => {
  const { basket } = useSelector((state) => state.cart);
  const count = basket?.total_items >= 1 ? basket.total_items : 0;
  return (
    <div className={style.cardInfo}>
      <p>Səbət ({count} məhsul)</p>
      {basket?.line_items?.length > 0 ? <CardDetails /> : <CardEmpty />}
    </div>
  );
};

export default CardInfo;
