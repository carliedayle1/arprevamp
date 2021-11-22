import React from "react";
import Link from "@/utils/ActiveLink";
import * as Icon from "react-feather";
import Image from "next/image";
import { useSession, signOut } from "next-auth/client";

const Navbar = () => {
  const [menu, setMenu] = React.useState(true);

  const [session, loading] = useSession();

  const toggleNavbar = () => {
    setMenu(!menu);
  };

  React.useEffect(() => {
    let elementId = document.getElementById("header");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
    // window.scrollTo(0, 0);
  });

  const logoutHandler = () => {
    signOut();
  };

  const classOne = menu
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <header id="header" className="headroom navbar-style-one">
      <div className="startp-nav">
        <div className="">
          <nav className="navbar navbar-expand-md navbar-light">
            <Link href="/">
              <div className="brand-logo">
                <a onClick={toggleNavbar} className="navbar-brand">
                  <Image
                    src="/images/logo-book.png"
                    height="50%"
                    width="50%"
                    alt="logo"
                  />
                </a>
                <span className="text-logo">Author Reputation Press ®</span>
              </div>
            </Link>

            <button
              onClick={toggleNavbar}
              className={classTwo}
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="icon-bar top-bar"></span>
              <span className="icon-bar middle-bar"></span>
              <span className="icon-bar bottom-bar"></span>
            </button>

            <div className={classOne} id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link href="/" activeClassName="active">
                    <a onClick={toggleNavbar} className="nav-link">
                      Home
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/bookstore" activeClassName="active">
                    <a onClick={toggleNavbar} className="nav-link">
                      Bookstore
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/careers" activeClassName="active">
                    <a onClick={toggleNavbar} className="nav-link">
                      Careers
                    </a>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link href="/#">
                    <a onClick={(e) => e.preventDefault()} className="nav-link">
                      Services <Icon.ChevronDown />
                    </a>
                  </Link>

                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <Link href="/submit-manuscript" activeClassName="active">
                        <a onClick={toggleNavbar} className="nav-link">
                          Submit Your Manuscript
                        </a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        href="/services/content-creativity"
                        activeClassName="active"
                      >
                        <a onClick={toggleNavbar} className="nav-link">
                          Content and Creativity
                        </a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/services/powerhouse"
                        activeClassName="active"
                      >
                        <a onClick={toggleNavbar} className="nav-link">
                          Power House Platform
                        </a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/services/bookstore-fundamentals"
                        activeClassName="active"
                      >
                        <a onClick={toggleNavbar} className="nav-link">
                          Bookstore Fundamentals
                        </a>
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/services/book-events"
                        activeClassName="active"
                      >
                        <a onClick={toggleNavbar} className="nav-link">
                          Books Events and Tours
                        </a>
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <Link href="/testimonial" activeClassName="active">
                    <a onClick={toggleNavbar} className="nav-link">
                      Testimonial
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    href="https://press.authorreputationpress.com/"
                    passHref
                    activeClassName="active"
                  >
                    <a
                      onClick={toggleNavbar}
                      className="nav-link"
                      target="_blank"
                    >
                      Blog
                    </a>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link href="/about-us" activeClassName="active">
                    <a onClick={toggleNavbar} className="nav-link">
                      About Us
                    </a>
                  </Link>
                </li>
                {/* <li className="nav-item">
                  <a href="/cart" className="nav-link">
                    <Icon.ShoppingCart /> <span>{countCartItems()}</span>
                  </a>
                </li> */}
                <li className="nav-item snipcart-checkout">
                  <a className="nav-link ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                      />
                    </svg>{" "}
                    <span className="snipcart-items-count"></span>
                  </a>
                </li>

                {!session ? (
                  <li>
                    <Link href="/login">
                      <a className="btn btn-primary">
                        {!session ? "Login" : "Hello"}
                      </a>
                    </Link>
                  </li>
                ) : (
                  <li className="nav-item">
                    <Link href="/#">
                      <a
                        onClick={(e) => e.preventDefault()}
                        className="nav-link"
                      >
                        Account <Icon.ChevronDown />
                      </a>
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link href="/profile" activeClassName="active">
                          <a onClick={toggleNavbar} className="nav-link">
                            Profile
                          </a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <a onClick={logoutHandler} className="nav-link">
                          Logout
                        </a>
                      </li>
                    </ul>
                  </li>
                )}
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
