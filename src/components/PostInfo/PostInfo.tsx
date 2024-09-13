import React from 'react';
import { Post } from '../../types/Post';
import './PostInfo.scss';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

export const PostInfo: React.FC<{ post: Post }> = ({
  post: { title, user, body, comments },
}) => {
  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{title}</h3>

        <p>
          {' Posted by  '}

          {user?.name && <UserInfo user={user} />}
        </p>
      </div>

      <p className="PostInfo__body">{body}</p>

      <hr />

      {comments && comments.length > 0 ? (
        <CommentList comments={comments} />
      ) : (
        <b data-cy="NoCommentsMessage">No comments yet</b>
      )}
    </div>
  );
};
