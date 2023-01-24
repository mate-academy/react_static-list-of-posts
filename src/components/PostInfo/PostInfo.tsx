import React from 'react';
import { Post } from '../../types/Post';
import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';
import './PostInfo.scss';

export const PostInfo: React.FC<Post> = ({
  title, body, user, comments,
}) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{title}</h3>

      {user && (
        <p>
          {' Posted by  '}

          <UserInfo {...user} />
        </p>
      )}
    </div>

    <p className="PostInfo__body">
      {body}
    </p>

    <hr />

    {comments.length > 0
      ? <CommentList comments={comments} />
      : (<b data-cy="NoCommentsMessage">No comments yet</b>) }
  </div>
);
