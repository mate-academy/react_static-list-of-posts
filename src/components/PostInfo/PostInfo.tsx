import React from 'react';

import { Post } from '../../types/Post';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';

type Props = {
  post: Post,
};

export const PostInfo:React.FC<Props> = ({ post }) => (
  <>
    <h2>{post.title}</h2>
    <div>{post.body}</div>
    {post.user && (
      <UserInfo user={post.user} />
    )}
    <CommentList comments={post.comments} />
  </>
);
