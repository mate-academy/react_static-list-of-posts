import React from 'react';
import { UserInfo } from '../UserInfo/UserInfo';
import { Post } from '../../types/Post';
import './PostInfo.scss';
import { CommentList } from '../CommentList/CommentList';

export const PostInfo: React.FC<{ post: Post }> = ({ post }) => {
  const {
    title,
    body,
    user,
    comments,
  } = post;

  if (!user) {
    return null;
  }

  return (

    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{title}</h3>
        <UserInfo user={user} />
        <p className="PostInfo__body">{body}</p>
      </div>

      <div className="PostInfo__comments">
        <CommentList comments={comments} />
      </div>
    </div>

  );
};
