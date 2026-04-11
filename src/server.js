import express from "express";
import cors from "cors";
import animals from "./data/animals.js";

const app = express();
app.use(cors());
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/api/animals", (req, res) => {
  const animalsList = animals.map((animal) => ({
    id: animal.id,
    image: animal.image,
    name: animal.name,
    type: animal.type,
  }));
  res.json(animalsList);
});

app.get("/api/animals/:id", (req, res) => {
  const { id } = req.params;
  const animal = animals.find((a) => a.id === parseInt(id));
  if (animal) {
    res.json(animal);
  } else {
    res.status(404).json({ error: "Animal not found" });
  }
});

app.get("/api/category/:type", (req, res) => {
  const { type } = req.params;
  const filteredAnimalsOfType = animals.filter(
    (a) => a.type.toLowerCase() === type.toLowerCase(),
  );

  res.json(filteredAnimalsOfType);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
