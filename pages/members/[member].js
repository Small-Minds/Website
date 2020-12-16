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

Member.getInitialProps = async (context) => {
  const { member } = context.query;
  const content = await import(`../../content/members/${member}.md`);
  const data = matter(content.default);
  return { ...data };
};