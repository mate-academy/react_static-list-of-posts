import React from 'react';
import { Post } from '../types/Post';
import { CommentList } from './CommentList';
import { UserInfo } from './UserInfo';
import './PostInfo.scss';

type Props = {
  post: Post;
};

export const PostInfo: React.FC<Props> = ({ post }) => (
  <div className="Post">
    <h3>{post.title}</h3>
    <p>{post.body}</p>
    {post.user
    && <UserInfo user={post.user} />}
    {post.comments && <CommentList comments={post.comments} />}
  </div>
);
