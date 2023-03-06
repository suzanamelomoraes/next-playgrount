import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/components/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="web development, programming, learning"
        />
        <meta
          name="description"
          content="Web development playground for Next.js"
        />
        <meta charSet="utf-8" />
        <title>Next Playground</title>
      </Head>
      <h1>Welcome to my Next Playground</h1>
    </div>
  );
}
