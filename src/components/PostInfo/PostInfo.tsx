import React from 'react';

import { Post } from '../../types/Post';

import './PostInfo.scss';

import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

import commentsFromServer from '../../api/comments';
import usersFromServer from '../../api/users';

type Props = {
  post: Post,
};

export const PostInfo: React.FC<Props> = ({ post }) => {
  const {
    userId,
    id,
    title,
    body,
  } = post;

  const neededComments = commentsFromServer.filter(comment => (
    comment.postId === id
  ));

  const neededUser = usersFromServer.find(user => (
    user.id === userId
  ));

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">
          {title}
        </h3>

        <p>
          {' Posted by  '}

          <UserInfo user={neededUser} />
        </p>
      </div>

      <p className="PostInfo__body">
        {body}
      </p>

      <hr />

      {
        neededComments.length > 0
          ? <CommentList comments={neededComments} />
          : <b data-cy="NoCommentsMessage">No comments yet</b>
      }

    </div>
  );
};
