import React from "react";
import style from "./style.module.scss";
import ProfileMenu from "../../components/User/ProfileMenu";
import UserForm from "../../components/User/UserForm";
import Orders from "../../components/User/Orders";
const UserProfile = () => {
  window.scrollTo(0, 0);

  const [showProfile, setShowProfile] = React.useState(true);
  return (
    <div className={style.user}>
      <ProfileMenu setShowProfile={setShowProfile} />
      {showProfile ? <UserForm /> : <Orders />}
    </div>
  );
};

export default UserProfile;
