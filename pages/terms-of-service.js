import Head from "next/head";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import { useRouter } from "next/router";
import { Button } from "react-bootstrap";
import Image from "next/image";

const TermsOfService = () => {
  const router = useRouter();

  const backButtonHandler = () => {
    router.back();
  };
  return (
    <>
      <Head>
        <title>Terms of Service </title>
      </Head>
      <Navbar />

      <PageBanner pageTitle="Company" />

      <div className="services-area ptb-80 ">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-12 col-md-12 services-content">
              <div className="section-title">
                <div className="services-title-back ">
                  <h2>Terms of Service</h2>
                  <Button
                    className="btn btn-secondary"
                    onClick={backButtonHandler}
                  >
                    Go Back
                  </Button>
                </div>
                <div className="bar"></div>
              </div>

              <div className="mr-2">
                <h5>Terms</h5>
                <p>
                  By accessing the website at https://authorreputationpress.com,
                  you are agreeing to be bound by these terms of service, all
                  applicable laws, and regulations, and agree that you are
                  responsible for compliance with any applicable local laws. If
                  you do not agree with any of these terms, you are prohibited
                  from using or accessing this site. The materials contained in
                  this website are protected by applicable copyright and
                  trademark law.
                </p>
              </div>

              <div className="mr-2">
                <h5>Use Licence</h5>
                <p>
                  Permission is granted to temporarily download one copy of the
                  materials (information or software) on Author Reputation
                  Press’ website for personal, non-commercial transitory viewing
                  only. This is the grant of a license, not a transfer of title,
                  and under this license you may not:
                </p>
                <p> modify or copy the materials;</p>
                <p>
                  {" "}
                  use the materials for any commercial purpose, or for any
                  public display (commercial or non- commercial);
                </p>
                <p>
                  {" "}
                  attempt to decompile or reverse engineer any software
                  contained on Author Reputation Press’ website;
                </p>
                <p>
                  {" "}
                  remove any copyright or other proprietary notations from the
                  materials; or
                </p>
                <p>
                  {" "}
                  transfer the materials to another person or “mirror” the
                  materials on any other server.
                </p>
                <p>
                  This license shall automatically terminate if you violate any
                  of these restrictions and may be terminated by Author
                  Reputation Press at any time. Upon terminating your viewing of
                  these materials or upon the termination of this license, you
                  must destroy any downloaded materials in your possession
                  whether in electronic or printed format.
                </p>
              </div>

              <div className="mr-2">
                <h5>Disclaimer</h5>
                <p>
                  The materials on Author Reputation Press’ website are provided
                  on an ‘as is’ basis. Author Reputation Press makes no
                  warranties, expressed or implied, and hereby disclaims and
                  negates all other warranties including, without limitation,
                  implied warranties or conditions of merchantability, fitness
                  for a particular purpose, or non-infringement of intellectual
                  property or other violation of rights.
                </p>
                <p>
                  Further, Author Reputation Press does not warrant or make any
                  representations concerning the accuracy, likely results, or
                  reliability of the use of the materials on its website or
                  otherwise relating to such materials or on any sites linked to
                  this site.
                </p>
              </div>

              <div className="mr-2">
                <h5>Limitations </h5>
                <p>
                  In no event shall Author Reputation Press or its suppliers be
                  liable for any damages (including, without limitation, damages
                  for loss of data or profit, or due to business interruption)
                  arising out of the use or inability to use the materials on
                  Author Reputation Press’ website, even if Author Reputation
                  Press or Author Reputation Press authorized representative has
                  been notified orally or in writing of the possibility of such
                  damage. Because some jurisdictions do not allow limitations on
                  implied warranties, or limitations of liability for
                  consequential or incidental damages, these limitations may not
                  apply to you.
                </p>
              </div>
              <div className="mr-2">
                <h5>Accuracy of Materials</h5>
                <p>
                  The materials appearing on Author Reputation Press website
                  could include technical, typographical, or photographic
                  errors. Author Reputation Press does not warrant that any of
                  the materials on its website are accurate, complete, or
                  current. Author Reputation Press may make changes to the
                  materials contained on its website at any time without notice.
                  However, Author Reputation Press does not make any commitment
                  to update the materials.
                </p>
              </div>

              <div className="mr-2">
                <h5>Links</h5>
                <p>
                  Author Reputation Press has not reviewed all of the sites
                  linked to its website and is not responsible for the contents
                  of any such linked site. The inclusion of any link does not
                  imply endorsement by Author Reputation Press of the site. Use
                  of any such linked website is at the user’s own risk.
                </p>
              </div>

              <div className="mr-2">
                <h5>Modifications</h5>
                <p>
                  Author Reputation Press may revise these terms of service for
                  its website at any time without notice. By using this website,
                  you are agreeing to be bound by the then current version of
                  these terms of service.
                </p>
              </div>

              <div className="mr-2">
                <h5>Governing Law</h5>
                <p>
                  These terms and conditions are governed by and construed in
                  accordance with the laws of the State Massachusetts and you
                  irrevocably submit to the exclusive jurisdiction of the courts
                  in that State or location.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default TermsOfService;
