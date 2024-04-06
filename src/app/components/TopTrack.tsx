// This component is responsible for calling the Spotify API to get the user's top tracks.
'use client'
import { Button } from '@radix-ui/themes'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';


interface TopTrackProps {
    user: any
    artist: string
    track: string
    access_token: string
}

function TopTracks(props: TopTrackProps) {
    const [topTrack, setTopTrack] = useState<any>({})
    const endpoint = "https://api.spotify.com/v1/me/top/tracks?limit=5"
    const router = useRouter();


    useEffect(() => {
        getTopTracks()
    }, [])
    async function getTopTracks() {
        // Craft a call to spotify API to get the user's top tracks.
        const request = await fetch(endpoint, {
            headers: {
                Authorization: `Bearer ${props.user.access_token}`,
            },
        });
        if (!request.ok) {
            throw new Error("Failed to fetch data from Spotify API");
        }
        console.log("Request:", request);
        const data = await request.json();
        setTopTrack(data);
    }

    return (
        <div>
            <br />
            {props.track ? (
                <p>
                    {props.artist} - {props.track}
                </p>

            ) : (
                <p>
                    🤔 No recent or current top track in the past 30 days.
                </p>
            )}
        </div>
    )
}

export default TopTracks
