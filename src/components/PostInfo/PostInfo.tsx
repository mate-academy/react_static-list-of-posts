import React from 'react';

import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';

import { PostInfoProps } from '../../types';

import usersFromServer from '../../api/users';
import commentsFromServer from '../../api/comments';

import './PostInfo.scss';

export const PostInfo: React.FC<PostInfoProps> = props => {
  const {
    userId, id, title, body,
  } = props.post;

  const getUserById = usersFromServer.find(user => userId === user.id);

  const getCommentsById = commentsFromServer
    .filter(comment => comment.postId === id);

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">{title}</h3>

        <UserInfo user={getUserById} />
      </div>

      <p className="PostInfo__body">
        {body}
      </p>

      {
        getCommentsById.length === 0
          ? (
            <>
              <hr />

              <b data-cy="NoCommentsMessage">No comments yet</b>
            </>
          )
          : <CommentList comments={getCommentsById} />
      }
    </div>
  );
};
