"use client";

import { Button, Card, CardContent, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import { useRouter } from "next/navigation";

const useStyles = makeStyles({
  field: {
    "&&": {
      marginBottom: "50px",
    },
  },
});

const AddBlog = () => {
  const classes = useStyles();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !author || !content) {
      alert("Title, author and content are required.");
      return;
    }

    try {
      const res = await fetch(`http://localhost:3000/api/Blog`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, author, content }),
      });

      if (res.ok) {
        router.push("/ListBlog");
      } else {
        throw new Error("Failed to create");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Card variant="outlined">
      <CardContent>
        <TextField
          InputProps={{
            className: classes.field,
          }}
          fullWidth
          id="standard-basic"
          label="Title"
          variant="outlined"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        <TextField
          InputProps={{
            className: classes.field,
          }}
          fullWidth
          id="standard-basic"
          label="Author"
          variant="outlined"
          value={author}
          onChange={(event) => {
            setAuthor(event.target.value);
          }}
        />
        <TextField
          InputProps={{
            className: classes.field,
          }}
          fullWidth
          id="outlined-multiline-static"
          label="Content"
          multiline
          rows={4}
          value={content}
          onChange={(event) => {
            setContent(event.target.value);
          }}
        />
        <Button variant="contained" onClick={handleSubmit}>Create Blog</Button>
      </CardContent>
    </Card>
  );
};

export default AddBlog;
