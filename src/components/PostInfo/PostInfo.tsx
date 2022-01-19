import React from 'react';
import { CommentInfo } from '../CommentInfo/CommentInfo';
import { UserInfo } from '../UserInfo/UserInfo';
import { Post } from '../types/Post';
import './PostInfo.scss';

export const PostInfo: React.FC<{ post: Post; }> = ({ post }) => (
  <li className="App__list-item" key={post.id}>
    <h1>{post.title}</h1>
    {post.user && <UserInfo user={post.user} />}
    <h3>{post.body}</h3>
    {post.comments.map(comment => <CommentInfo comment={comment} />)}
  </li>
);
