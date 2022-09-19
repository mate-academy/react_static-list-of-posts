import React from 'react';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';
import './PostInfo.scss';
import { Post } from '../../types/Post';

interface PostInfoProps {
  post : Post
}

export const PostInfo: React.FC<PostInfoProps> = ({
  post: {
    body,
    title,
    user,
    comments,
  },
}) => (
  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{title}</h3>
      { user
        ? (
          <p>
            {' Posted by  '}

            <UserInfo user={user} />
          </p>
        )
        : (
          <p>
            {' Posted by  UnknownUser'}
          </p>
        )}
    </div>

    <p className="PostInfo__body">
      {body}
    </p>

    {!comments || !comments.length
      ? (
        <>
          <hr />

          <b data-cy="NoCommentsMessage">No comments yet</b>
        </>
      )
      : (
        <CommentList comments={comments} />
      )}
  </div>
);
