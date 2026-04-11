import animals from "../data/animals.js";

export default function handler(req, res) {
  const { id } = req.query;
  if (req.method === "GET") {
    try {
      const animal = animals.find((a) => a.id === parseInt(id));
      if (animal) {
        res.json(animal);
      } else {
        res.status(404).json({ error: "Animal not found" });
      }
    } catch (error) {
      console.error("Error fetching animal:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
