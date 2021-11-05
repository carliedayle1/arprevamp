import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
// import ServicesArea from "@/components/ITStartup/ServicesArea";
import * as Icon from "react-feather";
import Head from "next/head";

export default function BookstoreFundamentals() {
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
                <h2>Bookstore Fundamentals</h2>
                <div className="bar"></div>
                <p>
                  Choose any of our wide array of services that will help you in
                  publishing your literary works!
                </p>
              </div>

              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="box">
                    <Icon.BookOpen /> Extensive Library Outreach Campaign
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="box">
                    <Icon.BookOpen /> Book Returnability Program
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="box">
                    <Icon.BookOpen /> Ingram Distribution
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="box">
                    <Icon.BookOpen /> 100% Book Royalty Program
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="box">
                    <Icon.BookOpen /> Printed Materials
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="box">
                    <Icon.BookOpen /> Special Stockpiling
                  </div>
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
