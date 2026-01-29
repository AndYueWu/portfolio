import React from "react";
import { SideBar } from "../nav/SideBar";
import { Hero } from "./hero/Hero";
import styles from "./home.module.scss";
import { Heading } from "../nav/Heading";
import { Experience } from "./experience/Experience";
import { Projects } from "./projects/Projects";
import { Contact } from "./contact/Contact";
import { News } from "./news/News";

export const Home = () => {
  return (
    <>
      <div className={styles.home}>
        <SideBar />
        <main id="main">
          <Heading />
          <Hero />
          <News/>
          <Experience />
          <Projects />
          <Contact />
          <div
            style={{
              height: "200px",
              background:
                "linear-gradient(180deg, var(--background), var(--background-dark))",
            }}
          />
        </main>
      </div>
    </>
  );
};
