// const Location = require("../models/Location");
import Location from "../Modals/Locations.js";

// Controller to create a new location
const createLocation = async (req, res) => {
  try {
    const { imageUrl, latitude, longitude, location, cropName, disease } =
      req.body;

    // Create a new location document
    const newLocation = new Location({
      imageUrl,
      latitude,
      longitude,
      location,
      cropName,
      disease,
    });

    // Save the location document to the database
    const savedLocation = await newLocation.save();

    res.status(201).json(savedLocation);
  } catch (error) {
    console.error("Error creating location:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
export default createLocation;
