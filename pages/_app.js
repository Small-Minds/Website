import { Anchor, Grommet, Header, Nav, Box, Menu } from "grommet";
import { ContactInfo } from "grommet-icons";
import "../styles/globals.css";
import SmallMindsTheme from "../styles/theme.json";
import Head from "next/head";
import { useState } from "react";
import Link from "next/link";

const headerStyle = { position: "sticky", top: 0 };

function MyApp({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Grommet theme={SmallMindsTheme} themeMode={darkMode ? "dark" : "light"}>
      <Head>
        <title>{pageProps.title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="Description" content={pageProps.description}></meta>
      </Head>
      <Box height={{ min: "100vh" }}>
        <Header background="white" pad="small" style={headerStyle}>
          <Box direction="row" pad="small">
            <Link href="/">
              <Anchor label="SM" color="primary" />
            </Link>
          </Box>
          <Box direction="row" pad="small">
            <Nav direction="row">
              <Link href="/contact">
                <Anchor label="Contact" />
              </Link>
              <Link href="/members">
                <Anchor label="Members" />
              </Link>
              <Link href="/articles">
                <Anchor label="Articles" />
              </Link>
            </Nav>
          </Box>
        </Header>
        <Component {...pageProps} />
      </Box>
    </Grommet>
  );
}

export default MyApp;

/**
 * getStaticProps getStaticProps is Nextjs Function which we can call from our page.
 * It will return the props to our component. just like we have props to our index
 */

export async function getStaticProps() {
  const siteData = await import(`../config.json`);

  return {
    props: {
      title: siteData.default.title,
      description: siteData.default.description,
    },
  };
}
