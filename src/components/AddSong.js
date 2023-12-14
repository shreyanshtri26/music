import { useState } from "react"; 

export default function AddSong() {

  const [song, setSong] = useState({
    name: "",
    artist: ""  
  });

  const handleSubmit = () => {
    // call API to add song 
  }

  return (
    <div>
      <input 
        value={song.name}
        onChange={(e) => setSong({...song, name: e.target.value})}  
      />
      <input
        value={song.artist}  
        onChange={(e) => setSong({...song, artist: e.target.value})} 
      />

      <button onClick={handleSubmit}>Add Song</button>
    </div>
  )
}