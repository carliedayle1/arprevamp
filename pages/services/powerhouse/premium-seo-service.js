import Head from "next/head";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import { useRouter } from "next/router";
import { Container, Button, Row, Col } from "react-bootstrap";
import * as Icon from "react-feather";

const PremiumSeoService = () => {
  const router = useRouter();

  const backButtonHandler = () => {
    router.back();
  };

  return (
    <>
      <Head>
        <title>Premium SEO Service</title>
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
                    <h2>Premium SEO Service</h2>
                    <Button
                      className="btn btn-secondary"
                      onClick={backButtonHandler}
                    >
                      Go Back
                    </Button>
                  </div>
                  <div className="bar"></div>
                </div>
                <h4>
                  Increase Traffic To Your Website With A Professional SEO
                  Service
                </h4>

                <p style={{ marginTop: "1rem" }}>
                  Search Engine Optimization (SEO) – Creating a website to sell
                  your book marks a stepping stone for your online promotional
                  strategies as an author. However, it’s only the beginning of a
                  larger effort to bolster your presence on the web, which
                  involves an effective SEO service.
                </p>

                <p style={{ marginTop: "1rem" }}>
                  You’ll later encounter a few challenges such as driving
                  traffic to your website and coming up in the first page of
                  search results. Furthermore, you need to maintain your search
                  engine rank and stay ahead of the competition. This is where
                  SEO Service comes in. In a nutshell, search engine
                  optimization is the method of edging out your competing
                  websites in search results.
                </p>

                <p style={{ marginTop: "1rem" }}>
                  As an example, when you search for “action adventure books”,
                  the first page of the results shows popular titles from major
                  traditional publishers or Amazon listings. While those books
                  fall under the same genre as yours, they’ve made it to the top
                  pages of Google Search or Bing, for example. This means those
                  titles are easier to find for people searching for that
                  specific book genre while books that appear in the third and
                  fourth pages have a slimmer chance of getting noticed.
                </p>

                <p style={{ marginTop: "1rem" }}>
                  The difference? Those book titles have an effective SEO
                  campaign. It involves a series of steps that makes your
                  website appealing to Google, which in turn will give it a
                  higher ranking. After all, what’s the point of creating a
                  website if nobody can easily find it? With proper planning and
                  research, SEO will help send more visitors to your website.
                </p>

                <div style={{ marginTop: "2rem" }}>
                  <Row>
                    <Col lg={4} md={4}>
                      <div className="single-services-box">
                        <div className="icon">
                          <Icon.Settings />
                        </div>
                        <h3>
                          <a>Optimize Your Site</a>
                        </h3>
                        <p>
                          We apply proven methods to convince search engines to
                          place your website on the first search results page.
                        </p>
                      </div>
                    </Col>
                    <Col lg={4} md={4}>
                      <div className="single-services-box">
                        <div className="icon bg-eb6b3d">
                          <Icon.Compass />
                        </div>
                        <h3>
                          <a>Increase Your Traffic</a>
                        </h3>
                        <p>
                          With a powerful keyword selection tool, we
                          exponentially increase the number of your site
                          visitors within five months.
                        </p>
                      </div>
                    </Col>
                    <Col lg={4} md={4}>
                      <div className="single-services-box">
                        <div className="icon bg-c679e3">
                          <Icon.BookOpen />
                        </div>
                        <h3>
                          <a>Attract More Readers</a>
                        </h3>
                        <p>
                          Our targeted SEO campaign ensures that your website
                          gets discovered by the right pool of readers who won’t
                          otherwise find it.
                        </p>
                      </div>
                    </Col>
                  </Row>

                  <div style={{ marginTop: "2rem" }}>
                    <h5>Author Brand Awareness</h5>
                    <p>
                      Build your brand as an author through our SEO campaign
                      that draws new readers every day even while you sleep.
                    </p>
                  </div>

                  <div style={{ marginTop: "2rem" }}>
                    <h5>Brand Awareness Growth</h5>
                    <p>
                      Our in-house team of SEO experts will use carefully
                      researched keywords and generate content that provides
                      substance to your readers in order to grow your platform
                      and build your website’s reputation.
                    </p>
                    <p>
                      This is a guaranteed method of increasing your
                      discoverability on the web in a way that leaves a lasting
                      impact on your site visitors. By using SEO Service to
                      increase awareness of your book, your brand recognition
                      and marketing efforts will work in harmony.
                    </p>
                  </div>

                  <div style={{ marginTop: "2rem" }}>
                    <h5>SEO Strategies</h5>
                    <p>
                      From keyword research to building your website reputation
                    </p>
                    <div style={{ paddingLeft: "2rem" }}>
                      <h6>Keyword Research</h6>
                      <p>
                        Just like market study, keyword research is an essential
                        first step in SEO. We’ll find a set of keyword strings
                        with a high search volume on search engines like Google
                        or Bing using a premium SEO tool. These keyword sets are
                        based on your book’s title, genre, or theme. We’ll then
                        use these keywords to optimize your website and make it
                        more discoverable on search engines. In addition, we’ll
                        choose longer keyword strings. The longer these key
                        phrases are, the more likely people who search for them
                        will buy your book.
                      </p>
                      <h6>Backlinks</h6>
                      <p>
                        We’ll create links to your content on forums where your
                        book or theme may be relevant to generate organic
                        backlinks. We’ll also post comments on blog articles
                        with links to your web pages in order to provide more
                        SEO juices for your site. Finally, we’ll reach out to
                        several blog sites and ask them to link to your content.
                      </p>
                      <h6>Content Optimization</h6>
                      <p>
                        Keywords help match your site’s content to what most
                        people are searching for on Google. Therefore, we’ll
                        fine-tune these keywords to align your content with the
                        right type of traffic you’re looking for.
                      </p>
                      <h6>Social Profiles</h6>
                      <p>
                        Our SEO team will manually promote your content on
                        various social media websites to avoid being tagged as a
                        spam. These include:
                      </p>
                      <ul>
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>LinkedIn</li>
                        <li>Instagram</li>
                        <li>Pinterest</li>
                      </ul>
                    </div>
                  </div>
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

export default PremiumSeoService;
