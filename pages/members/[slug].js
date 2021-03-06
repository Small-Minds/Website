import { Box, Heading, Paragraph, Image } from "grommet";
import Head from "next/head";
import ReactMarkdown from "react-markdown";
import matter from "gray-matter";
import { useEffect } from "react";

export default function Member({ content, data }) {
  // Syntax highlighting.
  useEffect(() => {
    setTimeout(() => {
      if (typeof window !== "undefined") {
        console.log("Syntax highlighting...");
        // Prism.highlightAll();
      }
    }, 100);
  }, []);

  return (
    <Box>
      <Head>
        <title>{data.title}</title>
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

export async function getStaticPaths(member) {
  const fs = require("fs");
  const files = fs.readdirSync(`${process.cwd()}/content/members/`, "utf-8");
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
    .readFileSync(`${process.cwd()}/content/members/${slug}.md`)
    .toString();

  const { data, content } = matter(markdownWithMetadata);

  return {
    props: {
      content: content,
      data: data,
    },
  };
}
