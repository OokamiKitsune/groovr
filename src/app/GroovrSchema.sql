CREATE TABLE "users" (
  "id" SERIAL PRIMARY KEY,
  "display_name" VARCHAR,
  "email" VARCHAR,
  "role" VARCHAR,
  "picture" TEXT, 
  "public_profile" BOOLEAN,
  "total_followers" INT,
  "top_tracks" VARCHAR,
  "country" VARCHAR,
  "spotify_id" VARCHAR,
  "access_token" VARCHAR,
  "created_at" TIMESTAMP
);
