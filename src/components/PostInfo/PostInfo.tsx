import React from 'react';

import './PostInfo.scss';

import { FullPost } from '../../types/Post';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

interface Prop {
  post: FullPost
}
export const PostInfo: React.FC<Prop> = ({ post }) => {
  const {
    title,
    user,
    body,
    comments,
  } = post;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">
          {title}
        </h3>

        <p>
          {' Posted by  '}

          {user
            ? (<UserInfo user={user} />)
            : 'incognito'}
        </p>
      </div>

      <p className="PostInfo__body">
        {body}
      </p>

      {comments.length > 0
        ? <CommentList comments={comments} />
        : (
          <>
            <hr />
            <b data-cy="NoCommentsMessage">No comments yet</b>
          </>
        )}
    </div>
  );
};
