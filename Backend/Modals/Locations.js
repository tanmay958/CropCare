import mongoose from "mongoose";
// Define schema
const Schema = mongoose.Schema;

// Define the schema for your document
const LocationSchema = new Schema({
  // Image URL field (mandatory)
  imageUrl: { type: String, required: true },
  cropName: { type: String },
  disease: { type: String },
  // Latitude field (mandatory)
  latitude: { type: Number, required: true },
  // Longitude field (mandatory)
  longitude: { type: Number, required: true },
  // Location field (optional)
  location: { type: String },
  // Updated at field (automatically generated)
  updatedAt: { type: Date, default: Date.now },
});

// Create model
const Location = mongoose.model("Location", LocationSchema);

export default Location;
