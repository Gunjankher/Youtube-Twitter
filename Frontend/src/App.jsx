import { useState } from 'react'
import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { getCurrentUser } from "./store/Slices/authSlice";
import Layout from './Layout';
import HomePage from './pages/HomePage';
import AuthLayout from './components/AuthLayout'
import Login from './components/Login';
import SignUp from './components/Signup';


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
 <Route
                    path="/login"
                    element={
                        <AuthLayout authentication={false}>
                            <Login />
                        </AuthLayout>
                    }
                />
                <Route
                    path="/signup"
                    element={
                        <AuthLayout authentication={false}>
                            <SignUp />
                        </AuthLayout>
                    }
                />


                 </Routes>
    </>
  )
}

export default App
