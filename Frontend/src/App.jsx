import { useState } from 'react'
import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { getCurrentUser } from "./store/Slices/authSlice";
import Layout from './Layout';
import HomePage from './pages/HomePage';
import AuthLayout from './components/AuthLayout'


function App() {
  
  return (
    <>
   <Routes>
                <Route
                    path="/"
                    element={<Layout />}
                ></Route>

<Route
                        path=""
                        element={
                            <AuthLayout authentication={false}>
                                <HomePage />
                            </AuthLayout>
                        }
                    />



                 </Routes>
    </>
  )
}

export default App
