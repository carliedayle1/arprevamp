import Image from "next/image";
import { useState } from "react";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { API_URL } from "config";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import Loader from "react-loader-spinner";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email address is required"),
  phone: yup
    .string()
    .required("Phone number is required")
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      "Phone number is not valid"
    ),
  subject: yup.string().required("Subject is required"),
  message: yup
    .string()
    .min(5, "Message must be at least 5 characters")
    .required("Message is required"),
});

const ContactForm = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submitHandler = async (data) => {
    setLoading(true);
    try {
      const request = await fetch(`${API_URL}/contacts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const response = await request.json();

      if (request.ok) {
        setLoading(false);
        reset();
        Swal.fire(
          "Success",
          "Our team will get to back to you sooner! Thank you for reaching us.",
          "success"
        );
      } else {
        setLoading(false);
        toast.error(
          "Something has gone wrong with our system. Please try again later.",
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
        throw new Error(response.message);
      }
    } catch (error) {
      setLoading(false);
      toast.error(
        "Something has gone wrong with our system. Please try again later.",
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
      console.error(error);
    }
  };

  return (
    <div className="contact-area ptb-80">
      <div className="container">
        <div className="section-title">
          <h2>Get In Touch With Us</h2>
          <div className="bar"></div>
          <p>Anything On your Mind. We’ll Be Glad To Assist You!</p>
        </div>

        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <Image
              src="/images/books/contact-us.jpg"
              alt="contact-us"
              width={600}
              height={400}
              layout="intrinsic"
            />
          </div>

          <div className="col-lg-6 col-md-12">
            <form id="contactForm" onSubmit={handleSubmit(submitHandler)}>
              <div className="row">
                <div className="col-lg-12 col-md-12">
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      className="form-control"
                      {...register("name")}
                    />
                    {errors?.name && (
                      <div
                        className="invalid-feedback"
                        style={{ display: "block" }}
                      >
                        {errors?.name?.message}
                      </div>
                    )}
                  </div>
                </div>

                <div className="col-lg-12 col-md-12">
                  <div className="form-group">
                    <input
                      type="text"
                      name="email"
                      placeholder="Your email address"
                      className="form-control"
                      {...register("email")}
                    />
                    {errors?.email && (
                      <div
                        className="invalid-feedback"
                        style={{ display: "block" }}
                      >
                        {errors?.email?.message}
                      </div>
                    )}
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      name="phone"
                      placeholder="Your phone number"
                      className="form-control"
                      {...register("phone")}
                    />
                    {errors?.phone && (
                      <div
                        className="invalid-feedback"
                        style={{ display: "block" }}
                      >
                        {errors?.phone?.message}
                      </div>
                    )}
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      name="subject"
                      placeholder="Your Subject"
                      className="form-control"
                      {...register("subject")}
                    />
                    {errors?.subject && (
                      <div
                        className="invalid-feedback"
                        style={{ display: "block" }}
                      >
                        {errors?.subject?.message}
                      </div>
                    )}
                  </div>
                </div>

                <div className="col-lg-12 col-md-12">
                  <div className="form-group">
                    <textarea
                      name="message"
                      cols="30"
                      rows="5"
                      placeholder="Write your message..."
                      className="form-control"
                      {...register("message")}
                    />
                    {errors?.message && (
                      <div
                        className="invalid-feedback"
                        style={{ display: "block" }}
                      >
                        {errors?.message?.message}
                      </div>
                    )}
                  </div>
                </div>

                <div className="col-lg-12 col-sm-12">
                  <button
                    type="submit"
                    className="btn btn-primary"
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
                      "Send Message"
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
