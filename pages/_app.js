import Head from "next/head";
import { Inter } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>
      <div className={inter.className}>
        <Component {...pageProps} />
      </div>
    </SessionProvider>
  );
}
