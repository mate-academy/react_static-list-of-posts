import React from 'react';

import { User } from '../../types/user';
import { Comment } from '../../types/comments';
import './PostInfo.scss';

import { UserInfo } from '../UserInfo/UserInfo';
import { CommentsList } from '../CommentsList/CommentsList';

type Props = {
  title: string,
  body: string,
  user: User | null,
  comments: Comment[],
};

export const PostInfo: React.FC<Props> = ({
  title,
  body,
  user,
  comments,
}) => {
  return (
    <>
      <h1 className="post__title" data-cy="post-title">
        {title}
      </h1>

      {user && (
        <div className="post__user user">
          <UserInfo
            name={user.name}
            email={user.email}
          />
        </div>
      )}

      <p className="post__body" data-cy="post-body">
        {body}
      </p>

      <div className="comments">
        <h4 className="comments__title">Comments:</h4>

        <CommentsList comments={comments} />
      </div>
    </>
  );
};
