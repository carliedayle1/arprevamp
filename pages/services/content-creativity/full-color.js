import Head from "next/head";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import { useRouter } from "next/router";
import { Container, Button } from "react-bootstrap";
import Link from "next/link";

const FullColor = () => {
  const router = useRouter();

  const backButtonHandler = () => {
    router.back();
  };

  return (
    <>
      <Head>
        <title>Full Color | Services </title>
      </Head>
      <Navbar />

      <PageBanner pageTitle="Content and Creativity" />

      <Container>
        <div className="services-area ptb-80 ">
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-12 col-md-12 services-content">
                <div className="section-title">
                  <div className="services-title-back ">
                    <h2>Full Color</h2>
                    <Button
                      className="btn btn-secondary"
                      onClick={backButtonHandler}
                    >
                      Go Back
                    </Button>
                  </div>
                  <div className="bar"></div>
                </div>

                <h5>Custom Print Your Book With Our Full Color Package</h5>
                <p style={{ marginTop: "1rem" }}>
                  Color captivates the mind and seizes the soul. From children’s
                  books to photography, travel and cookbooks— get all the
                  auspices of an attractive full color volume and compete in any
                  marketplace you want to pursue. Benefit from a great selection
                  of services carefully combined to create a full color
                  masterpiece.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <div className="pricing-area  pb-50 ">
        <div className="container">
          <div className="section-title">
            <h4>Choose From Our Range Of Full Color Packages</h4>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="pricing-table">
                <div className="pricing-header">
                  <h3>Copernicus</h3>
                </div>

                <div className="price">
                  <span>
                    <sup>$</sup>1,399 <span></span>
                  </span>
                </div>

                <div className="pricing-features">
                  <ul>
                    <li className="active">Paperback</li>
                    <li className="active"> E-book</li>
                  </ul>
                </div>

                <div className="pricing-footer">
                  <Link href="/packages/copernicus">
                    <a className="btn btn-primary">More Details</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="pricing-table ">
                <div className="pricing-header ">
                  <h3>Newton</h3>
                </div>

                <div className="price">
                  <span>
                    <sup>$</sup>2,799 <span></span>
                  </span>
                </div>

                <div className="pricing-features">
                  <ul>
                    <li className="active">Paperback</li>
                    <li className="active">Hardback</li>
                    <li className="active">Ebook</li>
                  </ul>
                </div>

                <div className="pricing-footer">
                  <Link href="/packages/newton">
                    <a className="btn btn-primary">More Details</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="pricing-table">
                <div className="pricing-header">
                  <h3>Einstein</h3>
                </div>

                <div className="price">
                  <span>
                    <sup>$</sup>6,899 <span></span>
                  </span>
                </div>

                <div className="pricing-features">
                  <ul>
                    <li className="active">Paperback</li>
                    <li className="active">Hardback</li>
                    <li className="active">Ebook</li>
                  </ul>
                </div>

                <div className="pricing-footer">
                  <Link href="/packages/einstein">
                    <a className="btn btn-primary">More Details</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="shape8 rotateme">
          <img src="/images/shape2.svg" alt="shape" />
        </div>
        <div className="shape2 rotateme">
          <img src="/images/shape2.svg" alt="shape" />
        </div>
        <div className="shape7">
          <img src="/images/shape4.svg" alt="shape" />
        </div>
        <div className="shape4">
          <img src="/images/shape4.svg" alt="shape" />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default FullColor;
