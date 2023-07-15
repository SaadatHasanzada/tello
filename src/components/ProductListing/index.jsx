import React from "react";
import style from "./style.module.scss";
import sort from "../../assets/images/sort.svg";
import filter from "../../assets/images/filter.svg";
import SortProducts from "../Filter/sortProducts";
const ProductListing = ({ setOpenMenu }) => {
  const [openOption, setOpenOptions] = React.useState(false);
  const handleOptions = (e) => {
    setOpenOptions((prev) => !prev);
    e.stopPropagation();
  };
  return (
    <div className={style.product_listing}>
      <button className={style.sort_btn}>
        <img src={sort} alt="icon" />
        <p onClick={handleOptions}>Sıralama</p>
        {openOption && <SortProducts />}
      </button>
      <button
        className={style.filter_btn}
        onClick={() => {
          setOpenMenu(true);
        }}
      >
        <img src={filter} alt="icon" />
        <p>Filterləmələr</p>
      </button>
    </div>
  );
};

export default ProductListing;
