// components/Hero.tsx
import DotMatrixTitle from "@/components/DotMatrixTitle";
import styles from "@/components/utils/header.module.scss";

export default function Hero() {
  return (
    // 👇 注意：style 是 section 的一个属性，必须写在 > 之前
    <section
      className={`${styles.heroSection} ${styles.vhsEffect}`}
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100%',
        position: 'sticky',
        top: 0,
        zIndex: 1,
        backgroundColor: 'var(--bg)', // 这里确保使用了背景色
        overflow: 'hidden'
      }}
    >
      {/* --- 里面放你的组件 --- */}
      
      <div className={styles.dotTitleWrap}>
        <DotMatrixTitle
          text1={"Andy"}
          text2={"Yue Wu"}
          gap={3}
          fontSize={110}
          smallR={0.6}
          bigR={1.8}
          pad={1}
          letterSpacing={1.2}
          colorAndy="var(--coral)"
          colorYueWu="var(--sky)"
          colorBg="var(--ink)"
          hoverLift={10}
          hoverRadius={10}
        />
      </div>

      <div className={styles.bioInfoBox}>
        <span className={styles.bracket}>[</span>
        <p className={styles.bioText}>EE PhD student @ CityU HK</p>
        <span className={styles.bracket}>]</span>
        <span className={styles.terminalCursor}></span>
      </div>

      <div className={styles.minimalArrow}>
        <span>\</span><span>/</span>
      </div>

    </section>
  );
}