import React from 'react';

import { UserInfo } from '../UserInfo';
import { CommentList } from '../CommentList';
import { Posts } from '../../types/Posts';

import './PostInfo.scss';

type Props = {
  post: Posts;
};

export const PostInfo: React.FC<Props> = ({ post }) => {
  const {
    title,
    body,
    user,
    comments,
  } = post;

  const withoutComments = <b data-cy="NoCommentsMessage">No comments.</b>;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">
          {title}
        </h3>

        <p>
          {' Posted by  '}

          {user && <UserInfo user={user} />}
        </p>
      </div>

      <p className="PostInfo__body">
        {body}
      </p>

      {
        comments?.length
          ? <CommentList comments={comments} />
          : withoutComments
      }
    </div>
  );
};
