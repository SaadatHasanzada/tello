import React from "react";
import SignUpForm from "../../components/Auth/SignUpForm";
import AuthImage from "../../components/Auth/AuthImage";
import style from "./style.module.scss";
const Register = () => {
  return (
    <div className={style.register}>
      <SignUpForm />
      <AuthImage />
    </div>
  );
};

export default Register;
