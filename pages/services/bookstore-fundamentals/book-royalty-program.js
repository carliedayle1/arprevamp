import Head from "next/head";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import { useRouter } from "next/router";
import { Container, Button } from "react-bootstrap";
import Link from "next/link";

const BookRoyalty = () => {
  const router = useRouter();

  const backButtonHandler = () => {
    router.back();
  };

  return (
    <>
      <Head>
        <title>Book Royalty Program | Services </title>
      </Head>
      <Navbar />

      <PageBanner pageTitle="Bookstore Fundamentals" />

      <Container>
        <div className="services-area ptb-80 ">
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-12 col-md-12 services-content">
                <div className="section-title">
                  <div className="services-title-back ">
                    <h2>Book Royalty Program</h2>
                    <Button
                      className="btn btn-secondary"
                      onClick={backButtonHandler}
                    >
                      Go Back
                    </Button>
                  </div>
                  <div className="bar"></div>
                </div>

                <h5 style={{ marginTop: "2rem" }}>
                  Earn up to 100% book royalty by selling your book directly to
                  readers
                </h5>
                <p style={{ marginTop: "1rem" }}>
                  At Author Reputation Press, we give our authors the freedom to
                  set a competitive retail price for their book and receive all
                  of the proceeds from each copy sold either through our online
                  storefront or our extensive distribution network including
                  Amazon and Barnes & Noble. This provides authors a unique
                  advantage in the self-publishing industry and lends their
                  title competitive edge in the market.
                </p>
                <h5 style={{ marginTop: "2rem" }}>Programs</h5>
                <p style={{ marginTop: "1rem" }}>
                  Bookstores expect to be able to return books that don’t sell
                  and receive credit for them. This is called Bookstore
                  Returnability Program, where bookstores buy two or three
                  copies first of your book in order to assess whether it will
                  sell before buying multiple copies outright. Bookstores are
                  more likely to buy your book if it is certified as returnable.
                </p>
                <h5 style={{ marginTop: "2rem" }}>Start Dates</h5>

                <p style={{ marginTop: "1rem" }}>
                  The Work will be enrolled in the Program based on either
                  condition:
                </p>
                <p style={{ marginTop: "1rem" }}>
                  (a) if the Work is already available for sale on the Effective
                  Date of this Agreement, on the first day of the next calendar
                  quarter after receipt by Company of both the signed Agreement
                  and payment of the applicable fee for the Program selected by
                  Author below (“Fee”);
                </p>
                <p>or</p>
                <p style={{ marginTop: "1rem" }}>
                  (b) if the Work is not available for sale on the Effective
                  Date of this Agreement, on the first day of the next calendar
                  quarter after the Work becomes available, provided that
                  Company has received payment of the Fee from the Author prior
                  to that time.
                </p>
                <h5 style={{ marginTop: "2rem" }}>Book Pricing & Royalties</h5>

                <p style={{ marginTop: "1rem" }}>
                  The final price for your book will be determined based on your
                  final manuscript’s page count, while your royalty will be
                  based on the following calculation: Retail price – trade
                  discount – production cost = royalty.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Footer />
    </>
  );
};

export default BookRoyalty;
