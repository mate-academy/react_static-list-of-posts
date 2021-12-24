import React from 'react';

import { Comment } from '../../types/Comment';
import { User } from '../../types/User';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

type Post = {
  title: string,
  body: string,
  user: User | undefined,
  comment: Comment[],
};

type Props = {
  post: Post,
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <>
    <h2>{post.title}</h2>
    <p>{post.body}</p>
    <UserInfo user={post.user} />
    <CommentList comment={post.comment} />
  </>
);
