import { useParams } from "react-router-dom";
import data from "../data/animals.json";
import styles from "./AnimalDetails.module.css";

function AnimalDetails() {
  const { id } = useParams();

  const animal = data.find((a) => a.id === Number(id));

  // ✅ safety check (VERY IMPORTANT)
  if (!animal) {
    return <h2>Animal not found</h2>;
  }

  return (
    <div className={styles.detailsContainer}>
      <div className={styles.detailsCard}>
        <img src={animal.image} alt={animal.name} />

        <div className={styles.detailsContent}>
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
