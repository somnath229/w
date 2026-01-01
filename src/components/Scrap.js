import React, { useState } from "react";

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <div style={styles.app}>
      {/* HERO */}

      {/* REVEALED CONTENT */}
      <div
        style={{
          ...styles.content,
          opacity: open ? 1 : 0,
          transform: open ? "scale(1)" : "scale(0)",
          pointerEvents: open ? "auto" : "none",
        }}>
        <Section title="Our Love Story">
          Alex and Jordan believe that the best chapters of life are written by
          hand. What began as a chance encounter soon revealed a profound truth
          — they were always meant to be.
        </Section>

        <Section title="The Celebration">
          <Card title="WHEN">
            Wednesday, September 24th, 2025
            <br />
            Ceremony: 4:00 PM
            <br />
            Reception: 6:00 PM
          </Card>

          <Card title="WHERE">
            The Glass House Estate
            <br />
            Monterey, California
          </Card>

          <Card title="DRESS CODE">Black Tie Optional</Card>
        </Section>

        <Section title="The Moments">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
            style={styles.image}
          />
        </Section>

        <footer style={styles.footer}>
          Alex & Jordan
          <br />
          <small>Made with love</small>
        </footer>
      </div>
    </div>
  );
}

/* ---------------- SMALL COMPONENTS ---------------- */

function Section({ title, children }) {
  return (
    <div style={styles.section}>
      <h2 style={styles.heading}>{title}</h2>
      <p style={styles.text}>{children}</p>
    </div>
  );
}

function Card({ title, children }) {
  return (
    <div style={styles.card}>
      <div style={styles.cardTitle}>{title}</div>
      <div>{children}</div>
    </div>
  );
}

/* ---------------- STYLES ---------------- */

const styles = {
  app: {
    fontFamily: "Georgia, serif",
    background: "#0c0c0c",
    color: "#eee",
    overflowX: "hidden",
  },

  content: {
    position: "relative",
    zIndex: "1",
    padding: "60px 20px",
    transition: "all 1s ease",
  },

  section: {
    maxWidth: 700,
    margin: "60px auto",
    textAlign: "center",
  },

  heading: {
    fontSize: 32,
    marginBottom: 20,
  },

  text: {
    lineHeight: 1.8,
    opacity: 0.85,
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

  image: {
    width: "100%",
    borderRadius: 14,
  },

  footer: {
    textAlign: "center",
    padding: 40,
    opacity: 0.6,
  },
};


// 
function Timeline() {
  return (
    <div style={styless.timeline}>
      <Event
        icon="⛪"
        title="The Ceremony"
        time="3:00 PM"
        place="St. Mary's Chapel"
      />
      <Event
        icon="🍸"
        title="Cocktail Hour"
        time="5:00 PM"
        place="The Grand Garden"
      />
      <Event
        icon="🍽️"
        title="Reception"
        time="6:30 PM"
        place="The Grand Ballroom"
      />
    </div>
  );
}

function Event({ icon, title, time, place }) {
  return (
    <div style={styless.event}>
      <div style={styless.icon}>{icon}</div>
      <h4 style={styless.eventTitle}>{title}</h4>
      <p style={styless.eventMeta}>{time}</p>
      <p style={styless.eventMeta}>{place}</p>
      <span style={styless.mapLink}>MAP & DIRECTIONS</span>
    </div>
  );
}

/* ---------- STYLESs ---------- */

const styless = {
  hero: {
    minHeight: "100vh",
    position: "relative",
    color: "#eee",
    fontFamily: "Georgia, serif",
  },

  bg: {
    position: "absolute",
    inset: 0,
    backgroundImage:
      "url('https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    filter: "brightness(0.5)",
  },

  overlay: {
    position: "relative",
    padding: "80px 16px",
    maxWidth: 420,
    margin: "0 auto",
  },

  card: {
    background: "rgba(20,20,20,0.8)",
    borderRadius: 18,
    padding: 20,
    textAlign: "center",
    marginBottom: 24,
  },

  subtitle: {
    fontStyle: "italic",
    opacity: 0.8,
  },

  names: {
    fontSize: 28,
    margin: "6px 0",
  },

  meta: {
    fontSize: 14,
    opacity: 0.8,
  },

  timeline: {
    display: "flex",
    flexDirection: "column",
    gap: 30,
  },

  event: {
    background: "#151515",
    borderRadius: 16,
    padding: 20,
  },

  icon: {
    fontSize: 22,
    marginBottom: 8,
  },

  eventTitle: {
    margin: 0,
  },

  eventMeta: {
    fontSize: 13,
    opacity: 0.7,
  },

  mapLink: {
    fontSize: 11,
    letterSpacing: 1,
    opacity: 0.8,
  },

  mapCard: {
    height: 160,
    background: "#222",
    borderRadius: 16,
    position: "relative",
    marginBottom: 12,
  },

  mapBtn: {
    position: "absolute",
    inset: 0,
    margin: "auto",
    height: 40,
    padding: "0 20px",
    borderRadius: 20,
    border: "none",
    background: "#000",
    color: "#fff",
  },

  venue: {
    fontSize: 13,
    opacity: 0.75,
  },

  hotelCard: {
    background: "#1a1a1a",
    borderRadius: 16,
    padding: 20,
  },

  linkBtn: {
    background: "none",
    border: "none",
    color: "#f4a6b8",
    marginTop: 8,
  },
};
