import React from "react";
import { Link } from "react-router-dom";
import s from "../styles/Header.module.css";

const initNav = [
  { id: 1, name: "Home", link: "/home" },
  { id: 2, name: "About", link: "/about" },
  { id: 3, name: "Explore", link: "/explore" },
  { id: 4, name: "Gallery", link: "/gallery" },
  { id: 5, name: "Contact", link: "/contact" },
];

const Header = () => {
  const [isActive, setIsActive] = React.useState(true);
  const [isClose, setIsClose] = React.useState(true);
  const onChangeMenuHandel = () => {
    setIsActive(!isActive);
    setIsClose(!isClose);
  };
  return (
    <div className={s.header}>
      <Link to="/home" className={s.brand} href="link_HERO">
        Travel
      </Link>
      <div
        className={isActive ? s.menu_btn : s.menu_btn_active}
        onClick={onChangeMenuHandel}
      ></div>
      <div className={isClose ? s.navigation : s.navigation_active}>
        <div className={s.navigation_items}>
          {initNav.map((item) => {
            return (
              <Link className={s.link} key={item.id} to={item.link}>
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Header;
