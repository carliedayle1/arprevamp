import "@/public/css/bootstrap.min.css";
import "animate.css";
import "@/public/css/boxicons.min.css";
import "@/public/css/flaticon.css";
import "@/public/css/slick.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "@/public/css/style.css";
import "@/public/css/responsive.css";
import "react-overlay-loader/styles.css";
import "react-toastify/dist/ReactToastify.css";

// Multicolor if you want this color comment out
import "@/public/css/colors/brink-pink-style.css";
// import "@/public/css/colors/pink-style.css";
// import '@/public/css/colors/purple-style.css'

import Layout from "@/components/_App/Layout";
import { ToastProvider } from "react-toast-notifications";
import { Provider } from "next-auth/client";
import { ToastContainer } from "react-toastify";

export default function App({ Component, pageProps }) {
  return (
    <ToastProvider
      placement="bottom-left"
      autoDismissTimeout={6000}
      autoDismiss
    >
      <Provider session={pageProps.session}>
        <Layout />
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Component {...pageProps} />
      </Provider>
    </ToastProvider>
  );
}
