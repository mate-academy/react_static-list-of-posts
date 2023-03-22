import React from 'react';
import './PostInfo.scss';

import { FullPosts } from '../../types/FullPosts';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

type Props = {
  post: FullPosts;
};

export const PostInfo: React.FC<Props> = ({ post }) => {
  const {
    title,
    body,
    user,
    comments,
  } = post;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">
          {title}
        </h3>

        {user && (
          <p>
            {' Posted by  '}

            <UserInfo user={user} />
          </p>
        )}
      </div>

      <p className="PostInfo__body">
        {body}
      </p>

      <hr />

      {comments.length === 0
        ? (
          <b data-cy="NoCommentsMessage">
            No comments yet
          </b>
        ) : (
          <CommentList
            comments={comments}
          />
        )}
    </div>
  );
};
