/* ---------------- STYLES ---------------- */

const styles = {
  app: {
    background: "#0e0e0e",
    color: "#eee",
    fontFamily: "Georgia, serif",
  },
  hero: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100vh",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1523438885200-e635ba2c371e')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    transition: "transform 1.2s cubic-bezier(0.77, 0, 0.175, 1)",
    zIndex: 10,
  },

  heroOverlay: {
    height: "100%",
    background: "rgba(0,0,0,0.45)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: 20,
  },

  logo: {
    position: "absolute",
    top: 20,
    left: 20,
    fontStyle: "italic",
    fontSize: 24,
  },

  save: {
    letterSpacing: 4,
    fontSize: 12,
    opacity: 0.8,
  },

  names: {
    fontSize: 42,
    margin: "10px 0",
  },

  date: {
    opacity: 0.85,
  },

  location: {
    opacity: 0.7,
    marginBottom: 20,
  },

  rsvpBtn: {
    padding: "12px 26px",
    borderRadius: 30,
    border: "none",
    background: "#000",
    color: "#fff",
    letterSpacing: 2,
  },

  arrow: {
    position: "absolute",
    bottom: 30,
    fontSize: "6rem",
    cursor: "pointer",
    transition: "opacity 0.4s",
  },

  header: {
    padding: 20,
  },

  small: {
    letterSpacing: 4,
    fontSize: 12,
    opacity: 0.7,
  },

  section: {
    padding: "60px 20px",
    textAlign: "center",
  },

  heading: {
    fontSize: "3rem",
    marginBottom: 0,
  },

  paragraph: {
    fontSize: 16,
    lineHeight: 1.8,
    opacity: 0.85,
  },

  infoCard: {
    background: "#161616",
    padding: 20,
    margin: "15px auto",
    maxWidth: 320,
    borderRadius: 12,
  },

  label: {
    fontSize:"1rem",
    letterSpacing: 2,
    opacity: 0.6,
  },

  card: {
    background: "#141414",
    padding: 20,
    margin: "20px auto",
    borderRadius: 12,
    maxWidth: 320,
  },

  cardTitle: {
    letterSpacing: 2,
    fontSize: 12,
    opacity: 0.6,
    marginBottom: 10,
  },

  galleryImg: {
    width: "50%",
    borderRadius: 14,
  },

  input: {
    width: "100%",
    maxWidth: 320,
    padding: 12,
    margin: "10px auto",
    background: "#111",
    border: "1px solid #333",
    color: "#fff",
    borderRadius: 8,
    display: "block",
  },

  primaryBtn: {
    padding: "12px 26px",
    borderRadius: 30,
    border: "none",
    background: "#000",
    color: "#fff",
    marginTop: 15,
    letterSpacing: 2,
  },

  footer: {
    padding: 30,
    textAlign: "center",
    background: "#0a0a0a",
  },

  footerText: {
    opacity: 0.6,
  },

  links: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: 15,
    opacity: 0.7,
    fontSize: 14,
  },
};

export default styles;
