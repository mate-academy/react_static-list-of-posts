import React from 'react';

import './PostInfo.scss';

import { PreparedPost } from '../../types/preparedPost';

import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';

type Props = {
  post: PreparedPost
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <>
    <h1>{post.title}</h1>
    <p>{post.body}</p>
    <UserInfo user={post.user} />
    <CommentList comments={post.comments} />
  </>
);
