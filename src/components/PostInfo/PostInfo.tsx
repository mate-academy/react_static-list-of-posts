import React from 'react';
import './PostInfo.scss';
import { Comments } from '../../types/Comments';
import { User } from '../../types/User';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

type Props = {
  title: string;
  body: string;
  user: User | null;
  comments: Comments [];
};

export const PostInfo: React.FC<Props> = (
  {
    title,
    body,
    user,
    comments,
  },
) => (
  <>
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">
          {title}
        </h3>
        <p>
          {' Posted by  '}
          {user && (
            <UserInfo
              name={user.name}
              email={user.email}
            />
          )}
        </p>
      </div>

      <p className="PostInfo__body">
        {body}
      </p>

      {comments.length === 0 && (
        <>
          <hr />
          <b data-cy="NoCommentsMessage">No comments yet</b>
        </>
      )}

      {comments.length > 0 && comments.map(
        comment => (
          <CommentList comments={comment} />
        ),
      )}
    </div>
  </>
);
