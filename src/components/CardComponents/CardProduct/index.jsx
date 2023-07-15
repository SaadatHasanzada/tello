import React from "react";
import style from "./style.module.scss";
import deleteIcon from "../../../assets/images/delete.svg";
import {
  updateBasket,
  deleteBasketItem,
} from "../../../store/asyncThunk/basket";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { fetchProduct } from "../../../store/asyncThunk/products";
const CardProduct = ({
  name,
  image,
  quantity,
  options,
  price,
  id,
  productId,
}) => {
  const [count, setCount] = React.useState(quantity);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function decreaseCount(id) {
    if (count > 1) {
      setCount((prev) => prev - 1);
      dispatch(updateBasket({ product_id: id, count: count - 1 }));
    } else {
      dispatch(deleteBasketItem({ product_id: id }));
    }
  }
  function increaseCount(id) {
    if (count < 10) {
      setCount((prev) => prev + 1);
      dispatch(updateBasket({ product_id: id, count: count + 1 }));
    }
  }
  function deleteItem(id) {
    dispatch(deleteBasketItem({ product_id: id }));
  }
  return (
    <div className={style.cardProduct}>
      <div className={style.productInfo}>
        <img src={image} alt="img" />
        <h2
          onClick={() => {
            navigate(`/product-detail/${productId}`);
            dispatch(fetchProduct(productId));
          }}
        >
          {name}{" "}
          {options?.map((option) => (
            <span key={option.group_id}>{option.option_name}&nbsp;</span>
          ))}
        </h2>
        {options.length > 0 && (
          <p>
            Rəng :{" "}
            <span>
              {" "}
              {options.map((option) => {
                if (option.group_name == "Color") {
                  return option.option_name;
                }
              })}
            </span>{" "}
          </p>
        )}

        <span
          className={`${style.price} ${
            options.length > 0 ? "" : style.changeArea
          }`}
        >
          {options.length > 1
            ? options.find((option) => option.group_name === "Size")?.price.raw
            : price}
          ₼
        </span>
        <div className={style.count}>
          <div onClick={() => decreaseCount(id)}>-</div>
          {count}
          <div onClick={() => increaseCount(id)}>+</div>
        </div>
      </div>
      <img src={deleteIcon} alt="icon" onClick={() => deleteItem(id)} />
    </div>
  );
};

export default CardProduct;
