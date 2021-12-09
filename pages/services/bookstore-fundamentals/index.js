import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import * as Icon from "react-feather";
import Head from "next/head";
import Link from "next/link";
import { Button } from "react-bootstrap";
import { useRouter } from "next/router";

export default function BookstoreFundamentals() {
  const router = useRouter();

  const backButtonHandler = () => {
    router.back();
  };
  return (
    <>
      <Head>
        <title>Bookstore Fundamentals | Author Reputation Press</title>
      </Head>
      <Navbar />

      <PageBanner pageTitle="Services" />
      <div className="services-area ptb-80 ">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-12 col-md-12 services-content">
              <div className="section-title">
                <div className="services-title-back">
                  <h2>Bookstore Fundamentals</h2>

                  <Button
                    className="btn btn-secondary"
                    onClick={backButtonHandler}
                  >
                    Go Back
                  </Button>
                </div>
                <div className="bar"></div>
                <p>
                  Choose any of our wide array of services that will help you in
                  publishing your literary works!
                </p>
              </div>

              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <Link href="/services/bookstore-fundamentals/extensive-library-outreach-campaign">
                    <div className="box" style={{ cursor: "pointer" }}>
                      <Icon.BookOpen /> Extensive Library Outreach Campaign
                    </div>
                  </Link>
                </div>

                <div className="col-lg-6 col-md-6">
                  <Link href="/services/bookstore-fundamentals/book-returnability-program">
                    <div className="box" style={{ cursor: "pointer" }}>
                      <Icon.BookOpen /> Book Returnability Program
                    </div>
                  </Link>
                </div>

                <div className="col-lg-6 col-md-6">
                  <Link href="/services/bookstore-fundamentals/ingram-distribution">
                    <div className="box" style={{ cursor: "pointer" }}>
                      <Icon.BookOpen /> Ingram Distribution
                    </div>
                  </Link>
                </div>

                <div className="col-lg-6 col-md-6">
                  <Link href="/services/bookstore-fundamentals/book-royalty-program">
                    <div className="box" style={{ cursor: "pointer" }}>
                      <Icon.BookOpen /> 100% Book Royalty Program
                    </div>
                  </Link>
                </div>

                <div className="col-lg-6 col-md-6">
                  <Link href="/services/bookstore-fundamentals/printed-materials">
                    <div className="box" style={{ cursor: "pointer" }}>
                      <Icon.BookOpen /> Printed Materials
                    </div>
                  </Link>
                </div>

                <div className="col-lg-6 col-md-6">
                  <Link href="/services/bookstore-fundamentals/special-stockpiling">
                    <div className="box" style={{ cursor: "pointer" }}>
                      <Icon.BookOpen /> Special Stockpiling
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
