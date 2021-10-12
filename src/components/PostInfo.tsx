import React from 'react';
import { CommentList } from './CommentList';
import { UserInfo } from './UserInfo';
import { Post } from '../types/Post';

export const PostInfo: React.FC<{ post: Post; }> = ({ post }) => (
  <div className="post" key={post.id}>
    {post.user && (<UserInfo user={post.user} />)}
    <div className="post__title">
      {post.title}
    </div>
    <p className="post__body">
      {post.body}
    </p>
    <CommentList comments={post.comments} />
  </div>
);
