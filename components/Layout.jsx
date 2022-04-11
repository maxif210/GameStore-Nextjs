import Head from "next/head";
import Banner from "./Banner";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children, title }) => {
  return (
    <div>
      <Head>
        <title>GameStore - {title}</title>
        <meta charSet="UTF-8"></meta>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <meta name="description" content="Website for sell videogames"></meta>
      </Head>

      <Navbar />

      {children}
      <Footer background={"/Footer.webp"} />

    </div>
  );
};

export default Layout;
