import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Card, CardContent } from "@mui/material";
import Link from "next/link";

export default function BlogPage() {
  const router = useRouter();
  useEffect(() => {
    async function fetchMyAPI() {
      let response = await fetch(
        `https://dummyapi.online/api/blogposts/${router.query.id}`
      );
      response = await response.json();
      setBlog(response);
    }
    fetchMyAPI();
  }, [router.query.id]);
  const [blog, setBlog] = useState({});
  return (
    <>
      <Link href={`/Blog`}>{'< Back'}</Link>
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
