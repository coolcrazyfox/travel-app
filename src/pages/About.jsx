import React from "react";
import { Link } from "react-router-dom";
import s from "../styles/Hero.module.css";
import video from "../assets/about.mp4";
import { PATH } from "../routes/RouterRoot";
import {
  FaArrowLeft,
  FaFacebook,
  FaInstagram,
  FaTelegram,
  FaTwitter,
} from "react-icons/fa";
const iconsData = [
  {
    title: "instagram",
    icon: <FaInstagram />,
    links: "https://www.instagram.com/",
  },
  {
    title: "telegram",
    icon: <FaTelegram />,
    links: "https://www.telegram.com/",
  },
  {
    title: "facebook",
    icon: <FaFacebook />,
    links: "https://www.facebook.com/",
  },
  { title: "twitter", icon: <FaTwitter />, links: "https://www.twitter.com/" },
];

const About = () => {
  return (
    <section className={s.home}>
      <video className={s.video_box} src={video} autoPlay muted loop></video>
      <div className={s.content}>
        <h1 className={s.h1}>
          About
          <br />
          <span className={s.span}>The Company</span>
        </h1>
        <p className={s.description}>
          lorem In cillum officia id nisi ut.Proident sint exercitation
          consectetur nisi in anim laborum nulla consequat.Excepteur
          reprehenderit sunt amet laborum nulla deserunt nulla reprehenderit
          esse excepteur.Nisi duis enim id aliquip excepteur proident nulla
          ullamco esse nisi quis magna duis.
        </p>
        <Link to={PATH.HERO} className={s.link_btn}>
          <span>
            <FaArrowLeft width={22} height={22} />
          </span>
          Back
        </Link>
      </div>
      <div className={s.media_icons}>
        {iconsData.map((item, index) => {
          return (
            <a key={item.title} className={s.link} href={item.links}>
              <i className={s.fab}>{item.icon}</i>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default About;
