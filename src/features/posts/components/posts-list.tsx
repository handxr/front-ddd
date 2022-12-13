import { useNavigate } from "react-router-dom";
import { usePost } from "../hooks/use-post";
import { CreatePostForm } from "./create-post-form";

export const PostsList = () => {
  const { posts } = usePost();
  const navigate = useNavigate();

  const handleNavigate = (id: number) => {
    navigate(`/post/${id}`);
  };

  return (
    <>
      <ul>
        {posts?.slice(0, 10)?.map((post) => (
          <li key={post.id} onClick={() => handleNavigate(post.id)}>
            {post.title}
          </li>
        ))}
      </ul>

      <CreatePostForm />
    </>
  );
};
