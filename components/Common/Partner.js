import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Loader from "react-loader-spinner";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { API_URL } from "config";
import Swal from "sweetalert2";
import PhoneInputWithCountry from "react-phone-number-input/react-hook-form";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email Address is required"),
  contact: yup.string().required("Contact is required"),
  // .matches(
  //   /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
  //   "Contact number is not valid"
  // ),
  manuscript: yup
    .mixed()
    .required("You need to provide a file")
    .test("fileSize", "The file is too large", (value) => {
      return value && Number(value[0]?.size) < Number(500000000);
    })
    .test("type", "We only support pdf files", (value) => {
      return value && value[0]?.type === "application/pdf";
    }),
});

const Partner = () => {
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
    try {
      setLoading(true);

      let manuscriptFile = data?.manuscript[0];
      delete data.manuscript;
      const request = await fetch(`${API_URL}/manuscripts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const response = await request.json();

      if (request.ok) {
        fileUploadHandler(response?.id, manuscriptFile);
        setLoading(false);
        reset({});
        Swal.fire(
          "Success",
          "Thank you for uploading your document",
          "success"
        );
      } else {
        reset({});

        setLoading(false);
        throw new Error("Invalid request");
      }
    } catch (error) {
      reset({});

      setLoading(false);
      console.error(error);
    }
  };

  const fileUploadHandler = async (id, file) => {
    const formdata = new FormData();
    formdata.append("files", file);
    formdata.append("ref", "manuscript");
    formdata.append("refId", id);
    formdata.append("field", "document");

    const upload = await fetch(`${API_URL}/upload`, {
      method: "POST",
      body: formdata,
    });

    await upload.json();

    if (!upload.ok) {
      throw new Error("Error in uploading file");
    }
  };

  return (
    <>
      <div className="ready-to-talk">
        <div className="container">
          <h3>Calling For Submissions</h3>
          <p>
            All submissions must be original text. We also accept simultaneous
            submissions and our editorial team will evaluate each manuscript
            before we decide on the next step for your work.
          </p>
        </div>
      </div>

      <div className="partner-area partner-section">
        <div className="container">
          <div className="partner-inner">
            <div
              className="row justify-content-center"
              style={{
                paddingLeft: "15rem",
                paddingRight: "15rem",
                marginTop: "3rem",
              }}
            >
              <Form onSubmit={handleSubmit(submitHandler)}>
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" {...register("name")} />
                  {errors?.name && (
                    <p className="error-message">{errors?.name?.message}</p>
                  )}
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" {...register("email")} />
                  {errors?.email && (
                    <p className="error-message">{errors?.email?.message}</p>
                  )}
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Contact Number</Form.Label>
                  {/* <Form.Control type="text" {...register("contact")} /> */}
                  <PhoneInputWithCountry
                    defaultCountry="US"
                    placeholder="Enter phone number"
                    control={control}
                    name="contact"
                    // {...register("contact")}
                  />
                  {errors?.contact && (
                    <p className="error-message">{errors?.contact?.message}</p>
                  )}
                </Form.Group>
                <Form.Group controlId="formFile" className="mb-3">
                  <Form.Label>File Upload</Form.Label>
                  <Form.Control type="file" {...register("manuscript")} />
                  {errors?.manuscript && (
                    <p className="error-message">
                      {errors?.manuscript?.message}
                    </p>
                  )}
                </Form.Group>

                <Button
                  className="btn btn-light"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? (
                    <Loader type="Puff" color="white" height={30} width={30} />
                  ) : (
                    "Submit"
                  )}
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Partner;
