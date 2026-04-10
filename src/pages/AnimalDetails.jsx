import { useParams } from "react-router-dom";
import data from "../data/animals.json";

function AnimalDetails() {
  const { id } = useParams();

  const animal = data.find((a) => a.id === Number(id));

  
  if (!animal) {
    return <h2>Animal not found</h2>;
  }

  return (
    <div className="details-container">
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
    </div>
  );
}

export default AnimalDetails;
