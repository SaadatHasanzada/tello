import React from "react";
import style from "./style.module.scss";
import { updateSlug } from "../../../store/slices/filterSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
const FooterList = ({ header, list, flag }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <ul className={style.list}>
      <p>{header}</p>
      {list.map((el, index) => {
        return (
          <li
            key={index}
            onClick={
              flag
                ? () => {
                    dispatch(updateSlug(el.slug));
                    navigate(`/products/${el.slug}`);
                  }
                : undefined
            }
          >
            {flag ? el.name : el}
          </li>
        );
      })}
    </ul>
  );
};

export default FooterList;
