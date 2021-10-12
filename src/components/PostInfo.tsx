import React from "react";
import { ReadyPost } from "../Types";
import { CommentList } from "./CommentList";
import { UserInfo } from "./UserInfo";

export const PostInfo: React.FC<{post:ReadyPost}> = ({post}) => (
  <div className="posts__post post">
    <h2 className='post__title'>
      {post.title}
    </h2>
    <p className='post__body'>
      {post.body}
    </p>
    <UserInfo user={post.user}/>
    <CommentList comments={post.comments}/>
  </div>
)