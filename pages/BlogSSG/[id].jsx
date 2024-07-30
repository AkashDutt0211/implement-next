import { useRouter } from "next/router";
import { Card, CardContent } from "@mui/material";
import Link from "next/link";

export default function BlogPage(props) {
  const router = useRouter();
  const { blog } = props;
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Link href={`/Blog`}>{"< Back"}</Link>
      <Card variant="outlined">
        <CardContent>
          <h1>{blog?.title}</h1>
          <h2>{blog?.author}</h2>
          <p>{blog?.date_published}</p>
          <p>{blog?.content}</p>
        </CardContent>
      </Card>
    </>
  );
}

export const getStaticPaths = async () => {
  let response = await fetch("https://dummyapi.online/api/blogposts");
  response = await response.json();
  const paths = response.map((blog) => ({
    params: { id: blog.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const { id } = context.params;
  let response = await fetch(`https://dummyapi.online/api/blogposts/${id}`);
  response = await response.json();
  return {
    props: {
      blog: response,
    //   revalidate: 10
    },
  };
};
