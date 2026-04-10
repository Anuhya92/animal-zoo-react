import { useParams } from "react-router-dom";
import data from "../data/animals.json";
import AnimalCard from "../components/AnimalCard";

function Category() {
  const { type } = useParams();

  const filtered = data.filter(
    (a) => a.type.toLowerCase() === type.toLowerCase(),
  );

  return (
    <div>
      <h2>{type.toUpperCase()} ANIMALS</h2>

      {filtered.length === 0 ? (
        <p>No animals found</p>
      ) : (
        <div className="card-container">
          {filtered.map((animal) => (
            <AnimalCard key={animal.id} animal={animal} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Category;
