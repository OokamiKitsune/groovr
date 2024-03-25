import fetch from "node-fetch";

const handleSpotifyCallback = async (req, res) => {
  const { code, state } = req.query;

  // Verify state if necessary

  // Make POST request to Spotify token endpoint
  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: "",
      // Add any additional headers if required (e.g., client ID, client secret)
    },
    body: new URLSearchParams({
      grant_type: "authorization_code",
      code,
      redirect_uri: "http://localhost:3000", // Your redirect URI
      // Add client ID, client secret, and any other required parameters
    }).toString(),
  });

  if (response.ok) {
    const data = await response.json();
    const accessToken = data.access_token;
    // Store access token securely (e.g., in session, local storage)
    // Respond with success or redirect to another page
    res.status(200).json({ accessToken });
  } else {
    // Handle error response
    const errorData = await response.json();
    res.status(response.status).json({ error: errorData.error });
  }
};

export default handleSpotifyCallback;
