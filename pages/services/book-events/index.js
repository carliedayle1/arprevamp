import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
// import ServicesArea from "@/components/ITStartup/ServicesArea";
import * as Icon from "react-feather";
import Head from "next/head";
import Link from "next/link";

export default function BookEvents() {
  return (
    <>
      <Head>
        <title>Book Events and Tours | Author Reputation Press</title>
      </Head>
      <Navbar />

      <PageBanner pageTitle="Services" />
      <div className="services-area ptb-80 ">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-12 col-md-12 services-content">
              <div className="section-title">
                <h2>Book Events and Tours</h2>
                <div className="bar"></div>
                <p>
                  Choose any of our wide array of services that will help you in
                  publishing your literary works!
                </p>
              </div>

              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <Link href="/services/book-events/international-show">
                    <div className="box" style={{ cursor: "pointer" }}>
                      <Icon.Film /> Book Exhibition – International Show
                    </div>
                  </Link>
                </div>

                <div className="col-lg-6 col-md-6">
                  <Link href="/services/book-events/national-show">
                    <div className="box" style={{ cursor: "pointer" }}>
                      <Icon.Film /> Book Exhibit – National Show
                    </div>
                  </Link>
                </div>

                <div className="col-lg-6 col-md-6">
                  <Link href="/services/book-events/nts">
                    <div className="box" style={{ cursor: "pointer" }}>
                      <Icon.Film /> Book Exhibit – NTS
                    </div>
                  </Link>
                </div>

                <div className="col-lg-6 col-md-6">
                  <Link href="/services/book-events/package-international-show">
                    <div className="box" style={{ cursor: "pointer" }}>
                      <Icon.Film /> Book Exhibit Package – International Show
                    </div>
                  </Link>
                </div>

                <div className="col-lg-6 col-md-6">
                  <Link href="/services/book-events/package-national-show">
                    <div className="box" style={{ cursor: "pointer" }}>
                      <Icon.Film /> Book Exhibit Package – National Show
                    </div>
                  </Link>
                </div>

                <div className="col-lg-6 col-md-6">
                  <Link href="/services/book-events/national-book-signing">
                    <div className="box" style={{ cursor: "pointer" }}>
                      <Icon.Film /> Book Signing – National
                    </div>
                  </Link>
                </div>
                <div className="col-lg-6 col-md-6">
                  <Link href="/services/book-events/international-book-signing">
                    <div className="box" style={{ cursor: "pointer" }}>
                      <Icon.Film /> Book Signing – International
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
