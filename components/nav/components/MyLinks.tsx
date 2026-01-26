import styles from "./headinglinks.module.scss";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillInstagram,
  AiFillYoutube,
  AiFillSkype
} from "react-icons/ai";
import { SiGooglescholar } from "react-icons/si"
import { SiBilibili } from "react-icons/si";

import Link from "next/link";
import { motion } from "framer-motion";

export const MyLinks = () => {
  return (
    <div className={styles.links}>
      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.0 }}
      >
        <Link href="https://www.linkedin.com/in/yue-wu-8713a2279/" target="_blank" rel="nofollow">
          <AiFillLinkedin size="2.4rem" />
        </Link>
      </motion.span>
      
      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Link href="https://scholar.google.com/citations?hl=zh-CN&user=ALARddEAAAAJ" target="_blank" rel="nofollow">
          <SiGooglescholar size="2.4rem" />
        </Link>
      </motion.span>

      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Link href="https://github.com/AndYueWu" target="_blank" rel="nofollow">
          <AiFillGithub size="2.4rem" />
        </Link>
      </motion.span>

      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Link href="https://space.bilibili.com/3546864041330969?spm_id_from=333.1007.0.0" target="_blank" rel="nofollow">
          <SiBilibili  size="2.4rem" />
        </Link>
      </motion.span>

      {/* <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Link href="https://www.youtube.com/@aluckyfinsenpai2622" target="_blank" rel="nofollow">
          <AiFillYoutube size="2.4rem" />
        </Link>
      </motion.span> */}
    </div>
  );
};
