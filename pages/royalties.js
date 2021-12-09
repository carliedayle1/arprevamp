import { useState, useEffect } from "react";
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
import { Container, Button, Modal, Form, Table } from "react-bootstrap";

import Head from "next/head";
import DirectRoyalty from "@/components/Royalties/DirectRoyalty";
import IndirectRoyalty from "@/components/Royalties/IndirectRoyalty";

import Swal from "sweetalert2";
import { toast } from "react-toastify";
import Loader from "react-loader-spinner";
import useSWR from "swr";
import { API_URL } from "config";
import { useRouter } from "next/router";
import dayjs from "dayjs";

const Royalties = ({ jwt, user }) => {
  const [show, setShow] = useState(false);
  const [showRoyalties, setShowRoyalties] = useState("");

  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);
  const [address, setAddress] = useState("");

  const router = useRouter();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleShowRoyalty = (id) => setShowRoyalties(id);
  const handleCloseRoyalty = () => setShowRoyalties("");

  const claimableRoyaltyQuery = async () => {
    const query = await fetch(`/api/royalties`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
      body: JSON.stringify({
        arpNumber: user?.arpNumber,
      }),
    });
    return query.json();
  };

  const { data: totalClaimableAmount, error } = useSWR(
    `/api/royalties`,
    claimableRoyaltyQuery
  );

  const transactionQuery = async () => {
    const query = await fetch(`${API_URL}/claim-requests?user=${user.id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return query.json();
  };

  const { data: claimTransactions, error: claimTransactionError } = useSWR(
    `${API_URL}/claim-requests?user=${user.id}`,
    transactionQuery
  );

  const claimablesQuery = async () => {
    const query = await fetch(`/api/claimables`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
      body: JSON.stringify({
        arpNumber: user?.arpNumber,
      }),
    });
    return query.json();
  };

  const { data: claimableRoyaltyIds, error: claimableError } = useSWR(
    `/api/claimables`,
    claimablesQuery
  );

  const submitHandler = async (e) => {
    e.preventDefault();

    if (file == null) {
      Swal.fire("Warning", "Please provide a file", "warning");
      return;
    }

    if (address == "") {
      Swal.fire("Warning", "Please enter an address", "warning");
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
          totalClaimableAmount: totalClaimableAmount,
          address: address,
        }),
      });

      const response = await request.json();

      if (request.ok) {
        const ids = claimableRoyaltyIds;

        if (ids.length > 0) {
          ids.map(async (item) => {
            const request = await fetch(`${API_URL}/royalties/${item}`, {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                status: "PENDING",
              }),
            });

            await request.json();

            // if (!request.ok) {
            //   throw new Error("Error in updating royalties");
            // }
          });
        }

        fileUploadHandler(response?.id);
        setShow(false);
        Swal.fire({
          title: "Request submission success",
          icon: "success",
          confirmButtonText: "Ok",
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            router.reload();
          }
        });
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
            <h3>Total Claimable Royalty: ${totalClaimableAmount ?? ""}</h3>
            <p className="error-message">
              Note: You can only claim your royalty when it reaches or exceeds
              $50.
            </p>
            {error && <p>{error}</p>}
          </div>
          {claimableError && <p>{claimableError}</p>}
          {claimTransactionError && <p>{claimTransactionError}</p>}

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
                <DirectRoyalty user={user} />
              </Container>
            </div>
          </TabPanel>

          <TabPanel>
            <div className="products-description">
              <h2>Indirect Royalties</h2>
              <Container className="mr-2" style={{ marginBottom: "3rem" }}>
                <IndirectRoyalty user={user} />
              </Container>
            </div>
          </TabPanel>
        </Tabs>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "2rem",
        }}
      >
        <h4> Transaction History</h4>
      </div>
      {claimTransactions && claimTransactions.length > 0 ? (
        <Container>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Royalties</th>
                <th>Delivery Address</th>
                <th>Date and Time Submitted</th>
                <th>Date and Time Updated</th>
                <th>Total Claimable Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {claimTransactions &&
                claimTransactions.map((item) => (
                  <tr key={item?.id}>
                    <td>
                      <span
                        className="pointer"
                        onClick={() => handleShowRoyalty(String(item?.id))}
                      >
                        VIEW ROYALTIES
                      </span>
                    </td>
                    <td>{item?.address}</td>
                    <td>
                      {dayjs(item?.created_at).format("MMM DD, YYYY h:mm A")}
                    </td>
                    <td>
                      {" "}
                      {dayjs(item?.updated_at).format("MMM DD, YYYY h:mm A")}
                    </td>
                    <td>${item?.totalClaimableAmount}</td>
                    <td>{item?.status}</td>

                    <Modal
                      show={String(showRoyalties) == String(item?.id)}
                      onHide={handleCloseRoyalty}
                      size="lg"
                      aria-labelledby="contained-modal-title-vcenter"
                      scrollable
                      style={{ marginTop: "10rem", maxHeight: "40rem" }}
                    >
                      <Modal.Header closeButton>
                        <Modal.Title>Royalties</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <div>
                          <h6>Royalties associated with this claim request</h6>
                          <div className="mr-2">
                            <h5>
                              Total Claimable Amount: $
                              {item?.totalClaimableAmount}
                            </h5>
                          </div>
                          <div className="mr-2">
                            <Table striped bordered hover size="sm">
                              <thead>
                                <tr>
                                  <th>Title</th>
                                  <th>Source</th>
                                  <th>Quantity</th>
                                  <th>Net Sale</th>
                                  <th>Author Earnings</th>
                                  <th>Type</th>
                                </tr>
                              </thead>
                              <tbody>
                                {item?.royalties.length > 0 &&
                                  item?.royalties.map((royalty) => (
                                    <tr key={royalty?.id}>
                                      <td>{royalty?.title}</td>
                                      <td>{royalty?.source}</td>
                                      <td>{royalty?.quantity}</td>
                                      <td>{royalty?.netsale}</td>
                                      <td>{royalty?.authorEarning}</td>
                                      <td>{royalty?.type}</td>
                                    </tr>
                                  ))}
                              </tbody>
                            </Table>
                          </div>
                        </div>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button
                          variant="primary"
                          style={{ backgroundColor: "#0077b5" }}
                          onClick={handleCloseRoyalty}
                        >
                          Close
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </tr>
                ))}
            </tbody>
          </Table>
        </Container>
      ) : (
        <div className="center" style={{ marginBottom: "2rem" }}>
          <p>No transactions yet...</p>
        </div>
      )}

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
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Delivery Address</Form.Label>
                  <Form.Control
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
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

  return {
    props: {
      jwt,
      user,
    },
  };
}

export default Royalties;
