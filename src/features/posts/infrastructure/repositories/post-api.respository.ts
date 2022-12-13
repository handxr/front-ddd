import { CreatePostDTO } from "../../domain/dto/create-post.dto";
import { PostRepository } from "../../domain/interfaces/post-repository.interface";
import { Post } from "../../domain/interfaces/post.interface";
import { PostResponse } from "../interfaces/post-response.interface";
import { HttpService } from "../../../../utils/http";

export class PostApiRepository implements PostRepository {
  private readonly url = "https://jsonplaceholder.typicode.com/posts";

  public async getPosts(): Promise<Post[]> {
    const data: PostResponse[] = await HttpService.get<PostResponse[]>(
      this.url
    );
    return data.map((post) => ({
      userId: post.userId,
      id: post.id,
      title: post.title,
      content: post.body,
    }));
  }

  public async getPostById(id: number): Promise<Post> {
    const data: PostResponse = await HttpService.get<PostResponse>(
      `${this.url}/${id}`
    );
    return {
      userId: data.userId,
      id: data.id,
      title: data.title,
      content: data.body,
    };
  }

  public async createPost(post: CreatePostDTO): Promise<Post> {
    return await HttpService.post<Post>(this.url, post);
  }
}
