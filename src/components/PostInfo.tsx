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
    <div className="Post__container">
      <h3 className="Post__title">{post.title}</h3>
      <p>{post.body}</p>
      {post.user ? <UserInfo user={post.user} /> : <h4>Anonymous</h4> }
    </div>
    <CommentList comments={post.comments} />
  </div>
);
