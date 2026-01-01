import sa from "../assets/sa.jpeg"
export default function Gallery() {
  return (
    <div style={styles.hero}>
      {/* Gradient overlay over image */}
      <div style={styles.overlay} />

      {/* Foreground card */}
      <div style={styles.card}>
        <p style={styles.subtitle}>The Wedding of</p>
        <h1 style={styles.names}>
          Alex <span style={styles.amp}>&</span> Jordan
        </h1>
        <div style={styles.divider} />
        <p style={styles.date}>OCTOBER 15, 2024</p>
        <p style={styles.location}>Napa Valley, California</p>
      </div>
    </div>
  );
}

/* ---------- STYLES ---------- */
const styles = {
  hero: {
    position: "relative",
    height: "100vh",
    width: "75%",
    margin: "auto",
    borderRadius: "1rem",
    backgroundImage: `url(${sa})`,
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat:"no-repeat",
    display: "flex",
    justifyContent: "center",
    alignItems: "end",
    fontFamily: "Georgia, serif",
  },

  overlay: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(to bottom, rgba(0,0,0,0.40), rgba(0,0,0,0.80))",
  },

  card: {
    position: "relative",
    zIndex: 2,
    width: "50%",
    padding: "2rem 2rem",
    borderRadius: "2rem 2rem 0 0",
    // marginBottom:"2rem",

    /* bottle-black gradient */
    background:
      "linear-gradient(135deg, rgba(25,25,25,0.85), rgba(10,10,10,0.9))",

    backdropFilter: "blur(8px)",
    WebkitBackdropFilter: "blur(8px)",

    textAlign: "center",
    color: "#f5f5f5",
    boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
  },

  subtitle: {
    fontStyle: "italic",
    fontSize: 14,
    color: "#d18b9c",
    marginBottom: 6,
  },

  names: {
    fontSize: 32,
    margin: "6px 0",
    letterSpacing: 1,
  },

  amp: {
    color: "#d18b9c",
    fontWeight: "normal",
  },

  divider: {
    width: 50,
    height: 1,
    background: "rgba(255,255,255,0.3)",
    margin: "14px auto",
  },

  date: {
    fontSize: 14,
    letterSpacing: 2,
    marginBottom: 6,
  },

  location: {
    fontSize: 13,
    opacity: 0.8,
    fontStyle: "italic",
  },
};
