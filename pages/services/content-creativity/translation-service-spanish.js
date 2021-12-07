import Head from "next/head";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import { useRouter } from "next/router";
import { Container, Button } from "react-bootstrap";

const TranslationService = () => {
  const router = useRouter();

  const backButtonHandler = () => {
    router.back();
  };

  return (
    <>
      <Head>
        <title>Translation Service - Spanish | Services </title>
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
                    <h2>Translation Service - Spanish</h2>
                    <Button
                      className="btn btn-secondary"
                      onClick={backButtonHandler}
                    >
                      Go Back
                    </Button>
                  </div>
                  <div className="bar"></div>
                </div>
                <h3>
                  $0.113/Word (Spanish to English) – $0.112/Word (English to
                  Spanish)
                </h3>

                <h5 style={{ marginTop: "2rem" }}>
                  Your Excellent Choice for Professional Spanish Translation
                  Services
                </h5>
                <p style={{ marginTop: "1rem" }}>
                  Using our Spanish translation services, you can reach out to
                  new audiences in different languages. Author Reputation Press
                  provides Spanish book translation services to authors who want
                  to reach Hispanic audiences with their book, whether it is a
                  novel, poetry collection, or memoir.
                </p>
                <p style={{ marginTop: "1rem" }}>
                  Our resident translator has a deep knowledge of and
                  fascination with the Spanish language, as well as a great
                  understanding and immersion in Hispanic culture, having
                  translated over 50 books. With a flexible writing style, our
                  professional translator can convey the meaning of your
                  original work to readers without deviating from the source’s
                  theme.
                </p>
                <p style={{ marginTop: "1rem" }}>
                  These are all backed by professional level skills in the
                  Spanish and English languages earned by our translator through
                  a Master’s Degree in Modern Languages, honed by seven years of
                  translation experience.
                </p>

                <h5 style={{ marginTop: "2rem" }}>Breaking the Barrier</h5>
                <p style={{ marginTop: "1rem" }}>
                  Break through the language barrier. Our Spanish translation
                  services enable authors to reach a global audience and
                  increase their readership exponentially, regardless of
                  geography. Currently, 572 million people worldwide speak
                  Spanish. We assist authors in capturing a sizable portion of
                  that market. Our resident translator’s portfolio includes over
                  200 translated books.
                </p>
                <p style={{ marginTop: "1rem" }}>
                  Your work will be translated in the style and tone of the
                  original language. Complete editing and proofreading services
                  are provided to prepare the book for publication.
                </p>

                <div style={{ marginTop: "2rem" }}>
                  <h4>How It Works</h4>
                  <ul>
                    <li>
                      <h6>
                        Your work will be manually translated with a genuine
                        Spanish style and tone as if it was originally written
                        in that language.
                      </h6>
                    </li>
                    <li>
                      <h6>
                        Our resident translator can translate works in any
                        genre.
                      </h6>
                    </li>
                    <li>
                      <h6>
                        Completely trusted by Amazon and New York
                        Times-best-selling authors, our translator maintains a
                        high level of reputation in the industry.
                      </h6>
                    </li>
                    <li>
                      <h6>
                        Translation comes with complete editing and proofreading
                        services to make the book ready for publication.
                      </h6>
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

export default TranslationService;
