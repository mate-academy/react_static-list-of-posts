import React from 'react';
import './PostInfo.scss';
import { ExtendedPost } from '../../typedefs';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList/CommentList';

export const PostInfo: React.FC<ExtendedPost> = (post) => {
  const {
    title, body, user, comments,
  } = post;

  if (user !== undefined) {
    return (
      <div data-cy="post-info">
        <p
          data-cy="post-title"
          className="post__title"
        >
          {title}
        </p>
        <p
          data-cy="post-body"
          className="post__body"
        >
          {body}
        </p>
        <UserInfo {...user} />
        <CommentList list={comments} />
      </div>
    );
  }

  return (
    <div data-cy="post-info">
      <p
        data-cy="post-title"
        className="post__title"
      >
        {title}
      </p>
      <p
        data-cy="post-body"
        className="post__body"
      >
        {body}
      </p>
      <CommentList list={comments} />
    </div>
  );
};
