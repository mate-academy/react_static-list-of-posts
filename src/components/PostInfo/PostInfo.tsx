import React from 'react';

import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

import { PostWithUser } from '../../types';

import './PostInfo.scss';

type Props = {
  post: PostWithUser
};

export const PostInfo: React.FC<Props> = ({ post }) => {
  const {
    title, 
    body, 
    user,
    comments = [],
  } = post;

  return (
    <li className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{title}</h3>

        <p>
          <span className="PostInfo__by">by</span>

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
          : <CommentList comments={comments} />
      }
    </li>
  );
};
