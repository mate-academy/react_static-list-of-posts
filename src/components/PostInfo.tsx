import React from 'react';
import { UserInfo } from './UserInfo';
import { CommentList } from './CommentList';

import { Post } from './types/Post';

type Props = {
  post: Post,
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <>
    <div className="postTitle">{post.title}</div>
    <div className="postBody">{post.body}</div>
    {post.user && <UserInfo user={post.user} />}
    {post.comments?.length && <CommentList comments={post.comments} />}
  </>
);
