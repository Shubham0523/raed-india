import Head from "next/head";
import Navbar from "../components/common/Navbar";
import Hero from "../components/home/Hero";
import Stats from "../components/home/Stats";
import GraphInsight from "../components/home/GraphInsight";
import Question from "../components/home/Question";
import Myths from "../components/home/Myths";
import Aim from "../components/home/Aim";
import Raed from "../components/home/Raed";
import Footer from "../components/common/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Raed India</title>
        <link rel="icon" href="/logo_raed.png" />
        <meta name="title" content="raedindia" />
        <meta
          name="description"
          content="RAED India is dedicated to raising cancer awareness among youth and millennials, focusing on early detection and education. Join us in empowering communities, spreading vital knowledge, and making a lasting impact in the fight against cancer."
        />
        <meta name="copyright" content="Shubham Arora" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="raedindia.com" />
        <meta property="og:title" content="raedindia" />
        <meta
          property="og:description"
          content="RAED India is dedicated to raising cancer awareness among youth and millennials, focusing on early detection and education. Join us in empowering communities, spreading vital knowledge, and making a lasting impact in the fight against cancer."
        />
        <meta property="og:image" content="" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="raedindia.com" />
        <meta property="twitter:title" content="raedindia" />
        <meta
          property="twitter:description"
          content="RAED India is dedicated to raising cancer awareness among youth and millennials, focusing on early detection and education. Join us in empowering communities, spreading vital knowledge, and making a lasting impact in the fight against cancer."
        />
        <meta property="twitter:image" content="" />
      </Head>
        <Navbar />
      <main>
        <Hero />
        <Stats />
        <GraphInsight />
        <Question />
        <Myths />
        <Aim />
        <Raed />
      </main>
      <Footer />

    </>
  );
}
