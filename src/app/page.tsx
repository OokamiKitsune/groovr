// pages/index.tsx
'use client'
import { useEffect, useState } from 'react';
import Header from './components/IndexPage/Header';
import LoginButtonV2 from './components/login-v2';
import TopTracks from './components/TopTrack';
import TrackAnalyzer from './components/TrackAnalyzer';
import { fetchData } from './utils/supabase/fetchTopTracks';

export default function Home() {
  const [topTracks, setTopTracks] = useState<any[]>([]); // Assuming any[] for topTracks type
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const fetchDataFromServer = async () => {
      try {
        const { tracks, user: userData } = await fetchData();
        setTopTracks(tracks);
        setUser(userData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchDataFromServer();
  }, []); // Empty dependency array for initial render

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
      }}
    >
      <Header
        title="Welcome to Groovr!"
        description="Share your Spotify experience with the world!"
      />
      <LoginButtonV2 userData={user} />
      <TopTracks tracks={topTracks} />

      {/* Render TrackAnalyzer for the first track in topTracks (if available) */}
      {topTracks.length > 0 && (
        <TrackAnalyzer track={topTracks[0]} />
      )}
    </div>
  );
}
