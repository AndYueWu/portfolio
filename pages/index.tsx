// pages/index.tsx
import { useState } from "react";
import Hero from "@/components/Hero";
import styles from "@/components/utils/header.module.scss";

type SectionKey = "about" | "publications" | "news" | "contact";

export default function HomePage() {
  const [openSection, setOpenSection] = useState<SectionKey | null>(null);

  const toggleSection = (section: SectionKey) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  return (
    <div className={styles.mainContainer}>
      <Hero />

      <section className={styles.mainSection}>
        <div className={styles.stackBlocks}>
          <div className={`${styles.accordionItem} ${styles.aboutItem}`}>
            <button
              className={`${styles.titleBlock} ${
                openSection === "about" ? styles.titleBlockOpen : ""
              }`}
              onClick={() => toggleSection("about")}
            >
              <span className={styles.titleText}>About Me</span>
            </button>

            <div
              className={`${styles.contentOuter} ${
                openSection === "about" ? styles.contentOuterOpen : ""
              }`}
            >
              <div className={styles.contentInner}>
              <div className={styles.blockContent}>
              <div className={styles.aboutCard}>

              <img
                src="/images/profile.jpg"
                alt="Yue Wu"
                className={styles.profileImg}
              />

<div className={styles.aboutIntro}>
  <p>
    I am a PhD student at the CityUHK Architecture Laboratory for
    Arithmetic and Security (CALAS), supervised by Prof. Ray C. C. Cheung.
  </p>

  <p>
    My research focuses on efficient machine learning. In particular, I
    aim to become an expert in hardware–software co-design by integrating
    software optimization and hardware acceleration to bring
    energy-efficient intelligence to organizations, families, and everyday
    devices.
  </p>

  <div className={styles.researchChips}>
    <span>RISC-V</span>
    <span>Digital Design</span>
    <span>Machine Learning</span>
    <span>Hardware Acceleration</span>
    <span>HW/SW Co-design</span>
  </div>
</div>

</div>

</div>
              </div>
            </div>
          </div>

          <div className={`${styles.accordionItem} ${styles.publicationsItem}`}>
  <button
    className={`${styles.titleBlock} ${
      openSection === "publications" ? styles.titleBlockOpen : ""
    }`}
    onClick={() => toggleSection("publications")}
  >
    <span className={styles.titleText}>Publications</span>
  </button>

  <div
    className={`${styles.contentOuter} ${
      openSection === "publications" ? styles.contentOuterOpen : ""
    }`}
  >
    <div className={styles.contentInner}>
      <div className={styles.blockContent}>

        <div className={styles.pubGrid}>
          <article className={styles.pubCard}>
            <div className={styles.pubMeta}>2024</div>
            <h3 className={styles.pubCardTitle}>
              Evolutionary Game Theoretic Approach with Deep Learning for Health
              Decision-Making in Critical Environments
            </h3>
            <p className={styles.pubAuthors}>
              <strong>Yue Wu</strong>, Beiyi Chen, Helen Cai, Daojun Wang, Qiong
              Yuan
            </p>
            <p className={styles.pubVenue}>
              <em>Annals of Operations Research</em>
            </p>
            <a
              className={styles.pubLink}
              href="https://doi.org/10.1007/s10479-024-06353-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              DOI
            </a>
          </article>

          <article className={styles.pubCard}>
            <div className={styles.pubMeta}>2023</div>
            <h3 className={styles.pubCardTitle}>
              Economic currents and land use: Coastal change during the
              construction of the eco-island carbon neutral demonstration zone
              in Chongming Island
            </h3>
            <p className={styles.pubAuthors}>
              Xu, H., Wang, C., <strong>Wu, Y.</strong>, &amp; Hu, X.
            </p>
            <p className={styles.pubVenue}>
              <em>Ecological Indicators</em>, 156, 111127
            </p>
            <a
              className={styles.pubLink}
              href="https://doi.org/10.1016/j.ecolind.2023.111127"
              target="_blank"
              rel="noopener noreferrer"
            >
              DOI
            </a>
          </article>

          <article className={styles.pubCard}>
            <div className={styles.pubMeta}>2023</div>
            <h3 className={styles.pubCardTitle}>
              Healthcare and Fitness Services: A Comprehensive Assessment of
              Blockchain, IoT, and Edge Computing in Smart Cities
            </h3>
            <p className={styles.pubAuthors}>
              Liu, Y. Y., Zhang, Y., <strong>Wu, Y.</strong>, &amp; Feng, M.
            </p>
            <p className={styles.pubVenue}>
              <em>Journal of Grid Computing</em>, 21(4), 82
            </p>
            <a
              className={styles.pubLink}
              href="https://doi.org/10.1007/s10723-023-09712-8"
              target="_blank"
              rel="noopener noreferrer"
            >
              DOI
            </a>
          </article>

          <article className={styles.pubCard}>
            <div className={styles.pubMeta}>2022</div>
            <h3 className={styles.pubCardTitle}>
              Applying Spatial Techniques in Understanding Evolution and
              Accessibility of Cultural Facilities based on Multi-Source Data: A
              Case Study in Xiamen, China
            </h3>
            <p className={styles.pubAuthors}>
              Liang, L., <strong>Wu, Y.</strong>, &amp; Chu, J.
            </p>
            <p className={styles.pubVenue}>
              <em>Journal of Engineering Research</em>
            </p>
            <a
              className={styles.pubLink}
              href="https://doi.org/10.36909/jer.ICCSCT.19491"
              target="_blank"
              rel="noopener noreferrer"
            >
              DOI
            </a>
          </article>
        </div>
      </div>
    </div>
  </div>
</div>



          <div className={`${styles.accordionItem} ${styles.newsItem}`}>
            <button
              className={`${styles.titleBlock} ${
                openSection === "news" ? styles.titleBlockOpen : ""
              }`}
              onClick={() => toggleSection("news")}
            >
              <span className={styles.titleText}>News</span>
            </button>

            <div
              className={`${styles.contentOuter} ${
                openSection === "news" ? styles.contentOuterOpen : ""
              }`}
            >
              <div className={styles.contentInner}>
                <div className={styles.blockContent}>
                  <ul>
                    <li>Mar 2026 — Personal website launched.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.accordionItem} ${styles.contactItem}`}>
            <button
              className={`${styles.titleBlock} ${
                openSection === "contact" ? styles.titleBlockOpen : ""
              }`}
              onClick={() => toggleSection("contact")}
            >
              <span className={styles.titleText}>Contact</span>
            </button>

            <div
              className={`${styles.contentOuter} ${
                openSection === "contact" ? styles.contentOuterOpen : ""
              }`}
            >
              <div className={styles.contentInner}>
                <div className={styles.blockContent}>
                  <p>Email: Andyyuewu@outlook.com</p>
                  <p>GitHub: https://github.com/AndYueWu</p>
                  <p>LinkedIn: https://www.linkedin.com/in/yue-wu-8713a2279/</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx global>{`
        :root {
          --bg: #deaaaa;
          --ink: #0b1020;
          --white: #ffffff;
          --sky: #2f9db9;
          --pool: #1f8aa4;
          --coral: #d4573b;
          --sun: #f1c84a;
          --glass: #0b3d4a;
          --paper: #f2f2f2;
        }

        body {
          margin: 0;
          background-color: var(--bg);
          overflow-x: hidden;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}