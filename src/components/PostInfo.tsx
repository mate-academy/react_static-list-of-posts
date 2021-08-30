import React from 'react';
import { Post } from '../types/Post';
import { CommentList } from './CommentList';
import { UserInfo } from './UserInfo';
import './PostInfo.scss';

interface Props {
  posts: Post;
}

export const PostInfo: React.FC<Props> = ({ posts }) => {
  const {
    title, body, user, comments,
  } = posts;

  return (
    <div className="post__info">
      <h3 className="post__title">{title}</h3>
      <div>{body}</div>
      {user && (
        <UserInfo {...user} />)}
      {comments && (
        <CommentList comments={comments} />)}
    </div>
  );
};
