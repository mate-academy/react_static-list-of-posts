import React from 'react';
import './PostInfo.scss';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';
import { Post } from '../types';

type Props = {
  post: Post;
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <div className="post">
    <div className="post__title">{post.title}</div>
    <div className="post__body">{post.body}</div>
    {post.user && <UserInfo {...post.user} />}
    <CommentList comments={post.comments} />
  </div>
);
