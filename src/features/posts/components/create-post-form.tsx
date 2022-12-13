import React from "react";
import { usePost } from "../hooks/use-post";

export const CreatePostForm = () => {
  const { createPost } = usePost();

  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await createPost({ title, content });
  };

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        id="title"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <label htmlFor="content">Content</label>
      <input
        type="text"
        id="content"
        name="content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <button type="submit">Create Post</button>
    </form>
  );
};
