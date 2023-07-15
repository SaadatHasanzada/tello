import React from "react";
import style from "./style.module.scss";
import ProductProporty from "../ProductProporty";
import CommentContainer from "../../Comments/CommentContainer";

const ProductFeatures = () => {
  const [activeComments, setActiveComments] = React.useState(false);

  return (
    <div className={style.features}>
      <div className={style.featureButtons}>
        <button
          className={!activeComments ? style.active : ""}
          onClick={() => setActiveComments(false)}
        >
          Texniki Xüsusiyyətləri
        </button>
        <button
          className={activeComments ? style.active : ""}
          onClick={() => setActiveComments(true)}
        >
          Rəylər
        </button>
      </div>
      {!activeComments && <ProductProporty />}
      {activeComments && <CommentContainer />}
    </div>
  );
};

export default ProductFeatures;
