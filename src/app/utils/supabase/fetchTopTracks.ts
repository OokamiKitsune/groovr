"use server";

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { useState } from "react";

// Function to fetch top tracks with an access token
export async function fetchTopTracks(accessToken: string) {
  const response = await fetch(
    "https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=3",
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch top tracks");
  }

  const data = await response.json();
  return data.items || [];
}

// Function to fetch user data and top tracks together
export async function fetchData() {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.auth.getUser();
  const accessToken = (await supabase.auth.getSession()).data.session
    ?.provider_token;

  if (accessToken) {
    try {
      const tracksData = await fetchTopTracks(accessToken);
      console.log("tracksData", tracksData);
      console.log("user", data);
      return { tracks: tracksData || [], user: data };
    } catch (error) {
      throw new Error("Error fetching data:" + error);
    }
  }
  return { tracks: [], user: null }; //
}
