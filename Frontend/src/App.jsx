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
import History from './pages/History';
import Channel from './pages/Channel/Channel';
import ChannelVideos from './pages/Channel/ChannelVideos';
import ChannelSubscribers from './pages/Channel/ChannelSubscribers'
import ChannelPlaylist from './pages/Channel/ChannelPlaylist';
import ChannelTweets from './pages/Channel/ChannelTweets';
import AdminDashboard from './pages/AdminDashboard';
import EditChannel from './pages/EditChannel';
import EditPersonalInfo from './components/EditPersonalInfo';
import ChangePassword from './components/ChangePassword';
import VideoDetail from './pages/VideoDetail';
import MySubscriptions from './pages/MySubscription';








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
                path="history"
                element={
                    <AuthLayout authentication>
                        <History />
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
            <Route
                path="channel/:username"
                element={
                    <AuthLayout authentication>
                        <Channel />
                    </AuthLayout>
                }
            >
                <Route
                    path="videos"
                    element={
                        <AuthLayout authentication>
                            <ChannelVideos />
                        </AuthLayout>
                    }
                />
                <Route
                    path="playlists"
                    element={
                        <AuthLayout authentication>
                            <ChannelPlaylist />
                        </AuthLayout>
                    }
                />
                <Route
                    path="tweets"
                    element={
                        <AuthLayout authentication>
                            <ChannelTweets />
                        </AuthLayout>
                    }
                />
                <Route
                    path="subscribed"
                    element={
                        <AuthLayout authentication={false}>
                            <ChannelSubscribers />
                        </AuthLayout>
                    }
                />
            </Route>

            {/* Move /collections route here, outside of the /channel/:username nested routes */}
            <Route
                path="collections"
                element={
                    <AuthLayout authentication>
                        <AdminDashboard />
                    </AuthLayout>
                }
            />
        </Route>

        <Route
                        path="/edit"
                        element={
                            <AuthLayout authentication>
                                <EditChannel />
                            </AuthLayout>
                        }
                    >

<Route
                            path="personalInfo"
                            element={
                                <AuthLayout authentication>
                                    <EditPersonalInfo />
                                </AuthLayout>
                            }
                        />
                        <Route
                            path="password"
                            element={
                                <AuthLayout authentication>
                                    <ChangePassword />
                                </AuthLayout>
                            }
                        />
                          </Route>


                          <Route
                    path="/watch/:videoId"
                    element={
                        <AuthLayout authentication>
                            <VideoDetail />
                        </AuthLayout>
                    }
                />
                 <Route
                        path="/subscriptions"
                        element={
                            <AuthLayout authentication>
                                <MySubscriptions />
                            </AuthLayout>
                        }
                    />

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
