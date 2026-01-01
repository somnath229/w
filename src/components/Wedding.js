import React, { useState } from "react";
import styles from "./Styles";
import Btn from "./Btn";
import Header from "./Header";
import Hero from "./Hero";

export default function Wedding() {
  const [open, setOpen] = useState(false);
  return (
    <div style={styles.app}>
      <Header />
      <Btn setOpen={setOpen} open={open} />
      <Hero open={open} />
    </div>
  );
}
