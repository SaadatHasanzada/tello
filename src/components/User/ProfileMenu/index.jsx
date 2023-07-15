import React from "react";
import style from "./style.module.scss";
import basket from "../../../assets/images/Icon.svg";
import profile from "../../../assets/images/profile.svg";
import logout from "../../../assets/images/log-out.svg";
import { useNavigate } from "react-router";

const ProfileMenu = ({ setShowProfile }) => {
  const [activeItem, setActiveItem] = React.useState(2);
  const navigate = useNavigate();
  const handleClick = (item) => {
    setActiveItem(item);
  };
  const logOutUser = () => {
    localStorage.removeItem("customerId");
  };
  return (
    <div className={style.menu}>
      <h2>Profilim</h2>
      <ul>
        <li
          className={activeItem === 1 ? style.active : ""}
          onClick={() => {
            handleClick(1);
            setShowProfile(false);
          }}
        >
          <img src={basket} alt="icon" />
          Sifarişlərim
        </li>
        <li
          className={activeItem === 2 ? style.active : ""}
          onClick={() => {
            handleClick(2);
            setShowProfile(true);
          }}
        >
          <img src={profile} alt="icon" />
          Şəxsi məlumatlar
        </li>
        <li
          className={activeItem === 3 ? style.active : ""}
          onClick={() => {
            handleClick(3);
            logOutUser();
            navigate("/login");
          }}
        >
          <img src={logout} alt="icon" />
          Çıxış
        </li>
      </ul>
    </div>
  );
};

export default ProfileMenu;
