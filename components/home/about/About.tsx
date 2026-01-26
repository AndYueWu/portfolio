import { MyLinks } from "@/components/nav/components/MyLinks";
import { Reveal } from "@/components/utils/Reveal";
import { SectionHeader } from "@/components/utils/SectionHeader";
import styles from "./about.module.scss";
import { Stats } from "./Stats";
import { AiOutlineArrowRight } from "react-icons/ai";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className={styles.about}>
        <div>
        <Reveal>
          <p className={`${styles.aboutText} ${styles.highlightFirstLetter}`}>
            Hi! I&apos;m Yue WU (Andy). I&apos;m a PhD candidate at CityU Hong Kong. Before that, I earned an MSc in Applied Mathematics from Imperial College London and a BSc in Mathematics &amp; Statistics from Queen Mary University of London.
            <br/><br/>
             I want to be a bridge between the software and hardware: someone who understands both sides, can communicate across the boundary, and builds full-stack systems that are efficient, reliable, and genuinely useful to people.
          </p>
        </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
             My current focus are RISC-V architecture and inference optimization.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              I&apos;m also an ameture MMA figher and drummer.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              If you&apos;re interested in working together or have any questions, please don&apos;t hesitate to get in touch!
            </p>
          </Reveal>
          <Reveal>
            <div className={styles.links}>
              <div className={styles.linksText}>
                <span>My links</span>
                <AiOutlineArrowRight />
              </div>
              <MyLinks />
            </div>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
};
