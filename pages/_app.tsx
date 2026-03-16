import "@/styles/globals.css"; // 确保这一行在最上面
import type { AppProps } from "next/app";
import { Poppins } from "next/font/google"; // 👈 引入字体

// 👇 核心修复在这里：必须加入 subsets: ['latin']
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"], // 建议同时指定字重，防止未来报错
  variable: "--font-poppins", // 可选：设置 CSS 变量名
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    // 把字体类名加到主容器上
    <main className={poppins.className}>
      <Component {...pageProps} />
    </main>
  );
}