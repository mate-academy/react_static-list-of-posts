import React from 'react';

import { Posts } from '../../types/types';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

import './PostInfo.scss';

type Props = {
  post: Posts;
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <>
    <h2 className="post__title">{post.title}</h2>
    <p className="post__body">{post.body}</p>
    {!!post.user && (
      <UserInfo user={post.user} />
    )}
    {!!post.comments && (
      <CommentList comments={post.comments} />
    )}
  </>
);
