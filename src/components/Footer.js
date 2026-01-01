import styles from "./Styles";

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <h3 style={styles.footerText}>
        Alex <sub>&</sub> Jordan
      </h3>

      <div style={styles.links}>
        <span>Instagram</span>
        <span>Location</span>
        <span>Facebook</span>
      </div>
    </footer>
  );
}
