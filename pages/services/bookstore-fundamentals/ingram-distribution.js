import Head from "next/head";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import { useRouter } from "next/router";
import { Container, Button } from "react-bootstrap";

const IngramDistribution = () => {
  const router = useRouter();

  const backButtonHandler = () => {
    router.back();
  };

  return (
    <>
      <Head>
        <title>Ingram Distribution | Services </title>
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
                    <h2>Ingram Distribution</h2>
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
                  Sell Your Book With Ingram Book Distribution
                </h5>
                <p style={{ marginTop: "1rem" }}>
                  Author Reputation Press is proud to be working with Ingram
                  Content Group. This relationship enables us to connect with a
                  vast network of libraries and booksellers who access Ingram’s
                  millions of print and digital titles as their reliable source
                  of books.
                </p>
                <p style={{ marginTop: "1rem" }}>
                  Ingram’s network helps authors reach tens of thousands of
                  retail and library customers worldwide. Ingram’s comprehensive
                  title listing comprises non-fiction and fictional titles,
                  graphic novels and comics, science fiction and fantasy, teen,
                  mystery and suspense, biography, and history and holiday gift
                  books.
                </p>

                <p style={{ marginTop: "1rem" }}>
                  With Ingram’s Print on Demand service, books can be bought
                  through Ingram by book shops, libraries, and retail outlets.
                  The order prints, transports, and shows up at the client or
                  store within a couple of days.
                </p>
                <p style={{ marginTop: "1rem" }}>
                  Ingram sends a metadata feed containing all the data and
                  pricing for your books to over 39,000 book shops, libraries,
                  and retail outlets everywhere in the world. Ingram’s clients
                  and Print-On-Demand distribution channels will transfer the
                  metadata for your book to their site and will determine if
                  they need to sell the book through their site. A store can
                  look for your book on Ingram Book Company’s iPage site or
                  different sites and see the metadata related to it.
                </p>

                <p style={{ marginTop: "1rem" }}>
                  During the title setup, when you can choose to add more
                  distribution services for your book, it can take up to two
                  months before it shows up on retailer sites or on a merchant
                  or retailer’s purchasing system. Depending on time, it can
                  less than two months before you may see snippets of data show
                  up and afterward vanish (based upon the circulation partner)
                  until the title data and cover are completely transferred onto
                  sites.
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

export default IngramDistribution;
