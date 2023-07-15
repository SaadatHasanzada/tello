import React from "react";
import loginImg from "../../../assets/images/login.svg";
import dotGrid from "../../../assets/images/Dot Grid.svg";
import style from "./style.module.scss";
import { Link, useLocation } from "react-router-dom";
const AuthLogin = () => {
  const location = useLocation();
  return (
    <div className={style.imgContainer}>
      <div className={style.images}>
        <img src={loginImg} alt="img" />
        <img src={dotGrid} alt="img" />
      </div>
      {location.pathname == "/login" && (
        <p>
          Hesabınız yoxdur? <Link to="/register">Qeydiyyatdan keçin</Link>
        </p>
      )}
      {location.pathname == "/register" && (
        <p>
          Artıq hesabınız var? <Link to="/login">Daxil olun </Link>
        </p>
      )}
    </div>
  );
};

export default AuthLogin;
