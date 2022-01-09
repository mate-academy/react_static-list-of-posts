import React from 'react';
import { UserInfo } from './UserInfo';
import { CommentList } from './CommentList';

import { Post } from '../types/Post';

type Props = Omit<Post, 'id'>;

export const PostInfo: React.FC<Props> = ({ ...post }) => (
  <>
    <h2>{post.title}</h2>
    <p>{post.body}</p>
    <UserInfo user={post.user} />
    <CommentList comment={post.comments} />
  </>
);
