"use client";
import Image from "next/image";
import Head from "next/head";
import styles from "./page.module.css";
import "./header.css";
import "./desin.js";
import {getAllProducts} from './crud.mjs'
// import logoJPG from "./images/logo.png"
import Header from "./components/header";
import ProductSection from "./components/productSection";
import AboutSection from "./components/aboutSection";
import ContactSection from "./components/contactSection";
import Pub from "./components/pub";
import { BrowserRouter as Router, Route, BrowserRouter } from 'react-router-dom';
import { useEffect, useState } from "react";

export default function Home() {    

  const [isOnTop, setIsOnTop] = useState(false);

const hideBackToTopBtn = () => {
  if(window.scrollY > 0){
    setIsOnTop(false)
  }else{
    setIsOnTop(true)
  }
}

useEffect(() => {
  window.addEventListener('scroll', hideBackToTopBtn);
  return () => {
    window.removeEventListener('scroll', hideBackToTopBtn);
  };
}, []);

  
  return (
    <Router>
      <div id="home-page">
        {/* <Head>
          <title>FASTBUY</title>
          <link rel="icon" href="./images/logo.png" />
        </Head> */}

      <Header/>

      <div className="marginHeaderHeight"></div>
      
      <Pub/>

      <ProductSection/>

      <AboutSection/>

      <ContactSection/>



        <a className="invisible" href="#" id={isOnTop? 'invisible': "back-to-top"} ><i className="fas fa-arrow-up"></i></a>


      </div>
    </Router>
    );
}
