import React from "react"

import FirstSection from "./FirstSection"

import { useState } from 'react'

import Sardor from './components/Sardor' // ✅ Правильный импорт
import Shodi from "./main/Shodi"

function App() {


  return (
    <>
      <FirstSection />

      <Sardor />
      <Shodi />
    </>
  )
}

export default App
