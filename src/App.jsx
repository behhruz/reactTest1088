import React from "react"
import FirstSection from "./FirstSection"
import { useState } from 'react'
import Sardor from './components/Sardor' // ✅ Правильный импорт
import Shodi from "./main/Shodi"
import Ismoil from './ismoil'
import Dxx from "./DXX"
import Hero from "./components/hero";
import Nav from "./components/nav";

const App = () => {
  return (
    <><Nav />
      <Hero />
      <FirstSection />
      <Dxx />
      <Sardor />
      <Shodi />
      <Ismoil />



    </>
  );
};

export default App;
