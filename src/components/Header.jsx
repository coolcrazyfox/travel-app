import React from "react";
import s from "../styles/Header.module.css";

const initNav = [
  { id: 1, name: "Home" },
  { id: 2, name: "About" },
  { id: 3, name: "Explore" },
  { id: 4, name: "Gallery" },
  { id: 5, name: "Contact" },
];

const Header = () => {
  return (
    <div className={s.header}>
      <a className={s.brand} href="link_HERO">
        Travel
      </a>
      <div className={s.menu_btn}></div>
      <div className={s.navigation}>
        <div className={s.navigation_items}>
          {initNav.map((item) => {
            return (
              <a className={s.link} key={item.id} href="link">
                {item.name}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Header;
