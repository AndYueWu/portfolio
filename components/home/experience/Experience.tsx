import { SectionHeader } from "@/components/utils/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Publication" dir="l" />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const experience = [
 
  {
    title: "Evolutionary Game Theoretic Approach with Deep Learning for Health Decision-Making in Critical Environments.",
    time: "2024",
    location: "Annals of Operations Research",
    description:
      "Yue Wu, Beiyi Chen, Helen Cai, Daojun Wang, Qiong Yuan .",
  },
  {
    title: "Economic currents and land use: Coastal change during the construction of the eco-island carbon neutral demonstration zone in Chongming Island.",
    time: "2023",
    location: "Ecological Indicators",
    description:
      "Xu, H., Wang, C., Wu, Y., & Hu, X.",
  },
  {
    title: "Healthcare and Fitness Services: A Comprehensive Assessment of Blockchain, IoT, and Edge Computing in Smart Cities. Journal of Grid Computing.",
    time: "2023",
    location: " Journal of Grid Computing",
    description:
      "Liu, Y. Y., Zhang, Y., Wu, Y., & Feng, M.",
  },

  {
    title: "Applying Spatial Techniques in Understanding Evolution and Accessibil- ity of Cultural Facilities based on Multi-Source Data: A Case Study in Xiamen, China",
    time: "2022",
    location: " Journal of Engineering Research",
    description:
      "Liang, L., Wu, Y., & Chu, J.",
  },
];
