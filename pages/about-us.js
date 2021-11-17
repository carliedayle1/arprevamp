import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import Head from "next/head";
import Image from "next/image";
import { Container } from "react-bootstrap";

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>About Us | Author Reputation Press</title>
      </Head>
      <Navbar />

      <PageBanner pageTitle="About Us" />

      <div className="center-row">
        <Image
          src="/images/books/employees.jpg"
          width={650}
          height={400}
          alt="employees"
          layout="intrinsic"
        />

        <h5 className="mr-2">Introduction</h5>

        <h3 className="mr-2">Author Reputation Press, LLC</h3>

        <Container className="mb-5">
          <h6 className="text-center mr-2">
            We are a leading publishing company with headquarters in Canton,
            Massachusetts. Author Reputation Press is committed to transforming
            an author’s imagination into pages and helping them carve out a name
            for themselves in the literary world.
          </h6>
          <h6 className="text-center mr-2">
            We offer our authors high-quality editorial and publishing services
            to help them advance in their literary career. In addition, our
            services include a wide range of first-class marketing and
            advertising campaigns. With the combined talent of our marketing
            experts and seasoned publicists, we are at the forefront of driving
            your success as an author by harnessing the power of both
            traditional media platforms and modern digital services.
          </h6>

          <h6 className="text-center mr-2">
            We have been delivering on our promise of total customer
            satisfaction while bringing out the best in every published story.
            With a large volume of books already available to the global
            readers, we aim to work with more authors who are driven by their
            passion and confidence in their work.
          </h6>

          <h6 className="text-center mr-2 ">
            We have been delivering on our promise of total customer
            satisfaction while bringing out the best in every published story.
            With a large volume of books already available to the global
            readers, we aim to work with more authors who are driven by their
            passion and confidence in their work.
          </h6>
        </Container>
      </div>

      <Footer />
    </>
  );
}
