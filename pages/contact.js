import { Box, Heading, Paragraph, Image, WorldMap, Anchor } from "grommet";
import Link from "next/link";

export default function Contact() {
  return (
    <Box>
      <Box align="center" height={{ min: "100%" }} margin="large">
        <Box width="large" pad="medium" align="center">
          <Heading size="large">Contact</Heading>
          <Box height="medium" width="large" align="center" pad="small">
            <WorldMap
              color="light-5"
              continents={[
                {
                  name: "North America",
                  color: "neutral-3",
                },
                {
                  name: "Asia",
                  color: "neutral-4",
                },
              ]}
            />
          </Box>
          <Paragraph>
            North America:{" "}
            <Link href="/members/ryan-fleck/">
              <Anchor label="Ryan Fleck" />
            </Link>
          </Paragraph>
          <Paragraph>
            Asia:{" "}
            <Link href="/members/mengxuan-chen">
              <Anchor label="Mengxuan Chen" />
            </Link>
          </Paragraph>
        </Box>
      </Box>
    </Box>
  );
}
