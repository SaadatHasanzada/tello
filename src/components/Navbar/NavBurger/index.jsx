import React from "react";
import style from "./style.module.scss";
const NavBurger = ({ open, setOpen, setOpenSubmenu }) => {
  const styles = open ? style.open : "";
  return (
    <div
      onClick={() => {
        setOpen((prev) => !prev);
        setOpenSubmenu(false);
      }}
      className={`${style.hamburger} ${styles}`}
    >
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default NavBurger;
