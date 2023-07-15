import React from "react";
import style from "./style.module.scss";
import FooterIcons from "../FooterIcons";
import FooterList from "../FooterList";
import FooterContact from "../FooterContact";
import FooterCredit from "../FooterCredit";

const FooterMain = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footer_top}>
        <FooterIcons />
        <FooterList
          flag
          links={true}
          header="Menu"
          list={[
            { name: "Yeni", slug: "yeni" },
            { name: "Endirimlər", slug: "endirimler" },
            { name: "Aksessuarlar", slug: "aksessuarlar" },
            { name: "Bütün Brendlər", slug: "hamisi" },
          ]}
        />
        <FooterList
          links={true}
          header="Kömək"
          list={[
            "Tez-tez soruşulan suallar",
            "Çatdırılma xidməti",
            "Geri qaytarılma şərtləri",
          ]}
        />
        <FooterContact />
      </div>
      <FooterCredit />
    </footer>
  );
};

export default FooterMain;
