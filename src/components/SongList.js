import React from "react";
import { Link } from 'react-router-dom';
import { useSidebar } from '../utils/SidebarContext'; // Import the useSidebar hook

function SongList({ songs = [], search = "", transliteratedSearch = "" }) {
  const { setIsOpen } = useSidebar(); // Access setIsOpen to control the sidebar state

  const searchLower = search.toLowerCase();
  const transliteratedSearchLower = transliteratedSearch.toLowerCase();

  const filteredSongs = songs?.filter((song) => {
    const matchesTitle = song.title.toLowerCase().includes(searchLower);
    const matchesTransliterated = song.transliteration?.toLowerCase().includes(searchLower);
    const matchesLyrics = song.lyrics.toLowerCase().includes(transliteratedSearchLower);

    return matchesTitle || matchesTransliterated || matchesLyrics;
  }) || [];

  const handleSongClick = () => {
    setIsOpen(false); // Close the sidebar when a song is clicked
  };

  return (
    <div className="song-list">
      {filteredSongs.length > 0 ? (
        filteredSongs.map((song) => (
          <a key={song.slug} href={`/${song.slug}`} onClick={handleSongClick}>
              <h3>{song.title}</h3>
              <p>{song.transliteration}</p>
          </a>
        ))
      ) : (
        <p>No song found</p>
      )}
    </div>
  );
}

export default SongList;
