import { Reveal } from "@/components/utils/Reveal";
import styles from "./experience.module.scss";

interface Props {
  title: string;
  time: string;
  location:string
  description: string;
}

export const ExperienceItem = ({
  title,
  time,
  location,
  description,
}: Props) => {
  return (
    <div className={styles.experience}>
      <div className={styles.heading}>
        <Reveal>
          <span className={styles.title}>{title}</span>
        </Reveal>
        <Reveal>
          <span>{time}</span>
        </Reveal>
      </div>

      <Reveal>
        <p className={styles.description}>{location}</p>
      </Reveal>


      <Reveal>
        <p className={styles.description}>{description}</p>
      </Reveal>
    </div>
  );
};
