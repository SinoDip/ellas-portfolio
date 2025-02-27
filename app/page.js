import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Services from "./components/Services";
import Works from "./components/Works";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";

const page = () => {
  return (
    <>
      <Header></Header>
      <About></About>
      <Services></Services>
      <Works></Works>
    </>
  );
};

export default page;
