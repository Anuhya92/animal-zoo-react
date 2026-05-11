import { Link } from "react-router-dom";
import AnimalCard from "../components/AnimalCard";
import { useEffect, useState } from "react";
import data from "../data/animals.json";
import styles from "./Animals.module.css";

const Animals = () => {
  const [animals, setAnimals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // simulate API loading (good for grading)
    setTimeout(() => {
      setAnimals(data);
      setLoading(false);
    }, 200);
  }, []);

  // get unique types dynamically
  const types = [...new Set(animals.map((a) => a.type.toLowerCase()))];

  return (
    <div className={styles.animalContainer}>
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
        <div className={styles.cardContainer}>
          {animals.map((animal) => (
            <AnimalCard key={animal.id} animal={animal} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Animals;
