import styles from "./About.module.css";
function About() {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.aboutHero}>
        <h1>About Animal Explorer 🐾</h1>
        <p>Discover, Learn, and Explore the Animal Kingdom</p>
      </div>

      <div className={styles.aboutContent}>
        <div className={styles.aboutText}>
          <h2>Our Mission</h2>
          <p>
            Animal Explorer is designed to help users learn about different
            species from around the world. Our goal is to provide an engaging
            and educational experience through interactive content.
          </p>

          <h2>What We Offer</h2>
          <ul>
            <li>Explore animals by categories</li>
            <li>View detailed information</li>
            <li>Responsive and modern UI</li>
          </ul>
        </div>

        <div className={styles.aboutImage}>
          <img
            src="https://images.unsplash.com/photo-1584706368162-73c7dab84d68?w=1200&auto=format&fit=crop&q=60"
            alt="zoo"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
