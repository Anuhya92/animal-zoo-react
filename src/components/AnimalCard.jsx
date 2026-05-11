import { Link } from "react-router-dom";
import styles from "./AnimalCard.module.css";

function AnimalCard({ animal }) {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <img src={animal.image} alt={animal.name} />
        <h3>{animal.name}</h3>
        <p className={styles.type}>{animal.type}</p>

        <Link to={`/animals/${animal.id}`} className={styles.button}>
          View Details
        </Link>
      </div>
    </div>
  );
}

export default AnimalCard;
