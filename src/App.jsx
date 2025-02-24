import React from "react"

import FirstSection from "./FirstSection"

import { useState } from 'react'

import Sardor from './components/Sardor' // ✅ Правильный импорт
import Shodi from "./main/Shodi"


import Ismoil from './ismoil'
function App() {


  return (
    <>
      <FirstSection />
      <Sardor />
      <Shodi />
      <Ismoil />
    </>
  )
}

export default App
