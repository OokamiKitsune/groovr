// This component is responsible for rendering the login button that will redirect the user to the Spotify authorization endpoint.
'use client'
import { Button } from '@radix-ui/themes'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation';

interface PropsType {
  user: any
}

function LoginButtonV2(props: PropsType) {
  const supabase = createClientComponentClient();
  const router = useRouter();


  async function signInWithSpotify() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'spotify',
      options: {
        redirectTo: 'http://localhost:3000/auth/callback',
      }
    })
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
          Logout
        </Button>
      ) : (
        <Button size="4" onClick={signInWithSpotify}>
          Login with Spotify
        </Button>
      )}
    </div>
  )
}

export default LoginButtonV2
