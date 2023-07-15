import React from "react";
import style from "./style.module.scss";
import shopping_cart from "../../../assets/images/Icon.svg";
import heart from "../../../assets/images/heart.svg";
import profile from "../../../assets/images/profile.svg";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
const NavIcons = () => {
  const navigate = useNavigate();
  const { basket } = useSelector((state) => state.cart);
  return (
    <div className={style.nav_icons}>
      <img
        src={profile}
        alt="icon"
        onClick={() => {
          const customerId = localStorage.getItem("customerId");

          if (!customerId) {
            navigate("/login");
          } else {
            navigate("/user-profile");
          }
        }}
      />
      <img src={heart} alt="icon" />
      <div className={style.shopping_cart} onClick={() => navigate("/card")}>
        <img src={shopping_cart} alt="icon" />
        <div className={style.count}>
          {" "}
          <span>{basket?.total_items}</span>
        </div>
      </div>
    </div>
  );
};

export default NavIcons;
