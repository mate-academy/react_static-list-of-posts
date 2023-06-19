// Libraries
import React from 'react';

// Styles
import './PostInfo.scss';

// Types
import { Comment } from '../../types/Comment';

// Components
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';

type Props = {
  title: string;
  userEmail: string | undefined;
  userName: string | undefined;
  body: string;
  comments: Comment[];
};

// Component
export const PostInfo: React.FC<Props> = ({
  title,
  userEmail,
  userName,
  body,
  comments,
}) => (
  <li className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">
        {title}
      </h3>

      <UserInfo
        userName={userName}
        userEmail={userEmail}
      />
    </div>

    <p className="PostInfo__body">
      {body}
    </p>

    {comments.length === 0 ? (
      <>
        <hr />

        <b data-cy="NoCommentsMessage">No comments yet</b>
      </>
    ) : (
      <CommentList
        comments={comments}
      />
    )}
  </li>
);
