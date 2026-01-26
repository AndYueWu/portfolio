import styles from "./stats.module.scss";
import { AiFillCode, AiFillSmile } from "react-icons/ai";
import { Reveal } from "@/components/utils/Reveal";

export const Stats = () => {
  return (
    <div className={styles.stats}>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillCode size="2.4rem" color="var(--brand)" />
            <span>Research Interests</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="box">Efficient AI</span>
            <span className="box">RISC-V</span>
            <span className="box">Inference Optimization</span>
            <span className="box">Optimization</span>
          </div>

          <h4>
            <AiFillCode size="2.4rem" color="var(--brand)" />
            <span>Hobbits</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="box">Mixed martial art</span>
            <span className="box">Rock music</span>
            <span className="box">Diving</span>
          </div>
        </div>

        
      </Reveal>
    </div>
  );
};
