import React from "react";
import style from "./style.module.scss";
import { useSelector, useDispatch } from "react-redux";
import {
  updateColorId,
  updateSizeId,
} from "../../../store/slices/productSlice";
import starFull from "../../../assets/images/starFull.svg";
import starEmpty from "../../../assets/images/starEmpty.svg";
import busket from "../../../assets/images/busket.svg";
import { addToBasket } from "../../../store/asyncThunk/basket";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductInfo = () => {
  const { product, sizeId } = useSelector((state) => state.product);
  const [activeColorId, setActiveColorId] = React.useState(null);
  const [price, setPrice] = React.useState(null);
  const [count, setCount] = React.useState(1);
  const dispatch = useDispatch();
  console.log(product);
  const notify = () => toast.success("Məhsul səbətə əlavə olundu!");
  React.useEffect(() => {
    const hasSizeOption = product?.variant_groups?.some(
      (variant) => variant.name === "Size"
    );
    if (!product?.variant_groups || !hasSizeOption) {
      setPrice(product?.price.raw);
      product?.variant_groups?.map((variant) => {
        if (variant.name == "Color") {
          setActiveColorId(variant.options[0].id);
        }
      });
    } else {
      product.variant_groups.map((variant) => {
        if (variant.name == "Color") {
          setActiveColorId(variant.options[0].id);
        }
        if (variant.name === "Size") {
          setPrice(variant.options[0].price.raw);
          dispatch(updateSizeId(variant.options[0].id));
        }
      });
    }
  }, [product, dispatch]);
  function getNameById(groupName, id) {
    const name = product?.variant_groups
      .find((variant) => variant.name === groupName)
      ?.options.find((option) => option.id === id)?.name;

    return name;
  }

  function handleClick(id) {
    const selectedOption = product.variant_groups
      .find((variant) => variant.name === "Color")
      ?.options.find((option) => option.id === id);

    if (selectedOption) {
      dispatch(updateColorId(selectedOption.assets));
      setActiveColorId(id);
    }
  }
  function handleSize(id) {
    dispatch(updateSizeId(id));
    const option = product.variant_groups
      .find((variant) => variant.name === "Size")
      ?.options.find((option) => option.id === id);
    setPrice(option.price.raw);
  }
  function handleBasket() {
    dispatch(
      addToBasket({
        count,
        product_id: product.id,
        variant_size_id: product?.variant_groups[0]?.id,
        variant_color_id:
          product.variant_groups?.length > 1
            ? product?.variant_groups[1]?.id
            : product.variant_groups[0]?.id,
        activeColorId,
        sizeId,
        product,
      })
    );
    notify();
  }
  return (
    <div>
      <div className={style.productHeader}>
        <p>
          {product.name} {getNameById("Color", activeColorId)}{" "}
          {getNameById("Size", sizeId)}
        </p>
        <div className={style.productRatings}>
          <img src={starFull} alt="star" />
          <img src={starFull} alt="star" />
          <img src={starFull} alt="star" />
          <img src={starFull} alt="star" />
          <img src={starEmpty} alt="star" />
          <span>(226)</span>
          <span>57 Rəy</span>
        </div>
        <div className={style.price}>{price} ₼</div>
      </div>
      {product && product.variant_groups?.length > 0 && (
        <div className={style.productVariants}>
          {product?.variant_groups?.find((obj) => obj.name === "Color") && (
            <div className={style.product_colors}>
              <span>Rəng:</span>
              {product.variant_groups
                .find((variant) => variant.name === "Color")
                ?.options?.map((el) => (
                  <div
                    key={el.id}
                    className={`${style.color} ${
                      activeColorId === el.id ? style.active : ""
                    }`}
                    style={{ backgroundColor: el.name }}
                    onClick={() => handleClick(el.id)}
                  ></div>
                ))}
            </div>
          )}

          {product?.variant_groups?.find((obj) => obj.name === "Size") && (
            <div className={style.productSize}>
              <span>Yaddaş: </span>
              {product.variant_groups
                .find((variant) => variant.name === "Size")
                ?.options?.map((el) => (
                  <div
                    key={el.id}
                    onClick={() => handleSize(el.id)}
                    className={`${style.size} ${
                      sizeId == el.id ? style.activeSize : ""
                    }`}
                  >
                    {el.name}
                  </div>
                ))}
            </div>
          )}
        </div>
      )}

      <div className={style.card}>
        <div className={style.count}>
          <div
            onClick={() =>
              setCount((prev) => {
                return prev > 1 ? prev - 1 : prev;
              })
            }
          >
            -
          </div>
          {count}
          <div onClick={() => setCount((prev) => prev + 1)}>+</div>
        </div>
        <button onClick={handleBasket}>
          <img src={busket} alt="icon" />
          Səbətə at
        </button>
        <ToastContainer
          position="bottom-right"
          toastStyle={{ color: "#333333" }}
        />
      </div>
    </div>
  );
};

export default ProductInfo;
