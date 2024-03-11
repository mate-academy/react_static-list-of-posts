import React from "react";

import "./App.scss";
import { PostList } from "./components/PostList/PostList";
import postsFromServer from "./api/posts";
import { getUser } from "./userHelper";
import { getComment } from "./postHelper";
import { Post } from "./Types/Post";

export const posts: Post[] = postsFromServer.map((post) => ({
  ...post,
  user: getUser(post.userId),
  comments: getComment(post.id),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
