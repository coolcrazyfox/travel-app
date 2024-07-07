import React from "react";
import { Route, Routes } from "react-router-dom";
import Hero from "../pages/Hero";
import About from "../pages/About";
import Explore from "../pages/Explore";
import Gallery from "../pages/Gallery";
import Contact from "../pages/Contact";
export const PATH = {
  USERS: "/users",
  HERO: "/",
  REGISTRATION: "/registration",
  BLOGGER: "/blogger",
  POSTS: "/posts",
  DETAILS: "/detblog",
  POST_DETAILS: "/postdetails",
  POST_EDIT: "/postedit",
  SETTINGS: "/settings",
};
const RouterRoot = () => {
  return (
    <div>
      <Routes>
        <Route path="home" element={<Hero />} />
        <Route path="about" element={<About />} />
        <Route path="explore" element={<Explore />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default RouterRoot;
