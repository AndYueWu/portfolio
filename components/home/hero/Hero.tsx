import Image from "next/image";
import { motion } from "framer-motion";
import { StandardButton } from "@/components/buttons/StandardButton";
import { Reveal } from "@/components/utils/Reveal";
import { DotGrid } from "./DotGrid";
import { AiFillCode, AiFillSmile } from "react-icons/ai";
import styles from "./hero.module.scss";
import Profile from "@/public/jc.jpg";

export const Hero = () => {
  return (
    <section className={`section-wrapper ${styles.hero}`}>
      <div className={styles.heroGrid}> 
        <div className={styles.copyWrapper}>
          <Reveal>
            <h1 className={styles.title}>
            <span> Andy </span> Yue WU 
            </h1>
          </Reveal>
          <Reveal>
            <h2 className={styles.subTitle}>
              EE PhD Student in <br /> <span>City University of HongKong</span>
            </h2>
          </Reveal>
          <Reveal>
            <p className={styles.aboutCopy}>
            I am a PhD student at the CityUHK Architecture Laboratory for Arithmetic and Security (CALAS), supervised by Prof. Ray C. C. Cheung. <br /><br />
My research focuses on efficient machine learning. In particular, I aim to become an expert in hardware–software co-design by integrating software optimization and hardware acceleration to bring energy-efficient intelligence to organizations, families, and everyday devices.
            </p>
          </Reveal>

          
          <Reveal>
            <StandardButton
              onClick={() => document.getElementById("contact")?.scrollIntoView()}
            >
              Contact me
            </StandardButton>
          </Reveal>


          <Reveal>
            <div className={styles.riBlock}>
              <div className={styles.riTitle}>Research Interests</div>
              <div className={styles.riGrid}>
                <span className={styles.chip}>Efficient AI</span>
                <span className={styles.chip}>RISC-V</span>
                <span className={styles.chip}>Inference Optimization</span>
                <span className={styles.chip}>Hardware–Software Co-Design</span>
              </div>
            </div>
          </Reveal>
        </div>
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}>
          <Image
            className={styles.profile}
            src={Profile}
            priority
            alt="Yue Wu (Andy) — PhD student at CityUHK"
            width={250}
            height={250}
          />
        </motion.div>
      </div>
      <div className={styles.stripeGrid} aria-hidden="true">
        <span className={styles.stripe} />
        <span className={styles.stripe} />
        <span className={styles.stripe} />
        <span className={styles.stripe} />
        <span className={styles.stripe} />
      </div>
     {/* <DotGrid /> */}

     
    </section>

    
  );
};
