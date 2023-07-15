import React from "react";
import { useForm } from "react-hook-form";
import style from "./style.module.scss";
import AuthLoginButtons from "../AuthLoginButtons";
import { loginUser } from "../../../store/asyncThunk/user.js";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
const LoginForm = () => {
  const dispatch = useDispatch();
  const baseUrl = window.location.origin;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(
      loginUser({ email: data.email, base_url: `${baseUrl}/user-profile` })
    );
    toast.success("E-poçt ünvanınızı yoxlayın!");
    reset();
  };

  return (
    <div className={style.loginContainer}>
      <h2>Daxil ol</h2>
      <AuthLoginButtons />
      <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
        <div className={style.formGroup}>
          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            placeholder="nümunə@gmail.com"
            {...register("email", {
              required: "Emailinizi daxil edin.",
              pattern: {
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                message: "Email düzgün qeyd olunmayıb.",
              },
            })}
          />
          {errors.email?.message && <span>{errors.email?.message}</span>}
        </div>
        {/* <div className={style.formGroup}>
          <label htmlFor="password">Şifrə</label>
          <div className={style.formPassword}>
            {" "}
            <input
              type={visibility ? "text" : "password"}
              id="password"
              placeholder="Şifrənizi daxil edin"
              {...register("password", {
                required: "Şifrənizi daxil edin.",
                minLength: {
                  value: 7,
                  message: "Şifrə minimum 7 simvol uzunluğunda olmalıdır.",
                },
              })}
            />
            <img
              src={eye}
              alt="icon"
              onClick={() => setVisibility((prev) => !prev)}
            />
          </div>

          {errors.password?.message && <span>{errors.password?.message}</span>}
          <p>Şifrəni unutmusunuz?</p>
        </div> */}

        <input type="submit" value="Daxil ol" />
      </form>
    </div>
  );
};

export default LoginForm;
