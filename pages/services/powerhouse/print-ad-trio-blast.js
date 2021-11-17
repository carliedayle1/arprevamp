import Head from "next/head";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import { useRouter } from "next/router";
import { Container, Button } from "react-bootstrap";

const PrintAdTrioBlast = () => {
  const router = useRouter();

  const backButtonHandler = () => {
    router.back();
  };

  return (
    <>
      <Head>
        <title>Print Ad Trio Blast</title>
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
                    <h2>Print Ad Trio Blast</h2>
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
                  See your book featured in the reviews section of some of the
                  major English language publications in the United States
                  including Publishers Weekly, Los Angeles Times and The New
                  York Times through our Print-ad Trio Blast service.
                </p>

                <div style={{ marginTop: "2rem" }}>
                  <h4>The New York Times</h4>
                  <p>
                    The New York Times Sunday Book Review directs your ad to
                    your target audience – the book readers. The magazine has a
                    more specific focus than any marketing platform. People who
                    subscribed to a magazine made a deliberate choice to read
                    it, thus they sift through every page. In contrast, people
                    searching online spend only seconds to scan a website.
                  </p>
                  <p>
                    The New York Times Sunday Book Review is one of the most
                    coveted pages for book reviews, and landing a spot on the
                    publication is a unique opportunity to be discovered as an
                    author. The magazine commands a huge following that
                    comprises 831,000 print readers in the U.S. It has a
                    reputation of recommending only the most riveting books that
                    deserve critical acclaim. When readers see your book
                    featured in an ad on the NYT Sunday Book Review, they view
                    it with more respect than if they saw it in a lesser known
                    publication.
                  </p>
                  <p>
                    Author Reputation Press will feature your book in a single
                    slot advertisement in the magazine and disseminate a
                    one-page press release to several media outlets. We believe
                    our authors deserve nothing less than an extensive marketing
                    campaign to cement their way to fame.
                  </p>
                </div>

                <div style={{ marginTop: "2rem" }}>
                  <h4>Los Angeles Times</h4>
                  <p>
                    The Los Angeles Times’ book reviews section is a giant
                    platform for authors wanting to build their reputation as
                    writers. With a readership of 1.4 million on a daily basis
                    and 2.4 million on Sundays, the Los Angeles Times provides
                    an ideal platform for existing and new authors to promote
                    their work big time. Getting a spot in one of its pages is a
                    rare opportunity for authors and is a solid affirmation of
                    your reputation as an author.
                  </p>
                  <p>
                    Author Reputation Press® LA Times is a personalized service
                    that will have your book featured in a half page
                    advertisement in the Los Angeles Times Sunday Art edition.
                    This service also includes a press release for your book
                    meant for distribution across 1000 media outlets in print,
                    broadcast and online platforms.
                  </p>
                </div>

                <div style={{ marginTop: "2rem" }}>
                  <h4>Publishers Weekly</h4>
                  <p>
                    Publishers Weekly is a household name in the book publishing
                    industry, with a special focus on international books. The
                    magazine pushes its book reviews on a weekly basis meant for
                    a wide range of audiences including publishers, booksellers,
                    librarians, literary agents, authors and media outlets. Its
                    coverage includes feature articles and straight news
                    writeups about books, lists of bestselling titles across a
                    wide range of categories, and industry statistics. Most
                    notably, Publishers Weekly has cemented its reputation as
                    the prime source of pre-publication book reviews, pushing
                    around 9,000 blurbs annually.
                  </p>
                  <p>
                    Our print ads are customized according to the desired
                    categories: religion, children’s books, international
                    audience, best-seller’s club, review consideration and
                    announcements of select titles.
                  </p>
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

export default PrintAdTrioBlast;
