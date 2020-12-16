import { Box, Heading, Paragraph, Image, WorldMap, Anchor } from "grommet";
import matter from "gray-matter";
import Link from "next/link";
import slugify from "slugify";

const slugConfig = {
  lower: true,
  strict: true,
};

export default function Members(props) {
  const memberData = props.data.map((m) => matter(m));
  const memberList = memberData.map((m) => m.data);

  return (
    <Box>
      <Box align="center" height={{ min: "100%" }} margin="large">
        <Box width="large" pad="medium" align="center">
          <Heading>Members</Heading>
          {memberList.map((m, i) => (
            <Box key={i}>
              <Paragraph>
                <Link href={`/members/${slugify(m.title, slugConfig)}`}>
                  {`${m.title} - ${m.role}`}
                </Link>
              </Paragraph>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export async function getStaticProps() {
  const siteData = await import(`../../config.json`);
  const fs = require("fs");
  const files = fs.readdirSync(`${process.cwd()}/content/members/`, "utf-8");
  const members = files.filter((fn) => fn.endsWith(".md"));
  const data = members.map((blog) => {
    const path = `${process.cwd()}/content/members/${blog}`;
    const rawContent = fs.readFileSync(path, {
      encoding: "utf-8",
    });
    return rawContent;
  });

  return {
    props: {
      data: data,
      title: siteData.default.title,
      description: siteData.default.description,
    },
  };
}
