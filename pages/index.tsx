import Head from "next/head";
import { Home } from "@/components/home/Home";

export default function HomePage() {
  const title = "Yue Wu (Andy) | PhD Student @ CityUHK";
  const description =
    "PhD student at CityUHK (CALAS). Research: efficient ML, hardware–software co-design, RISC-V, inference optimization.";
  const url = "https://YOUR_DOMAIN.com/"; // 上线后换成你的域名或 vercel 链接
  const image = `${url}screenshot.png`;   // 如果你有 public/screenshot.png 就用这个

  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.png" />
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph (LinkedIn / Facebook etc.) */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={image} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
      </Head>

      <Home />
    </>
  );
}