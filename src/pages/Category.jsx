import { useParams } from "react-router-dom";
import data from "../data/animals.json";
import AnimalCard from "../components/AnimalCard";
import styles from "./Category.module.css";

function Category() {
  const { type } = useParams();

  const filtered = data.filter(
    (a) => a.type.toLowerCase() === type.toLowerCase(),
  );

  return (
    <div className={styles.categoryContainer}>
      <h2>{type.toUpperCase()} ANIMALS</h2>

      {filtered.length === 0 ? (
        <p>No animals found</p>
      ) : (
        <div className={styles.cardContainer}>
          {filtered.map((animal) => (
            <AnimalCard key={animal.id} animal={animal} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Category;
