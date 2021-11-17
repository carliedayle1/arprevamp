import Head from "next/head";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import { useRouter } from "next/router";
import { Container, Button } from "react-bootstrap";

const AmazonBooksellersCampaign = () => {
  const router = useRouter();

  const backButtonHandler = () => {
    router.back();
  };

  return (
    <>
      <Head>
        <title>Amazon Booksellers Campaign</title>
      </Head>
      <Navbar />

      <PageBanner pageTitle="Powerhouse Platform" />

      <Container>
        <div className="services-area ptb-80 ">
          <div className="container">
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-12 col-md-12 services-content">
                <div className="section-title">
                  <div className="services-title-back ">
                    <h2>Amazon Booksellers Campaign</h2>
                    <Button
                      className="btn btn-secondary"
                      onClick={backButtonHandler}
                    >
                      Go Back
                    </Button>
                  </div>
                  <div className="bar"></div>
                </div>

                <p style={{ marginTop: "1rem" }}>
                  Attract more readers and drive sales for your book with Amazon
                  Booksellers Campaign, our unique book advertising service in
                  partnership with the world’s largest online retailer. This
                  service guarantees wide exposure for your title by placing
                  your ad at the prominent spots on Amazon pages, targeting
                  readers by related book genres and audience interests.
                </p>

                <p style={{ marginTop: "1rem" }}>
                  Amazon offers the best advertising platform for your book
                  through its vast presence on the internet, delivering your
                  book to relevant readers as they browse through Amazon. Your
                  title will appear on the Amazon mobile shopping app (available
                  on Android and iOS devices), on the mobile web, and on
                  desktops.
                </p>

                <p style={{ marginTop: "1rem" }}>
                  Amazon Booksellers Campaign is the perfect place to promote
                  your title alongside popular books and authors. With almost
                  200 million visitors on a monthly basis, Amazon’s advertising
                  platform introduces your book to new markets across the world
                  in addition to your existing reader base.
                </p>

                <p style={{ marginTop: "1rem" }}>
                  Being the largest platform in the world for advertising and
                  publishing eBooks, Amazon holds a huge power. You can harness
                  that power today through our Amazon Booksellers Campaign for
                  your own benefit.
                </p>

                <p style={{ marginTop: "1rem" }}>
                  Let readers see your title in a new way. Your campaign will be
                  optimized to ensure your book receives maximum exposure.
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

export default AmazonBooksellersCampaign;
