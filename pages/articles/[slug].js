import { Box, Heading, Paragraph, Image } from "grommet";
import Head from "next/head";
import ReactMarkdown from "react-markdown";
import matter from "gray-matter";

export default function Member({ content, data }) {
  return (
    <Box>
      <Head>
        <title>Small Minds Software</title>
      </Head>
      <Box align="center" height={{ min: "100%" }} margin="large">
        <Box width="large" pad="medium">
          <Box>
            <Heading margin="none">{data.title}</Heading>
            <Heading level={4} color="light-5" margin={{ top: "small" }}>
              {data.role}
            </Heading>
          </Box>
          <ReactMarkdown escapeHtml source={content} />
        </Box>
      </Box>
    </Box>
  );
}

export async function getStaticPaths(article) {
  const fs = require("fs");
  const files = fs.readdirSync(`${process.cwd()}/content/articles`, "utf-8");
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const fs = require("fs");
  const markdownWithMetadata = fs
    .readFileSync(`${process.cwd()}/content/articles/${slug}.md`)
    .toString();

  const { data, content } = matter(markdownWithMetadata);

  return {
    props: {
      content: content,
      data: data,
    },
  };
}
