import React from 'react';
import { PreparedPost } from '../../types/PreparedPost';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

import './PostInfo.scss';

interface Props {
  post: PreparedPost;
}

export const PostInfo: React.FC<Props> = ({ post }) => {
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
          {user ? (
            <>
              {' Posted by '}

              <UserInfo user={user} />
            </>
          ) : (
            'Anonym'
          )}
        </p>
      </div>

      <p className="PostInfo__body">
        {body}
      </p>

      {
        comments.length
          ? <CommentList comments={comments} />
          : <b data-cy="NoCommentsMessage">No comments yet</b>
      }
    </div>
  );
};
