import React from 'react';
import { User } from '../../types/User';
import { Comment } from '../../types/Comment';
import { CommentList } from '../CommentList';
import './PostInfo.scss';

type Props = {
  title: string,
  user: User,
  body: string,
  comments: Comment[] | null,
};

export const PostInfo: React.FC<Props> = ({
  title,
  user,
  body,
  comments,
}) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{title}</h3>

      <p>
        {' Posted by  '}

        <a className="UserInfo" href={`mailto:${user.email}`}>
          {user.name}
        </a>
      </p>
    </div>

    <p className="PostInfo__body">
      {body}
    </p>

    <hr />
    {comments
      ? <CommentList comments={comments} />
      : <b data-cy="NoCommentsMessage">No comments yet</b>}
  </div>
);
