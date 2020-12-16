import { Box, Heading, Paragraph, Image } from "grommet";
import Head from "next/head";

export default function Home() {
  return (
    <Box>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box align="center" height={{ min: "100%" }} margin="large">
        <Box width="large" pad="medium" align="center">
          <Heading>Small Minds</Heading>
          <Box height="medium" width={{ max: "medium" }}>
            <Image fit="cover" src="/pictures/small-minds-round-min.png" />
          </Box>
          <Paragraph>Embedded &amp; Full Stack Development</Paragraph>
        </Box>
      </Box>
    </Box>
  );
}
