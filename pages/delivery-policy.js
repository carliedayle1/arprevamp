import Head from "next/head";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import { useRouter } from "next/router";
import { Button } from "react-bootstrap";

const DeliveryPolicy = () => {
  const router = useRouter();

  const backButtonHandler = () => {
    router.back();
  };
  return (
    <>
      <Head>
        <title>Delivery Policy </title>
      </Head>
      <Navbar />

      <PageBanner pageTitle="Company" />

      <div className="services-area ptb-80 ">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-12 col-md-12 services-content">
              <div className="section-title">
                <div className="services-title-back ">
                  <h2>Delivery Policy</h2>
                  <Button
                    className="btn btn-secondary"
                    onClick={backButtonHandler}
                  >
                    Go Back
                  </Button>
                </div>
                <div className="bar"></div>
              </div>
              <p className="mr-2">
                The delivery address for the book copy shall follow a per
                transaction basis. The author needs to provide the corresponding
                correct and complete address where the book shall be delivered.
                The author can call Author Reputation Press and its assigned
                Fulfillment Officer if any questions arise especially if he/she
                would like to track the delivery date of his/her book.
              </p>
              <p className="mr-2">
                Author Reputation Press aims to deliver the book within the time
                agreed upon; however, we do not guarantee that all books will be
                delivered within the presented time frame. Our turnaround time
                is based on our trusted partners’ UPS, USPS and FedEx which is
                five to eight working days upon the completion of your book’s
                production. The mailing of the tangible services purchased will
                depend if the author has chosen it to be an urgent delivery then
                Expedited Service Fee may apply.
              </p>
              <p className="mr-2">
                If you are not available personally to receive the delivery of
                your book, you may designate at least one authorized recipient
                in the Shipping Information page. Please note that in all
                circumstances, the recipient is required to sign a waybill as
                confirmation of receipt and proof of delivery. The author and/or
                its designated recipient should comply with the requests of the
                delivery service provider such as ID to ensure the safekeeping
                of the book.
              </p>{" "}
              <p className="mr-2">
                A tracking number shall be designated to your deliverable book
                copy and shall be included in the Shipping and Delivery Status
                Confirmation email. You may use this in order to check the
                status of your book copy’s delivery.
              </p>{" "}
              <p className="mr-2">
                Please note. All notices to Author Reputation Press must be sent
                in writing to its office at 45 Dan Road Suite 36 Canton, MA
                02021. All notices to the Author shall be in writing to the
                address specified by the Author.
              </p>
              <p className="mr-2">
                Shipping and handling for book copies, if any, are not included
                in the publishing/marketing package price. Some restrictions may
                apply.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default DeliveryPolicy;
