import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import songs from '../data/songs';
import SEOHead from './SEOHead';

function SongDetails() {
  const { slug } = useParams();
  const [song, setSong] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const songData = songs.find((s) => s.slug === slug);
    if (songData) {
      setSong(songData);
    }
    setIsLoading(false);
  }, [slug]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!song) {
    return <p>Song not found</p>;
  }

  return (
    <div className='song-details'>
       <SEOHead 
        title={song.title}
        description={`Lyrics for ${song.title}`}
        url={`https://www.gospelminimelodies.com/${song.slug}`}
      />
      <h1>{song.title}</h1>
      <pre>{song.lyrics}</pre>
      <div className="youtube-embed">
        <iframe
          width="560"
          height="315"
          src={song.youtubeUrl}
          title={`YouTube video for ${song.title}`}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default SongDetails;
