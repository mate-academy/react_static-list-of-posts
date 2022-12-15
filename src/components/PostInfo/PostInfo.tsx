import React from 'react';
import { User } from '../../types/User';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';
import { Comment } from '../../types/Comment';

type Props = {
  title: string;
  body: string;
  user: User | null;
  comments: Comment[] | null;
};

export const PostInfo: React.FC<Props> = (
  {
    title,
    body,
    user,
    comments,
  },
) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">
        {title}
      </h3>
      {user && (
        <p>
          {' Posted by  '}
          <UserInfo name={user.name} email={user.email} />
        </p>
      )}

    </div>

    <p className="PostInfo__body">
      {body}
    </p>

    {comments
      ? <CommentList comments={comments} />
      : (
        <>
          <hr />
          <b data-cy="NoCommentsMessage">No comments yet</b>
        </>
      )}
  </div>
);
