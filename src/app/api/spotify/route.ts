import { NextResponse } from "next/server";
import { NextApiRequest, NextApiResponse } from "next";
import fetch from "node-fetch";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  const handleSpotifyCallback = async () => {
    console.log("Request Query: ", req.query);
    if (req.method !== "GET") {
      res.status(405).json({ error: "Method Not Allowed" });
      return;
    }

    const code = req.query.code as string | undefined;
    const state = req.query.state as string | undefined;
    const error = req.query.error as string | undefined;

    if (!state) {
      res.status(400).json({ error: "State parameter missing" });
      return;
    }

    // Check if there's an error
    if (error) {
      if (error === "access_denied") {
        res.status(403).json({ error: "Access denied by user" });
      } else {
        res.status(400).json({ error });
      }
      return;
    }

    // If there's no error, handle code and state
    if (code) {
      // Authorization code is present, handle authorized callback
      console.log("Authorized callback:");
      console.log("Code:", code);
      console.log("State:", state);

      // Rest of your code for handling authorized callback
    } else {
      // Authorization code is missing, handle unauthorized callback
      console.log("Unauthorized callback:");
      console.log("State:", state);
    }

    interface SpotifyResponse {
      access_token: string;
      code: string;
      error: string;
    }

    // Encode client ID and client secret. We do it here for simplicity, but it's recommended to use a library like `btoa` for this.
    const spotifyClientId = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
    const clientSecret = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET;
    // Combine client ID and client secret
    const credentials = `${spotifyClientId}:${clientSecret}`;
    const encodedCredentials = Buffer.from(credentials).toString("base64");
    const authHeader = `Basic ${encodedCredentials}`;

    // Make POST request to Spotify token endpoint
    const response = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: authHeader,
        // Add any additional headers if required (e.g., client ID, client secret)
      },
      body: new URLSearchParams({
        grant_type: "authorization_code",
        code: code as string, // The authorization code from the query string needs to be cast to a string
        redirect_uri: "http://localhost:3000/api/spotify", // Your redirect URI
        // Add client ID, client secret, and any other required parameters
      }).toString(),
    });

    // Handle response and store access token
    if (response.ok) {
      const data = (await response.json()) as SpotifyResponse;
      const accessToken = data.access_token;
      // Store access token securely (e.g., in session, local storage)
      // Respond with success or redirect to another page
      res.status(200).json({ accessToken });
    } else {
      // Handle error response
      if (error == "access_denied") {
        res.status(400).json({ error });
        return;
      }
      const errorData = (await response.json()) as SpotifyResponse;
      res.status(response.status).json({ error: errorData.error });
    }
  };

  await handleSpotifyCallback();
}
