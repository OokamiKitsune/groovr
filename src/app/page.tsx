// pages/index.tsx
import Link from 'next/link'
import LoginButton from './components/login'
import { Button, Heading, Text } from '@radix-ui/themes'
import Footer from './components/IndexPage/Footer'
import Header from './components/IndexPage/Header'
import NavBar from './components/Navbar'
import LoginButtonV2 from './components/login-v2'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import TopTracks from './components/TopTrack'

export const getTopTracks = async (accessToken: String) => {
  if (!accessToken) return undefined


  // Get the latest now playing from the user
  const data = await fetch('https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=3', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  }).then((response) => {

    return response.json()
  })
  console.log(data, "data")
  // Return the data
  if (!data) return undefined
  return data
}


export default async function Home() {
  // Get the user token from the cookies 
  const supabase = createServerComponentClient({ cookies })
  console.log("home page")
  const { data, error } = await supabase.auth.getUser()
  const accessToken = (await supabase.auth.getSession()).data.session?.provider_token
  console.log(accessToken)
  console.log(accessToken?.expires_at < Date.now())
  const topTracks = await getTopTracks(accessToken)
  console.log('data: ', data)
  console.log('error: ', error)




  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <NavBar />
      <Header
        title="Welcome to Groovr!"
        description="Share your Spotify experience with the world!"
      />
      <LoginButtonV2 user={data.user} />
      <TopTracks tracks={topTracks.items} />
      {/* <Text>
        {topTracks ? (
          <p>
            <img
              src={topTracks.items[0].album.images[0].url}
              alt="Album Art"
              style={{ width: '200px' }} // Adjust the width here
            />
            <Link href={topTracks.items[0].external_urls.spotify}>
              {topTracks.items[0].name} By: {topTracks.items[0].artists[0].name}
            </Link>{' '}
          </p>
        ) : (
          <p>🤔 No recent or current top track in the past 30 days.</p>
        )}
      </Text> */}
      <Footer />
    </div>
  )
}
