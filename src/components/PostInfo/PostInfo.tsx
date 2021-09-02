import React from 'react';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';
import { Post } from '../../types/Post';

interface Props {
  post: Post;
}

export const PostInfo: React.FC<Props> = ({ post }) => {
  const {
    title, body, user, reviews,
  } = post;

  return (
    <div className="post__content">
      { user ? <UserInfo user={user} />
        : <h2>Something went wrong</h2>}
      <h1 className="post__title">{title}</h1>
      <h5 className="post__text">{body}</h5>
      <CommentList reviews={reviews} />
    </div>
  );
};
