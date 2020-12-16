import { Anchor, Grommet, Header, Nav, Box, Menu } from "grommet";
import "../styles/globals.css";
import { theme } from "../styles/theme.js";
import Head from "next/head";
import { useState } from "react";

const headerStyle = { position: "sticky", top: 0 };

function MyApp({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Grommet theme={theme} themeMode={darkMode ? "dark" : "light"}>
      <Head>
        <title>Small Minds</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box height={{ min: "100vh" }}>
        <Header background="primary" pad="small" style={headerStyle}>
          <Box direction="row" pad="small">
            <Anchor href="/" label="Small Minds" color="primary" />
          </Box>
          <Nav direction="row" pad="small">
            <Menu
              label="Menu"
              items={[
                { label: "Articles", href: "/articles" },
                { label: "Contact", href: "/contact" },
                { label: "Members", href: "/members" },
                { label: "GitHub", href: "https://github.com/small-minds" },
                {
                  label: `${darkMode ? "Day Mode" : "Night Mode"}`,
                  onClick: () => {
                    console.log("Dark Mode");
                    setDarkMode(!darkMode);
                  },
                },
              ]}
            />
          </Nav>
        </Header>
        <Component {...pageProps} />
      </Box>
    </Grommet>
  );
}

export default MyApp;
