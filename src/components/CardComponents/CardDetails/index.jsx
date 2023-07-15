import React from "react";
import CardProduct from "../CardProduct";
import { useSelector } from "react-redux";
import style from "./style.module.scss";
import { toast } from "react-toastify";
const CardDetails = () => {
  const { basket, loading } = useSelector((state) => state.cart);
  if (loading) {
    toast.success("Səbət yenilənir..");
  }
  return (
    <div className={style.details}>
      <div className={style.products}>
        {basket.line_items?.map((item, index) => {
          return (
            <CardProduct
              key={index}
              name={item.name}
              image={item.image.url}
              quantity={item.quantity}
              price={item.price.raw}
              options={item.selected_options}
              id={item.id}
              productId={item.product_id}
            />
          );
        })}
      </div>
      <div className={style.total}>
        <div className={style.totalTop}>
          <h2>Ümumi</h2>
          <p>
            Məbləğ <span>{basket?.subtotal?.raw} ₼</span>
          </p>
          <p>
            Çatdırılma <span>0.00 ₼</span>
          </p>
          <p>
            Hədiyyə paketi <span>0.00 ₼</span>
          </p>
          <p>
            Promo kod <span>0.00 ₼</span>
          </p>
        </div>
        <div className={style.totalBottom}>
          <p>
            Cəmi <span>{basket?.subtotal?.raw} ₼</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
