import { Anchor, Grommet, Header, Nav, Box, Menu } from "grommet";
import "../styles/globals.css";
import { theme } from "../styles/theme.js";

const headerStyle = { position: "sticky", top: 0 };

function MyApp({ Component, pageProps }) {
  return (
    <Grommet theme={theme}>
      <Header background="primary" pad="small" style={headerStyle}>
        <Box direction="row" pad="small">
          <Anchor href="/" label="Small Minds" color="primary" />
        </Box>
        <Nav direction="row" pad="small">
          <Menu
            label="Menu"
            items={[
              { label: "Articles", href: "#" },
              { label: "Contact", href: "#" },
              { label: "Members", href: "#" },
              { label: "GitHub", href: "https://github.com/small-minds" },
            ]}
          />
        </Nav>
      </Header>
      <Component {...pageProps} />
    </Grommet>
  );
}

export default MyApp;
