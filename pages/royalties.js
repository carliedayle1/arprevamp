import { useState } from "react";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import { getSession } from "next-auth/client";
import dynamic from "next/dynamic";
const Tabs = dynamic(
  import("react-tabs").then((mod) => mod.Tabs),
  { ssr: false }
);
import { Tab, TabList, TabPanel } from "react-tabs";
import { Container, Button, Modal, Form } from "react-bootstrap";

import Head from "next/head";
import { API_URL } from "config";
import DirectRoyalty from "@/components/Royalties/DirectRoyalty";
import IndirectRoyalty from "@/components/Royalties/IndirectRoyalty";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import Loader from "react-loader-spinner";

const schema = yup.object().shape({
  claim: yup
    .mixed()
    .required("You need to provide a file")
    .test("type", "We only support pdf files", (value) => {
      return value && value[0]?.type === "application/pdf";
    }),
});

const Royalties = ({
  directTotal,
  indirectTotal,
  user,
  totalClaimableAmount,
  claimableRoyaltyIds,
}) => {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const submitHandler = async (e) => {
    e.preventDefault();

    if (file == null) {
      Swal.fire("Error", "Please provide a file", "error");
      return;
    }

    if (file?.type !== "application/pdf") {
      Swal.fire(
        "Error",
        "Invalid file type. We only support PDF files",
        "error"
      );
      return;
    }
    setLoading(true);

    try {
      const request = await fetch(`${API_URL}/claim-requests`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: user?.id,
          royalties: claimableRoyaltyIds,
          status: "PENDING",
        }),
      });

      const response = await request.json();

      if (request.ok) {
        fileUploadHandler(response?.id);
        setShow(false);
        Swal.fire("Success", "Request submission success", "success");
      } else {
        toast.error(
          "There is something wrong with the request, please try again later.",
          {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          }
        );
      }
    } catch (error) {
      setLoading(false);
      console.error(error);
    } finally {
      setShow(false);
      setLoading(false);
      reset();
    }
  };

  const fileUploadHandler = async (id) => {
    const formdata = new FormData();
    formdata.append("files", file);
    formdata.append("ref", "claim-request");
    formdata.append("refId", id);
    formdata.append("field", "w9Form");

    const upload = await fetch(`${API_URL}/upload`, {
      method: "POST",
      body: formdata,
    });

    const res = await upload.json();

    if (!upload.ok) {
      throw new Error("Error in uploading file");
    }
  };

  const fileChangeHandler = (e) => {
    setFile(e.target.files[0] == undefined ? null : e.target.files[0]);
  };
  return (
    <>
      <Head>
        <title>Royalties | Author Reputation Press</title>
      </Head>
      <Navbar />

      <PageBanner pageTitle="Royalties" />

      <Container className="mr-2">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <h3>Total Claimable Royalty: ${totalClaimableAmount}</h3>
            <p className="error-message">
              Note: You can only claim your royalty when it exceeds $50 and
              above.
            </p>
          </div>

          {totalClaimableAmount < 50 ? (
            <Button
              className="btn btn-primary"
              style={{ backgroundColor: "gray" }}
              disabled={totalClaimableAmount < 50}
            >
              Claim Royalty
            </Button>
          ) : (
            <Button className="btn btn-primary" onClick={handleShow}>
              Claim Royalty
            </Button>
          )}
        </div>
      </Container>

      <div className="products-details-tabs">
        <Tabs>
          <TabList>
            <Tab>Direct</Tab>
            <Tab>Indirect</Tab>
          </TabList>

          <TabPanel>
            <div className="products-description">
              <h2>Direct Royalties</h2>
              <Container className="mr-2" style={{ marginBottom: "3rem" }}>
                <DirectRoyalty directTotal={directTotal} user={user} />
              </Container>
            </div>
          </TabPanel>

          <TabPanel>
            <div className="products-description">
              <h2>Indirect Royalties</h2>
              <Container className="mr-2" style={{ marginBottom: "3rem" }}>
                <IndirectRoyalty indirectTotal={indirectTotal} user={user} />
              </Container>
            </div>
          </TabPanel>
        </Tabs>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Form onSubmit={submitHandler}>
          <Modal.Header closeButton>
            <Modal.Title>Claim Royalty Request</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <h6>
                Steps in submitting a formal claim request to Author Reputation
                Press LLC
              </h6>
              <div className="mr-2">
                <p>
                  1. Download the W9 Form by clicking this link -&gt;{" "}
                  <a href="/royalty/W9FORM.pdf" target="_blank" download>
                    <strong>DOWNLOAD W9 FORM</strong>
                  </a>
                </p>
                <p>2. Print the downloaded form.</p>
                <p>
                  3. Fill the form religously and make sure you sign it in a
                  handwritten manner.
                </p>
                <p>
                  4. After you sign the document,{" "}
                  <strong>scan the document and upload it here</strong>
                </p>
                <p>5. Please double check the file before uploading.</p>

                <Form.Group className="mb-3">
                  <Form.Label>Upload signed W9 Form</Form.Label>
                  <Form.Control
                    type="file"
                    onChange={(e) => fileChangeHandler(e)}
                  />
                  {errors?.claim && (
                    <p className="error-message">{errors?.claim?.message}</p>
                  )}
                </Form.Group>

                <p>
                  6. Click the <strong>SUBMIT REQUEST</strong> button
                </p>
                <p>
                  7. After you successfully submitted the request. Our
                  representative will contact you to guide you in the process.
                </p>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="primary"
              style={{ backgroundColor: "#0077b5" }}
              onClick={handleClose}
            >
              Close
            </Button>
            <Button variant="primary" type="submit" disabled={loading}>
              {loading ? (
                <Loader type="Puff" color="white" height={30} width={30} />
              ) : (
                "Submit Request"
              )}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
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

  const query = await fetch(`${API_URL}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwt}`,
    },
  });
  const user = await query.json();

  if (!query.ok) {
    throw new Error("Invalid user");
  }

  const requestDirectTotal = await fetch(
    `${API_URL}/royalties?arpNumber=${user?.arpNumber}&type=Direct`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const directTotal = await requestDirectTotal.json();

  const requestIndirectTotal = await fetch(
    `${API_URL}/royalties?arpNumber=${user?.arpNumber}&type=Indirect`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const indirectTotal = await requestIndirectTotal.json();

  if (!requestIndirectTotal.ok) {
    throw new Error("Error in fetching indirect royalties");
  }

  const royalties = directTotal.concat(indirectTotal);
  let totalClaimableAmount = 0;
  let claimableRoyaltyIds = [];
  if (royalties.length > 0) {
    const filterClaimableEarnings = royalties.filter(
      (item) => item?.claimed === false
    );

    if (filterClaimableEarnings.length > 0) {
      const getAllAuthorEarnings = filterClaimableEarnings.map(
        (item) => item?.authorEarning
      );

      claimableRoyaltyIds = filterClaimableEarnings.map((item) => item?.id);

      totalClaimableAmount = getAllAuthorEarnings.reduce(
        (prev, current) => parseFloat(prev) + parseFloat(current)
      );
    }
  }

  return {
    props: {
      jwt,
      directTotal: directTotal.length,
      user,
      indirectTotal: indirectTotal.length,
      totalClaimableAmount: parseFloat(totalClaimableAmount).toFixed(2),
      claimableRoyaltyIds,
    },
  };
}

export default Royalties;
