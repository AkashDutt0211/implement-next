import { Card, CardContent, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';

const Blog = () => {
  useEffect(() => {
    async function fetchMyAPI() {
      let response = await fetch("https://dummyapi.online/api/blogposts");
      response = await response.json();
      setBlogList(response);
    }
    fetchMyAPI();
  }, []);
  const [blogList, setBlogList] = useState([]);
  const router = useRouter();

  return (
    <Grid container spacing={2}>
      {blogList?.map((blog) => (
        <Grid item xs={6} onClick={() => router.push(`/Blog/${blog?.id}`)}>
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

export default Blog;
