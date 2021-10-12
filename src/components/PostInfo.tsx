import React from 'react';
import { Post } from '../types/Post';
import { CommentList } from './CommentList';
import { UserInfo } from './UserInfo';

type Props = {
  post: Post
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <li className="list__item">
    <h2 className="post-title">
      {post.title}
    </h2>
    <p className="post-body">
      {post.body}
    </p>
    <UserInfo post={post} />
    <CommentList comments={post.comments} />
  </li>
);
