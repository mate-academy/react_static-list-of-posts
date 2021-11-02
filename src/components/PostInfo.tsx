import React from 'react';
import { Post } from '../types/Post';
import { UserInfo } from './UserInfo';
import { CommentList } from './CommentList';

type Props = {
  post: Post,
};

export const PostInfo:React.FC<Props> = ({ post }) => (
  <div className="post">
    <h1 className="post_title">{post.title}</h1>
    {post.user && (<UserInfo user={post.user} />)}
    <div className="post_body">{post.body}</div>
    <CommentList comments={post.comments} />
  </div>
);
