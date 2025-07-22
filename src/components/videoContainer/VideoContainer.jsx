// VideoContainer.jsx
import React from 'react';
import './VideoContainer.css';

export default function VideoContainer() {
  const videoSrc = 'pictures/introVideo.mp4';
  return (
    <div>
      <video src={videoSrc} autoPlay loop muted  className="videoStyle" />
    </div>
  );
}
