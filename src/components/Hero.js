import React, { useEffect } from "react";
import Countdown from "./Countdown";
import styles from "./Styles";
import Celebration from "./Celebration";
import Card from "./MapCard";
import Gallery from "./Gallery";
import Footer from "./Footer";

export default function Hero({ open }) {
  useEffect(() => {
    if (!open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      window.scrollTo({ top: 0, behavior: "instant" });
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <div
      style={{
        ...styles.content,
        opacity: open ? 1 : 0,
        transform: open ? "scale(1)" : "scale(0)",
        pointerEvents: open ? "auto" : "none",
        overflow: open ? "visible" : "hidden",
      }}>

      <Gallery />
      <Countdown/>
      <Celebration />
      <Card title="RSVP">
        Please reply
        <br />
        As soon as possible.
      </Card>

      <Footer />
    </div>
  );
}
