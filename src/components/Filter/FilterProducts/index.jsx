import React from "react";
import style from "./style.module.scss";
import x from "../../../assets/images/x.svg";
import FilterType from "../FilterType";

const FilterProducts = ({ openMenu, setOpenMenu }) => {
  const handleClose = () => {
    setOpenMenu(false);
  };
  const open = openMenu ? style.openMenu : "";
  return (
    <div className={`${style.filter_products} ${open}`}>
      <div className={style.filter_header}>
        <img src={x} alt="icon" onClick={handleClose} />
        <p>Filterləmələr</p>
      </div>
      <div className={style.filter_types}>
        <FilterType
          title="Brend"
          list={[
            { name: "Apple", slug: "apple" },
            { name: "Samsung", slug: "samsung" },
            { name: "Xiaomi", slug: "xiaomi" },
            { name: "Huawei", slug: "huawei" },
          ]}
        />
      </div>
      <button onClick={() => setOpenMenu(false)} className={style.filter_btn}>
        Filterlənmiş məhsulları göstər
      </button>
    </div>
  );
};

export default FilterProducts;
