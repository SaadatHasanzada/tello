import React from "react";
import CategoryItem from "../CategoryItem";
import style from "./style.module.scss";
import phone from "../../../assets/images/phone.svg";
import clock from "../../../assets/images/clock.svg";
import acessory from "../../../assets/images/acessory.svg";

const CategoryContainer = () => {
  return (
    <section className={style.category_container}>
      <div className={style.categories}>
        <CategoryItem
          slug="telefonlar"
          title="Telefon"
          img={phone}
          className="first_item"
        />
        <CategoryItem slug="saatlar" title="Smart Saat" img={clock} />
        <CategoryItem slug="aksessuarlar" title="Aksesuar" img={acessory} />
      </div>
    </section>
  );
};

export default CategoryContainer;
