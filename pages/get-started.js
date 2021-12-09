import { useState } from "react";
import Head from "next/head";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import { useRouter } from "next/router";
import { Button, Form, Row, Col, FloatingLabel } from "react-bootstrap";
import Image from "next/image";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { API_URL } from "config";
import Swal from "sweetalert2";
import Loader from "react-loader-spinner";
import PhoneInputWithCountry from "react-phone-number-input/react-hook-form";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email Address is required"),
  address: yup
    .string()
    .min(5, "Address must be at least 5 characters")
    .required("Address is required"),
  contact: yup.string().required("Contact is required"),
});

const GetStarted = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [loading, setLoading] = useState(false);

  const submitHandler = async (data) => {
    setLoading(true);
    try {
      const checkEmail = await fetch(`${API_URL}/guides?email=${data?.email}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const req = await checkEmail.json();

      if (req.length > 0) {
        Swal.fire("Error", `This data already exists in the system`, "error");
        setLoading(false);
        return;
      }

      const request = await fetch(`${API_URL}/guides`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const reply = await request.json();

      if (reply?.statusCode || reply?.statusCode === 400) {
        Swal.fire(
          "Error",
          `There's something wrong with the request, please try again`,
          "error"
        );
        setLoading(false);
        return;
      }

      Swal.fire({
        icon: "success",
        title: "Success",
        showCloseButton: true,
        html: `
        Please click the link below to download your guide. Thank you! <br />
        <a
        href="/guide/testfile.pdf"
        target="_blank"
        class="btn btn-primary mr-2"
        download
      >
        Download
      </a>`,
      });
      reset({});
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const backButtonHandler = () => {
    router.back();
  };

  return (
    <>
      <Head>
        <title>Get Author's Guide </title>
      </Head>
      <Navbar />

      <PageBanner pageTitle="Get Author's Guide" />

      <div className="services-area ptb-80 ">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-12 col-md-12 services-content">
              <div className="section-title">
                <div className="services-title-back ">
                  <h2>Get Author's Guide</h2>
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
                <h5>Please fill up the information below</h5>

                <Row className="mr-2">
                  <Col lg={6} md={6} className="center">
                    <Form
                      style={{ width: "30rem", maxWidth: "30rem" }}
                      onSubmit={handleSubmit(submitHandler)}
                    >
                      <Form.Group className="mb-3">
                        <Form.Label> Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter name"
                          {...register("name")}
                        />
                        {errors?.name && (
                          <p className="error-message">
                            {errors?.name?.message}
                          </p>
                        )}
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Enter email"
                          {...register("email")}
                        />
                        {errors?.email && (
                          <p className="error-message">
                            {errors?.email?.message}
                          </p>
                        )}
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Contact Number</Form.Label>
                        <PhoneInputWithCountry
                          defaultCountry="US"
                          placeholder="Enter phone number"
                          control={control}
                          name="contact"
                          // {...register("contact")}
                        />
                        {/* <Form.Control
                          type="text"
                          placeholder="Enter contact number"
                          {...register("contact")}
                        /> */}
                        {errors?.contact && (
                          <p className="error-message">
                            {errors?.contact?.message}
                          </p>
                        )}
                      </Form.Group>

                      <FloatingLabel
                        controlId="floatingTextarea"
                        label="Address"
                        className="mb-3"
                      >
                        <Form.Control
                          as="textarea"
                          placeholder="Leave a comment here"
                          {...register("address")}
                        />
                        {errors?.address && (
                          <p className="error-message">
                            {errors?.address?.message}
                          </p>
                        )}
                      </FloatingLabel>
                      {/* <a
                        href="/guide/testfile.pdf"
                        target="_blank"
                        download
                        className="btn btn-primary"
                      >
                        Download
                      </a> */}
                      <Button
                        variant="primary"
                        type="submit"
                        disabled={loading}
                      >
                        {loading ? (
                          <Loader
                            type="Puff"
                            color="white"
                            height={30}
                            width={30}
                          />
                        ) : (
                          "Submit"
                        )}
                      </Button>
                    </Form>
                  </Col>
                  <Col lg={6} md={6} className="center mr-2">
                    <Image
                      src="/images/books/authorsguide.jpg"
                      className="animate__animated animate__fadeInUp animate__delay-0.6s"
                      alt="Authors Guide"
                      width={500}
                      height={650}
                      layout="intrinsic"
                    />
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default GetStarted;
