import Header from "./Header";
import Footer from "./Footer/Footer";
import Loader from "./Loader";
import Head from "next/head";
import ButtonUp from "./ButtonUp";
import useStore from "@/zustand/store/useStore";
import "./loader.css";

export default function Layout({ children, isStyled = true, title }) {
  const { language } = useStore();
  const isRu = language === "ru";
  return (
    <div>
      <Head>
        <link
          rel="shortcut icon"
          href="https://static.tildacdn.one/tild3962-3637-4234-a336-646331623332/Favi_copy.ico"
          type="image/x-icon"
        />
        <title>{title ? title : "Cactus Real Estate"}</title>
        {/* <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <title></title> */}
      </Head>
      {/* <Loader /> */}
      <Header isRu={isRu} />
      <Loader />
      <main className={isStyled ? "max-w-[1024px] mx-auto p-2" : ""}>
        {children}
      </main>
      <ButtonUp />
      <Footer isRu={isRu} />
    </div>
  );
}
