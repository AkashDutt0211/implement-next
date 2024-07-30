import { Card, CardContent, Grid } from "@mui/material";
import { useRouter } from 'next/navigation';

const Blog = (props) => {
  const router = useRouter();

  return (
    <Grid container spacing={2}>
      {props?.blogList?.map((blog) => (
        <Grid key={blog?.id} item xs={6} onClick={() => router.push(`/BlogSSG/${blog?.id}`)}>
          <Card variant="outlined">
            <CardContent>
              <h1>{blog?.title}</h1>
              <h2>{blog?.author}</h2>
              <p>{blog?.date_published}</p>
              <p>{`${blog?.content?.substring(0, 20)}...`}</p>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export const getServerSideProps = async () => {
  let response = await fetch("https://dummyapi.online/api/blogposts");
  response = await response.json();
  return {
    props: {
      blogList: response,
    },
  };
};

export default Blog;
