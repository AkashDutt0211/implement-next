"use client";

import { Button, Card, CardContent } from "@mui/material";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const ListBlog = () => {
  const router = useRouter();
  const handleDelete = async (id) => {
    try {
      const res = await fetch(`http://localhost:3000/api/Blog?id=${id}`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
      });
      if (res.ok) {
        router.refresh();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getBlogs = () => {
    axios
      .get("http://localhost:3000/api/Blog")
      .then((res) => {
        setBlogList(res.data?.blogs);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getBlogs();
  }, []);

  const [blogList, setBlogList] = useState([]);
  console.log(blogList);

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h1>Blogs List</h1>
        <Button onClick={() => router.push("/AddBlog")}>
         + Add Blog
        </Button>
      </div>
      {blogList?.map((b) => (
        <Card variant="outlined">
          <CardContent>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                {`${b.title} by ${b?.author}`}
                <br />
                <br />
                {b?.content}
              </div>
              <Button variant="contained" onClick={() => handleDelete(b?._id)}>
                Delete
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </>
  );
};

export default ListBlog;
