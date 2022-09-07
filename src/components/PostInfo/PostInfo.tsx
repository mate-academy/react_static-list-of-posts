import React from 'react';
import { User } from '../../types/User';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';
import { Comment } from '../../types/Comment';
import './PostInfo.scss';

type Props = {
  title: string;
  body: string;
  user: User | null;
  comments: Comment[];
};

export const PostInfo: React.FC<Props> = ({
  title,
  body,
  user,
  comments,
}) => (
  <>
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{title}</h3>

      <p>
        {' Posted by  '}

        {user && <UserInfo name={user.name} email={user.email} />}

      </p>
    </div>

    <p className="PostInfo__body">
      {body}
    </p>

    <hr />

    {comments.length
      ? <CommentList commentsList={comments} />
      : <b data-cy="NoCommentsMessage">No comments yet</b>}
  </>
);
