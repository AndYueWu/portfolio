import { useMemo, useState } from "react";
import { SectionHeader } from "@/components/utils/SectionHeader";
import { Reveal } from "@/components/utils/Reveal";
import styles from "./news.module.scss";

type NewsItem = {
  date: string; // "YYYY" / "YYYY-MM" / "YYYY-MM-DD"
  event: string;
};

const NEWS: NewsItem[] = [
  { date: "2026-01", event: "Launched my personal website (andyyuewu.com)." },
  // add more later...
];

export const News = () => {
  const [expanded, setExpanded] = useState(false);

  const sorted = useMemo(() => {
    return [...NEWS].sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
  }, []);

  const visible = expanded ? sorted : sorted.slice(0, 3);
  const canToggle = sorted.length > 3;

  return (
    <section className="section-wrapper" id="news">
      <SectionHeader title="News" dir="l" />

      <div className={styles.timeline}>
        {visible.map((item, idx) => (
          <Reveal key={`${item.date}-${idx}`}>
            <div className={styles.item}>
              <div className={styles.date}>{item.date}</div>

              <div className={styles.axis} aria-hidden="true">
                <span className={styles.dot} />
                {/* 让最后一个不画到底 */}
                {idx !== visible.length - 1 && <span className={styles.line} />}
              </div>

              <div className={styles.event}>{item.event}</div>
            </div>
          </Reveal>
        ))}

        {canToggle && (
          <div className={styles.actions}>
            <button
              type="button"
              className={styles.toggle}
              onClick={() => setExpanded((v) => !v)}
            >
              {expanded ? "Show less" : `Show more (${sorted.length - 3})`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};