import { useState } from 'react'
import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { getCurrentUser } from "./store/Slices/authSlice";
import Layout from './Layout';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Routes>
                <Route
                    path="/"
                    element={<Layout />}
                ></Route>
                 </Routes>
    </>
  )
}

export default App
