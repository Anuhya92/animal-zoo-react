import styles from "./Contact.module.css";
function Contact() {
  return (
    
    <div className={styles.contactWrapper}>
      <div className={styles.contactBox}>
        <h2>Contact Us</h2>
        <p>Feel free to reach out</p>

        <form>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Message" rows="4" required></textarea>

          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
