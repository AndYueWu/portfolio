import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";
import { useEffect, useState } from "react";

const poppins = Poppins({ weight: ["100", "200", "400", "700", "900"] });

export default function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div id="root" className={poppins.className}>
      {/* 临时放右下角按钮：验证切换是否成功 */}
      <button
        type="button"
        onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
        style={{
          position: "fixed",
          right: 16,
          bottom: 16,
          zIndex: 9999,
          padding: "10px 12px",
          borderRadius: 0,
          border: "1px solid rgba(0,0,0,0.2)",
          background: "var(--bg-opaque)",
          color: "var(--text)",
          cursor: "pointer",
          fontWeight: 700,
          letterSpacing: "0.04em",
        }}
      >
        {theme === "dark" ? "Light" : "Dark"}
      </button>

      <Component {...pageProps} />
    </div>
  );
}