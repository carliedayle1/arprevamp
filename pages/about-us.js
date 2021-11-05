import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import Head from "next/head";

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>About Us | Author Reputation Press</title>
      </Head>
      <Navbar />

      <PageBanner pageTitle="About Us" />

      <Footer />
    </>
  );
}
