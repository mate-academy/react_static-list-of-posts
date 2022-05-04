import React from 'react';
import { Post } from '../../types/Types';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';
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
    <div className="postinfo">
      <p data-cy="post-title" className="postinfo__title">
        {title}
      </p>

      <p data-cy="post-body" className="postinfo__body">
        {body}
      </p>

      {user && (
        <UserInfo
          user={user}
        />
      )}
      <CommentList
        comment={comment}
      />
    </div>
  );
};
