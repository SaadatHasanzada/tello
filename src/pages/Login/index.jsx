import React from "react";
import LoginForm from "../../components/Auth/LoginForm";
import AuthImage from "../../components/Auth/AuthImage";
import style from "./style.module.scss";

const Login = () => {
  return (
    <div className={style.login}>
      <LoginForm />
      <AuthImage />
    </div>
  );
};

export default Login;
