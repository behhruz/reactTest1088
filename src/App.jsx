import React from "react"

import FirstSection from "./FirstSection"

import { useState } from 'react'
import Header from './DXX'

import Sardor from './components/Sardor' // ✅ Правильный импорт
import Shodi from "./main/Shodi"


import Ismoil from './ismoil'
import Dxx from "./DXX"
function App() {


  return (
    <>
      <FirstSection />
      <Dxx />
      <Sardor />
      <Shodi />
      <Ismoil />


    </>
  )
}

export default App
