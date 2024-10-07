import express from "express";
import api from "./api.js"; // Adjusted import
const app = express();

const PORT=process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello, world");
});

app.use("/api", api); // Update the route path

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
