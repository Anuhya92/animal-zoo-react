import express from "express";
import animals from "./data/animals.js";

const app = express();

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

export default app;
