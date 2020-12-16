import { Box, Heading, Paragraph, Image } from "grommet";
import Head from "next/head";

export default function Home() {
  return (
    <Box>
      <Head>
        <title>Small Minds Software</title>
      </Head>
      <Box align="center" height={{ min: "100%" }} margin="large">
        <Box width="large" pad="medium" align="center">
          <Heading size="large" textAlign="center">
            Small Minds
          </Heading>
          <Box height="medium" width={{ max: "medium" }}>
            <Image fit="cover" src="/pictures/small-minds-min.png" />
          </Box>
          <Paragraph
            size="large"
            textAlign="center"
            margin={{ bottom: "none" }}
          >
            Embedded &amp; Full Stack
          </Paragraph>
          <Paragraph size="large" textAlign="center" margin={{ top: "none" }}>
            Software Development
          </Paragraph>
        </Box>
      </Box>
    </Box>
  );
}
