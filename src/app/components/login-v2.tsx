// This component is responsible for rendering the login button
// that will redirect the user to the Spotify authorization endpoint.
'use client'
import { Button } from '@radix-ui/themes'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation';

interface LoginProps {
  userData: any
}

function LoginButtonV2(props: LoginProps) {
  const supabase = createClientComponentClient();
  const router = useRouter();

  async function signInWithSpotify() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'spotify',

      options: {
        scopes: 'user-read-email user-read-private user-top-read',
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
      {props.userData ? (
        <Button size="4" onClick={signOut}>
          {/* FIX THIS! I moved the logic that handles the fetch into utils/supabase and now this has an issue */}
          Logout {props.userData.user.user_metadata.full_name}, {props.userData.user.id.slice(-5)}
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
