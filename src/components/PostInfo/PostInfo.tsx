import React from 'react';
import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';
import { FullPost } from '../../react-app-env';
import './PostInfo.scss';

interface Props {
  post: FullPost;
}

export const PostInfo: React.FC<Props> = ({ post }) => (
  <div data-cy="post-info" className="post">
    <h2 data-cy="post-title">{post.title}</h2>
    <h3 data-cy="post-body">{post.body}</h3>
    <CommentList comments={post.comments} />
    {post.user && (
      <UserInfo user={post.user} />
    )}
  </div>

);
