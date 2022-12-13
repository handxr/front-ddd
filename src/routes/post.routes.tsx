import React from "react";
import { lazyImport } from "../utils/lazy-import";
const { PostsList } = lazyImport(
  () => import("../features/posts/components/posts-list"),
  "PostsList"
);
const { PostDetails } = lazyImport(
  () => import("../features/posts/components/post-details"),
  "PostDetails"
);

export const postRoutes = [
  {
    path: "/",
    element: <PostsList />,
  },
  {
    path: "/post/:id",
    element: <PostDetails />,
  },
];
