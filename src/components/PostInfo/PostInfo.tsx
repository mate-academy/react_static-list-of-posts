import React from 'react';
import './PostInfo.scss';

import { PostToRender } from '../../types/PostToRender';
import { UserInfo } from '../UserInfo/UserInfo';
import { CommentList } from '../CommentList';

export type Props = {
  post: PostToRender;
};

export const PostInfo: React.FC<Props> = ({ post }) => {
  const {
    title,
    comments,
    body,
    user,
  } = post;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{title}</h3>

        <p>
          {' Posted by  '}
          {user
            ? (
              <UserInfo
                user={user}
              />
            ) : (
              'non-user generated content'
            )}

        </p>
      </div>

      <p className="PostInfo__body">
        {body}
      </p>

      <hr />
      {!!comments.length
        ? (
          <CommentList comments={comments} />
        ) : (
          <b data-cy="NoCommentsMessage">
            No comments yet
          </b>
        )}
    </div>
  );
};
