// Test any code here for the /api/spotify/calls/test route
import { response } from "express";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import fetch from "node-fetch";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === "GET") {
      console.log("req:", req);
      const request = await fetch("https://api.spotify.com/v1/me/tracks", {
        headers: {
          Authorization: `Bearer ${AccessToken}`,
        },
      });
      if (!request.ok) {
        throw new Error("Failed to fetch data from Spotify API");
      }
      const data = await request.json();
      return res.status(200).json(data);
    }

    // Continue with the rest of your code
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
