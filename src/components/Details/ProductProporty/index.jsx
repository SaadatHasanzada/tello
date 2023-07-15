import React from "react";
import style from "./style.module.scss";
import { useSelector } from "react-redux";
import ProportyType from "../ProportyType";

const ProductProporty = () => {
  const { product } = useSelector((state) => state.product);

  return (
    <div className={style.productProporty}>
      <div className={style.description}>
        <h2>Məhsul haqqında</h2>
        <p>{product?.description.replace("<p>", "").replace("</p>", "")}</p>
      </div>
      <div>
        <ProportyType header="Əsas göstəricilər" />
        <ProportyType header="Əlavə göstəricilər" />
        <ProportyType header="Üstünlüklər" />
      </div>
    </div>
  );
};

export default ProductProporty;
