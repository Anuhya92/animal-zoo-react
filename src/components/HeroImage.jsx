import styles from './HeroImage.module.css';

function HeroImage() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}>
        <h1>Welcome to Animal Explorer</h1>
        <p>Discover amazing animals from around the world</p>
      </div>
    </section>
  );
}

export default HeroImage;
