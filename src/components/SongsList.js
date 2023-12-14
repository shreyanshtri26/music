export default function SongsList() {

    const [songs, setSongs] = useState([]);
    
    useEffect(() => {
      // call API to get songs
      setSongs(response.data); 
    }, [])
  
    return (
      <div>
        {songs.map(song => ( 
          <div key={song.id}>{song.name}</div>
        ))}
      </div>
    )
  }
  