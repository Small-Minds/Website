import { Box, Heading, Paragraph, Image, WorldMap, Anchor } from "grommet";

export default function Contact() {
  return (
    <Box>
      <Box align="center" height={{ min: "100%" }} margin="large">
        <Box width="large" pad="medium" align="center">
          <Heading>Contact</Heading>
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
            North America: <Anchor label="Ryan Fleck" />
          </Paragraph>
          <Paragraph>
            Asia: <Anchor label="Mengxuan Chen" />
          </Paragraph>
        </Box>
      </Box>
    </Box>
  );
}
