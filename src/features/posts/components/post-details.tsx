import { useParams, useNavigate } from "react-router-dom";
import { usePost } from "../hooks/use-post";

export const PostDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { post } = usePost(id);

  return (
    <>
      <p onClick={() => navigate("/")}>Go back</p>
      <h1>{post?.title}</h1>
      <p>{post?.content}</p>
    </>
  );
};
