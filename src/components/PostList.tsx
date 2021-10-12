import React from "react";
import { ReadyPost } from "../Types";
import { PostInfo } from "./PostInfo";

export const PostList: React.FC<{posts:ReadyPost[]}> = ({posts}) => (
  <div className="posts">
    {posts.map((post) => <PostInfo post={post}/>)}
  </div>
)