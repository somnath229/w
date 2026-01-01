import React, { useEffect, useState } from "react";

export default function Countdown() {
  const targetDate = new Date("2026-02-05T00:00:00"); // change year if needed

  const calculateTimeLeft = () => {
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0 };
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);

    return { days, hours, minutes };
  };

  const [time, setTime] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(calculateTimeLeft());
    }, 60000); // update every minute

    return () => clearInterval(timer);
  }, []);

  return (
    <div style={styles.countdown}>
      <TimeBox value={time.days} label="DAYS" />
      <TimeBox value={time.hours} label="HRS" />
      <TimeBox value={time.minutes} label="MINS" />
    </div>
  );
}

/* ---------- SMALL BOX ---------- */

function TimeBox({ value, label }) {
  return (
    <div style={styles.box}>
      <div style={styles.value}>{value}</div>
      <div style={styles.label}>{label}</div>
    </div>
  );
}

/* ---------- STYLES ---------- */

const styles = {
  countdown: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: 24,
    marginBottom: 40,
  },

  box: {
    textAlign: "center",
    minWidth: 70,
  },

  value: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#fff",
  },

  label: {
    fontSize: 11,
    letterSpacing: 2,
    opacity: 0.6,
  },
};
