// Handle Spotify OAuth2 callback routing from frontend /callback to backend /api/spotify/callback

import { NextApiRequest, NextApiResponse } from "next";
import fetch from "node-fetch";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  try {
    console.log(req.method);
    if (req.method === "GET") {
      const searchParams = new URLSearchParams(
        req.url?.search?.toString() || ""
      );

      const code = searchParams.get("code");
      const state = searchParams.get("state");
      const error = searchParams.get("error");

      console.log("Code:", code);
      console.log("State:", state);
      console.log("Error:", error);

      if (!state) {
        return res.status(400).json({ error: "State parameter missing" });
      }

      if (error) {
        if (error === "access_denied") {
          return res.status(403).json({ error: "Access denied by user" });
        } else {
          return res.status(400).json({ error });
        }
      }

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
    }

    // Continue with the rest of your code
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
