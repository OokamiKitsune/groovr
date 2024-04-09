import React from 'react';
import Link from 'next/link'
import { Button, Heading, Text } from '@radix-ui/themes'

interface TrackAnalyzerProps {
    track: {
        acousticness: number;
        analysis_url: string;
        danceability: number;
        duration_ms: number;
        energy: number;
        id: string;
        instrumentalness: number;
        key: number;
        liveness: number;
        loudness: number;
        mode: number;
        speechiness: number;
        tempo: number;
        time_signature: number;
        track_href: string;
        type: string;
        uri: string;
        valence: number;
    };
}

const TrackAnalyzer: React.FC<TrackAnalyzerProps> = ({ track }) => {
    return (
        <div>
            <h2>Track Analysis</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
                <div>
                    <h3>{track.id}</h3>
                    <p>Acousticness: {track.acousticness}</p>
                    <p>Danceability: {track.danceability}</p>
                    <p>Energy: {track.energy}</p>
                    <p>Instrumentalness: {track.instrumentalness}</p>
                    <p>Key: {track.key}</p>
                    <p>Liveness: {track.liveness}</p>
                </div>
                <div>
                    <p>Loudness: {track.loudness}</p>
                    <p>Mode: {track.mode}</p>
                    <p>Speechiness: {track.speechiness}</p>
                    <p>Tempo: {track.tempo}</p>
                    <p>Time Signature: {track.time_signature}</p>
                    <p>Valence: {track.valence}</p>
                    <p>
                        <a href={track.track_href} target="_blank" rel="noopener noreferrer">
                            Listen on Spotify
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TrackAnalyzer;