import React from "react";
import style from "./style.module.scss";
import { fetchProduct } from "../../../store/asyncThunk/products";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Product = ({ price, name, img, id, flag }) => {
  const dispatch = useDispatch();
  const productStyle = flag ? style.productMobileStyle : "";
  return (
    <Link
      to={`/product-detail/${id}`}
      onClick={() => dispatch(fetchProduct(id))}
    >
      <div className={`${style.product} ${productStyle}`} key={id}>
        <img src={img} alt="phone" />
        <p>{name}</p>
        <span>{price} ₼</span>
      </div>
    </Link>
  );
};

export default Product;
