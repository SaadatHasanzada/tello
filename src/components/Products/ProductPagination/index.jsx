import React from "react";
import style from "./style.module.scss";
import Pagination from "@mui/material/Pagination";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { updatePage } from "../../../store/slices/filterSlice";
const ProductPagination = () => {
  const { products, page } = useSelector((state) => state.filter);
  // console.log(page);
  const dispatch = useDispatch();
  function handleChange(event, value) {
    dispatch(updatePage(value));
  }
  const theme = createTheme({
    palette: {
      primary: {
        main: "#2dd06e",
        contrastText: "white",
      },
    },
  });
  return (
    <div className={style.pagination}>
      <ThemeProvider theme={theme}>
        <Pagination
          count={products.meta?.pagination.total_pages}
          color="primary"
          size="large"
          onChange={handleChange}
          page={+page}
        />
      </ThemeProvider>{" "}
    </div>
  );
};

export default ProductPagination;
