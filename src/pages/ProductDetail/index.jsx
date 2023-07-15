import React from "react";
import { useSelector, useDispatch } from "react-redux";
import style from "./style.module.scss";
import ImageGallery from "../../components/Details/ImageGallery/index";
import ProductInfo from "../../components/Details/ProductInfo";
import { updateColorId } from "../../store/slices/productSlice";
import load from "../../assets/images/loading.svg";
import BreadCrumb from "../../components/BreadCrumb";
import ProductFeatures from "../../components/Details/ProductFeatures";
const ProductDetail = () => {
  window.scrollTo(0, 0);

  const { product } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const [filteredUrl, setFilteredUrl] = React.useState([]);
  console.log(product);
  React.useEffect(() => {
    product?.variant_groups?.map((variant) => {
      if (variant.name == "Color") {
        dispatch(updateColorId(variant.options[0].assets));
      }
    });
    if (product && product.variant_groups?.length == 0) {
      setFilteredUrl(product.assets?.map((el) => el.url));
    }
  }, [product]);

  return (
    <>
      {Object.keys(product).length !== 0 ? (
        <>
          <BreadCrumb slug={product.name} />
          <div className={style.detail}>
            <div className={style.product_container}>
              <ImageGallery
                filteredUrl={filteredUrl}
                setFilteredUrl={setFilteredUrl}
              />
              <ProductInfo />
            </div>
          </div>
          <ProductFeatures />
        </>
      ) : (
        <img src={load} alt="icon" className={style.loading} />
      )}
    </>
  );
};

export default ProductDetail;
