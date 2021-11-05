import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import axios from "axios";
import { API_URL } from "config";

const options = {
  providers: [
    Providers.Credentials({
      name: "Credentials",

      async authorize(credentials) {
        try {
          // const { data } = await axios.post(
          //   `${process.env.NEXT_PUBLIC_API_URL}/auth/local`,
          //   {
          //     identifier: credentials.email,
          //     password: credentials.password,
          //   }
          // );

          const strapiRes = await fetch(`${API_URL}/auth/local`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              identifier: credentials.email,
              password: credentials.password,
            }),
          });

          const data = await strapiRes.json();
          const { error } = data;

          if (error) {
            return null;
          } else {
            return data;
          }
        } catch (e) {
          const errorMessage = e.response.data.message;
          // Redirecting to the login page with error message in the URL
          throw new Error(errorMessage);
          // throw new Error(errorMessage + '&email=' + credentials.email)

          // return null;
        }
      },
    }),
  ],

  session: {
    jwt: true,
  },

  callbacks: {
    // Getting the JWT token from API response
    jwt: async (token, user, account) => {
      const isSignIn = user ? true : false;
      if (isSignIn) {
        token.jwt = user.jwt;
        token.id = user.user.id;
        token.name = `${user.user.firstname} ${user.user.lastname}`;
        token.email = user.user.email;
      }
      return Promise.resolve(token);
    },

    session: async (session, user) => {
      session.jwt = user.jwt;
      session.id = user.id;
      return Promise.resolve(session);
    },
  },
};

export default (req, res) => NextAuth(req, res, options);
