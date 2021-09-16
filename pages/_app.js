import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <meta
          httpEquiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        ></meta> */}
      </Head>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
      />
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
