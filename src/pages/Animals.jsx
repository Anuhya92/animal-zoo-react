import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AnimalCard from "../components/AnimalCard";

const Animals = () => {
  const [animals, setAnimals] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchAnimals = async () => {
      setLoading(true);
      try {
        const response = await fetch("http://localhost:3000/api/animals");
        const data = await response.json();
        setAnimals(data);
      } catch (error) {
        console.error("Error fetching animals:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchAnimals();
  }, []);

  // get unique types dynamically
  const types = [...new Set(animals.map((a) => a.type.toLowerCase()))];

  return (
    <div className="animals-container">
      <h2>Animals</h2>

      {/* Category Navigation */}
      {/* <div style={{ marginBottom: "20px" }}>
        <Link to="/animals/category/mammal">Mammals</Link> |{" "}
        <Link to="/animals/category/bird">Birds</Link> |{" "}
        <Link to="/animals/category/fish">Fish</Link> |{" "}
        <Link to="/animals/category/reptile">Reptile</Link>
      </div> */}
      {/* ✅ Dynamic Category Navigation */}
      <div style={{ marginBottom: "20px", textDecoration: "underline" }}>
        {types.map((type) => (
          <Link
            key={type}
            to={`/animals/category/${type}`}
            style={{ marginRight: "10px" }}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </Link>
        ))}
      </div>

      {/* Loading State */}
      {loading ? (
        <p>Loading animals...</p>
      ) : (
        <div className="card-container">
          {animals.map((animal) => (
            <AnimalCard key={animal.id} animal={animal} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Animals;
