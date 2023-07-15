import React from "react";
import style from "./style.module.scss";
import FilterProducts from "../../components/Filter/FilterProducts";
import ProductListing from "../../components/ProductListing";
import ProductsMain from "../../components/Products/ProductsMain";
import BreadCrumb from "../../components/BreadCrumb";
import ProductPagination from "../../components/Products/ProductPagination";
import { updatePage } from "../../store/slices/filterSlice";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";

const Products = () => {
  window.scrollTo(0, 0);
  const [openMenu, setOpenMenu] = React.useState(false);
  const dispatch = useDispatch();
  const { slug } = useParams();
  const { products } = useSelector((state) => state.filter);
  React.useEffect(() => {
    dispatch(updatePage(1));
  }, [slug]);

  return (
    <section className={style.products}>
      <BreadCrumb slug={slug} />
      <div className={style.product_container}>
        <ProductListing setOpenMenu={setOpenMenu} />
        <FilterProducts openMenu={openMenu} setOpenMenu={setOpenMenu} />
        <ProductsMain />
        {products.meta?.pagination.total_pages > 1 && <ProductPagination />}
      </div>
    </section>
  );
};

export default Products;
