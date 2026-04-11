import animals from "../data/animals.js";

export default function handler(req, res) {
  const { type } = req.query;
  if (req.method === "GET") {
    try {
      const filteredAnimalsOfType = animals.filter(
        (a) => a.type.toLowerCase() === type.toLowerCase(),
      );

      if (filteredAnimalsOfType.length === 0) {
        return res
          .status(404)
          .json({ error: "No animals found in this category" });
      }

      res.json(filteredAnimalsOfType);
    } catch (error) {
      console.error("Error fetching animals of type:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
