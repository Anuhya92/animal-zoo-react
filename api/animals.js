import animals from "./data/animals.js";

export default function handler(req, res) {
  if (req.method === "GET") {
    try {
      const animalsList = animals.map((animal) => ({
        id: animal.id,
        image: animal.image,
        name: animal.name,
        type: animal.type,
      }));
      res.json(animalsList);
    } catch (error) {
      console.error("Error fetching animals:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
