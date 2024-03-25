import { NextApiHandler } from "next";
import NextAuth from "next-auth";
import Spotify from "next-auth/providers/spotify";
import express from "express";
import authHandler from "../auth/[...nextauth]";

const handler: NextApiHandler = (req, res) => {
  if (req.method === "GET") {
    return express().use("/login", authHandler)(req, res);
  } else {
    // Handle other methods if needed
    res.status(405).end(); // Method Not Allowed
  }
};

export default handler;
