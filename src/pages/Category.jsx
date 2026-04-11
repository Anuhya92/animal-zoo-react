import { useParams } from "react-router-dom";
import AnimalCard from "../components/AnimalCard";
import { useState, useEffect } from "react";

function Category() {
  const [animalsOfType, setAnimalsOfType] = useState([]);
  const [loading, setLoading] = useState(false);
  const { type } = useParams();

  useEffect(() => {
    const fetchAnimalsOfType = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `http://localhost:3000/api/category/${type}`,
        );
        const data = await response.json();
        setAnimalsOfType(data);
      } catch (error) {
        console.error("Error fetching animals of type:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchAnimalsOfType();
  }, [type]);

  return (
    <div>
      <h2>{type.toUpperCase()} ANIMALS</h2>

      {loading ? (
        <p>Loading animals...</p>
      ) : animalsOfType.length === 0 ? (
        <p>No animals found in this category</p>
      ) : (
        <div className="card-container">
          {animalsOfType.map((animal) => (
            <AnimalCard key={animal.id} animal={animal} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Category;
