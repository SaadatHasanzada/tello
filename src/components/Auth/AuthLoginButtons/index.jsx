import React from "react";
import style from "./style.module.scss";
import facebook from "../../../assets/images/facebook (1).svg";
import google from "../../../assets/images/google.svg";

const AuthLoginButtons = () => {
  return (
    <>
      <div className={style.authButtons}>
        <div className={style.button}>
          <div>
            <img src={facebook} alt="icon" />
          </div>
          Facebook ilə
        </div>
        <div className={style.button}>
          <div>
            <img src={google} alt="icon" />
          </div>
          Google ilə
        </div>
      </div>
      <p>və ya</p>
    </>
  );
};

export default AuthLoginButtons;
