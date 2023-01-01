import React from 'react';
import { Post } from '../../types/Post';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

type Props = {
  post: Post
};

export const PostInfo: React.FC<Props> = (
  {
    post: {
      title, body, user, comments,
    },
  },
) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{title}</h3>

      <p>
        {' Posted by  '}

        {user
          ? <UserInfo user={user} />
          : 'anonymous'}
      </p>
    </div>

    <p className="PostInfo__body">
      {body}
    </p>

    {!comments.length
      ? (
        <>
          <hr />
          <b data-cy="NoCommentsMessage">No comments yet</b>
        </>
      ) : (
        <CommentList comments={comments} />
      )}
  </div>
);
