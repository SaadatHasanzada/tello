import React from "react";
import style from "./style.module.scss";
import SearchHistory from "../SearchHistory";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateHistory } from "../../../store/slices/searchSlice";
import { fetchSearchProducts } from "../../../store/asyncThunk/products";
const NavSearch = ({ setShowHistory, showHistory }) => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  React.useEffect(() => {
    dispatch(fetchSearchProducts(input));
  }, [input]);

  return (
    <div className={style.nav_search}>
      <i className="fa-solid fa-magnifying-glass"></i>
      <input
        onBlur={() => {
          setShowHistory(false);
          setInput("");

          input && dispatch(updateHistory(input));
        }}
        onFocus={() => setShowHistory(true)}
        className={style.input}
        type="text"
        placeholder="Axtarış..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      {showHistory && <SearchHistory input={input} />}
    </div>
  );
};

export default NavSearch;
