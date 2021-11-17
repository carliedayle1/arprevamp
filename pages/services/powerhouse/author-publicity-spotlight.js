import Head from "next/head";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import { useRouter } from "next/router";
import { Container, Button } from "react-bootstrap";

const AuthorPublicitySpotlight = () => {
  const router = useRouter();

  const backButtonHandler = () => {
    router.back();
  };

  return (
    <>
      <Head>
        <title>Author Publicity Spotlight</title>
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
                    <h2>Author Publicity Spotlight</h2>
                    <Button
                      className="btn btn-secondary"
                      onClick={backButtonHandler}
                    >
                      Go Back
                    </Button>
                  </div>
                  <div className="bar"></div>
                </div>
                <h4>Author Publicity To Grow Your Platform</h4>
                <p style={{ marginTop: "1rem" }}>
                  Get acknowledged by major publications, blogs, online news
                  sites, magazines, and literary journals through our Author
                  Publicity Spotlight. With a vast network of media partners,
                  our team of publicists will work to pitch your book to several
                  household names in the media industry including Forbes
                  Magazine, The Lit Pub, and more.
                </p>

                <p style={{ marginTop: "1rem" }}>
                  At least two outlets are guaranteed to pick up our feature
                  article for any given author. The article may come in the form
                  of an interview with the author or a free-form article piece
                  that discusses the author’s book.
                </p>

                <p style={{ marginTop: "1rem" }}>
                  Gaining traction in the media is a sure way to enjoy wider
                  brand visibility, build your reputation in the industry, drive
                  more traffic to your work, and increase your readership. The
                  Author Publicity Spotlight is our highest form of publicity
                  campaign to help authors land a placement in various media
                  platforms.
                </p>

                <div style={{ marginTop: "2rem" }}>
                  <h5>How it Works</h5>
                  <ul>
                    <li>
                      Authors will need to discuss their specific requirements
                      for a publicity campaign with our senior author advisors.
                    </li>
                    <li>
                      One of our writers will create the feature article, which
                      will then be sent to the author for approval.
                      Alternatively, the author may opt for an interview for
                      placement on the publications concerned.
                    </li>
                    <li>
                      Our publicists will then pitch the article to all
                      publications, blog sites, magazines, and journals that may
                      potentially find it interesting for their readers.
                    </li>
                    <li>
                      Besides the traditional media publications, we will
                      disseminate the article to unorthodox outlets with an
                      option to have it shared via their social media pages as
                      well.
                    </li>
                    <li>
                      Authors will receive a copy of the pertinent article both
                      in digital and web formats. In addition, a summary report
                      about all the media outlets that received our query letter
                      for article placement will be sent via email to the
                      author.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Footer />
    </>
  );
};

export default AuthorPublicitySpotlight;
