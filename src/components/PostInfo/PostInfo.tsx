import React from 'react';
import './PostInfo.scss';

import { Posts } from '../../types/posts';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

type Props = {
  posts: Posts;
};

export const PostInfo: React.FC<Props> = ({ posts }) => {
  const {
    title,
    user,
    body,
    comments,
  } = posts;

  return (
    <>
      <div className="PostInfo">
        <div className="PostInfo__header">
          <h3 className="PostInfo__title">
            {title}
          </h3>

          <p>
            {' Posted by '}

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
          comments.length === 0
            ? <b data-cy="NoCommentsMessage">No comments yet</b>
            : <CommentList comments={comments} />
        }
      </div>
    </>
  );
};
