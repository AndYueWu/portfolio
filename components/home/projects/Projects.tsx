import { SectionHeader } from "@/components/utils/SectionHeader";
import { Project } from "./Project";
import styles from "./projects.module.scss";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />

      <div className={styles.projects}>
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

const projects = [
  {
    title: "One Student One Chip (一生一芯)",
    imgSrc: "/project-imgs/YSYX.png",
    code: "#",
    projectLink: "https://ysyx.oscc.cc",
    tech: ["RISC-V"],
    description: " An hands-on program that guides learners to build a RISC-V CPU from scratch—from logic gates to a working processor.",
    modalContent: (
      <>
        <p>
          PParticipate as a student. You can find my learning records{" "}
          <a 
            className={styles.link}
            href="https://fa45epzd9c7.feishu.cn/base/Mbm4b3ZLlaLYYaslqTzcyRR9nAd?from=from_copylink"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            here
          </a>
        </p>
      </>
    ),
  },

];
