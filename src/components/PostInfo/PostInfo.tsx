import React from 'react';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';
import { NoComments } from '../NoComments';

import { Post } from '../../types/Post';

type Props = {
  post: Post,
};

export const PostInfo: React.FC<Props> = ({ post }) => {
  const {
    userId,
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
          {' Posted by  '}

          {user && <UserInfo user={user} key={userId} />}
        </p>
      </div>

      <p className="PostInfo__body">
        {body}
      </p>

      {
        (comments.length > 0)
          ? <CommentList comments={comments} />
          : <NoComments />
      }

    </div>
  );
};
