import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import Head from "next/head";

export default function ContactUs() {
  return (
    <>
      <Head>
        <title>Contact Us | Author Reputation Press</title>
      </Head>
      <Navbar />

      <PageBanner pageTitle="Contact Us" />

      <Footer />
    </>
  );
}
