import React from "react"

import FirstSection from "./FirstSection"

import { useState } from 'react'

import Sardor from './components/Sardor' // ✅ Правильный импорт

function App() {


  return (
    <>
      <FirstSection />

      <Sardor />
    </>
  )
}

export default App
