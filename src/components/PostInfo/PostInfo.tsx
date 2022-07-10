import React from 'react';
import { Post } from '../../types/posts';
import { UserInfo } from '../UserInfo/UserInfo';
import './PostInfo.scss';

type Props = {
  post: Post;
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <>
    <h2>{post.title}</h2>
    <p>{post.body}</p>
    <UserInfo user={post.user} />
  </>
);
