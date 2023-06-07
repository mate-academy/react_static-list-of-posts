import React from 'react';
import { Comment } from '../../types/Comment';
import { User } from '../../types/User';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

type Props = {
  id: number,
  title: string,
  body: string,
  comments: Comment[] | null,
  user: User | null,
};

export const PostInfo: React.FC<Props> = ({
  id,
  title,
  body,
  comments,
  user,
}) => (
  <div className="PostInfo" key={id}>
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{title}</h3>

      {user && (
        <UserInfo
          name={user.name}
          email={user.email}
          username={user.username}
        />
      )}
    </div>

    <p className="PostInfo__body">{body}</p>

    {comments ? (
      <CommentList comments={comments} />
    ) : (
      <>
        <hr />

        <b data-cy="NoCommentsMessage">No comments yet</b>
      </>
    )}
  </div>
);
