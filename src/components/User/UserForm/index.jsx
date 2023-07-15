import React from "react";
import style from "./style.module.scss";
import { useForm } from "react-hook-form";
import InputMask from "react-input-mask";
import { useDispatch, useSelector } from "react-redux";
import { getUser, updateUser } from "../../../store/asyncThunk/user";
import edit from "../../../assets/images/edit.svg";
const UserForm = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  console.log(user);
  const {
    register,
    handleSubmit,
    reset,
    setValue,

    formState: { errors, isDirty },
  } = useForm();
  const id = localStorage.getItem("customerId");
  // Default values for inputs
  React.useEffect(() => {
    setValue("name", user?.firstname);
    setValue("surname", user?.lastname);
    setValue("email", user?.email);
    setValue("phone", user?.phone || "");
  }, [user, setValue]);

  React.useEffect(() => {
    if (id !== null) {
      dispatch(getUser());
    }
  }, [id, dispatch]);

  const onSubmit = (data) => {
    dispatch(updateUser({ data, id: user.id }));
    reset();
  };
  return (
    <div className={style.userContainer}>
      <h2>Şəxsi məlumatlar</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
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
          <label htmlFor="phone">Mobil nömrə</label>
          <div className={style.formPhone}>
            {" "}
            <select name="phone">
              <option value="077">077</option>
              <option value="050">050</option>
              <option value="055">055</option>
            </select>
            <InputMask
              defaultValue={user?.phone || ""}
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

        <div className={style.edit}>
          <img src={edit} alt="icon" />
          <input
            type="submit"
            value="Məlumatları yenilə"
            disabled={!isDirty}
            className={!isDirty ? style.disabled : ""}
          />
        </div>
      </form>
    </div>
  );
};

export default UserForm;
