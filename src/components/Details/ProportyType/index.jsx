import React from "react";
import style from "./style.module.scss";

const ProportyType = ({ header }) => {
  return (
    <div className={style.type}>
      <h2>{header}</h2>
      <div>
        {" "}
        <span>İstehsalçı</span>
        Apple
      </div>
      <div>
        {" "}
        <span>İstehsalçı</span>
        Apple
      </div>
      <div>
        {" "}
        <span>İstehsalçı</span>
        Apple
      </div>
      <div>
        {" "}
        <span>İstehsalçı</span>
        Apple
      </div>
    </div>
  );
};

export default ProportyType;
