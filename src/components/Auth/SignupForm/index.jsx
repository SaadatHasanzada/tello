import React from "react";
import style from "./style.module.scss";
import AuthLoginButtons from "../AuthLoginButtons";
import { useForm } from "react-hook-form";
import InputMask from "react-input-mask";
import { createUser } from "../../../store/asyncThunk/user";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
const SignUpForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,

    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(createUser(data)).then((action) => {
      if (action.type === "user/createUser/fulfilled") {
        navigate("/login");
        toast.success("Qeydiyyat tamamlandı.");
        reset();
      } else {
        toast.error("Bu email artıq istifadə olunub!");
      }
    });
  };
  return (
    <div className={style.registerContainer}>
      <h2>Daxil ol</h2>
      <AuthLoginButtons />
      <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
        <div className={style.formGroup}>
          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            placeholder="nümunə@gmail.com"
            {...register("email", {
              required: "Emailinizi qeyd edin.",
              pattern: {
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                message: "Email düzgün qeyd olunmayıb.",
              },
            })}
          />
          {errors.email?.message && <span>{errors.email?.message}</span>}
        </div>
        <div className={style.formGroup}>
          <label htmlFor="name">Ad</label>
          <input
            id="name"
            placeholder="Adınızı daxil edin"
            type="text"
            {...register("name", {
              required: "Adınızı daxil edin.",
              minLength: {
                value: 2,
                message: "Adınız minimum 2 simvol uzunluğunda olmalıdır.",
              },
              pattern: {
                value: /^[a-z ,.'-]+$/i,
                message: "Yanlış input tipi.",
              },
            })}
          />
          {errors.name?.message && <span>{errors.name?.message}</span>}
        </div>
        <div className={style.formGroup}>
          <label htmlFor="surname">Soyad</label>
          <input
            id="surname"
            placeholder="Soyadınızı daxil edin"
            type="text"
            {...register("surname", {
              required: "Soyadınızı daxil edin.",
              minLength: {
                value: 2,
                message: "Soyadınız minimum 2 simvol uzunluğunda olmalıdır.",
              },
              pattern: {
                value: /^[a-z ,.'-]+$/i,
                message: "Yanlış input tipi.",
              },
            })}
          />
          {errors.surname?.message && <span>{errors.surname?.message}</span>}
        </div>
        <div className={style.formGroup}>
          <label htmlFor="phone">Mobil nömrə</label>
          <div className={style.formPhone}>
            {" "}
            <select name="phone">
              <option value="077">077</option>
              <option value="050">050</option>
              <option value="055">055</option>
            </select>
            <InputMask
              mask="999-99-99"
              id="phone"
              placeholder="000-00-00"
              {...register("phone", {
                required: "Yanlış mobil nömrə formatı.",
              })}
            />
          </div>

          {errors.phone?.message && <span>{errors.phone?.message}</span>}
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
                required: "Şifrənizi qeyd edin.",
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
        <div className={style.formTerms}>
          <input
            type="checkbox"
            id="terms"
            {...register("terms", {
              required: "Bu sahə doldurulmalıdır!",
            })}
          />
          <label htmlFor="terms">
            <span>İstifadəçi şərtləri</span> ilə razıyam
          </label>

          {errors.terms?.message && <span>{errors.terms?.message}</span>}
        </div>

        <input type="submit" value="Qeydiyyat" />
      </form>
    </div>
  );
};

export default SignUpForm;
