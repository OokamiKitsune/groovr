// Get the user's top tracks from Spotify.
// https://developer.spotify.com/documentation/web-api/reference/get-users-top-artists-and-tracks

import { NextApiRequest, NextApiResponse } from "next";
import { SupabaseClient } from "@supabase/supabase-js";

export async function GET(req: NextApiRequest, res: NextApiResponse) {


  // Get access token from Supabase
  const supabase: SupabaseClient = 
  const { data: user, error } = await supabase.auth.api.getUserByCookie(req);
  if (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }


  // Get the user's top tracks from Spotify
  const limit: number = 5; // Number of tracks to return
  const endpoint = `https://api.spotify.com/v1/me/top/tracks?limit=${limit}`;
  const userId = req.headers["x-user-id"];
  const accessToken = req.headers.authorization;

  const response = await fetch(endpoint, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const data = await response.json();
  console.log(data);
}
