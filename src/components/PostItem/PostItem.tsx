import React from 'react';

import { UserInfo } from '../UserInfo';
import { Post } from '../../types/Post';

import { CommentsList } from '../CommentList';

import './PostItem.scss';

type Props = {
  post: Post;
};

export const PostItem: React.FC<Props> = ({ post }) => {
  const {
    title,
    body,
    user,
    comments,
  } = post;

  return (
    <article className="PostItem">
      <h2 className="PostItem__title">{title.toUpperCase()}</h2>
      <p className="PostItem__body">{body}</p>
      <div className="PostItem__picture-container">
        <img
          className="PostItem__picture"
          src="images/image-placeholder.svg"
          alt="React"
        />
      </div>
      {user && <UserInfo user={user} />}
      <CommentsList comments={comments} />
    </article>
  );
};
