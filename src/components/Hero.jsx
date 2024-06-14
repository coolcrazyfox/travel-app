import React from "react";
import { FaFacebook, FaInstagram, FaTelegram, FaTwitter } from "react-icons/fa";
import s from "../styles/Hero.module.css";
import video from "../assets/main.mp4";

const iconsData = [
  { title: "instagram", icon: <FaInstagram /> },
  { title: "telegram", icon: <FaTelegram /> },
  { title: "facebook", icon: <FaFacebook /> },
  { title: "twitter", icon: <FaTwitter /> },
];
const navSlideData = [
  { id: 1, name: "" },
  { id: 2, name: "" },
  { id: 3, name: "" },
  { id: 4, name: "" },
  { id: 5, name: "" },
];

const Hero = () => {
  return (
    <section className={s.home}>
      <video className={s.video_box} src={video} autoPlay muted loop></video>
      <div className={s.content}>
        <h1 className={s.h1}>
          Wonderful.
          <br />
          <span className={s.span}>Island</span>
        </h1>
        <p className={s.description}>
          lorem In cillum officia id nisi ut.Proident sint exercitation
          consectetur nisi in anim laborum nulla consequat.Excepteur
          reprehenderit sunt amet laborum nulla deserunt nulla reprehenderit
          esse excepteur.Nisi duis enim id aliquip excepteur proident nulla
          ullamco esse nisi quis magna duis.
        </p>
        <a href="link" className={s.link_btn}>
          Read More
        </a>
      </div>
      <div className={s.media_icons}>
        {iconsData.map((item, index) => {
          return (
            <a key={item.title} className={s.link} href="icon_link">
              <i className={s.fab}>{item.icon}</i>
            </a>
          );
        })}
      </div>
      <div className={s.slider_navigation}>
        {navSlideData.map((item) => {
          return <div key={item.id}>{item.name}</div>;
        })}
      </div>
    </section>
  );
};

export default Hero;
