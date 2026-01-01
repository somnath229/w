import styles from "./Styles";
export default function Celebration() {
  return (
    <section style={styles.section}>
      <h1 style={styles.heading}>Order of Events</h1>
      <h5 style={styles.label}>SATURDAY, OCTOBER 25TH</h5>

      <div style={styles.infoCard}>
        <h4 style={styles.label}>Wedding ⛪</h4>
        <p>Wednesday, September 24th, 2025</p>
        <p>Ceremony: 4:00 PM</p>
        <p>Reception: 6:00 PM</p>
      </div>

      <div style={styles.infoCard}>
        <h4 style={styles.label}>Drinks 🍸</h4>
        <p>The Glass House Estate</p>
        <p>123 Coastal Drive, Monterey, CA</p>
      </div>

      <div style={styles.infoCard}>
        <h4 style={styles.label}>Resception 🍽️</h4>
        <p>Black Tie Optional</p>
        <small>Formal attire encouraged.</small>
      </div>
    </section>
  );
}
