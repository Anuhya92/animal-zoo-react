import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function AnimalDetails() {
  const [animal, setAnimal] = useState(null);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`http://localhost:3000/api/animals/${id}`);
        const data = await response.json();
        console.log("Fetched data:", data);
        setAnimal(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, id);

  if (!animal) {
    return <h2>Animal not found</h2>;
  }

  return (
    <div className="details-container">
      {loading ? (
        <p>Loading animals...</p>
      ) : (
        <div className="details-card">
          <img src={animal.image} alt={animal.name} />

          <div className="details-content">
            <h2>{animal.name}</h2>
            <p>
              <strong>Type:</strong> {animal.type}
            </p>
            <p>
              <strong>Description:</strong> {animal.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default AnimalDetails;
