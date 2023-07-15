import React from "react";
import style from "./style.module.scss";
import SortProducts from "../../Filter/SortProducts";
import { fetchFilteredProducts } from "../../../store/asyncThunk/products";
import { useSelector, useDispatch } from "react-redux";
import Product from "../Product";
import load from "../../../assets/images/loading.svg";

const ProductsMain = () => {
  const show = window.innerWidth > 768;
  const dispatch = useDispatch();
  const { products, slug, sortBy, sortDirection, params, loading, page } =
    useSelector((state) => state.filter);
  React.useEffect(() => {
    dispatch(
      fetchFilteredProducts({
        slug,
        sortBy,
        sortDirection,
        params,
        page,
      })
    );
  }, [dispatch, slug, sortBy, sortDirection, params, page]);

  const totalCount = products.meta?.pagination.total;

  return (
    <div className={style.products}>
      <p className={style.count}>
        {totalCount ? totalCount : 0} Məhsul tapıldı
      </p>
      {show && <SortProducts />}
      {loading && <img className={style.load} src={load} />}
      <div className={style.product_container}>
        {products.data?.map((el) => {
          return (
            <Product
              key={el.id}
              id={el.id}
              price={el.price.raw}
              name={el.name}
              img={el.image.url}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductsMain;
