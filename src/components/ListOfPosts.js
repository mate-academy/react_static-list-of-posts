import React from "react";
import Post from "../components/Post";
import { posts } from "../data/posts";

function ListOfPosts(props) {
  const postList = [];
  posts.forEach(post => postList.push(Post(post)));
  return <div>{postList}</div>;
}

export default ListOfPosts;
