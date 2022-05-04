import React from 'react';

import { Post } from '../../Types/Post';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';

import './PostInfo.scss';

type Props = {
  post: Post
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <div className="postInfo">
    <h2 data-cy="post-title" className="postInfo__title">{post.title}</h2>
    <div data-cy="post-body" className="postInfo__body">{post.body}</div>
    {post.user && (
      <UserInfo user={post.user} />
    )}
    <CommentList comments={post.comments} />
  </div>
);
