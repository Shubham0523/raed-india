import Head from "next/head";
import Aim from "../components/home/Aim";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
// import CoreTeam from "../components/home/CoreTeam";
import Donate from "../components/home/Donate";
import About from "../components/home/About";
import Raed from "../components/home/Raed";
import Services from "./service_help/Services";
import Articles_main from "./Safety_Articles/Articles_main";
import Curr_Team from "../components/home/Curr_Team";

export default function Home() {
  return (
    <>
      <Head>
        <title>Raed India</title>
        <link rel="icon" href="/logo_raed.png" />
        <meta name="title" content="raedindia" />
        <meta
          name="description"
          content="Team Raed India is passionately committed to aiding individuals in recovering their unclaimed shares, dividends, and investments."
        />
        <meta name="copyright" content="Shubham Arora" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="raedindia.com" />
        <meta property="og:title" content="raedindia" />
        <meta
          property="og:description"
          content="Team Raed India is passionately committed to aiding individuals in recovering their unclaimed shares, dividends, and investments."
        />
        <meta property="og:image" content="" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="raedindia.com" />
        <meta property="twitter:title" content="raedindia" />
        <meta
          property="twitter:description"
          content="Team Raed India is passionately committed to aiding individuals in recovering their unclaimed shares, dividends, and investments."
        />
        <meta property="twitter:image" content="" />
      </Head>
      <main className="">
        <Navbar />
        <Raed />
        <Aim />
        {/* <Carousal /> */}
        <Services />
        <Articles_main />
        {/* <Stats /> */}
        <Donate />
        {/* <Testimonials /> */}
        {/* <CoreTeam /> */}
        <Curr_Team />
        <About />
      </main>

      <Footer />
    </>
  );
}
