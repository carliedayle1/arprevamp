import Head from "next/head";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import { useRouter } from "next/router";
import { Container, Button } from "react-bootstrap";

const AudiobookService = () => {
  const router = useRouter();

  const backButtonHandler = () => {
    router.back();
  };

  return (
    <>
      <Head>
        <title>Audiobook Service | Services </title>
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
                    <h2>Audiobook Service</h2>
                    <Button
                      className="btn btn-secondary"
                      onClick={backButtonHandler}
                    >
                      Go Back
                    </Button>
                  </div>
                  <div className="bar"></div>
                </div>
                <h3>$0.18/Word</h3>

                <h5 style={{ marginTop: "2rem" }}>
                  Transform Your Fiction or Non-fiction Work Into Spoken Words
                  With The Best Audiobook Service
                </h5>
                <p style={{ marginTop: "1rem" }}>
                  Expand the reach of your book further to non-readers with our
                  audiobook service. There are millions of people around the
                  world who may be too busy to spend time on reading hundreds of
                  pages per week. Reading also presents an impossible challenge
                  to people with visual impairment. So for them, audio books
                  come in handy. Thus, we are offering this type of service to
                  authors who wish to tap this growing segment of the market.
                </p>
                <p style={{ marginTop: "1rem" }}>
                  Our resident audio book narrator is best in class with over
                  12,500 total star reviews and more than 10,000 hours of
                  experience behind the mic. The voice behind IKEA, Disney,
                  Nike, Ford, HBO, and many more popular brands, our narrator
                  has a flexible voice strategy to adjust its rhythm, pacing,
                  emotion, story arc, character diversity, and other voice
                  skills. Plus, a mastery of technical and sound engineering
                  skills comes as a natural talent.
                </p>

                <h5 style={{ marginTop: "2rem" }}>
                  Audiobook Expands Your Readership
                </h5>
                <p style={{ marginTop: "1rem" }}>
                  Let your written work transform into spoken words. Our
                  offering is the best audiobook service in the industry,
                  designed to take advantage of a growing trend in the use of
                  audiobooks across the United States and other countries.
                </p>
                <p style={{ marginTop: "1rem" }}>
                  Thanks to the proliferation of digital tools including
                  smartphones and smart speakers, audiobooks have become popular
                  among readers of all ages. Surveys show that more than 50% of
                  Americans have read an audiobook in 2019. The figure continues
                  to rise as more audiobooks are produced every year.
                </p>
                <p style={{ marginTop: "1rem" }}>
                  The benefits of listening to audiobooks are clear. For our
                  fast-paced lives, finding time to read a book can be hard in
                  the limited hours that we have. But this lifestyle should not
                  deprive people of their opportunity to learn from books or
                  enjoy fiction. With audiobooks, your readers can still read
                  your work without compromising their urgent tasks at home or
                  in the office. They can listen to audiobooks while commuting
                  on a train, cooking in the kitchen, doing the laundry, or even
                  cleaning the house. The added convenience of not having to
                  carry a physical book is a plus for those who like to travel a
                  lot.
                </p>
                <p style={{ marginTop: "1rem" }}>
                  On a more personal level, audiobooks are proven to improve
                  your readers’ listening skills, enrich their vocabulary, teach
                  them proper pronunciations, and boost their comprehension.
                  More importantly, listening to audiobooks can help readers
                  gain knowledge in just a short period of time than reading the
                  texts and highlight actual emotions that are otherwise not
                  found in text. For the visually impaired, audiobooks can be
                  their only source of information.
                </p>

                <h5>
                  Interested in converting your book to audiobook? Contact our
                  author advisors today and get a quote.
                </h5>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Footer />
    </>
  );
};

export default AudiobookService;
