import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import Head from "next/head";

export default function Testimonial() {
  return (
    <>
      <Head>
        <title>Testimonials | Author Reputation Press</title>
      </Head>
      <Navbar />

      <PageBanner pageTitle="Testimonials" />

      <Footer />
    </>
  );
}
