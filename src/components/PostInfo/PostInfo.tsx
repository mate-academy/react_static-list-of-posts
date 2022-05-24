import React from 'react';
import './PostInfo.scss';
import { Posts } from '../../types/Posts';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';

type Props = {
  post: Posts;
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <div
    className="postInfo"
    data-cy="post-info"
  >
    <h2
      className="postInfo__title"
      data-cy="post-title"
    >
      {post.title}
    </h2>
    <p
      className="postInfo__text"
      data-cy="post-body"
    >
      {post.body}
    </p>
    {post.user && (
      <UserInfo user={post.user} />
    )}
    {post.comments && (
      <CommentList comments={post.comments} />
    )}
  </div>
);
