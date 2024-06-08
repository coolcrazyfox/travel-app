import React from "react";
import { FaFacebook, FaInstagram, FaTelegram, FaTwitter } from "react-icons/fa";
import s from "../styles/Hero.module.css";

const iconsData = [
  { title: "instagram", icon: <FaInstagram /> },
  { title: "telegram", icon: <FaTelegram /> },
  { title: "facebook", icon: <FaFacebook /> },
  { title: "twitter", icon: <FaTwitter /> },
];

const Hero = () => {
  return (
    <section className={s.home}>
      <div className={s.content}>
        <h1 className={s.h1}>
          Wonderful.
          <br />
          <span>Island</span>
          <p className={s.description}>
            lorem In cillum officia id nisi ut.Proident sint exercitation
            consectetur nisi in anim laborum nulla consequat.Excepteur
            reprehenderit sunt amet laborum nulla deserunt nulla reprehenderit
            esse excepteur.Nisi duis enim id aliquip excepteur proident nulla
            ullamco esse nisi quis magna duis.Ex dolore consequat voluptate
            commodo commodo eiusmod duis laborum magna minim.Commodo ex anim
            labore esse tempor nulla.Mollit duis cillum velit commodo velit enim
            voluptate in ex esse aliqua anim excepteur tempor.Et adipisicing
            culpa ex esse nostrud.Eu minim consectetur sunt anim consectetur
            cupidatat et nisi amet.
          </p>
          <a href="#" className={s.link_btn}>
            Read More
          </a>
        </h1>
      </div>
      <div className={s.media_icons}>
        {iconsData.map((item, index) => {
          return (
            <a key={item.title} className={s.link} href="#">
              <i className={s.fab}>{item.icon}</i>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Hero;
