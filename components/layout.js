import Head from "next/head";
import React from "react";
import Navigation from "./navigation";

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Furkan's Web Site</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navigation />
      <main>{children}</main>
      <footer>Design by Furkan</footer>
    </div>
  );
};

export default Layout;
