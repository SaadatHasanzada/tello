import React from "react";
import style from "./style.module.scss";
import NavSubMenu from "../NavSubMenu";
import { fetchCategories } from "../../../store/asyncThunk/categories";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { updateSlug } from "../../../store/slices/filterSlice";
const NavMenu = ({ open, openSubmenu, setOpenSubmenu, setOpen }) => {
  const showMenu = open ? style.show : "";

  const [subCategories, setSubCategories] = React.useState({
    name: "",
    list: [],
  });
  const { categories } = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  function openSubMenu(el) {
    setOpenSubmenu(el.children[0]);
    setSubCategories({ name: el.name, list: el.children, slug: el.slug });
  }

  return (
    <ul className={style.list}>
      <div className={`${style.nav_menu} ${showMenu}`}>
        {categories.data?.map((el) => {
          return (
            <React.Fragment>
              {window.innerWidth > 768 ? (
                <li
                  onClick={() => {
                    dispatch(updateSlug(el.slug));
                    setOpen(false);
                  }}
                  key={el.id}
                  onMouseEnter={() => {
                    openSubMenu(el);
                  }}
                >
                  <NavLink to={`/products/${el.slug}`}>
                    {el.name}
                    {el.children[0] && (
                      <i className="fa-solid fa-chevron-right"></i>
                    )}
                  </NavLink>
                </li>
              ) : (
                <li
                  onClick={() => {
                    !el.children[0] && dispatch(updateSlug(el.slug));
                    setOpen(false);
                  }}
                  key={el.id}
                  onMouseEnter={() => {
                    openSubMenu(el);
                  }}
                >
                  {el.children[0] ? (
                    <>
                      {el.name}
                      <i className="fa-solid fa-chevron-right"></i>
                    </>
                  ) : (
                    <NavLink to={`/products/${el.slug}`}>{el.name}</NavLink>
                  )}
                </li>
              )}
            </React.Fragment>
          );
        })}
      </div>
      <NavSubMenu
        openSubmenu={openSubmenu}
        setOpenSubmenu={setOpenSubmenu}
        setOpen={setOpen}
        subCategories={subCategories}
      />
    </ul>
  );
};

export default NavMenu;
