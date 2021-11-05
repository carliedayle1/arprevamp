import React from "react";
import { Form, Button } from "react-bootstrap";

const Partner = () => {
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
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Contact Number</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Form.Group controlId="formFile" className="mb-3">
                  <Form.Label>File Upload</Form.Label>
                  <Form.Control type="file" />
                </Form.Group>

                <Button className="btn btn-light" type="submit">
                  Submit
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
