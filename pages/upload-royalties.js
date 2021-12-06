import { useState } from "react";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import Head from "next/head";
import { Button, Form, Row, Col, Table } from "react-bootstrap";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { API_URL } from "config";
import Swal from "sweetalert2";
import XLSX from "xlsx";
import { Loader } from "react-overlay-loader";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email Address is required"),
  type: yup.string().required("Royalty type is required"),
  royalty: yup
    .mixed()
    .required("You need to provide a file")
    .test("type", "We only support excel and csv files", (value) => {
      return value && value[0]?.type === "application/vnd.ms-excel";
    }),
});

const UploadRoyalties = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const submitHandler = async (data) => {
    setLoading(true);

    const userRequest = await fetch(`${API_URL}/users?email=${data?.email}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const userResponse = await userRequest.json();

    if (userRequest.ok) {
      if (userResponse.length > 0) {
        if (userResponse[0].accountType !== "admin") {
          Swal.fire(
            "Warning",
            `You do not have the permission to upload this document`,
            "warning"
          );
          setLoading(false);
          return;
        }
        let errors = false;
        try {
          const promise = new Promise((resolve, reject) => {
            const fileReader = new FileReader();

            fileReader.readAsArrayBuffer(data?.royalty[0]);

            fileReader.onload = (e) => {
              const bufferArray = e.target.result;
              const wb = XLSX.read(bufferArray, { type: "buffer" });
              const wsname = wb.SheetNames[0];
              const ws = wb.Sheets[wsname];
              const i = XLSX.utils.sheet_to_json(ws);

              resolve(i);
            };

            fileReader.onerror = (error) => {
              reject(error);
              throw new Error(error);
            };
          });

          promise.then(async (a) => {
            const changed = a.map((x) => {
              return Object.assign(x, { Date: excelDateToJSDate(x?.Date) });
            });

            changed.map(async (y) => {
              const createRoyalty = {
                arpNumber: String(y["Arp Number"]).toUpperCase(),
                date: y?.Date,
                isbn: String(y?.ISBN),
                authorEarning: y["author earning"],
                claimed:
                  y?.claimed === "No" || y?.claimed === "no" ? false : true,
                bookFormat: y?.format,
                netsale: y?.netsale,
                percentage: parseFloat(y?.percentage) * 100,
                quantity: y?.quantity,
                source: y?.source,
                title: String(y?.title),
                withdrawEligible: y["withdraw eligible"],
                status:
                  y["withdraw eligible"] === "No" ||
                  y["withdraw eligible"] == "no"
                    ? "For claim"
                    : "",
                type: data?.type,
                uploadedBy: data?.email,
              };

              const request = await fetch(`${API_URL}/royalties`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(createRoyalty),
              });

              const response = await request.json();

              if (!request.ok) {
                errors = true;
                throw new Error("Error in uploading royalties to database");
              }
            });
          });
        } catch (error) {
          console.error(error);
        } finally {
          if (!errors) {
            Swal.fire("Success", `Upload success!`, "success");
          }
          setLoading(false);
          reset();
        }
      } else {
        Swal.fire("Warning", `User do not exist`, "warning");
        setLoading(false);
        return;
      }
    } else {
      setLoading(false);
      Swal.fire(
        "Error",
        `There's an error in uploading the document, please check the file and try again.`,
        "error"
      );
      return;
    }
  };

  const excelDateToJSDate = (serial) => {
    var utc_days = Math.floor(serial - 25569);
    var utc_value = utc_days * 86400;
    var date_info = new Date(utc_value * 1000);

    var fractional_day = serial - Math.floor(serial) + 0.0000001;

    var total_seconds = Math.floor(86400 * fractional_day);

    var seconds = total_seconds % 60;

    total_seconds -= seconds;

    var hours = Math.floor(total_seconds / (60 * 60));
    var minutes = Math.floor(total_seconds / 60) % 60;

    return new Date(
      date_info.getFullYear(),
      date_info.getMonth(),
      date_info.getDate(),
      hours,
      minutes,
      seconds
    ).toString();
  };

  return (
    <>
      <Head>
        <title>Upload Royalties</title>
      </Head>
      <Navbar />

      <PageBanner pageTitle="Upload Royalties" />
      <div className="services-area ptb-80 ">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-12 col-md-12 services-content">
              <div className="section-title">
                <h2>Upload</h2>
                <div className="bar"></div>
                <p>Fill in the information below</p>
              </div>
              {loading && <Loader fullPage loading />}
              <Form onSubmit={handleSubmit(submitHandler)}>
                <Form.Group
                  as={Row}
                  className="mb-3"
                  controlId="formPlaintextEmail"
                >
                  <Form.Label column sm="2">
                    Email
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control type="email" {...register("email")} />
                    {errors?.email && (
                      <p className="error-message">{errors?.email?.message}</p>
                    )}
                  </Col>
                </Form.Group>

                <Row className="mr-2">
                  <Col sm={2}>
                    <Form.Label>Royalty type</Form.Label>
                  </Col>
                  <Col sm={10}>
                    <Form.Select
                      aria-label="Default select example"
                      {...register("type")}
                    >
                      <option value="">Select royalty type</option>
                      <option value="Direct">Direct</option>
                      <option value="Indirect">Indirect</option>
                    </Form.Select>
                    {errors?.type && (
                      <p className="error-message">{errors?.type?.message}</p>
                    )}
                  </Col>
                </Row>

                <Form.Group controlId="formFile" className="mb-3 mr-2">
                  <Form.Label>Upload excel/csv file</Form.Label>
                  <Form.Control type="file" {...register("royalty")} />
                  {errors?.royalty && (
                    <p className="error-message">{errors?.royalty?.message}</p>
                  )}
                </Form.Group>

                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Button className="btn btn-primary" type="submit">
                    Submit
                  </Button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UploadRoyalties;
