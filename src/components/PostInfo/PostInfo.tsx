import React from 'react';

import './PostInfo.scss';

import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo';
import { Post } from '../../types/Post';

type Props = {
  post: Post,
};

export const PostInfo: React.FC<Props> = ({
  post: {
    title,
    user,
    body,
    comments,
  },
}) => (
  <li className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">
        {title}
      </h3>

      <p>
        {' Posted by  '}

        {user && <UserInfo user={user} />}
      </p>
    </div>

    <p className="PostInfo__body">
      {body}
    </p>

    {
      (comments.length === 0)
        ? <b data-cy="NoCommentsMessage">No comments yet</b>
        : <CommentList comments={comments} />
    }
  </li>
);
