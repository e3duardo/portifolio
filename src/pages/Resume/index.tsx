import React from "react";
import ReactGA from "react-ga";

import styles from "./index.module.css";

import About from "./about";
import Education from "./education";
import Experiences from "./experiences";
import Contacts from "./contacts";
import Skills from "./skills";
import Languages from "./languages";
import Hobbies from "./hobbies";

function Resume() {
  if (process.env.NODE_ENV !== "development") {
    ReactGA.pageview("/");
  }

  return (
    <section className={styles.row}>
      <main className={styles.main}>
        <About />
        <Experiences />
        <Education />
      </main>
      <aside className={styles.aside}>
        <Skills />
        <Languages />
        <Hobbies />
        <Contacts className="contact" />
      </aside>
    </section>
  );
}

export default Resume;
