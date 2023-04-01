import React from 'react';
import './PostInfo.scss';
import { CommentList } from '../CommentList';
import { Posts } from '../../types/Posts';
import { UserInfo } from '../UserInfo';

type Props = {
  post: Posts;
};

export const PostInfo: React.FC<Props> = ({ post }) => {
  const {
    title, body, user, comments,
  } = post;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">
          {title}
        </h3>

        <p>
          {' Posted by  '}

          {user && (
            <UserInfo user={user} />
          )}
        </p>
      </div>

      <p className="PostInfo__body">
        {body}
      </p>

      <hr />

      {
        (!comments.length)
          ? <b data-cy="NoCommentsMessage">No comments yet</b>
          : <CommentList comments={comments} />
      }
    </div>
  );
};
