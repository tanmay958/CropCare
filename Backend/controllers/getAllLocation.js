import Location from "../Modals/Locations.js";

const getAllLocations = async (req, res) => {
  try {
    const locations = await Location.find();
    res.json(locations);
  } catch (error) {
    console.error("Error retrieving locations:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
export default getAllLocations;
