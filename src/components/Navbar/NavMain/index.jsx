import React from "react";
import style from "./style.module.scss";
import NavBurger from "../NavBurger";
import NavLogo from "../NavLogo";
import NavIcons from "../NavIcons";
import NavSearch from "../NavSearch";
import NavMenu from "../NavMenu";
import { Link } from "react-router-dom";
import Overlay from "../../UI/Overlay";
const NavMain = () => {
  const [open, setOpen] = React.useState(false);
  const [showHistory, setShowHistory] = React.useState(false);
  const [openSubmenu, setOpenSubmenu] = React.useState(false);
  const border = open ? "" : style.border_bottom;
  return (
    <>
      {openSubmenu && <Overlay />}
      <nav className={`${style.nav} ${border}`}>
        <NavBurger
          open={open}
          setOpen={setOpen}
          setOpenSubmenu={setOpenSubmenu}
        />
        <Link to="/">
          <NavLogo />
        </Link>
        <NavSearch showHistory={showHistory} setShowHistory={setShowHistory} />
        <NavIcons />
        <NavMenu
          open={open}
          setOpen={setOpen}
          openSubmenu={openSubmenu}
          setOpenSubmenu={setOpenSubmenu}
        />
      </nav>
    </>
  );
};

export default NavMain;
