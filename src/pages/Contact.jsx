import React from "react";

const Contact = () => {
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
        <Link to="/home" className={s.link_btn}>
          <span>
            <FaArrowLeft width={22} height={22} />
          </span>
          Back
        </Link>
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
    </section>
  );
};

export default Contact;
