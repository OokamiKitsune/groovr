// This file will be responsible for redirecting the user to the Spotify authentication URL.

import { NextApiHandler } from "next";
import querystring from "querystring";

const client_id = process.env.SPOTIFY_CLIENT_ID;
const redirect_uri = "http://localhost:3000/callback"; // Update with your actual redirect URI

const handler: NextApiHandler = (req, res) => {
  const state = generateRandomString(16);
  const scope = "user-read-private user-read-email";

  const spotifyAuthUrl =
    "https://accounts.spotify.com/authorize?" +
    querystring.stringify({
      response_type: "code",
      client_id: client_id,
      scope: scope,
      redirect_uri: redirect_uri,
      state: state,
    });

  // Redirect the user to the Spotify authentication URL
  res.redirect(spotifyAuthUrl);
};

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

export default handler;
