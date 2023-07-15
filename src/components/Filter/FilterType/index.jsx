import React from "react";
import style from "./style.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { updateFilteredParams } from "../../../store/slices/filterSlice";
const FilterType = ({ list, title, price }) => {
  const [open, setOpen] = React.useState(false);
  const { params, slug } = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const handleClick = () => {
    setOpen(!open);
  };

  React.useEffect(() => {
    dispatch(updateFilteredParams(""));
  }, [slug]);

  const active = open ? style.active : "";
  const showOptions = open ? style.showOptions : "";

  return (
    <div className={style.filter_type}>
      <div onClick={handleClick} className={style.type_header}>
        {title}
        <div className={style.icon}>
          <div className={active}></div>
          <div></div>
        </div>
      </div>
      <ul className={`${style.options} ${showOptions}`}>
        {list?.map((el) => {
          const isChecked = params.includes(el.slug);
          return (
            <li
              key={el.slug}
              onClick={() => {
                dispatch(updateFilteredParams(el.slug));
              }}
            >
              <div className={` ${isChecked ? style.checked : ""}`}></div>
              {el.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FilterType;
