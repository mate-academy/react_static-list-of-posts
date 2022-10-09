import React from 'react';

import { PostInfoProps } from '../../types';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

import './PostInfo.scss';

export const PostInfo: React.FC<PostInfoProps> = ({ post }) => {
  const {
    title, body, comments, user,
  } = post;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{title}</h3>

        <p>
          {' Posted by '}

          {user && <UserInfo user={user} />}
        </p>
      </div>

      <p className="PostInfo__body">
        {body}
      </p>

      {
        comments.length === 0
          ? (
            <>
              <hr />

              <b data-cy="NoCommentsMessage">No comments yet</b>
            </>
          )
          : <CommentList comments={comments || []} />
      }
    </div>
  );
};
