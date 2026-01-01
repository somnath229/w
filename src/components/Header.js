export default function Header() {
  return (
    <div style={styles.nav}>
      <span style={styles.title}>
        A <sub>&</sub> J
      </span>
    </div>
  );
}

const styles = {
  nav: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "5rem",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    background: "rgba(20,20,20,0.6)",
    backdropFilter: "blur(6px)",
    WebkitBackdropFilter: "blur(6px)",

    color: "#fff",
    zIndex: 9999, // 🔥 ABOVE EVERYTHING
  },

  title: {
    fontSize: 28,
    opacity: 0.9,
  },
};
