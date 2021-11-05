import React, { useState } from "react";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import Link from "next/link";
import Head from "next/head";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { getSession, signIn } from "next-auth/client";
import { API_URL } from "config";
import { useToasts } from "react-toast-notifications";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import Loader from "react-loader-spinner";

const schema = yup.object().shape({
  firstname: yup.string().required("Firstname is required"),
  lastname: yup.string().required("Lastname is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email Address is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
  confirmPassword: yup
    .string()
    .required("Confirm Password is required")
    .oneOf([yup.ref("password")], "Passwords do not match!"),
});

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const { addToast } = useToasts();

  const signUpSubmitHandler = async (data) => {
    setLoading(true);
    const firstnameLowerCase = data.firstname.toLowerCase();
    const lastnameLowerCase = data.lastname.toLowerCase();

    const firstname =
      firstnameLowerCase.charAt(0).toUpperCase() + firstnameLowerCase.slice(1);
    const lastname =
      lastnameLowerCase.charAt(0).toUpperCase() + lastnameLowerCase.slice(1);
    const email = data.email.toLowerCase();
    const username = `${firstnameLowerCase}.${lastnameLowerCase}`;
    const password = data.password;

    try {
      const query = await fetch(`${API_URL}/auth/local/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstname,
          lastname,
          username,
          email,
          password,
        }),
      });

      const queryResult = await query.json();

      if (!queryResult.statusCode) {
        const result = await signIn("credentials", {
          redirect: false,
          email,
          password,
        });

        setLoading(false);
        if (!result.error) {
          addToast("Login success", { appearance: "success" });
          router.replace("/");
        }
      } else {
        setLoading(false);
        const { message } = queryResult?.message[0]?.messages[0];
        Swal.fire("Error", message, "error");
        console.error(queryResult);
      }
    } catch (e) {
      setLoading(false);
      console.error(e);
    }

    //Sanitize input
  };

  return (
    <>
      <Head>
        <title>Sign Up | Author Reputation Press</title>
      </Head>
      <Navbar />

      <PageBanner pageTitle="Sign Up" />

      <div className="ptb-80">
        <div className="container">
          <div className="auth-form">
            <div className="auth-head">
              <p>Create a new account</p>
            </div>

            <form onSubmit={handleSubmit(signUpSubmitHandler)}>
              <div className="mb-3">
                <label className="form-label">Firstname</label>
                <input
                  type="text"
                  className="form-control"
                  {...register("firstname")}
                />
                {/* <p className="error-message">First name is required</p> */}
                {errors?.firstname && (
                  <p className="error-message">{errors?.firstname?.message}</p>
                )}
              </div>
              <div className="mb-3">
                <label className="form-label">Lastname</label>
                <input
                  type="text"
                  className="form-control"
                  {...register("lastname")}
                />
                {errors?.lastname && (
                  <p className="error-message">{errors?.lastname?.message}</p>
                )}
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  {...register("email")}
                />
                {errors?.email && (
                  <p className="error-message">{errors?.email?.message}</p>
                )}
              </div>

              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  id="exampleInputPassword1"
                  {...register("password")}
                />
                {errors?.password && (
                  <p className="error-message">{errors?.password?.message}</p>
                )}
              </div>

              <div className="mb-3">
                <label className="form-label">Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="ConfirmPassword"
                  {...register("confirmPassword")}
                />
                {errors?.confirmPassword && (
                  <p className="error-message">
                    {errors?.confirmPassword?.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                disabled={loading}
              >
                {loading ? (
                  <Loader type="Puff" color="white" height={30} width={30} />
                ) : (
                  "Sign Up"
                )}
              </button>
            </form>

            <div className="foot">
              <p>
                Already have an account yet? <Link href="/login">Login</Link>
              </p>
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

  if (session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {}, // will be passed to the page component as props
  };
}

export default SignUp;
