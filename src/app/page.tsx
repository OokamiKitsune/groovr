// pages/index.tsx
import Link from 'next/link'
import LoginButton from './components/login'
import { Heading, Text } from '@radix-ui/themes'
import Footer from './components/IndexPage/Footer'
import Header from './components/IndexPage/Header'
import NavBar from './components/Navbar'
import LoginButtonV2 from './components/login-v2'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

export default async function Home() {
  const supabase = createServerComponentClient({ cookies })

  const { data, error } = await supabase.auth.getUser()

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
      <Footer />
    </div>
  )
}
