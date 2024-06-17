import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";
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
  { id: 1, active: false },
  { id: 2, active: false },
  { id: 3, active: false },
  { id: 4, active: false },
  { id: 5, active: true },
];

const Hero = () => {
  const [colArray, setColArray] = React.useState(navSlideData);
  const onClickBtnNav = () => {
    const nextArraySlider = [...colArray];
    nextArraySlider.reverse();
    setColArray([...colArray, { id: 6, active: true }]);
  };
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
      <Swiper
        // slidesPerView={1}
        // spaceBetween={30}
        modules={[Pagination]}
        pagination={true}
        // breakpoints={{
        //   768: { slidesPerView: 2, spaceBetween: 30 },
        //   1140: { slidesPerView: 3, spaceBetween: 30 },
        // }}
      >
        <div className={s.slider_navigation}>
          {navSlideData.map((item) => {
            return (
              <SwiperSlide
                className={s.swiper}
                // onClick={onClickBtnNav}
              >
                {/* <div key={item.id} className={s.nav_btn}> */}
                {item.name}
                {/* </div> */}
              </SwiperSlide>
            );
          })}
        </div>
      </Swiper>
    </section>
  );
};

export default Hero;
