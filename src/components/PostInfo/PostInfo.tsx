import React from 'react';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';
import { Comment } from '../../types/Comment';
import { User } from '../../types/User';
import './PostInfo.scss';

type Props = {
  title: string;
  user: User | null;
  body: string;
  comments: Comment [];
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
        {user && (
          <UserInfo user={user} />
        )}
      </p>
    </div>

    <p className="PostInfo__body">
      {body}
    </p>

    {comments.length
      ? (<CommentList comments={comments} />)
      : (
        <>
          <hr />
          <b data-cy="NoCommentsMessage">No comments yet</b>
        </>
      )}
  </div>
);
