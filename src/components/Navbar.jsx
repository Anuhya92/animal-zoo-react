import { Link, NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  const navClassName = ({ isActive }) =>
    isActive ? styles.activeLink : styles.navLink;

  return (
    <nav className={styles.navbar}>
      <h1 className={styles.logo}>
        <Link to="/">🐾 Animal Explorer</Link>
      </h1>

      <div className={styles.navlinks}>
        <NavLink to="/" className={navClassName}>
          Home
        </NavLink>
        <NavLink to="/animals" className={navClassName}>
          Animals
        </NavLink>
        <NavLink to="/about" className={navClassName}>
          About
        </NavLink>
        <NavLink to="/contact" className={navClassName}>
          Contact
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
