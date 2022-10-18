import React from 'react';

import { User } from '../../types/User';
import { Comment } from '../../types/Comment';

import { CommentsList } from '../CommentList';
import { UserInfo } from '../UserInfo';

import './PostInfo.scss';

type Props = {
  title: string,
  body: string,
  user: User | null,
  comments: Comment[] | null,
};

export const PostInfo: React.FC<Props> = ({
  title,
  body,
  user,
  comments,
}) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{title}</h3>

      <p>
        {' Posted by  '}

        <UserInfo userOne={user} />
      </p>
    </div>

    <p className="PostInfo__body">
      {body}
    </p>

    <hr />

    {comments !== null && comments.length !== 0
      ? (<CommentsList commentsArr={comments} />)
      : (<b data-cy="NoCommentsMessage">No comments yet</b>)}

  </div>
);
