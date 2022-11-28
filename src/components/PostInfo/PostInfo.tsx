import React from 'react';
import { Post } from '../../types/Post';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

type Props = {
  post: Post,
};

export const PostInfo: React.FC<Props> = ({ post }) => {
  const {
    userId,
    id,
    title,
    body,
  } = post;

  return (
    <div
      className="PostInfo"
      key={id}
    >
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{title}</h3>

        <UserInfo userId={userId} />
      </div>

      <p className="PostInfo__body">
        {body}
      </p>

      <CommentList postId={id} />
    </div>
  );
};
