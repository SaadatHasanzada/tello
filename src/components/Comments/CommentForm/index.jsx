import React from "react";
import style from "./style.module.scss";
const CommentForm = () => {
  return (
    <form className={style.form}>
      <h2>Rəy Bildir</h2>
      <div className={style.personInfo}>
        <label>
          Ad
          <input type="text" placeholder="Adınızı daxil edin" />
        </label>
        <label>
          Soyad
          <input type="text" placeholder="Soyadınızı daxil edin" />
        </label>
      </div>

      <label>
        Rəy bildirdiyiniz məhsulu seçin
        <select id="product">
          <option>Məhsulu seçin</option>
          <option>Product</option>
          <option>Product</option>
          <option>Product</option>
          <option>Product</option>
        </select>{" "}
      </label>
      <label>
        Rəyinizi yazın
        <textarea rows={5} placeholder="Rəyinizi buraya yazın"></textarea>
      </label>
      <button>Rəyini bildir</button>
    </form>
  );
};

export default CommentForm;
