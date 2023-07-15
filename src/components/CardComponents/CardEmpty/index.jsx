import React from "react";
import style from "./style.module.scss";
import card from "../../../assets/images/shopping-cart.svg";
import { Link } from "react-router-dom";

const CardEmpty = () => {
  return (
    <div className={style.cardEmpty}>
      <img src={card} alt="icon" />
      <p>Səbətiniz halhazırda boşdur</p>
      <Link to="/">
        <button>Alış-verişə davam et</button>
      </Link>
    </div>
  );
};

export default CardEmpty;
