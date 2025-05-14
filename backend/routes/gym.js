const express = require("express");
require("dotenv").config();
const { Client } = require("@googlemaps/google-maps-services-js");

const gymRouter = express.Router();
const client = new Client({});

gymRouter.post("/", async (req, res) => {
  const { type, lat, lng } = req.body;

  try {
    const response = await client.placesNearby({
      params: {
        location: { lat, lng },
        radius: 1000,
        type,
        key: process.env.GOOGLE_MAP_API_KEY,
      },
      timeout: 1000,
    });

    const gyms = response.data.results.slice(0, 5);
    res.json({ gyms });
} catch (error) {
    console.error("Error fetching places:", error);
    res.status(500).json({ error: "Failed to fetch places" });
  }
});

module.exports = { gymRouter };
