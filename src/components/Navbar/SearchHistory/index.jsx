import React from "react";
import style from "./style.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { deleteHistory } from "../../../store/slices/searchSlice";
import { Link } from "react-router-dom";
import { fetchProduct } from "../../../store/asyncThunk/products";

const SearchHistory = ({ input }) => {
  const { searchHistory, products } = useSelector((state) => state.search);
  const dispatch = useDispatch();

  const lis = searchHistory?.map((element, index) => {
    return <li key={index}>{element}</li>;
  });

  function handleClick() {
    dispatch(deleteHistory());
  }
  return (
    <>
      {!input && (
        <div
          className={style.search_history}
          onMouseDown={(e) => {
            e.preventDefault();
          }}
        >
          <p>
            Son Axtarışlar <span onClick={handleClick}>Təmizlə</span>
          </p>
          <ul>{lis}</ul>
        </div>
      )}

      {input && (
        <div
          onMouseDown={(e) => {
            e.preventDefault();
          }}
          className={style.products}
        >
          <p>Məhsullar</p>
          <ul className={style.products_container}>
            {products &&
              products.data?.map((el) => {
                return (
                  <Link to={`/product-detail/${el.id}`}>
                    <li
                      key={el.id}
                      onClick={() => {
                        dispatch(fetchProduct(el.id));
                        console.log("ha");
                      }}
                    >
                      <img src={el.image.url} alt="img" />
                      <div className={style.product_info}>
                        <span>{el.name}</span>
                        <span>{el.price.raw} ₼</span>
                      </div>
                    </li>
                  </Link>
                );
              })}
          </ul>
        </div>
      )}
    </>
  );
};

export default SearchHistory;
