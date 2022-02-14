import React from 'react';
import { Post } from '../types/Post';
import { CommentList } from './CommentList';
import { UserInfo } from './UserInfo';

type Props = {
  post: Post
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <>
    <h2 className="post__name">
      {post.title}
    </h2>

    <p className="post__body">
      {post.body}
    </p>

    {post.user && <UserInfo user={post.user} />}
    {post.comments && <CommentList comments={post.comments} />}
  </>
);
