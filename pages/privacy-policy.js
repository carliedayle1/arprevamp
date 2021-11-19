import Head from "next/head";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import { useRouter } from "next/router";
import { Accordion, Button } from "react-bootstrap";

const PrivacyPolicy = () => {
  const router = useRouter();

  const backButtonHandler = () => {
    router.back();
  };
  return (
    <>
      <Head>
        <title>Privacy Policy </title>
      </Head>
      <Navbar />

      <PageBanner pageTitle="Company" />

      <div className="services-area ptb-80 ">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-12 col-md-12 services-content">
              <div className="section-title">
                <div className="services-title-back ">
                  <h2>Privacy Policy</h2>
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
                <p>
                  This privacy policy has been compiled to better serve those
                  who are concerned with how their ‘Personally Identifiable
                  Information’ (PII) is being used online. PII, as described in
                  US privacy law and information security, is information that
                  can be used on its own or with other information to identify,
                  contact, or locate a single person, or to identify an
                  individual in context. Please read our privacy policy
                  carefully to get a clear understanding of how we collect, use,
                  protect or otherwise handle your Personally Identifiable
                  Information in accordance with our website.
                </p>
              </div>

              <div className="mr-2">
                <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      What Personal Information do we collect from the people
                      that visit our Blog, Website or App?
                    </Accordion.Header>
                    <Accordion.Body>
                      When ordering or registering on our site, as appropriate,
                      you may be asked to enter your name, email address, phone
                      number or other details to help you with your experience.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      When do we collect information?
                    </Accordion.Header>
                    <Accordion.Body>
                      We collect information from you when you subscribe to a
                      newsletter, fill out a form or enter information on our
                      site.
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="2">
                    <Accordion.Header>
                      How do we use your personal information?
                    </Accordion.Header>
                    <Accordion.Body>
                      We may use the information we collect from you when you
                      sign up for our newsletter or use certain other site
                      features in the following ways:
                      <ul className="mr-2" style={{ lineHeight: "2rem" }}>
                        <li>
                          To personalize your experience and to allow us to
                          deliver the type of content and product offerings in
                          which you are most interested.
                        </li>
                        <li>
                          To improve our website in order to better serve you.
                        </li>
                        <li>
                          To allow us to better service you in responding to
                          your customer service requests.
                        </li>
                        <li>
                          To follow up with them after correspondence (live
                          chat, email or phone inquiries)
                        </li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="3">
                    <Accordion.Header>
                      How do we use your financial information?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p style={{ color: "black" }}>
                        We only provide articles and information. We never ask
                        for credit card numbers. We use regular Malware
                        Scanning. Your personal information is contained behind
                        secured networks and is only accessible by a limited
                        number of persons who have special access rights to such
                        systems, and are required to keep the information
                        confidential. In addition, all sensitive/credit
                        information you supply is encrypted via Secure Socket
                        Layer (SSL) technology.
                      </p>
                      <p style={{ color: "black" }}>
                        We implement a variety of security measures when a user
                        enters, submits, or accesses their information to
                        maintain the safety of your personal information. All
                        transactions are processed through a gateway provider
                        and are not stored or processed on our servers longer
                        than 30 days in order/
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="4">
                    <Accordion.Header>Do we use "Cookies"?</Accordion.Header>
                    <Accordion.Body>
                      <p style={{ color: "black" }}>
                        We do not use cookies for tracking purposes.
                      </p>
                      <p style={{ color: "black" }}>
                        You can choose to have your computer warn you each time
                        a cookie is being sent, or you can choose to turn off
                        all cookies. You do this through your browser settings.
                        Since browser is a little different, look at your
                        browser’s Help Menu to learn the correct way to modify
                        your cookies.
                      </p>
                      <p style={{ color: "black" }}>
                        If you turn cookies off, Some of the features that make
                        your site experience more efficient may not function
                        properly.that make your site experience more efficient
                        and may not function properly.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="5">
                    <Accordion.Header>Third-Party Disclosure</Accordion.Header>
                    <Accordion.Body>
                      <p style={{ color: "black" }}>
                        We do not sell, trade, or otherwise transfer to outside
                        parties your Personally Identifiable Information unless
                        we provide users with advance notice. This does not
                        include website hosting partners and other parties who
                        assist us in operating our website, conducting our
                        business, or serving our users, so long as those parties
                        agree to keep this information confidential. We may also
                        release information when it’s release is appropriate to
                        comply with the law, enforce our site policies, or
                        protect ours or others’ rights, property or safety.
                      </p>
                      <p style={{ color: "black" }}>
                        However, non-personally identifiable visitor information
                        may be provided to other parties for marketing,
                        advertising, or other uses.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="6">
                    <Accordion.Header>Third-Party Links</Accordion.Header>
                    <Accordion.Body>
                      <p style={{ color: "black" }}>
                        Occasionally, at our discretion, we may include or offer
                        third-party products or services on our website. These
                        third-party sites have separate and independent privacy
                        policies. We therefore have no responsibility or
                        liability for the content and activities of these linked
                        sites. Nonetheless, we seek to protect the integrity of
                        our site and welcome any feedback about these sites.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="7">
                    <Accordion.Header>Google</Accordion.Header>
                    <Accordion.Body>
                      <p style={{ color: "black" }}>
                        Google’s advertising requirements can be summed up by
                        Google’s Advertising Principles. They are put in place
                        to provide a positive experience for users.
                      </p>
                      <p style={{ color: "black" }}>
                        We use Google AdSense Advertising on our website.
                      </p>
                      <p style={{ color: "black" }}>
                        Google, as a third-party vendor, uses cookies to serve
                        ads on our site. Google’s use of the DART cookie enables
                        it to serve ads to our users based on previous visits to
                        our site and other sites on the Internet. Users may
                        opt-out of the use of the DART cookie by visiting the
                        Google Ad and Content Network privacy policy.
                      </p>
                      <p style={{ color: "black" }}>
                        We have implemented the following:
                      </p>
                      <ul style={{ lineHeight: "2rem" }}>
                        <li>Google Display Network Impression Reporting</li>
                        <li>Demographics and Interests Reporting </li>
                      </ul>

                      <p style={{ color: "black" }}>
                        We, along with third-party vendors such as Google use
                        first-party cookies (such as the Google Analytics
                        cookies) and third-party cookies (such as the
                        DoubleClick cookie) or other third-party identifiers
                        together to compile data regarding user interactions
                        with ad impressions and other ad service functions as
                        they relate to our website.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="8">
                    <Accordion.Header>Opting Out</Accordion.Header>
                    <Accordion.Body>
                      <p style={{ color: "black" }}>
                        Users can set preferences for how Google advertises to
                        you using the Google Ad Settings page. Alternatively,
                        you can opt out by visiting the Network Advertising
                        Initiative Opt Out page or by using the Google Analytics
                        Opt Out Browser add on.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="9">
                    <Accordion.Header>
                      California Online Privacy Protection Act
                    </Accordion.Header>
                    <Accordion.Body>
                      <p style={{ color: "black" }}>
                        CalOPPA is the first state law in the nation to require
                        commercial websites and online services to post a
                        privacy policy. The law’s reach stretches well beyond
                        California to require any person or company in the
                        United States (and conceivably the world) that operates
                        websites collecting Personally Identifiable Information
                        from California consumers to post a conspicuous privacy
                        policy on its website stating exactly the information
                        being collected and those individuals or companies with
                        whom it is being shared. – See more at:
                      </p>

                      <p style={{ color: "black" }}>
                        According to CalOPPA, we agree to the following:
                      </p>
                      <ul style={{ lineHeight: "2rem" }}>
                        <li>Users can visit our site anonymously.</li>
                        <li>
                          Once this privacy policy is created, we will add a
                          link to it on our home page or as a minimum, on the
                          first significant page after entering our website.
                        </li>
                        <li>
                          Our Privacy Policy link includes the word ‘Privacy’
                          and can easily be found on the page specified above.
                        </li>
                      </ul>

                      <p style={{ color: "black" }}>
                        According to CalOPPA, we agree to the following:
                      </p>
                      <ul>
                        <li>On our Privacy Policy Page</li>
                      </ul>

                      <p style={{ color: "black" }}>
                        Can change your personal information:
                      </p>

                      <ul style={{ lineHeight: "2rem" }}>
                        <li>By emailing us</li>
                        <li>By calling us </li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="10">
                    <Accordion.Header>
                      How does our site handle do not track signals?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p style={{ color: "black" }}>
                        We honor Do Not Track signals and Do Not Track, plant
                        cookies, or use advertising when a Do Not Track (DNT)
                        browser mechanism is in place.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="11">
                    <Accordion.Header>
                      Does our site allow Third-Party behavioral Tracking?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p style={{ color: "black" }}>
                        It’s also important to note that we allow third-party
                        behavioral tracking.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="12">
                    <Accordion.Header>
                      COPPA (Children Online Privacy Protection Act)
                    </Accordion.Header>
                    <Accordion.Body>
                      <p style={{ color: "black" }}>
                        When it comes to the collection of personal information
                        from children under the age of 13 years old, the
                        Children’s Online Privacy Protection Act (COPPA) puts
                        parents in control. The Federal Trade Commission, United
                        States’ consumer protection agency, enforces the COPPA
                        Rule, which spells out what operators of websites and
                        online services must do to protect children’s privacy
                        and safety online.
                      </p>
                      <p style={{ color: "black" }}>
                        We do not specifically market to children under the age
                        of 13 years old.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="13">
                    <Accordion.Header>
                      Fair Information Practices
                    </Accordion.Header>
                    <Accordion.Body>
                      <p style={{ color: "black" }}>
                        The Fair Information Practices Principles form the
                        backbone of privacy law in the United States and the
                        concepts they include have played a significant role in
                        the development of data protection laws around the
                        globe. Understanding the Fair Information Practice
                        Principles and how they should be implemented is
                        critical to comply with the various privacy laws that
                        protect personal information.
                      </p>
                      <p style={{ color: "black" }}>
                        In order to be in line with Fair Information Practices
                        we will take the following responsive action, should a
                        data breach occur:
                      </p>
                      <p style={{ color: "black" }}>
                        We will notify you via email
                      </p>
                      <ul>
                        <li>Within 1 business day</li>
                      </ul>
                      <p style={{ color: "black" }}>
                        We will notify you via phone call
                      </p>
                      <ul>
                        <li>Within 1 business day </li>
                      </ul>
                      <p style={{ color: "black" }}>
                        We also agree to the Individual Redress Principle which
                        requires that individuals have the right to legally
                        pursue enforceable rights against data collectors and
                        processors who fail to adhere to the law. This principle
                        requires not only that individuals have enforceable
                        rights against data users, but also that individuals
                        have recourse to courts or government agencies to
                        investigate and/or prosecute non-compliance by data
                        processors.
                      </p>
                      <p style={{ color: "black" }}>
                        For questions and comments about this Privacy Policy,
                        you can contact us at
                      </p>
                      <p style={{ color: "black" }}>
                        45 Dan Road Suite 36 Canton, MA 02021
                      </p>{" "}
                      <p style={{ color: "black" }}>PHONE: 1-800-220-7660</p>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default PrivacyPolicy;
