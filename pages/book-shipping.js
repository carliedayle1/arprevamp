import Head from "next/head";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import { useRouter } from "next/router";
import { Container, Button } from "react-bootstrap";

const BookShipping = () => {
  const router = useRouter();

  const backButtonHandler = () => {
    router.back();
  };

  return (
    <>
      <Head>
        <title>Book Shipping</title>
      </Head>
      <Navbar />

      <PageBanner pageTitle="Company" />

      <Container>
        <div className="services-area ptb-80 ">
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-12 col-md-12 services-content">
                <div className="section-title">
                  <div className="services-title-back ">
                    <h2>Book Shipping </h2>
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
                  Author Reputation Press ships book orders both to domestic
                  locations and international destinations. With a broad range
                  of partner shipping services, customers can be confident to
                  receive their purchased books at their specified time
                  regardless of their budget.
                </h5>

                <div className="mr-2">
                  <h3>United States</h3>
                  <p style={{ marginTop: "1rem" }}>
                    The U.S. Postal Service and UPS are responsible for the
                    delivery of book orders to customers in the United States*.
                    See the following rates for our various book shipping
                    services in the country:
                  </p>
                </div>

                <div className="mr-2">
                  <h4>Regular Mail</h4>
                  <p style={{ marginTop: "1rem" }}>
                    For less urgent shipments within the U.S., UPS Standard is
                    the perfect choice. It includes door-to-door delivery for
                    your convenience. This service costs only $5.65.
                  </p>
                </div>

                <div className="mr-2">
                  <h4>Next Day Air</h4>
                  <p style={{ marginTop: "1rem" }}>
                    UPS’ Next Day Air fulfills book deliveries by the next
                    business day. The base shipping fee starts at $26.99, with
                    each additional book in the shipment costing $2.99. It is
                    also inclusive of free packaging.
                  </p>
                </div>

                <div className="mr-2">
                  <h4>UPS Ground</h4>
                  <p style={{ marginTop: "1rem" }}>
                    This delivery service can take up to five days, depending on
                    your choice. With its day-definite delivery scheme, you have
                    the guarantee of receiving your item on the day you specify.
                    Shipping fee costs $11.99.
                  </p>
                </div>

                <div className="mr-2">
                  <h4>2nd Day Air</h4>
                  <p style={{ marginTop: "1rem" }}>
                    This type of shipping service completes the delivery in two
                    business days, but at a lower cost than the Next Day Air.
                    Shipping fee is $21.99, perfect for shipments that do not
                    need to be delivered overnight. It also includes free UPS
                    packaging.
                  </p>
                </div>

                <div className="mr-2">
                  <h4>2nd Day Air</h4>
                  <p style={{ marginTop: "1rem" }}>
                    This type of shipping service completes the delivery in two
                    business days, but at a lower cost than the Next Day Air.
                    Shipping fee is $21.99, perfect for shipments that do not
                    need to be delivered overnight. It also includes free UPS
                    packaging.
                  </p>
                </div>
                <hr />
                <div className="mr-2">
                  <h3>United Kingdom</h3>
                  <p style={{ marginTop: "1rem" }}>
                    In the UK, our deliveries are handled by Royal Mail and UPS
                    International. Rates vary for each shipping service, as
                    described below:
                  </p>
                </div>

                <div className="mr-2">
                  <h4>Royal Mail Express</h4>
                  <p style={{ marginTop: "1rem" }}>
                    The UK Royal Mail Express is the perfect option for those
                    wanting to have their book shipped on the next business day.
                    This shipping service costs $4.97 or approximately £3.97.
                  </p>
                </div>

                <div className="mr-2">
                  <h4>Royal Mail Standard</h4>
                  <p style={{ marginTop: "1rem" }}>
                    Standard delivery in the UK under this service may take
                    between three and five business days. Shipping fee is $3.72
                    or around £2.97. This shipping service applies to both small
                    and large types of parcel not exceeding 2kg or 4.4lbs.
                  </p>
                </div>

                <div className="mr-2">
                  <h4>UPS International</h4>
                  <p style={{ marginTop: "1rem" }}>
                    We also deliver your purchased book to the UK via the UPS
                    International service. Shipping fee is $44.04 or
                    approximately £35.2.
                  </p>
                </div>
                <hr />
                <div className="mr-2">
                  <h3>Canada</h3>
                  <p style={{ marginTop: "1rem" }}>
                    For both urgent and regular deliveries, we offer shipping
                    options in Canada at affordable prices, courtesy of the
                    following courier services:
                  </p>
                </div>

                <div className="mr-2">
                  <h4>Purolator Express</h4>
                  <p style={{ marginTop: "1rem" }}>
                    Customers who want to get their purchased book/s on the next
                    business day can avail of our courier service provided by
                    Purolator Express. Shipping costs US$21.99 or CA$28.7.
                  </p>
                </div>

                <div className="mr-2">
                  <h4>UPS Ground</h4>
                  <p style={{ marginTop: "1rem" }}>
                    With its day-definite delivery plan, you are sure to receive
                    your item on the day you specify. Shipping fee costs
                    US$21.99 (approximately CA$28.8) and delivery can take up to
                    five business days.
                  </p>
                </div>
                <hr />
                <div className="mr-2">
                  <h3>Australia</h3>
                  <p style={{ marginTop: "1rem" }}>
                    Our courier services in Australia offer flexible prices that
                    fit your budget. No matter in which state you are located,
                    your purchased books will be shipped to your doorstep by the
                    following providers:
                  </p>
                </div>

                <div className="mr-2">
                  <h4>Australian Post Premium</h4>
                  <p style={{ marginTop: "1rem" }}>
                    For faster shipment, the Australian Post Premium is the best
                    option. It costs US$10.68 or approximately AU$15.17, plus an
                    option to purchase insurance coverage for your shipment.
                  </p>
                </div>

                <div className="mr-2">
                  <h4>Australian Post Standard</h4>
                  <p style={{ marginTop: "1rem" }}>
                    For non-urgent parcels, the Australian Post Standard service
                    offers a reasonable shipment price of US$5.34 or around
                    AU$7.60. Shipment time may take up to six business days.
                  </p>
                </div>

                <div className="mr-2">
                  <h4>DHL Express</h4>
                  <p style={{ marginTop: "1rem" }}>
                    Our delivery service via DHL Express provides a wide
                    coverage across Australia for $86.59 or approximately
                    AU$123.1.
                  </p>
                </div>

                <div className="mr-2">
                  <h4>UPS International</h4>
                  <p style={{ marginTop: "1rem" }}>
                    With UPS International, we maximize the shipment time for
                    your item to your location. For US$48.93 or around AU$69.5,
                    you will receive your parcel at the soonest possible time.
                  </p>
                </div>
                <hr />
                <div className="mr-2">
                  <h3>Asia</h3>
                </div>

                <div className="mr-2">
                  <h4>DHL Express</h4>
                  <p style={{ marginTop: "1rem" }}>
                    Our customers in Asia can also take advantage of our fast
                    delivery services courtesy of DHL Express, with a shipment
                    cost of US$44.04.
                  </p>
                </div>

                <p className="mr-2" style={{ fontStyle: "italic" }}>
                  Notes:
                  <ul>
                    <li>
                      Shipping rates for Alaska and Hawaii may vary, call Author
                      Reputation Press at 1-800-220-7660.
                    </li>
                    <li>
                      Delivery time may take up to 10 business days, depending
                      on your destination. Author Reputation Press holds no
                      responsibility for lost or damaged shipments.
                    </li>
                  </ul>
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

export default BookShipping;
