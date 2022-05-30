import React from 'react';
import { PreparedPosts } from '../../react-app-env';
import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';
import './PostInfo.scss';

interface Prop {
  post: PreparedPosts
}

export const PostInfo: React.FC<Prop> = ({ post }) => (
  <div className="postBlock" data-cy="post-info">
    <h2 className="postBlock__title">Post Info</h2>
    <h3 data-cy="post-title">{post.title}</h3>
    <p data-cy="post-body">{post.body}</p>
    <hr />
    <h2 className="postBlock__title">User info</h2>
    <UserInfo user={post.user} />
    <hr />
    <h2 className="postBlock__title">Comment info</h2>
    <CommentList comments={post.comments} />
  </div>
);
