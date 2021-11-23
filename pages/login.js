import React, { useState } from "react";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import Link from "next/link";
import Head from "next/head";
import { signIn } from "next-auth/client";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import { getSession } from "next-auth/client";
import Loader from "react-loader-spinner";
import { toast } from "react-toastify";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email Address is required"),
  password: yup.string().required("Password is required"),
});

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const loginSubmitHandler = async ({ email, password }) => {
    setLoading(true);
    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (result.error) {
      setLoading(false);

      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Invalid email or password",
      });
    } else {
      setLoading(false);

      toast.success("Login success", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      router.replace("/profile");
    }
  };

  return (
    <>
      <Head>
        <title>Login | Author Reputation Press</title>
      </Head>
      <Navbar />

      <PageBanner pageTitle="Login" />

      <div className="ptb-80">
        <div className="container">
          <div className="auth-form">
            <div className="auth-head">
              <p>
                Don't have an account yet? <Link href="/sign-up">Sign Up</Link>
              </p>
            </div>

            <form onSubmit={handleSubmit(loginSubmitHandler)}>
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
                  id="exampleInputPassword1"
                  {...register("password")}
                />
                {errors?.password && (
                  <p className="error-message">{errors?.password?.message}</p>
                )}
              </div>

              {/* <div className="mb-3">
                <p>
                  <Link href="/forgot-password">
                    <a>Forgot Password</a>
                  </Link>
                </p>
              </div> */}

              <button
                type="submit"
                className="btn btn-primary"
                disabled={loading}
              >
                {loading ? (
                  <Loader type="Puff" color="white" height={30} width={30} />
                ) : (
                  "Log In"
                )}
              </button>
            </form>
            {/* 
            <div className="foot">
              <p>or connect with</p>
              <ul>
                <li>
                  <a href="#" target="_blank">
                    <Icon.Mail />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <Icon.Facebook />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <Icon.Twitter />
                  </a>
                </li>
              </ul>
            </div> */}
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

export default Login;
