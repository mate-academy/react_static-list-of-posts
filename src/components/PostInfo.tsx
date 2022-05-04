import React from 'react';
import { UserInfo } from './UserInfo';
import { CommentList } from './CommentList';

import { Post } from './types/Post';

type Props = {
  posts: Post,
};

export const PostInfo: React.FC<Props> = ({ posts }) => (
  <>
    <div className="postTitle">{posts.title}</div>
    <div className="postBody">{posts.body}</div>
    {posts.user && <UserInfo users={posts.user} />}
    {posts.comment && <CommentList comment={posts.comment} />}
  </>
);
