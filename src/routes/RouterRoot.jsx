import React from "react";
import { Route, Routes } from "react-router-dom";
import Hero from "../pages/Hero";
import About from "../pages/About";
import Explore from "../pages/Explore";
import Gallery from "../pages/Gallery";
import Contact from "../pages/Contact";
import Error404 from "../pages/Contact";

export const PATH = {
  HERO: "/",
  ABOUT: "/about",
  EXPLORE: "/explore",
  GALLERY: "/gallery",
  CONTACT: "/contact",
  ERROR404: "/er",
};

const RouterRoot = () => {
  return (
    <div>
      <Routes>
        <Route path={PATH.HERO} element={<Hero />} />
        <Route path={PATH.ABOUT} element={<About />} />
        <Route path={PATH.EXPLORE} element={<Explore />} />
        <Route path={PATH.GALLERY} element={<Gallery />} />
        <Route path={PATH.CONTACT} element={<Contact />} />
        <Route path={PATH.ERROR404} element={<Error404 />} />
      </Routes>
    </div>
  );
};

export default RouterRoot;
