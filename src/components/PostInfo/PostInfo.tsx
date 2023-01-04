import React from 'react';
import { Post } from '../../types/Post';
import { CommentList } from '../CommentList';
import { NoComments } from '../NoComments/NoComments';
import { UserInfo } from '../UserInfo';

import './PostInfo.scss';

type Props = {
  post: Post;
};

export const PostInfo: React.FC<Props> = ({ post }) => {
  const {
    title,
    body,
    user,
    comments,
  } = post;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">
          {title}
        </h3>

        <p>
          <span> Posted by </span>

          {user && (
            <UserInfo user={user} />
          )}
        </p>
      </div>

      <p className="PostInfo__body">
        {body}
      </p>

      {comments.length !== 0
        ? <CommentList comments={comments} />
        : (
          <NoComments />
        )}
    </div>
  );
};
