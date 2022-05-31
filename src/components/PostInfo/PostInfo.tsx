import React from 'react';
import './PostInfo.scss';
import { PreparedPost } from '../../app.typedef';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';

interface Props {
  post: PreparedPost;
}

export const PostInfo: React.FC<Props> = ({ post }) => {
  const {
    user,
    title,
    body,
    comments,
  } = post;

  return (
    <div className="post">
      {user && (
        <UserInfo user={user} />
      )}

      <h2 className="post__title">{title}</h2>
      <p className="post__body">{body}</p>

      <CommentList comments={comments} />
    </div>
  );
};
