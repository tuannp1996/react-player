import "./styles.css";
import React, { useState, useRef, useEffect } from "react";
import ReactPlayer from "react-player";
import axios from 'axios';

export default function App() {
  const playerRef = useRef(null);
  const [duration, setDuration] = useState(null);

  const handleDuration = (duration) => {
    setDuration(duration);
  };
  // Function to handle seeking to a specific time
  const handleSeek = (timeInSeconds) => {
    // Check if the player reference is available
    if (playerRef && playerRef.current) {
      // Call the seekTo method on the player reference
      playerRef.current.seekTo(timeInSeconds, "seconds");
    }
  };

  const handleSeekToEnd = () => {
    if (duration !== null) {
      playerRef.current.seekTo(duration, "seconds");
    }
  };

  return (
    <div className="App">
      <ReactPlayer
        ref={playerRef}
        url="https://www.facebook.com/watch/?v=2771118336378887"

        // src="blob:https://www.facebook.com/bed87747-1d71-4c18-acee-21aedca2101a"
        // url="blob:https://www.facebook.com/bed87747-1d71-4c18-acee-21aedca2101a"
        className="react-player"
        playing
        controls
        width="100%"
        height="100%"
        onDuration={handleDuration}
      />
      <button onClick={() => handleSeek(9999999)}>Seek to end</button>
      <button onClick={() => handleSeek(0.999)}>
        Seek to end (works in Safari)
      </button>
      <button onClick={() => handleSeekToEnd()}>Seek to end</button>
      <button onClick={() => handleSeek(17)}>Seek to 17</button>
      <button onClick={() => handleSeek(40)}>Seek to 40</button>
    </div>
  );
}
