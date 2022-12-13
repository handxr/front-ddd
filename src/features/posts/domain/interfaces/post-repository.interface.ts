import { CreatePostDTO } from "../dto/create-post.dto";
import { Post } from "./post.interface";

export interface PostRepository {
  getPosts(): Promise<Post[]>;
  getPostById(id: number): Promise<Post>;
  createPost(post: CreatePostDTO): Promise<Post>;
}
