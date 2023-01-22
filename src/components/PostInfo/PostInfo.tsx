import React from 'react';

import './PostInfo.scss';

import { Post } from '../../types/post';
import { CommentList } from '../CommentList';
import { UserInfo } from '../UserInfo';

type Props = {
  post: Post
};

export const PostInfo: React.FC<Props> = ({ post }) => {
  const {
    title,
    body,
    user,
    comments,
  } = post;

  const noComments = <b data-cy="NoCommentsMessage">No comments yet</b>;
  const yesComments = (
    <div className="CommentList">
      {comments && <CommentList comments={comments} />}
    </div>
  );

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">
          {title}
        </h3>

        <p>
          {user && <UserInfo user={user} />}
        </p>
      </div>

      <p className="PostInfo__body">
        {body}
      </p>

      {comments && comments.length > 0 ? yesComments : noComments }
    </div>
  );
};
