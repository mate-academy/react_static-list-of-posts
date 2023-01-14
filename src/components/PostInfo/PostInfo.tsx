import React from 'react';
import { Comment } from '../../types/Comment';
import { User } from '../../types/User';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

type Props = {
  title: string;
  user: User | null;
  body: string;
  comments: Comment[] | null;
};

export const PostInfo: React.FC<Props> = ({
  title,
  user,
  body,
  comments,
}) => (
  <>
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">
        { title }
      </h3>

      <p>
        {' Posted by  '}

        {user && (
          <UserInfo name={user.name} email={user.email} />
        )}
      </p>
    </div>

    <p className="PostInfo__body">
      { body }
    </p>

    <hr />

    {comments ? (
      <CommentList comments={comments} />
    ) : (
      <b data-cy="NoCommentsMessage">No comments yet</b>
    )}
  </>
);
