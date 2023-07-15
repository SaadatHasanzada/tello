import React from "react";
import style from "./style.module.scss";
import { useDispatch } from "react-redux";
import { updateSlug } from "../../../store/slices/filterSlice";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const NavSubMenu = ({
  openSubmenu,
  setOpenSubmenu,
  subCategories,
  setOpen,
}) => {
  const showSubMenu = openSubmenu ? style.show : "";
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <ul
      onMouseLeave={() => {
        setOpenSubmenu(false);
      }}
      className={`${style.sub_menu} ${showSubMenu}`}
    >
      <p>
        <i
          className="fa-solid fa-arrow-left"
          onClick={() => {
            setOpenSubmenu(false);
            setOpen(true);
          }}
        ></i>
        <span
          onClick={() => {
            dispatch(updateSlug(subCategories.slug));
            navigate(`/products/${subCategories.slug}`);

            setOpenSubmenu(false);
          }}
        >
          {subCategories.name}
        </span>
      </p>
      {subCategories.list?.map((el) => {
        return (
          <li
            id={el.id}
            key={el.id}
            onClick={() => {
              dispatch(updateSlug(el.slug)), setOpenSubmenu(false);
              setOpen(false);
            }}
          >
            <NavLink to={`/products/${el.slug}`}>{el.name}</NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default NavSubMenu;
