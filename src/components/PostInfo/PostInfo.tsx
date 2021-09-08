import React from 'react';
import { Post } from '../../types/Post';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';
import './PostInfo.scss';

type Props = {
  post: Post;
};

export const PostInfo: React.FC<Props> = ({ post }) => {
  const {
    title,
    body,
    user,
    comment,
  } = post;

  return (
    <div className="post__box">
      <h1 className="post__title">
        {title}
      </h1>
      <p className="post__description">
        {body}
      </p>
      {user && <UserInfo user={user} />}
      <div className="post__comments">
        {comment && <CommentList comments={comment} />}
      </div>
    </div>
  );
};
