import React from 'react';


const LibrarySong = ({
    song, 
    songs, 
    setCurrentSong,
     selectedSong, 
     id, 
     audioRef, 
     isPlaying,
     setSongs,
    }) => {
    const songSelectHandler = async () => {
        const selectedSong = songs.filter((state) => state.id === state.id);
        await setCurrentSong(selectedSong[0]);
        //Add active State
        const newSongs = songs.map((song) => {
            if(song.id === id) {
                return {
                    ...song,
                    active: true,
                }
            } else {
                return {
                    ...song,
                    active: false,
                };
            }
        });
        setSongs(newSongs);
        //Check if the Song is Playing
        if(isPlaying) audioRef.current.play();
    };
    return (
        <div 
        onClick={songSelectHandler} 
        className={`library-song ${song.active ? 'selected' : ""}`}
        >
            <img alt={song.name} src={song.cover}></img>
            <div className="song-description">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>  
        </div>
    );
};

export default LibrarySong;