import Head from "next/head";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import { useRouter } from "next/router";
import { Container, Button } from "react-bootstrap";
import Link from "next/link";
import * as Icon from "react-feather";

const OnlineVideoDiscovery = () => {
  const router = useRouter();

  const backButtonHandler = () => {
    router.back();
  };

  return (
    <>
      <Head>
        <title>Online Video Discovery</title>
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
                    <h2>Online Video Discovery</h2>
                    <Button
                      className="btn btn-secondary"
                      onClick={backButtonHandler}
                    >
                      Go Back
                    </Button>
                  </div>
                  <div className="bar"></div>
                </div>
                <h5>Bolster Your Discoverability Online</h5>
                <p style={{ marginTop: "1rem" }}>
                  Let the whole world know about your work. Author Reputation
                  Press has been providing authors with a platform to be
                  discovered by major entertainment companies and land interview
                  engagements both for online and TV broadcast.
                </p>
                <p style={{ marginTop: "1rem" }}>
                  ​Our marketing services are geared toward creating fun and
                  entertaining materials including videos to promote your
                  authorship. Our creative methods have been proven to draw huge
                  readerships for our authors, and you can be one of them.
                </p>

                <p style={{ marginTop: "1rem" }}>
                  ​Through our custom author video services, you can reach out
                  to more readers and build a deeper connection with them. Our
                  video marketing services help millions of readers get to know
                  our authors on a more personal level. Tell them your story
                  now!
                </p>

                <div style={{ marginTop: "2rem" }}>
                  <div className="row">
                    <div className="col-lg-4 col-md-6">
                      <div className="single-blog-post-item">
                        <div className="post-image">
                          <Link href="/book-trailer/professional-basic">
                            <a>
                              <img src="/images/video/video1.jpg" alt="image" />
                            </a>
                          </Link>
                        </div>

                        <div className="post-content">
                          <h3>
                            <Link href="/book-trailer/professional-basic">
                              <a>Professional Basic Book Trailer</a>
                            </Link>
                          </h3>
                          <p style={{ marginTop: "2rem" }}>
                            Our Professional Basic Book Trailer will help you
                            capture the attention of readers and the media alike
                            with text and 2D graphics.
                          </p>

                          <Link href="/book-trailer/professional-basic">
                            <a className="read-more-btn">
                              Read More <Icon.PlusCircle />
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                      <div className="single-blog-post-item">
                        <div className="post-image">
                          <Link href="/book-trailer/intermediate">
                            <a>
                              <img src="/images/video/video2.jpg" alt="image" />
                            </a>
                          </Link>
                        </div>

                        <div className="post-content">
                          <h3>
                            <Link href="/book-trailer/intermediate">
                              <a>Intermediate Book Trailer</a>
                            </Link>
                          </h3>
                          <p style={{ marginTop: "2rem" }}>
                            Our Intermediate Book Trailer is a more engaging and
                            dynamic way of engaging with your readers through
                            motions and layers
                          </p>

                          <Link href="/book-trailer/intermediate">
                            <a className="read-more-btn">
                              Read More <Icon.PlusCircle />
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                      <div className="single-blog-post-item">
                        <div className="post-image">
                          <Link href="/book-trailer/advanced">
                            <a>
                              <img src="/images/video/video3.jpg" alt="image" />
                            </a>
                          </Link>
                        </div>

                        <div className="post-content">
                          <h3>
                            <Link href="/book-trailer/advanced">
                              <a>Advanced Book Trailer</a>
                            </Link>
                          </h3>
                          <p style={{ marginTop: "2rem" }}>
                            Our Advanced Book Trailer brings your book’s texts
                            to life in a motion picture-like fashion.
                          </p>

                          <Link href="/book-trailer/advanced">
                            <a className="read-more-btn">
                              Read More <Icon.PlusCircle />
                            </a>
                          </Link>
                        </div>
                      </div>
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

export default OnlineVideoDiscovery;
