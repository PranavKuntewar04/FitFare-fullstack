const express = require("express");
require("dotenv").config()

const gymRouter = express.Router();

gymRouter.post("/", async (req, res) => {
    const { type, lat, lng } = req.body;
    
    const response = await fetch(    
        `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=1000&type=${type}&key=${process.env.GOOGLE_MAP_API_KEY}`
    );

    const data = await response.json();
    const gyms = data.results.slice(0, 5);

    return res.json({
       gyms: gyms
    })
});

module.exports = { gymRouter };
