import { Link } from "react-router-dom";

function AnimalCard({ animal }) {
  return (
    <div className="card">
      <div className="content">
        <img src={animal.image} alt={animal.name} />
        <h3>{animal.name}</h3>
        <p className="type">{animal.type}</p>

        <Link to={`/animals/${animal.id}`} className="button">
          View Details
        </Link>
      </div>
    </div>
  );
}

export default AnimalCard;
