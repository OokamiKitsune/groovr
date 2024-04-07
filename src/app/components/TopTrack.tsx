// components/TopTracks.tsx
import React from 'react';
import Link from 'next/link'
import { Button, Heading, Text } from '@radix-ui/themes'

// Define the type for the track object
interface Track {
    id: string;
    name: string;
    artists: { name: string }[];
    album: {
        name: string;
        images: { url: string }[];
    };
    external_urls: {
        spotify: string;
    };
}

// Define the props interface for TopTracks component
interface TopTracksProps {
    tracks: Track[];
}

const TopTracks: React.FC<TopTracksProps> = ({ tracks }) => {
    return (
        <div>
            <h2>Your Top Tracks</h2>
            <div>
                {tracks.map((track) => (
                    <div key={track.id} style={{ marginBottom: '20px' }}>
                        <img src={track.album.images[0].url} alt={track.name} style={{ width: '100px', height: '100px', borderRadius: '5%' }} />
                        <div style={{ marginLeft: 'px', display: 'inline-block', verticalAlign: 'top' }}>
                            <h3>{track.name}</h3>
                            <p>Artist: {track.artists.map(artist => artist.name).join(', ')}</p>
                            <p>Album: {track.album.name}</p>
                            <p>Mood Sentiment: </p>
                            <p>Harmonizers: </p>
                            <p>
                                <Link href={track.external_urls.spotify}
                                    target="_blank" rel="noopener noreferrer">
                                    <Button>▶️ Listen on Spotify</Button>

                                </Link>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopTracks;
