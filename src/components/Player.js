import { useState, useEffect } from "react";

export default function Player({ currentSong }) {

  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // audio state management
  }, [currentSong]) 

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  }

  return (
    <div>
      <div>
        {currentSong.name} - {currentSong.artist}  
      </div>

      <button onClick={handlePlayPause}>
        {isPlaying ? "Pause" : "Play"}  
      </button>

      // seekbar, other controls
    </div>
  );
}