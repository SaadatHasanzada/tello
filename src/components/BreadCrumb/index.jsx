import React from "react";
import style from "./style.module.scss";
import arrow from "../../assets/images/right_arrow.svg";
const BreadCrumb = ({ slug }) => {
  const capitalizedSlug = slug?.charAt(0).toUpperCase() + slug?.slice(1);
  return (
    <div className={style.breadcrumb}>
      <a href="/">Ana səhifə</a>
      <img src={arrow} alt="icon" />
      <span>{capitalizedSlug}</span>
    </div>
  );
};

export default BreadCrumb;
