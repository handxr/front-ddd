import { toast } from "react-toastify";
import useSWR from "swr";
import { CreatePostDTO } from "../domain/dto/create-post.dto";
import { Post } from "../domain/interfaces/post.interface";
import { PostApiRepository } from "../infrastructure/repositories/post-api.respository";

const postService = new PostApiRepository();

export const usePost = (id: string = "") => {
  const url = "https://jsonplaceholder.typicode.com/posts";

  const { data: posts, mutate: mutatePosts } = useSWR<Post[]>([url], () =>
    postService.getPosts()
  );

  const { data: post } = useSWR<Post>(id && [url, id], () =>
    postService.getPostById(+id)
  );

  const createPost = async (post: CreatePostDTO) => {
    toast.promise(postService.createPost(post), {
      success: "Post created successfully",
      error: "Error creating post",
      pending: "Creating post...",
    });
    await mutatePosts();
  };

  return {
    posts,
    post,
    createPost,
  };
};
