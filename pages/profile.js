import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import { getSession } from "next-auth/client";
import { Loader } from "react-overlay-loader";

import Head from "next/head";
import { API_URL } from "config";
import useSWR from "swr";

const Profile = ({ jwt }) => {
  const userQuery = async () => {
    const query = await fetch(`${API_URL}/users/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
    });
    return query.json();
  };

  const { data: user, error } = useSWR(`${API_URL}/users/me`, userQuery);

  return (
    <>
      <Head>
        <title>Profile | Author Reputation Press</title>
      </Head>
      <Navbar />

      <PageBanner pageTitle="Profile" />

      {!user && <Loader fullPage loading />}

      <div className="profile-area">
        <div className="container">
          <div className="profile-box ptb-100">
            <div className="row align-items-center">
              {error ? (
                <div>{error}</div>
              ) : (
                <>
                  <div className="col-lg-4 col-md-4">
                    <div className="image">
                      <img src="/images/headshot3.jpg" alt="image" />
                    </div>
                  </div>

                  <div className="col-lg-8 col-md-8">
                    <div className="content">
                      <h3>{`${user?.firstname ?? ""} ${
                        user?.lastname ?? ""
                      }`}</h3>
                      <span className="sub-title">Author</span>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis ipsum suspendisse ultrices gravida.
                        Risus commodo viverra maecenas accumsan lacus vel
                        facilisis. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.
                      </p>

                      <ul className="info">
                        <li>
                          <span>Phone Number:</span>{" "}
                          <a href="tel:+44254588689">(+44) -2545 - 88689</a>
                        </li>
                        <li>
                          <span>Email:</span>{" "}
                          <a href="mailto:hello@sarahtaylor.com">
                            {user?.email ?? ""}
                          </a>
                        </li>
                      </ul>

                      <ul className="social-link">
                        <li>
                          <a href="#" className="d-block" target="_blank">
                            <i className="bx bxl-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#" className="d-block" target="_blank">
                            <i className="bx bxl-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#" className="d-block" target="_blank">
                            <i className="bx bxl-instagram"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#" className="d-block" target="_blank">
                            <i className="bx bxl-linkedin"></i>
                          </a>
                        </li>
                      </ul>
                      <div style={{ marginTop: "3rem" }}>
                        <button className="btn btn-secondary">
                          Edit Profile
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  const { jwt } = session;

  return {
    props: {
      jwt,
    },
  };
}

export default Profile;
