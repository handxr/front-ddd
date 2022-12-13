/**
 * @vitest-environment jsdom
 */

import { ApiPostRepository } from "./post-api.respository";

describe("ApiPostRepository", () => {
  let repository: ApiPostRepository;

  beforeEach(() => {
    repository = new ApiPostRepository();
  });

  describe("getPosts", () => {
    it("debería devolver una lista de posts", async () => {
      const posts = await repository.getPosts();
      expect(Array.isArray(posts)).toBe(true);
      expect(posts.length).toBeGreaterThan(0);
      expect(posts[0]).toHaveProperty("userId");
      expect(posts[0]).toHaveProperty("id");
      expect(posts[0]).toHaveProperty("title");
      expect(posts[0]).toHaveProperty("content");
    });
  });
});
