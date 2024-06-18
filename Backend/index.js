import express from "express";
import connectToDB from "./DB/config.js";
import createLocation from "./controllers/AddLocation.js";
import getAllLocations from "./controllers/getAllLocation.js";
import getCrops from "./controllers/getCrops.js";
const app = express();

app.use(express.json());
const port = 3000;

app.post("/", createLocation);
app.get("/", getAllLocations);
app.post("/crop", getCrops);

app.listen(port, () => {
  connectToDB();
  console.log(`Example app listening on port ${port}`);
});
