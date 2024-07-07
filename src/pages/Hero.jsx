import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
// import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTelegram, FaTwitter } from "react-icons/fa";
import s from "../styles/Hero.module.css";
import video from "../assets/main.mp4";
import { PATH } from "../routes/RouterRoot";

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
        <Link to={PATH.GALLERY} className={s.link_btn}>
          Read More
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
      {/* <div className={s.slider_navigation}>
        <Swiper
          className={s.swiper_container}
          slidesPerView={1}
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2, spaceBetween: 30 },
            1140: { slidesPerView: 5, spaceBetween: 30 },
          }}
        >
          {navSlideData.map((item) => {
            return (
              <SwiperSlide
                key={item.id}

                // onClick={onClickBtnNav}
              >
                <div
                  className={s.nav_btn}
                  onClick={() => {
                    alert("yes");
                  }}
                >
                  {item.name}
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div> */}
    </section>
  );
};

export default Hero;
