import React from 'react';
import { UserInfo } from './UserInfo';
import { CommentList } from './CommentList';
import { Post } from '../types/Post';
import './PostInfo.scss';

type Props = {
  post: Post;
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <div className="post">
    <h1 className="post__title">{post.title}</h1>
    <p className="post__text">{post.body}</p>
    {post.user && <UserInfo users={post.user} />}
    <CommentList comments={post.comments} />
  </div>
);
