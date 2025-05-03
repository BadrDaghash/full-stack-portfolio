import React from "react";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import Home from "./Home/Home";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Projects from "./Project/Projects";
export default function Layout() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <>
      <Navbar />
      <div>
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="project"><Projects /></section>
        <section id="contact"><Contact /></section>
      </div>
      <Footer />
    </>
  );
}
