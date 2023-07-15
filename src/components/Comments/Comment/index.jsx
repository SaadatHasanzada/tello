import React from "react";
import style from "./style.module.scss";
import starFull from "../../../assets/images/starFull.svg";
import starEmpty from "../../../assets/images/starEmpty.svg";
const Comment = () => {
  return (
    <div className={style.comment}>
      <div className={style.reviewHeader}>
        <span>4</span>
        <div className={style.stars}>
          <img src={starFull} alt="icon" />
          <img src={starFull} alt="icon" />
          <img src={starFull} alt="icon" />
          <img src={starFull} alt="icon" />
          <img src={starEmpty} alt="icon" />
        </div>
      </div>
      <div className={style.reviewBody}>
        <h2>Gunel Mammadova</h2>
        <span>Yaddaş - 64, Rəng - Qara</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mattis
          viverra lacus ut et, etiam. Vel ut in nunc nunc ut sit nibh tortor
          sit. Consectetur sit auctor odio quis suspendisse tincidunt quis. Et
          tristique amet aenean nibh porttitor quis aliquam integer. Consectetur
          lacus, volutpat malesuada libero. Sollicitudin libero pharetra a.
        </p>
      </div>
    </div>
  );
};

export default Comment;
