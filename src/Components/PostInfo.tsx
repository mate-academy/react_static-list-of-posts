import React from 'react';
import { Post } from '../types/Post';
import { CommentList } from './CommentList';
import { UserInfo } from './UserInfo';

type Props = {
  post: Post;
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <>
    <h2 className="post__title">
      {post.title}
    </h2>
    <div className="post__body">
      {post.body}
    </div>
    <UserInfo user={post.userName} />
    <CommentList {...post} />
  </>
);
