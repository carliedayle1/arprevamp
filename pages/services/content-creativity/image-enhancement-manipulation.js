import Head from "next/head";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import { useRouter } from "next/router";
import { Container, Button } from "react-bootstrap";

const ImageEnhancement = () => {
  const router = useRouter();

  const backButtonHandler = () => {
    router.back();
  };

  return (
    <>
      <Head>
        <title>Image Enhancement Manipulation | Services </title>
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
                    <h2>Image Enhancement Manipulation</h2>
                    <Button
                      className="btn btn-secondary"
                      onClick={backButtonHandler}
                    >
                      Go Back
                    </Button>
                  </div>
                  <div className="bar"></div>
                </div>
                <h3>$20 Per Image</h3>

                <h5 style={{ marginTop: "2rem" }}>
                  Create Stunning Photos in Your Book with Our Image Enhancement
                  & Manipulation Service
                </h5>
                <p style={{ marginTop: "1rem" }}>
                  Depending on the images you submit to one of our artists, we
                  perform the following services at the pre-production stage:
                </p>

                <div style={{ marginTop: "2rem" }}>
                  <ul>
                    <li>
                      <h6>Image retouching</h6>
                    </li>
                    <li>
                      <h6>Texture use</h6>
                    </li>
                    <li>
                      <h6>Background manipulation and effects</h6>
                    </li>
                    <li>
                      <h6>Color blending</h6>
                    </li>
                    <li>
                      <h6>Image repairs</h6>
                    </li>
                    <li>
                      <h6>Image stitching</h6>
                    </li>
                    <li>
                      <h6>Cinema 4D use</h6>
                    </li>
                  </ul>
                  <h6 style={{ marginTop: "1rem" }}>
                    Authors may also request for specific image enhancement and
                    manipulation techniques apart from the ones mentioned above.
                  </h6>
                </div>

                <h5 style={{ marginTop: "2rem" }}>Why Choose Us</h5>
                <p style={{ marginTop: "1rem" }}>
                  Our group can change any photograph by changing its background
                  into an innovative or dreamlike one. We will modify an image
                  according to your requirements. We are a major provider of
                  image enhancement and manipulation for authors from everywhere
                  in the world. Our cost-efficient services have won us a ton of
                  acclaim from various authors and we have additionally acquired
                  a great deal of experience with photograph manipulation over
                  the course of the years so you can hope to get first rate
                  services if you work with us.
                </p>
                <p style={{ marginTop: "1rem" }}>
                  Simply send us your photograph modification or image editing
                  requirements and we will transform your photos into engaging
                  pictures. Our specialists have twenty years of combined
                  industry experience and our artists have gained knowledge
                  about cutting edge image manipulation strategies to connect
                  your pictures with the readers. Our services are cost and time
                  effective on the grounds that it is handled by individuals who
                  are genuinely proficient and skilled in image enhancement.
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

export default ImageEnhancement;
