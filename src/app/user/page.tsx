import { useSearchParams, useRouter } from 'next/navigation'
import { useId } from 'react'



const spotifyId = "https://open.spotify.com/user/kai-rue?si=c5d6013802bd4237/"
export default function UserPage({
    params,
}: {
    params: { id: string }
    spotifyId: { spotifyURI: string }
}

) {
    return (
        <>
            Groovr: {params.id}, {spotifyId}
            <button>
                Spotify Profiles
            </button>
        </>
    )
}