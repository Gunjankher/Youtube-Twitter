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
import TermsAndConditions from './pages/TermsAndConditions'
import LikedVideos from './pages/LikedVidoes';


function App() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCurrentUser());
    }, [dispatch]);


  return (
    <>
    <Routes>
        <Route path="/" element={<Layout />}>
            <Route
                index
                element={
                    <AuthLayout authentication={false}>
                        <HomePage />
                    </AuthLayout>
                }
            />
            <Route
                path="login"
                element={
                    <AuthLayout authentication={false}>
                        <Login />
                    </AuthLayout>
                }
            />
            <Route
                path="signup"
                element={
                    <AuthLayout authentication={false}>
                        <SignUp />
                    </AuthLayout>
                }
            />
            <Route
                path="liked-videos"
                element={
                    <AuthLayout authentication>
                        <LikedVideos />
                    </AuthLayout>
                }
            />
            <Route
                path="terms&conditions"
                element={
                    <AuthLayout authentication>
                        <TermsAndConditions />
                    </AuthLayout>
                }
            />
        </Route>
    </Routes>

    <Toaster
        position="top-right"
        reverseOrder={true}
        toastOptions={{
            error: {
                style: { borderRadius: "0", color: "red" },
            },
            success: {
                style: { borderRadius: "0", color: "green" },
            },
            duration: 2000,
        }}
    />
</>
  )
}

export default App
