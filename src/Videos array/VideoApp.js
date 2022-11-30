import React from "react";
import VideoComponent from "./VideoComponent";
import VideosData from "./VideosData";

const VideoApp = () => {
  const videos = VideosData.map((video) => {
    return <VideoComponent key={video.id} source={video.sources} />;
  });

  return <div className="video-container">{videos}</div>;
};

export default VideoApp;
