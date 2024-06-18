import Location from "../Modals/Locations.js";
const searchLocationsByCrop = async (req, res) => {
  const { cropName } = req.body;

  try {
    // Perform the search using Mongoose
    const locations = await Location.find({ cropName });

    // Check if locations are found
    if (!locations || locations.length === 0) {
      return res
        .status(404)
        .json({ message: "No locations found for the specified crop." });
    }

    // Return the locations found
    return res.status(200).json(locations);
  } catch (error) {
    // Handle errors
    console.error("Error searching locations:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
export default searchLocationsByCrop;
