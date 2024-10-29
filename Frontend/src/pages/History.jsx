import React, { useEffect } from "react";
import { Container, NoVideosFound, VideoList } from "../components/index";
import { useDispatch, useSelector } from "react-redux";
import { getWatchHistory } from "../store/Slices/userSlice";
import HomeSkeleton from "../skeleton/HomeSkeleton";

import React from 'react'

function History() {
    const loading = useSelector((state) => state.user?.loading);
    const videos = useSelector((state) => state.user?.history);
    const dispatch = useDispatch();
  return (
    <div>History</div>
  )
}

export default History