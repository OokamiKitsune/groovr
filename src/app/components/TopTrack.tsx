// This component is responsible for rendering the login button that will redirect the user to the Spotify authorization endpoint.
'use client'
import { Button } from '@radix-ui/themes'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation';


interface TrackData {
    user: any
    artist: string
    track: string
    access_token: string
}

function TopTracks(props: TrackData) {
    const supabase = createClientComponentClient();
    const endpoint = "https://api.spotify.com/v1/me/top/tracks?limit=5"
    const router = useRouter();


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

    }

    async function signOut() {
        const { error } = await supabase.auth.signOut()

        router.refresh()
    }

    return (
        <div>
            <br />
            {props.user ? (
                <Button size="4" onClick={signOut}>
                    Logout {props.user.user_metadata.full_name}
                </Button>
            ) : (
                <Button size="4" onClick={getTopTracks}>
                    Login with Spotify
                </Button>
            )}
        </div>
    )
}

export default TopTracks
