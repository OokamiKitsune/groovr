// Track Analysis API Route
import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

const ClinetSecret = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // Make sure to get the trackId from the request query or body
    const { trackId } = req.query; // Assuming trackId is passed as a query parameter

    if (!trackId) {
      // If trackId is not provided in the request, return a 400 Bad Request response
      return res.status(400).json({ error: "Missing trackId parameter" });
    }

    const response = await axios.get(
      `https://api.spotify.com/v1/audio-analysis/${trackId}`,
      {
        headers: {
          Authorization: `Bearer ${ClinetSecret}`,
        },
      }
    );

    // Return the response data as JSON
    res.status(200).json(response.data);
  } catch (error) {
    // If an error occurs, return a 500 Internal Server Error response
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
