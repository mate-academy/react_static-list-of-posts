import React from 'react';
import { PreparedPosts } from '../../react-app-env';
import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';
import './PostInfo.scss';

interface Props {
  post: PreparedPosts
}

export const PostInfo: React.FC<Props> = ({ post }) => (
  <li data-cy="post-info" key={post.id}>
    <h1 data-cy="post-title">{post.title}</h1>
    <div data-cy="post-body">
      <p>{post.body}</p>
      {post.user && <UserInfo user={post.user} />}
      <CommentList commetsArray={post.comments} />
    </div>
  </li>
);
