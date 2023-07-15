import React from "react";
import style from "./style.module.scss";
import arrow from "../../../assets/images/arrow-down.svg";
import { useDispatch } from "react-redux";
import { updateSort, updateDirection } from "../../../store/slices/filterSlice";

const SortProducts = () => {
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState("Ən yenilər");
  const dispatch = useDispatch();
  const handleClick = (e) => {
    setOpen((prev) => !prev);
    e.stopPropagation();
  };
  const openOptions = open ? style.open : "";

  return (
    <div className={style.sort}>
      <div className={style.selected} onClick={handleClick}>
        {selected}
        <img src={arrow} alt="icon" />
      </div>
      <ul className={`${style.sorting_options} ${openOptions}`}>
        <li
          onClick={(e) => {
            setSelected(e.target.innerText);
            setOpen(false);
            dispatch(updateSort("created_at"));
            dispatch(updateDirection("desc"));
          }}
        >
          Ən yenilər
        </li>

        <li
          onClick={(e) => {
            setSelected(e.target.innerText);
            setOpen(false);
            dispatch(updateSort("price"));
            dispatch(updateDirection("asc"));
          }}
        >
          Qiymət Az-dan Çox-a
        </li>
        <li
          onClick={(e) => {
            setSelected(e.target.innerText);
            setOpen(false);
            dispatch(updateSort("price"));
            dispatch(updateDirection("desc"));
          }}
        >
          Qiymət Çox-dan Az-a
        </li>
      </ul>
    </div>
  );
};

export default SortProducts;
