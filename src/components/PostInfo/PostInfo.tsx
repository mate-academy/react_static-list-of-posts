import React from 'react';

// Styles
import './PostInfo.scss';

// Types
import { Comment } from '../../Types/comment';
import { User } from '../../Types/user';
// Components
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';

type Props = {
  title: string;
  user: User | null;
  body: string;
  comments: Comment[];
};

// Component
export const PostInfo: React.FC<Props> = ({
  title,
  user,
  body,
  comments,
}) => (
  <li className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">
        {title}
      </h3>

      <UserInfo
        user={user}
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
