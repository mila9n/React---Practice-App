import React from "react";

const VideoComponent = (props) => {
  const videoRef = React.useRef();
  const buttonRef = React.useRef();
  const videoDivRef = React.useRef();

  const showButton = () => {
    console.log(buttonRef);
    return (buttonRef.current.className = "video-button2");
  };

  const hideButton = () => {
    return (buttonRef.current.className = "video-button");
  };

  const [video, setVideo] = React.useState(false);

  const videoControl = () => {
    setVideo((prevValue) => !prevValue);
    video ? videoRef.current.pause() : videoRef.current.play();
  };

  const play = <i className="fa-solid fa-play" id="play"></i>;
  const pause = <i className="fa-solid fa-pause" id="pause"></i>;

  return (
    <div
      className="video-component"
      ref={videoDivRef}
      onMouseEnter={showButton}
      onMouseLeave={hideButton}
    >
      <video src={props.source[0]} ref={videoRef} />
      <span className="video-button" ref={buttonRef} onClick={videoControl}>
        {video ? pause : play}
      </span>
    </div>
  );
};

export default VideoComponent;
