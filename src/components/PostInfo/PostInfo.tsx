import React from 'react';
import { Post } from '../../types/type';
import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';

interface Props {
  post: Post;
}

export const PostInfo: React.FC<Props> = ({ post }) => (
  <li className="posts__item">
    <h2 className="posts__title">{post.title}</h2>
    <p className="posts__text">{post.body}</p>
    {post.user && <UserInfo user={post.user} />}
    {post.comments && <CommentList comments={post.comments} />}
  </li>
);
