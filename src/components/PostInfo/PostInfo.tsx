import React from 'react';
import './PostInfo.scss';
import { Post } from '../../types/Post';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';

type Props = {
  post: Post,
};

export const PostInfo: React.FC<Props> = ({
  post: {
    id,
    title,
    body,
    user,
    comments,
  },
}) => (
  <div className="PostInfo" id={`${id}`}>
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{title}</h3>

      {user && (
        <UserInfo user={user} />
      )}
    </div>

    <p className="PostInfo__body">
      {body}
    </p>

    <hr />
    {comments && (
      <CommentList
        key={id}
        comments={comments}
      />
    )}
  </div>
);
