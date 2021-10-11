import React from 'react';
import { Post } from '../../types/Post';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';
import './PostInfo.scss';

interface Props {
  post: Post;
}

export const PostInfo: React.FC<Props> = ({ post }) => {
  const {
    title,
    body,
    user,
    reviews,
  } = post;

  return (
    <div className="post__content">
      {user && <UserInfo user={user} />}
      <h3 className="post__title">{title}</h3>
      <p className="post__text">{body}</p>
      <CommentList reviews={reviews} />
    </div>
  );
};
