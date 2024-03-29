# Groovr
Groovr allows a Spotify user to publicly share their own Spotify listening history with the world. The idea is to build a simple interface that a user can authroize Groovr to read data from their spotify accounts. To start, this can include the users: 

- Top 10 listened to songs
- Current song playing
- Public Playlists



## Getting Started

We are currently using:
- Next.js
- Node
- Express - to call spotify API from our backend
- Radix-UI - to build frontend UI
- Spotify's Web API - to read users data
- Supabase - to store users data 

Install dependencies:
We use YARN. Do not use NPM!

```bash 
yarn install
```
Then

```bash
yarn run dev
```


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Spotify OAUTH

To authorize users, we use Spotify's OAUTH endpoint. 

Backend logic:
- /api/spotify
