import { Box, Heading, Paragraph, Image, WorldMap, Anchor } from "grommet";
import matter from "gray-matter";
import Link from "next/link";
import slugify from "slugify";

const slugConfig = {
  lower: true,
  strict: true,
};

export default function Articles(props) {
  const data = props.data.map((m) => matter(m));
  const list = data.map((m) => m.data);

  return (
    <Box>
      <Box align="center" height={{ min: "100%" }} margin="large">
        <Box width="large" pad="medium" align="center">
          <Heading>Articles</Heading>
          {list.map((m, i) => (
            <Box key={i} margin="small">
              <Heading level={3} margin="none">
                <Link href={`/articles/${slugify(m.title, slugConfig)}`}>
                  {m.title}
                </Link>
              </Heading>
              <Paragraph margin={{ bottom: "none" }}>{m.date}</Paragraph>
              <Paragraph>{m.description}</Paragraph>
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
  const files = fs.readdirSync(`${process.cwd()}/content/articles/`, "utf-8");
  const members = files.filter((fn) => fn.endsWith(".md"));
  const data = members.map((blog) => {
    const path = `${process.cwd()}/content/articles/${blog}`;
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
