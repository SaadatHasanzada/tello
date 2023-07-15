import React from "react";
import HeroSlider from "../../components/Hero/HeroSlider";
import ProductContainer from "../../components/Products/ProductContainer";
import Ads from "../../components/Ads";
import CategoryContainer from "../../components/CategoryList/CategoryContainer";
import FeatureContainer from "../../components/FeatureList/FeatureContainer";
import PartnerSlider from "../../components/Partners/PartnerSlider";
import { instance } from "../../server";
const Home = () => {
  window.scrollTo(0, 0);
  const [products, setProducts] = React.useState([]);
  const API_KEY = "pk_52505a7d1b66250dfa35290fd14cd17f35a2b8f954ae1";
  React.useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await instance.get("products?category_slug=hamisi", {
          headers: {
            "X-Authorization": API_KEY,
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });
        setProducts(res.data.data);
      } catch (error) {
        setProducts([]);
      }
    };
    getProducts();
  }, []);
  return (
    <>
      <HeroSlider />
      <ProductContainer
        title="Ən çox satılan məhsullar"
        slug="hamisi"
        products={products.slice(0, 4)}
      />
      <ProductContainer
        title="Yeni gələn məhsullar"
        slug="yeni"
        products={products
          ?.filter((product) => {
            return product.categories?.some(
              (category) => category.slug === "yeni"
            );
          })
          .slice(0, 4)}
      />
      <Ads />
      <ProductContainer
        title="Yeni gələn aksessuarlar"
        slug="aksessuarlar"
        products={products
          ?.filter((product) => {
            return product.categories?.some(
              (category) => category.slug === "aksessuarlar"
            );
          })
          .slice(0, 4)}
      />
      <CategoryContainer />
      <FeatureContainer />
      <PartnerSlider />
    </>
  );
};

export default Home;
