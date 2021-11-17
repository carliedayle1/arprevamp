import React from "react";
import Link from "next/link";
import * as Icon from "react-feather";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-area bg-f7fafd">
      <div className="container">
        <div className="row">
          <div className="col-lg-12" style={{ marginBottom: "30px" }}>
            <div className="logo">
              <Link href="/it-startup">
                <a>
                  <Image
                    src="/images/logo-2.png"
                    width="300%"
                    height="100%"
                    layout="fixed"
                    alt="logo"
                  />
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="single-footer-widget">
              <h3>Company</h3>
              <ul className="list">
                <li>
                  <Link href="/refund-policy">
                    <a>Refund Policy</a>
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy">
                    <a>Privacy Policy</a>
                  </Link>
                </li>
                <li>
                  <Link href="/delivery-policy">
                    <a>Delivery Policy</a>
                  </Link>
                </li>

                <li>
                  <Link href="/terms-of-service" passHref>
                    <a>Terms of Service</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="single-footer-widget">
              <h3>Useful Links</h3>
              <ul className="list">
                <li>
                  <Link href="/book-shipping">
                    <a>Book Shipping</a>
                  </Link>
                </li>
                <li>
                  <Link href="/faqs">
                    <a>FAQ's</a>
                  </Link>
                </li>
                <li>
                  <Link href="/get-started">
                    <a>Get Started</a>
                  </Link>
                </li>
                <li>
                  <Link href="/publishing-process">
                    <a>Publishing Process Flow</a>
                  </Link>
                </li>
                <li>
                  <Link href="/sitemap">
                    <a>Sitemap</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="single-footer-widget pl-5">
              <h3>Bookstore Fundamentals</h3>
              <ul className="list">
                <li>
                  <Link href="/home">
                    <a>Extensive Library Outreach Program</a>
                  </Link>
                </li>
                <li>
                  <Link href="/submit-manuscript">
                    <a>Ingram Distribution</a>
                  </Link>
                </li>
                <li>
                  <Link href="/services">
                    <a>Book Returnability Program</a>
                  </Link>
                </li>
                <li>
                  <Link href="/about-us">
                    <a>100% Book Royalty Program</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="single-footer-widget">
              <h3>Address and Contact Info</h3>

              <ul className="footer-contact-info">
                <li>
                  <Icon.MapPin />
                  <a
                    href="https://www.google.com/maps/place/45+Dan+Rd+%235,+Canton,+MA+02021,+USA/@42.1604657,-71.115634,17z/data=!3m1!4b1!4m5!3m4!1s0x89e4816c2abee8f1:0x16d8cabb7a7266e6!8m2!3d42.1604617!4d-71.1134453"
                    target="_blank"
                  >
                    45 Dan Road Suite 5 Canton, <br />
                    MA 02021, USA
                  </a>
                </li>
                <li>
                  <Icon.Mail />
                  Email:{" "}
                  <a href="mailto:startp@gmail.com">
                    info@authorreputationpress.com
                  </a>
                </li>
                <li>
                  <Icon.PhoneCall />
                  Main Domestic Toll Free:{" "}
                  <a href="tel:18888210229">(+1) 888 821 0229</a>
                </li>

                <li>
                  <Icon.Printer />
                  Fax: <a href="#">+1 508 545 7580</a>
                </li>
              </ul>
              <ul className="social-links">
                <li>
                  <Link href="https://www.facebook.com/AuthorReputationPressLLC/">
                    <a className="facebook" target="_blank">
                      <Icon.Facebook />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="https://twitter.com/ARPressLLC">
                    <a className="twitter" target="_blank">
                      <Icon.Twitter />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="https://www.youtube.com/channel/UC2dTSvm8_PgOT3XxdcTpiYg/featured">
                    <a className="youtube" target="_blank">
                      <Icon.Youtube />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="https://www.instagram.com/authorreputationpress/">
                    <a className="instagram" target="_blank">
                      <Icon.Instagram />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="https://www.linkedin.com/company/author-reputation-press">
                    <a className="linkedin" target="_blank">
                      <Icon.Linkedin />
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-12 col-md-12">
            <div className="copyright-area">
              <p>
                Copyright &copy; {currentYear} Author Reputation Press. All
                rights reserved
              </p>
            </div>
          </div>
        </div>
      </div>

      <img src="/images/map.png" className="map" alt="map" />

      {/* Shape Images */}
      <div className="shape1">
        <img src="/images/shape1.png" alt="shape" />
      </div>
      <div className="shape8 rotateme">
        <img src="/images/shape2.svg" alt="shape" />
      </div>
    </footer>
  );
};

export default Footer;
