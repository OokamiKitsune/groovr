// Example frontend code (e.g., in a React component)
'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Flex, Text, Button } from '@radix-ui/themes';

const SpotifyClientID = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;

function LoginButton() {
  const router = useRouter();

  const handleClick = () => {
    // Construct the URL for Spotify authorization endpoint
    const clientId = SpotifyClientID; // Your Spotify client ID
    const redirectUri = encodeURIComponent("http://localhost:3000/api/auth"); // Your redirect URI
    const responseType = "code";
    const scope = encodeURIComponent("user-read-private user-read-email"); // Your required scopes
    const state = encodeURIComponent(generateRandomString(16)); // Optional but recommended
    const showDialog = "true"; // Optional, set to "true" to force approval again

    const spotifyAuthUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=${responseType}&redirect_uri=${redirectUri}&scope=${scope}&state=${state}&show_dialog=${showDialog}`;
    // Redirect the user to the Spotify authorization URL
    router.push(spotifyAuthUrl);
  };


  return (
    <div>

      <Button size="4" onClick={handleClick}>Login with Spotify</Button>
    </div>
  );
}

export default LoginButton;

// Generate random string function
function generateRandomString(length: number): string {
  let text = "";
  const possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}