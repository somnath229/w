import styles from "./Styles";

export default function Btn({ setOpen, open }) {
  return (
    <div>
      <div
        style={{
          ...styles.hero,
          transform: open ? "translateY(-100vh)" : "translateY(0)",
        }}>
        <style>
          {`
          @keyframes floatArrow {
            0% {
              transform: translateY(0px);
              opacity: 0.6;
            }
            50% {
              transform: translateY(12px);
              opacity: 1;
            }
            100% {
              transform: translateY(0px);
              opacity: 0.6;
            }
          }
        `}
        </style>
        <div style={styles.heroOverlay}>
          {/* <div style={styles.logo}>A & J</div> */}

          <p style={styles.save}>SAVE THE DATE</p>
          <h1 style={styles.names}>Alex & Jordan</h1>
          <p style={styles.date}>September 24th, 2025</p>
          <p style={styles.location}>Monterey, California</p>

          <button style={styles.rsvpBtn}>RSVP ONLINE</button>

          {/* DOWN ARROW */}
          <div
            style={{
              ...styles.arrow,
              opacity: open ? 0 : 1,
              animation: "floatArrow 1.6s ease-in-out infinite",
            }}
            onClick={() => setOpen(true)}>
            ↓
          </div>
        </div>
      </div>
    </div>
  );
}
